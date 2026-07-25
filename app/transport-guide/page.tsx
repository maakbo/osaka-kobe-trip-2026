import Link from "next/link";

const outboundSteps = [
  {
    title: "ユニバーサルシティ駅 1番のりば",
    body: "ホテルから約2分。JR改札へ入り、「西九条・大阪方面」の1番のりばへ。",
    signs: ["1番のりば", "西九条・大阪方面"],
  },
  {
    title: "JRで西九条へ",
    body: "JRゆめ咲線で約5分。西九条行でも大阪方面への直通でも、西九条で降りる。",
    signs: ["JRゆめ咲線", "西九条"],
  },
  {
    title: "JR中央改札口を出る",
    body: "JR中央改札口でICをタッチして外へ出る。その後「阪神電車 西改札口」へ進む。",
    signs: ["JR 中央改札口", "阪神電車"],
  },
  {
    title: "阪神西改札へ入り直す",
    body: "阪神の西改札で再びICをタッチし、「大阪難波方面」のホームへ上がる。",
    signs: ["阪神 西改札口", "大阪難波方面"],
  },
  {
    title: "大阪難波駅 東改札へ",
    body: "阪神なんば線で約8分。東改札を出て、なんばウォークの14番出口へ進む。",
    signs: ["大阪難波", "東改札口", "14番出口"],
  },
];

const returnSteps = [
  {
    title: "14番入口から大阪難波駅へ",
    body: "地下へ入り、「阪神なんば線」「大阪難波駅」の表示で東改札へ戻る。",
    signs: ["14番入口", "大阪難波"],
  },
  {
    title: "尼崎・神戸三宮方面へ",
    body: "阪神なんば線へ入り、西九条で降りる。奈良方面は逆方向。",
    signs: ["尼崎方面", "西九条"],
  },
  {
    title: "阪神西改札を出てJRへ",
    body: "「JR線」を探し、阪神を出てJRの改札へ入り直す。",
    signs: ["阪神 西改札口", "JR線"],
  },
  {
    title: "ユニバーサルシティ・桜島方面",
    body: "JRの発車案内を確認。列車により2番、3番、4番のいずれかを使う。",
    signs: ["ユニバーサルシティ", "桜島方面"],
  },
];

const airportSteps = [
  {
    title: "ANA 732便の荷物を受け取る",
    body: "09:10到着後、「手荷物受取」に従いトランクケース1個を受け取る。",
    signs: ["手荷物受取", "ANA 732"],
  },
  {
    title: "中央到着口から北ターミナルへ",
    body: "手荷物受取後、中央ターミナルの到着口を出て「北ターミナル」「リムジンバス」の表示に従う。",
    signs: ["北ターミナル", "リムジンバス"],
  },
  {
    title: "北ターミナル1番のりば",
    body: "「ユニバーサル・スタジオ・ジャパン行」の列へ。初めてなら券売機で大人2枚・小児1枚を購入する。",
    signs: ["1番のりば", "USJ", "09:55"],
  },
  {
    title: "USJからホテルへ",
    body: "バスを降りて荷物を受け取り、シティウォーク内のホテル近鉄ユニバーサル・シティへ歩く。",
    signs: ["CITYWALK", "ホテル近鉄"],
  },
];

