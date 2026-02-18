import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  variant?: 'default' | 'dark';
  title: string;
  subtitle?: string;
  cta_primary: { text: string; href: string };
  cta_secondary?: { text: string; href: string };
}

export function CTASection({ variant = 'default', title, subtitle, cta_primary, cta_secondary }: CTASectionProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-primary/5'}`}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">{title}</h2>
        {subtitle && (
          <p className={`mt-6 text-lg ${isDark ? 'text-slate-400' : 'text-muted-foreground'}`}>{subtitle}</p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" asChild>
            <a href={cta_primary.href}>
              {cta_primary.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          {cta_secondary && (
            <Button variant="outline" size="xl" asChild>
              <a href={cta_secondary.href}>{cta_secondary.text}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
