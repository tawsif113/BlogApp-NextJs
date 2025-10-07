import PostCard from "./PostCard";

export default function FeaturedPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Featured narratives
        </h2>
        <p className="text-sm text-slate-400">
          Curated weekly by our editorial team
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
