import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 mb-10 shadow-lg border border-slate-700">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-emerald-400">
          Financial Freedom ki Shuruaat
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl">
          Learn Personal Finance, Mutual Funds, Stock Market, aur Passive Income strategies in simple language.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Latest Finance Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded">
                {post.category || "Finance"}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 text-slate-900 hover:text-emerald-600">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                {post.description}
              </p>
              <div className="flex justify-between items-center text-xs text-slate-400 border-t pt-3">
                <span>{post.date}</span>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-emerald-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
