import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import ReadingProgress from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import NotFound from "./NotFound";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ReadingProgress />
      <Header />

      <main className="flex-1">
        <article className="container mx-auto px-6 py-12 max-w-3xl">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to essays
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-sans mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishDate}>{formattedDate}</time>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>

              <span className="text-muted-foreground">•</span>
              <span>{post.category}</span>

              <div className="ml-auto">
                <ShareButtons
                  title={post.title}
                  url={`/essay/${post.slug}`}
                  excerpt={post.excerpt}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-sans">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground font-serif text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Posts */}
          <RelatedPosts currentPost={post} allPosts={posts} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
