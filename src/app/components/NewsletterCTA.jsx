export default function NewsletterCTA() {
  return (
    <section
      id="newsletter"
      className="mt-24 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-2xl"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/30 blur-3xl" />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Stay ahead
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Subscribe to our editorial intelligence briefing
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Every Monday we deliver a distilled overview of the strategic moves,
            product experiments, and design breakthroughs shaping the future of
            digital publishing.
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-300">
                ✓
              </span>
              Actionable frameworks and playbooks
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-300">
                ✓
              </span>
              Early access to research reports
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-300">
                ✓
              </span>
              Invitations to private events & live sessions
            </li>
          </ul>
        </div>

        <form className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-slate-400">
            Business email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-widest text-slate-400">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          >
            <option>Chief Content Officer</option>
            <option>Product Leader</option>
            <option>Design Strategist</option>
            <option>Engineering Manager</option>
            <option>Independent Creator</option>
          </select>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Join the briefing
          </button>
          <p className="text-xs text-slate-500">
            We respect your privacy. Unsubscribe at any time. By subscribing you agree to receive emails from Lumina.
          </p>
        </form>
      </div>
    </section>
  );
}
