import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsCounterProps {
  variant?: 'default' | 'dark';
  stats: Stat[];
}

function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-extrabold font-heading">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsCounter({ variant = 'default', stats }: StatsCounterProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-950 text-white' : 'bg-background'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 text-center`}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className={`mt-2 text-sm font-medium ${isDark ? 'text-slate-400' : 'text-muted-foreground'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
