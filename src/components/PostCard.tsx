import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-8 border-b border-border last:border-0">
      <Link to={`/essay/${post.slug}`} className="group">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 font-sans">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-sans">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.publishDate}>{formattedDate}</time>
        </div>
        
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{post.readingTime} min read</span>
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-sans text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
