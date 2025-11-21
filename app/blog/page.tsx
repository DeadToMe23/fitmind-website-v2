import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Blog - Fitness Tips & Guides",
  description: "Read the latest fitness tips, workout guides, and wellness advice from the FitMind team. Learn how to maximize your fitness journey.",
  openGraph: {
    title: "FitMind Blog - Fitness Tips & Guides",
    description: "Read the latest fitness tips, workout guides, and wellness advice from the FitMind team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitMind Blog - Fitness Tips & Guides",
    description: "Read the latest fitness tips, workout guides, and wellness advice from the FitMind team.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FitMind Blog",
    description: "Fitness tips, workout guides, and wellness advice",
    url: "https://fitmind.app/blog",
    publisher: {
      "@type": "Organization",
      name: "FitMind",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                FitMind Blog
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Fitness tips, workout guides, and wellness advice to help you on your journey
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-4xl">📝</span>
                        )}
                      </div>
                      <div className="p-6">
                        {post.category && (
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">
                            {post.category}
                          </span>
                        )}
                        <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-purple-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          {post.author && <span>By {post.author}</span>}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

