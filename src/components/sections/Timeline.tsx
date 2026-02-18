import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

interface TimelineProps {
  badge?: string;
  title: string;
  subtitle?: string;
  events: TimelineEvent[];
}

export function Timeline({ badge, title, subtitle, events }: TimelineProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-1.5" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-sm font-semibold text-primary">{event.date}</span>
                    <h3 className="text-xl font-bold font-heading mt-1">{event.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
