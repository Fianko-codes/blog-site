import { Badge } from "@/components/ui/badge";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const TagFilter = ({ tags, selectedTag, onTagSelect }: TagFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selectedTag === null ? "default" : "outline"}
        className="cursor-pointer font-sans transition-colors"
        onClick={() => onTagSelect(null)}
      >
        All
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          className="cursor-pointer font-sans transition-colors"
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagFilter;
