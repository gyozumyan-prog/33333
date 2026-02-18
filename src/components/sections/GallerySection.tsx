import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface GallerySectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function GallerySection({ badge, title, subtitle, images, columns = 3 }: GallerySectionProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const colsClass = columns === 2 ? 'sm:columns-2' : columns === 4 ? 'sm:columns-2 lg:columns-4' : 'sm:columns-2 lg:columns-3';

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badge && <span className="text-sm font-semibold text-primary uppercase tracking-widest">{badge}</span>}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>

        <div className={`${colsClass} gap-4 space-y-4`}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightbox(i)}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt || ''}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {img.caption && (
                <p className="text-sm text-muted-foreground mt-2 px-1">{img.caption}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
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
              src={images[lightbox].src}
              alt={images[lightbox].alt || ''}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
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
