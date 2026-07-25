import Link from "next/link";

const guidePages = [
  {
    src: "/guide/overview.png",
    label: "全日程",
    alt: "大阪・神戸家族旅行の全日程まとめ",
  },
  {
    src: "/guide/day-0.png",
    label: "7月29日 仙台前泊",
    alt: "7月29日、仙台前泊日のしおり",
  },
  {
    src: "/guide/day-1.png",
    label: "7月30日 大阪観光",
    alt: "7月30日、大阪観光日のしおり",
  },
  {
    src: "/guide/day-2.png",
    label: "7月31日 USJ",
    alt: "7月31日、USJ日のしおり",
  },
  {
    src: "/guide/day-3.png",
    label: "8月1日 有馬温泉・神戸",
    alt: "8月1日、有馬温泉と神戸観光日のしおり",
  },
  {
    src: "/guide/day-4.png",
    label: "8月2日 神戸観光・帰宅",
    alt: "8月2日、神戸観光と帰宅日のしおり",
  },
  {
    src: "/guide/packing-checklist.png",
    label: "持ち物チェック",
    alt: "家族旅行の持ち物チェックリスト",
  },
  {
    src: "/guide/before-you-go.png",
    label: "出発前チェック",
    alt: "出発前とUSJ前の確認チェックリスト",
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
            FAMILY TRIP GUIDE
          </div>

          <div className="hero__head">
            <div>
              <p className="date">7.29 - 8.2</p>
              <h1>大阪・神戸 家族旅行</h1>
              <p className="lead">
                家族3人で、夏の大阪・USJ・神戸へ。
                <br />
                大阪と神戸を、家族でゆっくり味わう旅。
              </p>
            </div>

            <div className="hero__side">
              <p>2026</p>
              <p>山形 → 仙台 → 大阪 → 神戸 → 山形</p>
            </div>
          </div>

          <div className="actions" aria-label="しおりの操作">
            <a className="button button--primary" href="#guide">
              しおりを見る
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
          <h2 id="detail-title">詳しい旅の案内</h2>
          <span>空港と駅で迷ったときに、そのまま確認できます。</span>
        </div>
        <div className="detail-links__grid">
          <a className="detail-card" href="/transport-guide">
            <span>01</span>
            <h3>交通・乗り換え</h3>
            <p>空港、バス、改札、電車を迷わず移動する手順。</p>
          </a>
          <a
            className="detail-card"
            href="https://maakbo.github.io/osaka-kobe-trip-2026/usj-guide.html"
          >
            <span>02</span>
            <h3>USJ当日ガイド</h3>
            <p>家族で決めた優先順位、朝の分岐、暑さと体力の判断。</p>
          </a>
          <a
            className="detail-card"
            href="https://maakbo.github.io/osaka-kobe-trip-2026/prepare.html"
          >
            <span>03</span>
            <h3>準備と持ち物</h3>
            <p>手元バッグ、暑さ対策、トランクの最終チェック。</p>
          </a>
        </div>
      </section>

      <section className="guide" id="guide" aria-labelledby="guide-title">
        <div className="section-heading">
          <p>TRIP PAGES</p>
          <h2 id="guide-title">旅のしおり 全8ページ</h2>
          <span>上から順番に、旅の流れを確認できます。</span>
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
                height="1920"
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
