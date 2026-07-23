import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
