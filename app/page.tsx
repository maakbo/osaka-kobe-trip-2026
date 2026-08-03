import Link from "next/link";

const guidePages = [
  {
    src: "/guide/overview.png",
    label: "旅の総括",
    alt: "大阪・神戸家族旅行の総括",
    height: 1920,
  },
  {
    src: "/guide/day-0.png",
    label: "7月29日 仙台前泊",
    alt: "7月29日、仙台前泊日のしおり",
    height: 1920,
  },
  {
    src: "/guide/day-1.png",
    label: "7月30日 大阪観光",
    alt: "7月30日、大阪観光日のしおり",
    height: 3050,
  },
  {
    src: "/guide/day-2.png",
    label: "7月31日 USJ",
    alt: "7月31日、USJ日のしおり",
    height: 5200,
  },
  {
    src: "/guide/day-3.png",
    label: "8月1日 有馬温泉・神戸",
    alt: "8月1日、有馬温泉と神戸観光日のしおり",
    height: 3100,
  },
  {
    src: "/guide/day-4.png",
    label: "8月2日 買い物・帰宅",
    alt: "8月2日、買い物と帰宅日の記録",
    height: 3100,
  },
  {
    src: "/guide/packing-checklist.png",
    label: "旅を支えた準備",
    alt: "大阪・神戸家族旅行を支えた準備の記録",
    height: 1920,
  },
  {
    src: "/guide/before-you-go.png",
    label: "次の旅へ残すメモ",
    alt: "次の家族旅行へ残す学びと感謝",
    height: 1920,
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="ページメニュー">
        <Link className="site-nav__brand" href="/">
          TRIP GUIDE
        </Link>
        <div>
          <a href="/transport-guide">交通</a>
          <a href="https://maakbo.github.io/osaka-kobe-trip-2026/usj-guide.html">
            USJ
          </a>
          <a href="https://maakbo.github.io/osaka-kobe-trip-2026/prepare.html">
            準備
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero__inner">
          <div className="eyebrow">
            <span aria-hidden="true" />
            FAMILY TRIP RECORD
          </div>

          <div className="hero__head">
            <div>
              <p className="date">7.29 - 8.2</p>
              <h1>大阪・神戸 家族旅行</h1>
              <p className="lead">
                よく食べ、よく遊び、家族と親戚みんなで。
                <br />
                大阪・USJ・有馬・神戸を味わった5日間の記録。
              </p>
            </div>

            <div className="hero__side">
              <p>2026</p>
              <p>
                山形 → 仙台 → 大阪
                <br className="mobile-route-break" /> → 神戸 → 山形
              </p>
            </div>
          </div>

          <div className="actions" aria-label="しおりの操作">
            <a className="button button--primary" href="#guide">
              8ページの記録を見る
            </a>
            <a
              className="button"
              href="/osaka-kobe-family-trip-guide-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              PDFを開く
            </a>
          </div>
        </div>
      </header>

      <section className="detail-links" aria-labelledby="detail-title">
        <div className="section-heading">
          <p>DETAIL NOTES</p>
          <h2 id="detail-title">旅の記録と案内</h2>
          <span>実際の流れと、当日に使った詳しい案内を残しています。</span>
        </div>
        <div className="detail-links__grid">
          <a
            className="detail-card"
            href="https://maakbo.github.io/osaka-kobe-trip-2026/trip-plan.html"
          >
            <span>01</span>
            <h3>旅の詳細</h3>
            <p>日別の実績、食べたもの、予定を変えた判断。</p>
          </a>
          <a className="detail-card" href="/transport-guide">
            <span>02</span>
            <h3>交通・乗り換え</h3>
            <p>今回使った空港、バス、改札、電車の移動手順。</p>
          </a>
          <a
            className="detail-card"
            href="https://maakbo.github.io/osaka-kobe-trip-2026/usj-guide.html"
          >
            <span>03</span>
            <h3>USJ当日ガイド</h3>
            <p>朝から閉園近くまでの実績と、体力に合わせた組み替え方。</p>
          </a>
          <a
            className="detail-card"
            href="https://maakbo.github.io/osaka-kobe-trip-2026/prepare.html"
          >
            <span>04</span>
            <h3>準備と持ち物</h3>
            <p>今回準備したものと、次の旅行へ残す確認。</p>
          </a>
        </div>
      </section>

      <section className="guide" id="guide" aria-labelledby="guide-title">
        <div className="section-heading">
          <p>TRIP PAGES</p>
          <h2 id="guide-title">旅のしおり 全8ページ</h2>
          <span>総括、5日間の記録、準備と学びを一冊にしました。</span>
        </div>

        <div className="pages">
          {guidePages.map((page, index) => (
            <figure className="page" key={page.src}>
              <figcaption>
                <span>PAGE {String(index + 1).padStart(2, "0")}</span>
                {page.label}
              </figcaption>
              <img
                src={page.src}
                alt={page.alt}
                width="1080"
                height={page.height}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </section>

      <footer>
        <p>大阪・神戸 家族旅行 2026</p>
        <a
          href="/osaka-kobe-family-trip-guide-2026.pdf"
          target="_blank"
          rel="noreferrer"
        >
          PDF版を開く
        </a>
      </footer>

      <nav className="mobile-actions" aria-label="固定メニュー">
        <a href="#guide">しおり</a>
        <a
          href="/osaka-kobe-family-trip-guide-2026.pdf"
          target="_blank"
          rel="noreferrer"
        >
          PDF
        </a>
      </nav>
    </main>
  );
}
