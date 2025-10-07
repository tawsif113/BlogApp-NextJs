export default function StatsBar({ stats }) {
  if (!stats?.length) return null;

  return (
    <section className="mt-12">
      <div className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              {stat.label}
            </p>
            <p className="text-3xl font-semibold text-white">
              {stat.value}
            </p>
            <p className="text-sm text-slate-400">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
