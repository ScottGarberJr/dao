#!/usr/bin/env node
/**
 * Minimal dependency-free Chrome CDP helper for the DAO Web Actor.
 * Requires Chrome/Chromium started with --remote-debugging-port=9222.
 * This helper never stores cookies, headers, localStorage, or credentials.
 */
import { writeFile } from "node:fs/promises";

const base = process.env.CDP_URL ?? "http://127.0.0.1:9222";
const [, , command, ...args] = process.argv;

async function json(path) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`CDP HTTP ${response.status}: ${path}`);
  return response.json();
}

async function target(prefix) {
  const targets = await json("/json/list");
  const pages = targets.filter((item) => item.type === "page");
  const found = prefix ? pages.find((item) => item.id.startsWith(prefix)) : pages[0];
  if (!found) {
    throw new Error(`No page target matched ${prefix || "the first page"}. Targets: ${pages.map((p) => `${p.id.slice(0, 8)} ${p.url}`).join(" | ")}`);
  }
  return found;
}

async function call(targetInfo, method, params = {}) {
  const socket = new WebSocket(targetInfo.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", () => reject(new Error("Could not connect to Chrome CDP")), { once: true });
  });
  const id = Math.floor(Math.random() * 2 ** 31);
  const result = new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id !== id) return;
      socket.removeEventListener("message", onMessage);
      socket.close();
      if (message.error) reject(new Error(`${message.error.code}: ${message.error.message}`));
      else resolve(message.result ?? {});
    };
    socket.addEventListener("message", onMessage);
    socket.addEventListener("error", () => reject(new Error("Chrome CDP socket failed")), { once: true });
  });
  socket.send(JSON.stringify({ id, method, params }));
  return result;
}

function usage() {
  console.error(`Usage:
  scripts/cdp.mjs list
  scripts/cdp.mjs snap [target-prefix]
  scripts/cdp.mjs shot [target-prefix] <output.png>
  scripts/cdp.mjs nav [target-prefix] <https-url>
  scripts/cdp.mjs evalraw [target-prefix] <cdp-method> [json-params]
  scripts/cdp.mjs click [target-prefix] <css-selector>
  scripts/cdp.mjs type [target-prefix] <text>
`);
}

try {
  if (command === "list") {
    console.log(JSON.stringify((await json("/json/list")).filter((item) => item.type === "page").map((item) => ({ id: item.id, title: item.title, url: item.url })), null, 2));
  } else if (command === "snap") {
    const page = await target(args[0]);
    const result = await call(page, "Runtime.evaluate", { expression: "JSON.stringify({title:document.title,url:location.href,text:document.body?.innerText?.slice(0,20000) ?? ''})", returnByValue: true });
    console.log(result.result.value);
  } else if (command === "shot") {
    const output = args.length > 1 ? args[1] : args[0];
    const page = await target(args.length > 1 ? args[0] : undefined);
    const result = await call(page, "Page.captureScreenshot", { format: "png", fromSurface: true });
    await writeFile(output, Buffer.from(result.data, "base64"));
    console.log(output);
  } else if (command === "nav") {
    const page = await target(args[0]);
    if (!/^https:\/\//i.test(args[1])) throw new Error("Navigation is restricted to https:// URLs");
    console.log(JSON.stringify(await call(page, "Page.navigate", { url: args[1] })));
  } else if (command === "evalraw") {
    const page = await target(args[0]);
    const method = args[1];
    const params = args[2] ? JSON.parse(args[2]) : {};
    console.log(JSON.stringify(await call(page, method, params), null, 2));
  } else if (command === "click") {
    const page = await target(args[0]);
    const selector = JSON.stringify(args[1]);
    const expression = `(selector => { const el = document.querySelector(selector); if (!el) throw new Error('selector not found: ' + selector); el.click(); return {clicked: selector}; })(${selector})`;
    console.log(JSON.stringify(await call(page, "Runtime.evaluate", { expression, returnByValue: true }), null, 2));
  } else if (command === "type") {
    const page = await target(args[0]);
    const text = args.slice(1).join(" ");
    const expression = `(text => { const el = document.activeElement; if (!el || !('value' in el)) throw new Error('active element is not an input'); const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value')?.set; setter?.call(el, text); el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); return {typed: text.length}; })(${JSON.stringify(text)})`;
    console.log(JSON.stringify(await call(page, "Runtime.evaluate", { expression, returnByValue: true }), null, 2));
  } else {
    usage();
    process.exitCode = 2;
  }
} catch (error) {
  console.error(`CDP helper error: ${error.message}`);
  process.exitCode = 1;
}
