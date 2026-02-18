import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterProps {
  title: string;
  subtitle?: string;
  placeholder?: string;
  button_text?: string;
}

export function Newsletter({ title, subtitle, placeholder, button_text }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="py-24 lg:py-32 bg-primary/5">
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}

        {submitted ? (
          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-green-600"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Thanks for subscribing!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={placeholder || 'Enter your email'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              {button_text || 'Subscribe'}
            </Button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
      </motion.div>
    </section>
  );
}
