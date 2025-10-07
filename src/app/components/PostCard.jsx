import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-emerald-500/20">
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-indigo-500/20" />
      </div>
      <div className="relative flex flex-col gap-4">
        <span className="self-start rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300">
          {post.category}
        </span>
        <h3 className="text-2xl font-semibold text-white transition group-hover:text-emerald-200">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-slate-700 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-slate-200">{post.author.name}</span>
            <span>{post.date}</span>
          </div>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/80 bg-slate-800/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:gap-3 group-hover:text-emerald-200"
        >
          Read the story
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
