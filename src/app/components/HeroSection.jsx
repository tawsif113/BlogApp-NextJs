import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ featuredPost }) {
  if (!featuredPost) return null;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-2xl">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="lg:w-2/3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-sm font-semibold tracking-wide text-emerald-300">
            {featuredPost.category}
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {featuredPost.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            {featuredPost.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <Image
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border border-slate-700 object-cover"
              />
              <div>
                <p className="font-semibold text-slate-200">
                  {featuredPost.author.name}
                </p>
                <p>{featuredPost.author.role}</p>
              </div>
            </div>
            <span>•</span>
            <span>{featuredPost.date}</span>
            <span>•</span>
            <span>{featuredPost.readingTime}</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/posts/${featuredPost.slug}`}
              className="rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Continue reading
            </Link>
            <Link
              href="#newsletter"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/60 hover:text-white"
            >
              Subscribe for insights
            </Link>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.35),_transparent_60%)]" />
            <div className="relative space-y-5">
              <h2 className="text-lg font-semibold text-white">
                Executive summary
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                {featuredPost.summary ?? featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