function StepList({
  steps,
}: {
  steps: Array<{ title: string; body: string; signs: string[] }>;
}) {
  return (
    <div className="transport-route">
      {steps.map((step, index) => (
        <div className="transport-step" key={step.title}>
          <span className="transport-step__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {step.signs.map((sign) => (
              <span className="sign" key={sign}>
                {sign}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TransportGuide() {
  return (
    <main className="detail-main">
      <nav className="site-nav" aria-label="ページメニュー">
        <Link className="site-nav__brand" href="/">
          TRIP GUIDE
        </Link>
        <div>
          <Link href="/">しおり</Link>
          <a href="/transport-guide" aria-current="page">
            交通
          </a>
        </div>
      </nav>

      <header className="detail-hero">
        <div className="eyebrow">
          <span aria-hidden="true" />
          TRANSPORT GUIDE
        </div>
        <h1>交通・乗り換えガイド</h1>
        <p className="lead">
          空港からホテル、ホテルから道頓堀、帰りの空港まで。
          <br />
          その場で「次に何を見るか」が分かる家族用の道案内。
        </p>
        <p className="principle">
          分からなくなったら電車へ飛び乗らず、家族3人でいったん止まる。路線名より、行先表示を確認する。
        </p>
      </header>

      <div className="detail-body">
        <section>
          <h2>まず覚える四つ</h2>
          <div className="mini-grid">
            <div>
              <h3>西九条が難所</h3>
              <p>JRの改札を一度出て、阪神の改札へ入り直す。</p>
            </div>
            <div>
              <h3>行きと帰り</h3>
              <p>行きは大阪難波方面。帰りは尼崎・神戸三宮方面。</p>
            </div>
            <div>
              <h3>ホーム変更</h3>
              <p>番号を暗記せず、当日の発車案内と行先を優先する。</p>
            </div>
          </div>
          <p className="direction-note">
            <strong>一番大事：</strong>
            西九条ではJRと阪神が別の改札。JRで一度タッチして出て、阪神でもう一度タッチして入る。
          </p>
        </section>

        <section>
          <h2>ICカード・きっぷ</h2>
          <ul className="compact-list">
            <li>大阪周遊パスや地下鉄1日券は買わず、都度払いにする。</li>
            <li>Suica、PASMO、ICOCAなどはJR・阪神・地下鉄・空港バスで使える。</li>
            <li>鉄道改札では一人につきICカード一枚またはスマホ一台が必要。</li>
            <li>娘が小児用ICを持っていなければ、小児きっぷを券売機で買う。</li>
            <li>空港バスでIC一枚から3人分を払うなら、タッチ前に大人2名・こども1名と乗務員へ伝える。</li>
          </ul>
          <table className="choice-table">
            <thead>
              <tr>
                <th>区間</th>
                <th>大人</th>
                <th>小児</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>伊丹空港 → USJバス</td>
                <td>1,100円</td>
                <td>550円</td>
              </tr>
              <tr>
                <td>JR ユニバーサルシティ → 西九条</td>
                <td>180円目安</td>
                <td>90円目安</td>
              </tr>
              <tr>
                <td>阪神 西九条 → 大阪難波</td>
                <td>220円</td>
                <td>110円</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>仙台空港での動き</h2>
          <ol>
            <li>06:40頃に空港へ着き、1階デイリーヤマザキで朝食を短時間で買う。</li>
            <li>2階のANAカウンターへ進み、トランクケース1個を預ける。</li>
            <li>国内線保安検査場を通り、07:30までにANA 732便の搭乗口へ着く。</li>
          </ol>
          <p className="warning-note">
            06:50を過ぎても朝食を買い終わらなければ、買い物を切り上げて手荷物預けへ。iPad、カメラ、薬、モバイルバッテリーは手元バッグに残す。
          </p>
        </section>

        <section>
          <h2>伊丹空港からホテル</h2>
          <StepList steps={airportSteps} />
          <p className="direction-note">
            ANAは南側ゲートを使うが、手荷物受取と到着口は
            <strong>中央ターミナル</strong>
            。そこから北ターミナル1番のりばへ進む。
          </p>
          <p className="warning-note">
            09:55便に間に合わなくても走らない。10:55便でも、しろたやの主昼食には12:45頃から入店できる。食べ歩きは一皿ずつに絞り、14:15の体力判定を通れば通天閣も残せる。
          </p>
          <p>
            10:55便も運休・満員・長時間遅延で使いにくければ、中央ターミナル案内所へ相談し、タクシーでホテルへ向かう。
          </p>
        </section>

        <section>
          <h2>ホテルから道頓堀</h2>
          <StepList steps={outboundSteps} />
          <p className="warning-note">
            ユニバーサルシティ駅の「桜島方面」と、西九条駅の「尼崎方面」は逆方向。
          </p>
          <p className="one-line">
            ホテル → JRユニバーサルシティ1番 → 西九条のJR中央改札を出る → 阪神西改札 → 大阪難波方面 → 大阪難波東改札 → 14番出口
          </p>
        </section>

        <section>
          <h2>道頓堀からホテル</h2>
          <StepList steps={returnSteps} />
          <p className="warning-note">
            西九条のJRゆめ咲線はホーム番号が変わる。必ず「ユニバーサルシティ・桜島方面」を選ぶ。
          </p>
          <p className="one-line">
            14番入口 → 大阪難波東改札 → 阪神の尼崎・神戸三宮方面 → 西九条で阪神改札を出る → JRへ入る → ユニバーサルシティ・桜島方面
          </p>
        </section>

        <section>
          <h2>通天閣へ行く場合だけ</h2>
          <ol>
            <li>道頓堀を東へ歩き、Osaka Metro日本橋駅 K17へ。</li>
            <li>堺筋線の天下茶屋方面へ乗り、一駅先の恵美須町 K18で降りる。</li>
            <li>3番出口から通天閣まで徒歩約3分。</li>
            <li>帰りはJR新今宮駅の通天閣口・東口へ約6分歩く。</li>
            <li>ホーム番号ではなく、環状線外回り「西九条・大阪方面」を確認する。JR難波行には乗らない。</li>
            <li>JR改札から出ず、ゆめ咲線のユニバーサルシティ方面へ乗り換える。</li>
          </ol>
          <p className="one-line">
            道頓堀 → 日本橋K17 → 堺筋線・天下茶屋方面 → 恵美須町K18・3番出口 → 通天閣 → JR新今宮東口 → 環状線外回り → 西九条でゆめ咲線
          </p>
        </section>

        <section>
          <h2>USJと夜の車合流</h2>
          <p>
            ホテルからUSJは徒歩。退園後はホテルで荷物を受け取り、トイレ、水分、着替えを済ませる。
          </p>
          <ol>
            <li>家族3人が車へ乗れる状態になってから「準備OK」を送る。</li>
            <li>車が到着するまでホテル屋内で待つ。</li>
            <li>朝にホテルへ確認した乗降場所で合流する。</li>
          </ol>
          <p>
            ホテル側の乗降場所が使えない場合だけ、USJ公式パーキングの送迎区画へ切り替える。
          </p>
        </section>

        <section>
          <h2>神戸から伊丹空港</h2>
          <p className="principle">
            13:00神戸発を基本にし、13:30を遅延時の上限とする。ANAは伊丹空港の南ターミナル。
          </p>
          <h3>車が使えない場合</h3>
          <p>
            神戸三宮駅の空港リムジンバスB1のりばから大阪・伊丹空港行へ乗り、南ターミナルで降りる。
          </p>
          <table className="choice-table">
            <thead>
              <tr>
                <th>三宮発</th>
                <th>南着</th>
                <th>扱い</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12:45</td>
                <td>13:25</td>
                <td>余裕が大きい</td>
              </tr>
              <tr>
                <td>13:15</td>
                <td>13:55</td>
                <td>代替案の本命</td>
              </tr>
              <tr>
                <td>13:45</td>
                <td>14:25</td>
                <td>遅くともこの便</td>
              </tr>
            </tbody>
          </table>
          <p className="warning-note">
            車を使えない判断は12:15頃まで。13:15便なら13:00までにB1のりばへ。満員・運休なら13:45便、またはタクシーへ切り替える。
          </p>
        </section>

        <section>
          <h2>伊丹空港から仙台へ</h2>
          <ol>
            <li>南ターミナルのANAカウンターでトランクケースを預ける。</li>
            <li>国内線保安検査場へ進み、アプリとモニターでANA 737便の搭乗口を確認する。</li>
            <li>16:30までに搭乗口へ着き、16:50に出発する。</li>
            <li>18:05仙台着後、トランクケースを受け取る。</li>
            <li>家族3人が車へ乗れる状態になってから「準備OK」を送る。</li>
            <li>空港駐車場1Aで合流し、満車なら1B、次に駐車場2へ切り替える。</li>
          </ol>
          <p className="warning-note">
            仙台空港ターミナル前の一般車レーンは降車用。迎えの車とは駐車場で待ち合わせる。
          </p>
        </section>

        <section>
          <h2>間違えたとき</h2>
          <div className="mini-grid">
            <div>
              <h3>逆方向のホーム</h3>
              <p>乗らずに停止。目的地の画面を駅員へ見せる。</p>
            </div>
            <div>
              <h3>逆方向へ乗車</h3>
              <p>次の駅で3人そろって降り、反対方向を確認する。</p>
            </div>
            <div>
              <h3>改札で分かれた</h3>
              <p>先へ進んだ人はその場で止まり、ホームへ行かない。</p>
            </div>
          </div>
        </section>

        <section>
          <h2>前日チェック</h2>
          <ul className="compact-list">
            <li>ANA 732便と737便の運航予定を確認する。</li>
            <li>伊丹空港発USJ行きの09:55便と10:55便を確認する。</li>
            <li>ICカードへチャージし、娘は小児ICか小児きっぷか決める。</li>
            <li>この交通ガイドを家族のスマホで開けるか確認する。</li>
            <li>基本ルートの「当日見せる一行」をスクリーンショットする。</li>
          </ul>
        </section>

        <section>
          <h2>公式確認先</h2>
          <div className="source-links">
            <a href="https://www.sendai-airport.co.jp/flight/flow-departure.html">
              仙台空港 国内線出発
            </a>
            <a href="https://www.hanshin-bus.co.jp/limo/index_o_usj1.html">
              伊丹空港・USJ線
            </a>
            <a href="https://www.osaka-airport.co.jp/flight/route/arrival">
              伊丹空港 到着の流れ
            </a>
            <a href="https://www.hankyu-kankobus.co.jp/limousine/guide/ticket/">
              空港バスの乗車券・ICカード
            </a>
            <a href="https://eki.jr-odekake.net/premises?id=0610503">
              JR 西九条駅
            </a>
            <a href="https://www.hanshin.co.jp/uploads/guidemap/nishikujo.pdf">
              阪神 西九条駅構内図
            </a>
            <a href="https://www.hanshin.co.jp/uploads/guidemap/osakanamba.pdf">
              阪神 大阪難波駅構内図
            </a>
            <a href="https://tsutenkaku.co.jp/access/">通天閣 交通アクセス</a>
            <a href="https://www.hankyu-kankobus.co.jp/limousine/timetable/B/">
              神戸三宮・伊丹空港線
            </a>
          </div>
          <p>
            確認日: 2026-07-24。現地の発車案内と駅員の案内が違う場合は、現地案内を優先する。
          </p>
        </section>
      </div>

      <footer>
        <p>大阪・神戸 家族旅行 2026</p>
        <Link href="/">しおりのトップへ</Link>
      </footer>
    </main>
  );
}
