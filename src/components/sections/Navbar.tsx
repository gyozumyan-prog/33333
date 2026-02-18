import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
  cta?: { text: string; href: string };
  variant?: 'light' | 'dark';
}

export function Navbar({ brand, links, cta, variant = 'light' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = variant === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
      isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/70 border-gray-100/80'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-foreground'}`}>
          {brand}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isDark ? 'text-slate-300' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <Button size="sm" asChild>
              <a href={cta.href}>{cta.text}</a>
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t px-4 py-4 space-y-3 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100'
        }`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <Button className="w-full mt-2" asChild>
              <a href={cta.href}>{cta.text}</a>
            </Button>
          )}
        </div>
      )}
    </header>
  );
}
