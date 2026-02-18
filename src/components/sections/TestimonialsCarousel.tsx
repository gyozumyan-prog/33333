import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsCarouselProps {
  variant?: 'cards' | 'carousel';
  badge?: string;
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ variant = 'cards', badge, title, subtitle, testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const isCarousel = variant === 'carousel';

  return (
    <section className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
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

        {isCarousel ? (
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-lg">
                  <CardContent className="p-10 text-center">
                    {testimonials[current].rating && (
                      <div className="flex justify-center gap-1 text-amber-400 mb-4">
                        {Array.from({ length: testimonials[current].rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    )}
                    <p className="text-lg leading-relaxed text-muted-foreground italic">
                      "{testimonials[current].quote}"
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                      {testimonials[current].avatar && (
                        <img src={testimonials[current].avatar} alt="" className="w-12 h-12 rounded-full object-cover" />
                      )}
                      <div className="text-left">
                        <p className="font-semibold font-heading">{testimonials[current].author}</p>
                        {testimonials[current].role && (
                          <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrent(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="p-2 rounded-full bg-background shadow hover:shadow-md transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                />
              ))}
              <button
                onClick={() => setCurrent(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-full bg-background shadow hover:shadow-md transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    {t.rating && (
                      <div className="flex gap-1 text-amber-400 mb-3">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    )}
                    <p className="text-muted-foreground leading-relaxed">"{t.quote}"</p>
                    <div className="mt-4 flex items-center gap-3">
                      {t.avatar && <img src={t.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />}
                      <div>
                        <p className="font-semibold text-sm">{t.author}</p>
                        {t.role && <p className="text-xs text-muted-foreground">{t.role}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
