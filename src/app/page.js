import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import FeaturedPosts from "./components/FeaturedPosts";
import LatestInsights from "./components/LatestInsights";
import CategoryGrid from "./components/CategoryGrid";
import NewsletterCTA from "./components/NewsletterCTA";
import Footer from "./components/Footer";
import {
  demoPosts,
  demoCategories,
  demoStats,
} from "@/utils/demoContent";

export default function Home() {
  const [featuredPost, ...rest] = demoPosts;
  const featuredPosts = rest.slice(0, 3);
  const latestPosts = rest;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pb-24">
        <HeroSection featuredPost={featuredPost} />
        <StatsBar stats={demoStats} />
        <FeaturedPosts posts={featuredPosts} />
        <LatestInsights posts={latestPosts} />
        <CategoryGrid categories={demoCategories} />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
