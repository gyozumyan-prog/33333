import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
}

interface ContactFormProps {
  badge?: string;
  title: string;
  subtitle?: string;
  info?: ContactInfo;
  web3forms_key?: string;
}

export function ContactForm({ badge, title, subtitle, info, web3forms_key }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    if (web3forms_key) {
      data.append('access_key', web3forms_key);
      try {
        await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      } catch {}
    }

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {info && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {info.address && (
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading">Address</p>
                    <p className="text-muted-foreground">{info.address}</p>
                  </div>
                </div>
              )}
              {info.phone && (
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading">Phone</p>
                    <p className="text-muted-foreground">{info.phone}</p>
                  </div>
                </div>
              )}
              {info.email && (
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading">Email</p>
                    <p className="text-muted-foreground">{info.email}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-heading mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" placeholder="Your Name" required />
                    <Input name="email" type="email" placeholder="Your Email" required />
                    <Input name="subject" placeholder="Subject" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? 'Sending...' : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
