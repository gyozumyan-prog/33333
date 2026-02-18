import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

interface Error404Props {
  title?: string;
  message?: string;
  back_text?: string;
  back_href?: string;
}

export function Error404({ title, message, back_text, back_href }: Error404Props) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-[10rem] sm:text-[14rem] font-extrabold font-heading leading-none text-primary/10 select-none"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          404
        </motion.div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading -mt-8 mb-4">
          {title || 'Page Not Found'}
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          {message || "The page you're looking for doesn't exist or has been moved."}
        </p>
        <Button size="lg" asChild>
          <a href={back_href || '/'}>
            <Home className="w-4 h-4 mr-2" />
            {back_text || 'Go Home'}
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
