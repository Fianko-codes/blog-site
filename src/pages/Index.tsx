import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Define specific categories
  const categories = ["Mathematics", "CS & AI", "Reflections"];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedTag === null || post.category === selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedTag]);

  return <div className="min-h-screen flex flex-col bg-background">
    <Header />

    <main className="flex-1">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Intro section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">Thoughts Worth Writing Down</h1>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl">Longform explorations of ideas worth sitting with. Possibly on any topic I might be interested in.</p>
        </section>

        {/* Search and filter */}
        <section className="mb-12 space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <TagFilter tags={categories} selectedTag={selectedTag} onTagSelect={setSelectedTag} />
        </section>

        {/* Posts list */}
        <section>
          {filteredPosts.length > 0 ? <div className="space-y-2">
            {filteredPosts.map(post => <PostCard key={post.id} post={post} />)}
          </div> : <div className="text-center py-16">
            <p className="text-lg text-muted-foreground font-sans">
              No essays found matching your criteria.
            </p>
          </div>}
        </section>
      </div>
    </main>

    <Footer />
  </div>;
};
export default Index;