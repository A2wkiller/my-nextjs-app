import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPost({ post }) {
  return (
    <article className="max-w-2xl mx-auto">
      <Link href="/blog" className="text-amber-600 hover:underline">
        &larr; Back to all posts
      </Link>
      <p className="text-sm text-slate-500 mt-6 mb-1">{post.date}</p>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-slate-700 leading-relaxed">{post.content}</p>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id === params.id);
  return { props: { post } };
}
