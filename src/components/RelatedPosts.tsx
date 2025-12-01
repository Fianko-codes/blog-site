import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface RelatedPostsProps {
    currentPost: Post;
    allPosts: Post[];
    maxPosts?: number;
}

const RelatedPosts = ({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) => {
    // Find posts with shared tags, excluding the current post
    const relatedPosts = allPosts
        .filter(post => post.id !== currentPost.id)
        .map(post => {
            // Count shared tags
            const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
            return { post, relevance: sharedTags.length };
        })
        .filter(({ relevance }) => relevance > 0)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, maxPosts)
        .map(({ post }) => post);

    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-serif font-medium text-foreground mb-6">
                Related Essays
            </h2>
            <div className="space-y-6">
                {relatedPosts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/essay/${post.slug}`}
                        className="block group"
                    >
                        <article className="space-y-2">
                            <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-sans line-clamp-2">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground font-sans">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{post.readingTime} min read</span>
                                </div>
                                <span>•</span>
                                <span>{post.category}</span>
                                <div className="flex gap-1 ml-2">
                                    {post.tags.filter(tag => currentPost.tags.includes(tag)).slice(0, 2).map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedPosts;
