import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-6 max-w-5xl">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-serif font-medium text-foreground hover:text-muted-foreground transition-colors">
            Essays
          </Link>
          <a 
            href="https://anubhavprasai.com.np" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
          >
            ← anubhavprasai.com.np
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
