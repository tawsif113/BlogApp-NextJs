"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { demoPosts } from "@/utils/demoContent";

const categoryOptions = ["All topics", ...new Set(demoPosts.map((post) => post.category))];

function formatDateLabel(date) {
  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  } catch (error) {
    return date;
  }
}

export default function BlogList() {
  const [posts, setPosts] = useState(demoPosts);
  const [activeCategory, setActiveCategory] = useState("All topics");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/posts");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) {
            const mapped = data.map((post) => ({
              ...post,
              slug: post.slug ?? String(post.id),
              category: post.category ?? "General",
              excerpt: post.content?.slice(0, 140) ?? post.content ?? "",
              readingTime: post.readingTime ?? "5 min read",
              date: post.created_at
                ? formatDateLabel(post.created_at)
                : post.date ?? "",
              publishedAt: post.created_at ?? post.publishedAt ?? new Date().toISOString(),
              author:
                post.author ??
                demoPosts[0].author,
              tags: post.tags ?? [],
            }));
            setPosts(mapped);
          }
        }
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts
      .filter((post) => {
        const matchesCategory =
          activeCategory === "All topics" || post.category === activeCategory;
        const matchesQuery =
          !normalizedQuery ||
          post.title.toLowerCase().includes(normalizedQuery) ||
          post.excerpt.toLowerCase().includes(normalizedQuery) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery));
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt ?? a.created_at ?? a.date ?? 0).getTime();
        const dateB = new Date(b.publishedAt ?? b.created_at ?? b.date ?? 0).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [posts, activeCategory, query, sortOrder]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pb-24">
        <section className="relative mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
          <div className="relative space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Library
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Strategic intelligence for modern storytelling teams
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
              Dive into frameworks, teardowns, and playbooks curated by Lumina’s research guild. Filter by focus area or search for the challenges keeping your newsroom up at night.
            </p>
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5 text-slate-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles, playbooks, or tags"
                  className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="hidden text-xs font-semibold uppercase tracking-widest text-slate-400 md:block">
                  Sort
                </label>
                <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 p-1 text-xs font-semibold text-slate-300">
                  {[
                    { value: "newest", label: "Newest" },
                    { value: "oldest", label: "Oldest" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSortOrder(option.value)}
                      className={`rounded-full px-3 py-1 transition ${
                        sortOrder === option.value
                          ? "bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-slate-950"
                          : "text-slate-400"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "border-emerald-300/60 bg-emerald-400/20 text-emerald-200"
                      : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-emerald-300/40 hover:text-emerald-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {isLoading ? "Syncing newsroom..." : `${filteredPosts.length} insights`}
            </h2>
            <p className="text-xs text-slate-500">
              Showing curated and live database entries
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-emerald-500/10"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-indigo-500/20" />
                </div>
                <div className="relative flex flex-1 flex-col gap-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    <span>{post.category}</span>
                    <span className="text-slate-500">
                      {formatDateLabel(post.publishedAt ?? post.date)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-200">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-xs text-slate-400">
                    <Image
                      src={post.author?.avatar ?? demoPosts[0].author.avatar}
                      alt={post.author?.name ?? "Author"}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border border-slate-700 object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-slate-200">
                        {post.author?.name ?? "Lumina Editorial"}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(post.tags?.length ? post.tags : demoPosts[0].tags).slice(0, 4).map((tag) => (
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
                    Read full analysis
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {!filteredPosts.length && !isLoading && (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center text-sm text-slate-300">
              <p className="font-semibold text-white">No matches yet</p>
              <p className="mt-2 text-slate-400">
                Try a different keyword or category to reveal more Lumina playbooks.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
