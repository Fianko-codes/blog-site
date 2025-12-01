import { Link } from "react-router-dom";
import DarkModeToggle from "@/components/DarkModeToggle";

const Header = () => {
  return <header className="border-b border-border bg-background">
    <div className="container mx-auto px-6 py-6 max-w-5xl">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-medium text-foreground hover:text-muted-foreground transition-colors">Blog</Link>
        <div className="flex items-center gap-4">
          <Link
            to="/about"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </Link>
          <DarkModeToggle />
          <a href="https://anubhavprasai.com.np" target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            ← anubhavprasai.com.np
          </a>
        </div>
      </nav>
    </div>
  </header>;
};
export default Header;