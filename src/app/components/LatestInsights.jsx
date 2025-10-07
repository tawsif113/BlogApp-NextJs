import Link from "next/link";

export default function LatestInsights({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Latest insights
          </h2>
          <Link
            href="/posts"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
          >
            Browse all →
          </Link>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg transition hover:border-emerald-300/40 hover:shadow-emerald-500/10 md:flex-row md:items-center"
            >
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-emerald-300">
                  <span>{post.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{post.readingTime}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {post.excerpt}
                </p>
              </div>
              <Link
                href={`/posts/${post.slug}`}
                className="inline-flex items-center justify-center self-start rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/60 hover:text-white"
              >
                Read
              </Link>
            </article>
          ))}
        </div>
      </div>

      <aside className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-white">Trending topics</h3>
        <ul className="space-y-5 text-sm text-slate-300">
          {posts.slice(0, 5).map((post, index) => (
            <li key={post.id} className="flex gap-4">
              <span className="text-sm font-semibold text-emerald-300">
                0{index + 1}
              </span>
              <div>
                <p className="font-semibold text-white">{post.title}</p>
                <p className="text-xs text-slate-400">{post.readingTime}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
