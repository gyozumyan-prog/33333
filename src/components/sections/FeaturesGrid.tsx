import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import * as Icons from 'lucide-react';

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  variant?: 'grid' | 'bento';
  badge?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
}

function getIcon(name?: string) {
  if (!name) return null;
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className="w-6 h-6" /> : null;
}

export function FeaturesGrid({ variant = 'grid', badge, title, subtitle, features }: FeaturesGridProps) {
  const isBento = variant === 'bento';

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{badge}</span>
          )}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>

        <div className={`grid gap-6 ${
          isBento
            ? 'md:grid-cols-3 auto-rows-fr'
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={isBento && i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-border/50">
                <CardContent className="p-8">
                  {feature.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                      {getIcon(feature.icon)}
                    </div>
                  )}
                  <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
