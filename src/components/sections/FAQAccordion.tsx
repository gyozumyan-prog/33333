import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQAccordion({ badge, title, subtitle, items }: FAQAccordionProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badge && <span className="text-sm font-semibold text-primary uppercase tracking-widest">{badge}</span>}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Accordion.Item
                value={`item-${i}`}
                className="border rounded-xl overflow-hidden data-[state=open]:shadow-md transition-shadow"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left font-medium hover:bg-muted/50 transition-colors group">
                  <span className="font-heading">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
