export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(70,70,255,0.18),_transparent_50%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-12 md:px-10 lg:px-12">
        <header className="flex flex-col gap-6 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
                Connpass Map
              </span>
              <span className="text-sm text-white/60">beta</span>
            </div>
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white hover:text-white">
              ロードマップを見る
            </button>
          </div>
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/80">
              新機能 ― 自然言語 × 地図検索
            </p>
            <h1 className="text-4xl font-semibold leading-snug text-white md:text-5xl lg:text-6xl">
              「今、行きたい」Connpassのイベントを
              <span className="text-blue-200"> 会話で探してマップに描画。</span>
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              雰囲気・目的・時間帯など曖昧な条件のまま質問すると、Connpassから最適なイベントを見つけて地図上で整理。
              これまでの「一覧での探しづらさ」を会話体験で置き換えます。
            </p>
          </div>
        </header>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur">
          <div className="flex flex-col gap-2 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">気になる条件をまとめて聞いてみる</h2>
              <p className="text-sm text-white/60">自然文で入力すると、検索キーワードや参加条件に自動で分解します。</p>
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-white/50">Try the prompt</span>
          </div>
          <form className="grid gap-4 md:grid-cols-[2fr,1fr]">
            <label className="text-sm text-white/75">
              <span className="mb-2 block font-medium text-white">今日の気分</span>
              <input
                type="text"
                placeholder="例: 今週末に東京で開催されるデザインシステム系の少人数LT会"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none"
              />
            </label>
            <label className="text-sm text-white/75">
              <span className="mb-2 block font-medium text-white">気になるエリア</span>
              <select className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white focus:border-blue-400 focus:outline-none">
                <option className="bg-black text-white">指定なし</option>
                <option className="bg-black text-white">東京</option>
                <option className="bg-black text-white">大阪</option>
                <option className="bg-black text-white">オンライン</option>
              </select>
            </label>
            <button
              type="button"
              className="col-span-full rounded-2xl bg-blue-500 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-400"
            >
              イベントを探す
            </button>
          </form>
          <dl className="mt-8 grid gap-6 py-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.4em] text-white/40">今週のイベント候補</dt>
              <dd className="text-3xl font-semibold text-white">128件</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.4em] text-white/40">新着自然言語リクエスト</dt>
              <dd className="text-3xl font-semibold text-white">2,431</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.4em] text-white/40">共有されたマップ</dt>
              <dd className="text-3xl font-semibold text-white">312枚</dd>
            </div>
          </dl>
        </section>

        <section className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">マッププレビュー</h2>
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">Google Maps</span>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-blue-500/10">
              <iframe
                title="Connpassイベント密度プレビュー"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.901214012777!2d139.69932501218516!3d35.658033131648726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca980c6479d%3A0x2a4f690baa3c9c9d!2z44CSMTUwLTAwMzEg5p2x5Lqs6YO95riL6LC35Yy65Lit5aSu5Yy655m95bSO5Y-w77yR5LiB55uu77yS4oiS77yTIOaWsOWkp-iwoueVpeWtkO-8kuOCq-ODs-ODiOODq-S4gA!5e0!3m2!1sja!2sjp!4v1723584000000!5m2!1sja!2sjp"
              ></iframe>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/50">
          <p>Connpass Map API Lab — まだプロトタイプ段階ですが、ご意見お待ちしています。</p>
        </footer>
      </div>
    </div>
  );
}
