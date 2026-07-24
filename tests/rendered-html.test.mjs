import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the family trip guide", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>大阪・神戸 家族旅行 2026<\/title>/);
  assert.match(html, /旅のしおり 全8ページ/);
  assert.match(html, /PDFを開く/);
  assert.match(html, /noindex/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);

  const guideImages = new Set(html.match(/\/guide\/[^"\\]+\.png/g) ?? []);
  assert.equal(guideImages.size, 8);
});

test("server-renders the transport guide", async () => {
  const response = await render("/transport-guide");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /交通・乗り換えガイド/);
  assert.match(html, /西九条ではJRと阪神が別の改札/);
  assert.match(html, /ユニバーサルシティ・桜島方面/);
  assert.match(html, /北ターミナル1番/);
});
