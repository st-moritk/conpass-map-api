const featureHighlights = [
  {
    title: "自然言語で探す",
    description:
      "「渋谷で夜開催のAIミートアップを教えて」のような質問にそのまま答えます。",
    badge: "NL Search",
  },
  {
    title: "マップで俯瞰",
    description:
      "開催エリアを色で可視化。距離感や周辺イベントがひと目でわかります。",
    badge: "Geo Lens",
  },
  {
    title: "チームで共有",
    description:
      "気になるイベントをボードにまとめ、メモ付きでメンバーに共有できます。",
    badge: "Team Sync",
  },
];

const sampleEvents = [
  {
    title: "Generative AI Meetup Tokyo #12",
    date: "8月24日 (土)",
    region: "渋谷・リモート併用",
    tags: ["LLM", "Product", "コミュニティ"],
  },
  {
    title: "関西フロントエンドLT大会",
    date: "8月28日 (水)",
    region: "大阪・梅田",
    tags: ["React", "Design System", "LT"],
  },
  {
    title: "モバイルアプリ地図SDKハンズオン",
    date: "9月3日 (火)",
    region: "オンライン",
    tags: ["iOS", "Android", "Map SDK"],
  },
];

const focusAreas = [
  {
    title: "東京近郊",
    summary: "週末開催 42件 / 平日夜 63件",
    accent: "bg-red-100 text-red-700",
  },
  {
    title: "リモート可",
    summary: "AI・デザインを中心に 18件",
    accent: "bg-orange-100 text-orange-700",
  },
  {
    title: "ハンズオン",
    summary: "小規模で実験的な勉強会が増加中",
    accent: "bg-pink-100 text-pink-700",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-12 md:px-10 lg:px-12">
        <header className="flex flex-col gap-6 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-[#E53939] px-3 py-1 text-xs font-semibold tracking-wider uppercase text-white">
                Connpass Map
              </span>
              <span className="text-sm text-gray-500">beta</span>
            </div>
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
              ロードマップを見る
            </button>
          </div>
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-md bg-red-50 border border-red-100 px-4 py-2 text-xs font-medium uppercase tracking-wide text-red-700">
              新機能 ― 自然言語 × 地図検索
            </p>
            <h1 className="text-4xl font-bold leading-snug text-gray-900 md:text-5xl lg:text-6xl">
              「今、行きたい」Connpassのイベントを
              <span className="text-[#E53939]">
                {" "}
                会話で探してマップに描画。
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              雰囲気・目的・時間帯など曖昧な条件のまま質問すると、Connpassから最適なイベントを見つけて地図上で整理。
              これまでの「一覧での探しづらさ」を会話体験で置き換えます。
            </p>
          </div>
        </header>

        <section className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-2 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                気になる条件をまとめて聞いてみる
              </h2>
              <p className="text-sm text-gray-600">
                自然文で入力すると、検索キーワードや参加条件に自動で分解します。
              </p>
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-400">
              Try the prompt
            </span>
          </div>
          <form className="grid gap-4 md:grid-cols-[2fr,1fr]">
            <label className="text-sm text-gray-700">
              <span className="mb-2 block font-medium text-gray-900">
                今日の気分
              </span>
              <input
                type="text"
                placeholder="例: 今週末に東京で開催されるデザインシステム系の少人数LT会"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#E53939] focus:outline-none focus:ring-2 focus:ring-[#E53939]/20"
              />
            </label>
            <label className="text-sm text-gray-700">
              <span className="mb-2 block font-medium text-gray-900">
                気になるエリア
              </span>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-[#E53939] focus:outline-none focus:ring-2 focus:ring-[#E53939]/20">
                <option>指定なし</option>
                <option>東京</option>
                <option>大阪</option>
                <option>オンライン</option>
              </select>
            </label>
            <button
              type="button"
              className="col-span-full rounded-lg bg-[#E53939] px-6 py-4 text-center text-base font-semibold text-white shadow-md transition hover:bg-[#D32F2F]"
            >
              イベントを探す
            </button>
          </form>
          <dl className="mt-8 grid gap-6 py-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-500">
                今週のイベント候補
              </dt>
              <dd className="text-3xl font-bold text-gray-900">128件</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-500">
                新着自然言語リクエスト
              </dt>
              <dd className="text-3xl font-bold text-gray-900">2,431</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-500">
                共有されたマップ
              </dt>
              <dd className="text-3xl font-bold text-gray-900">312枚</dd>
            </div>
          </dl>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="inline-block rounded-md bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E53939]">
                {feature.badge}
              </span>
              <h3 className="pt-4 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="pt-2 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  今ピックアップ中のイベント
                </h2>
                <p className="text-sm text-gray-600">
                  自然言語リクエストを元に、地図に載せたい候補を整理。
                </p>
              </div>
              <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
                すべてを見る
              </button>
            </div>
            <div className="mt-6 divide-y divide-gray-200">
              {sampleEvents.map((event) => (
                <article key={event.title} className="py-5">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {event.date} ・ {event.region}
                  </p>
                  <h3 className="pt-2 text-lg font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-linear-to-b from-red-50 to-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              注目エリアのインサイト
            </h2>
            <p className="pt-2 text-sm text-gray-600">
              会話の内容からエリア熱量を抽出。どこで盛り上がっているかを先に知ることができます。
            </p>
            <div className="mt-6 space-y-4">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${area.accent}`}
                  >
                    {area.title}
                  </span>
                  <p className="pt-3 text-base text-gray-700">{area.summary}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                アップデート予定
              </p>
              <h3 className="pt-2 text-lg font-bold text-gray-900">
                チームボード + 通知
              </h3>
              <p className="pt-1 text-sm text-gray-600">
                Slack連携でイベントマップを自動共有。参加期限前のリマインドも送信。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                マッププレビュー
              </h2>
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Realtime
              </span>
            </div>
            <div className="mt-6 h-80 rounded-lg border border-gray-200 bg-linear-to-br from-red-100 via-white to-orange-50 p-6">
              <div className="h-full w-full rounded-lg border border-gray-200 bg-white/80 p-4">
                <div className="grid h-full grid-cols-12 grid-rows-6 gap-2">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="rounded-md border border-red-200 bg-red-100 shadow-sm"
                      style={{ gridColumn: `span ${index % 3 === 0 ? 4 : 3}` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                会話からマップまでの流れ
              </h2>
              <ol className="mt-6 space-y-5 text-gray-700">
                <li>
                  <p className="text-sm font-semibold text-gray-900">
                    1. ニーズを聞く
                  </p>
                  <p className="text-sm text-gray-600">
                    自然文を解析し、求めているカテゴリ・熱量・時間帯を抽出。
                  </p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-gray-900">
                    2. connpass API検索
                  </p>
                  <p className="text-sm text-gray-600">
                    抽出条件を使ってイベントを取得し、信頼度スコア順にランキング。
                  </p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-gray-900">
                    3. マップで整理
                  </p>
                  <p className="text-sm text-gray-600">
                    候補イベントをマップに描画し、距離や移動時間も併記。
                  </p>
                </li>
              </ol>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                参加リクエスト受付中
              </p>
              <h3 className="pt-2 text-xl font-bold text-gray-900">
                クローズドテストに申し込む
              </h3>
              <p className="pt-2 text-sm text-gray-600">
                先行ユーザーにはシナリオ作成支援やチーム用ダッシュボードを優先的に提供します。
              </p>
              <button className="mt-4 w-full rounded-lg bg-[#E53939] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#D32F2F]">
                先行アクセスを申し込む
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-gray-200 pt-8 text-sm text-gray-500">
          <p>
            Connpass Map API Lab —
            まだプロトタイプ段階ですが、ご意見お待ちしています。
          </p>
        </footer>
      </div>
    </div>
  );
}
