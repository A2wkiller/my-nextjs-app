import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyNextApp</h1>
      <p className="text-lg text-slate-600 mb-8">
        A simple Next.js site built to practice routing, layouts, and dynamic
        pages.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/about"
          className="px-5 py-2 bg-slate-900 text-white rounded hover:bg-slate-700"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2 bg-slate-900 text-white rounded hover:bg-slate-700"
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="px-5 py-2 bg-amber-500 text-white rounded hover:bg-amber-400"
        >
          Read the Blog
        </Link>
      </div>
    </section>
  );
}
