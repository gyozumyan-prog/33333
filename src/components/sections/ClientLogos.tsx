import { motion } from 'framer-motion';

interface ClientLogosProps {
  title?: string;
  logos: Array<{
    name: string;
    image?: string;
  }>;
}

export function ClientLogos({ title, logos }: ClientLogosProps) {
  return (
    <section className="py-16 lg:py-20 bg-muted/30 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
            {title}
          </p>
        )}

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              whileHover={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 sm:h-10 w-auto object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl font-bold font-heading text-foreground/60 hover:text-foreground transition-colors">
                  {logo.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
