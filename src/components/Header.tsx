import { Link } from "react-router-dom";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-border bg-background relative z-50">
      <div className="container mx-auto px-6 py-6 max-w-5xl">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-serif font-medium text-foreground hover:text-muted-foreground transition-colors">
            Blog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/about"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <DarkModeToggle />
            <a
              href="https://anubhavprasai.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              ← anubhavprasai.com.np
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col p-6 gap-4">
              <Link
                to="/about"
                className="text-base font-sans text-foreground hover:text-muted-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="https://anubhavprasai.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-sans text-foreground hover:text-muted-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ← anubhavprasai.com.np
              </a>
              <div className="flex items-center justify-between py-2">
                <span className="text-base font-sans text-foreground">Theme</span>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;