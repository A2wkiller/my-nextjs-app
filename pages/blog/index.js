import Link from "next/link";
import { posts } from "../../data/posts";

export default function Blog() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition"
          >
            <p className="text-sm text-slate-500 mb-1">{post.date}</p>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-amber-600 font-medium hover:underline"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
