import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  annual_price?: string;
  period: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta: { text: string; href: string };
}

interface PricingTableProps {
  variant?: 'cards' | 'toggle';
  badge?: string;
  title: string;
  subtitle?: string;
  plans: Plan[];
}

export function PricingTable({ variant = 'cards', badge, title, subtitle, plans }: PricingTableProps) {
  const [annual, setAnnual] = useState(false);
  const hasToggle = variant === 'toggle' && plans.some(p => p.annual_price);

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

          {hasToggle && (
            <div className="mt-8 inline-flex items-center gap-3 bg-muted p-1 rounded-full">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`}
                onClick={() => setAnnual(true)}
              >
                Annual
              </button>
            </div>
          )}
        </motion.div>

        <div className={`grid gap-8 ${plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'}`}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`h-full relative ${plan.highlighted ? 'border-primary shadow-xl shadow-primary/10 scale-105' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  {plan.description && <CardDescription>{plan.description}</CardDescription>}
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold font-heading">
                      {annual && plan.annual_price ? plan.annual_price : plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <a href={plan.cta.href}>{plan.cta.text}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
