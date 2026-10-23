import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <article className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200">
      <Link
        href="/"
        className="text-sm font-semibold text-emerald-600 hover:underline mb-6 inline-block"
      >
        ← Back to all posts
      </Link>
      
      <header className="mb-8 border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">
          {postData.category || "Finance"}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
          {postData.title}
        </h1>
        <p className="text-slate-500 text-sm">{postData.date}</p>
      </header>

      {/* Post Body */}
      <div
        className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
      />
    </article>
  );
}
