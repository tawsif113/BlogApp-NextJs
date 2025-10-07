export default function CategoryGrid({ categories }) {
  if (!categories?.length) return null;

  return (
    <section id="categories" className="mt-20 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Explore by category
        </h2>
        <p className="text-sm text-slate-400">
          Follow the themes that matter most to your craft
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg transition hover:border-emerald-300/40"
          >
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-indigo-500/20" />
            </div>
            <div className="relative space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                {category.name}
              </span>
              <p className="text-sm text-slate-300">{category.description}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{category.posts} curated articles</span>
                <span>•</span>
                <span>{category.updated}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
