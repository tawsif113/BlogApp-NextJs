import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Editorial OS", href: "#" },
      { name: "Intelligence API", href: "#" },
      { name: "Creator Studio", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our story", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Editorial frameworks", href: "#" },
      { name: "Research library", href: "#" },
      { name: "Community", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-12 lg:flex-row lg:justify-between">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-sky-400 to-indigo-500 font-semibold text-slate-950 shadow-lg">
              LB
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Lumina Blog
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Lumina equips modern editorial teams with the intelligence, rituals,
            and technology to craft unforgettable narratives.
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Lumina Media Labs. All rights reserved.
          </p>
        </div>

        <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                {group.title}
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition hover:text-emerald-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
