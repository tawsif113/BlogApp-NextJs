"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Insights", href: "/posts" },
  { name: "Categories", href: "#categories" },
  { name: "About", href: "#about" },
];

function MenuIcon({ open }) {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-sky-400 to-indigo-500 font-semibold text-slate-950 shadow-lg">
            LB
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">
              Lumina Blog
            </span>
            <span className="text-xs text-slate-400">
              Crafting the future of digital storytelling
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/posts/new"
            className="rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:shadow-xl"
          >
            Start Writing
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-700 p-2 text-slate-300 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <MenuIcon open={isOpen} />
        </button>
      </div>

      {isOpen && (
        <div className="space-y-2 border-t border-slate-800/60 bg-slate-950 px-4 py-4 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/posts/new"
            className="block rounded-lg bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 px-3 py-2 text-center text-sm font-semibold text-slate-950"
            onClick={() => setIsOpen(false)}
          >
            Start Writing
          </Link>
        </div>
      )}
    </header>
  );
}
