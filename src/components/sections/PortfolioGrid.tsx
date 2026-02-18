import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, X } from 'lucide-react';

interface PortfolioItem {
  title: string;
  description?: string;
  image: string;
  category?: string;
  link?: string;
  tags?: string[];
}

interface PortfolioGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
  categories?: string[];
}

export function PortfolioGrid({ badge, title, subtitle, items, categories }: PortfolioGridProps) {
  const [filter, setFilter] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const allCategories = categories || [...new Set(items.map(i => i.category).filter(Boolean))] as string[];
  const filtered = filter ? items.filter(i => i.category === filter) : items;

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badge && <span className="text-sm font-semibold text-primary uppercase tracking-widest">{badge}</span>}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>

        {allCategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                !filter ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
              }`}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500"
                  onClick={() => setLightbox(i)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white flex items-center gap-1 text-sm"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" /> View
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold font-heading text-lg">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tags.map((tag, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-white/80 transition"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={filtered[lightbox].image}
              alt={filtered[lightbox].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
