import { Share2, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShareButtonsProps {
    title: string;
    url: string;
    excerpt: string;
}

const ShareButtons = ({ title, url, excerpt }: ShareButtonsProps) => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : url;

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(excerpt + '\n\n' + shareUrl)}`,
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            // You could add a toast notification here
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleShare('twitter')} className="gap-2 cursor-pointer">
                    <Twitter className="h-4 w-4" />
                    Share on Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('linkedin')} className="gap-2 cursor-pointer">
                    <Linkedin className="h-4 w-4" />
                    Share on LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('email')} className="gap-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    Share via Email
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyLink} className="gap-2 cursor-pointer">
                    <Share2 className="h-4 w-4" />
                    Copy Link
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ShareButtons;
