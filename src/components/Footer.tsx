import { Mail, Twitter, Linkedin, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anubhav Prasai. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@anubhavprasai.com.np" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/anubhavprasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/anubhavprasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="/rss.xml" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="RSS Feed"
            >
              <Rss className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
