import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  variant?: 'default' | 'minimal';
  brand: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
  socials?: Array<{ platform: string; url: string }>;
}

export function Footer({ variant = 'default', brand, description, columns, copyright, socials }: FooterProps) {
  const year = new Date().getFullYear();

  if (variant === 'minimal') {
    return (
      <footer className="border-t bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-bold font-heading">{brand}</span>
          <span className="text-sm text-muted-foreground">
            {copyright || `© ${year} ${brand}. All rights reserved.`}
          </span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-4">{brand}</h3>
            {description && <p className="text-slate-400 text-sm leading-relaxed">{description}</p>}
            {socials && socials.length > 0 && (
              <div className="flex gap-3 mt-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-sm"
                  >
                    {s.platform[0].toUpperCase()}
                  </a>
                ))}
              </div>
            )}
          </div>
          {columns?.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            {copyright || `© ${year} ${brand}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
