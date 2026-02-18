import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  variant?: 'centered' | 'split' | 'minimal' | 'dark';
  title: string;
  subtitle: string;
  cta_primary?: { text: string; href: string };
  cta_secondary?: { text: string; href: string };
  badge?: string;
  image?: string;
}

export function HeroSection({
  variant = 'centered',
  title,
  subtitle,
  cta_primary,
  cta_secondary,
  badge,
  image,
}: HeroSectionProps) {
  const isDark = variant === 'dark';
  const isSplit = variant === 'split';

  return (
    <section className={`relative min-h-[85vh] flex items-center overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-background'}`}>
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className={`${isSplit ? 'grid md:grid-cols-2 gap-12 items-center' : 'max-w-3xl'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {badge && (
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5 uppercase tracking-widest font-semibold">
                {badge}
              </Badge>
            )}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className={`mt-6 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl ${isDark ? 'text-slate-400' : 'text-muted-foreground'}`}>
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {cta_primary && (
                <Button size="xl" asChild>
                  <a href={cta_primary.href}>{cta_primary.text}</a>
                </Button>
              )}
              {cta_secondary && (
                <Button variant="outline" size="xl" asChild>
                  <a href={cta_secondary.href}>{cta_secondary.text} →</a>
                </Button>
              )}
            </div>
          </motion.div>

          {isSplit && image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={image}
                alt=""
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
