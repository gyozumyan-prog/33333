import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  message?: string;
  accept_text?: string;
  decline_text?: string;
  privacy_href?: string;
}

export function CookieConsent({ message, accept_text, decline_text, privacy_href }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="max-w-4xl mx-auto bg-card border rounded-2xl shadow-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <Cookie className="w-8 h-8 text-primary shrink-0 hidden sm:block" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                {message || 'We use cookies to enhance your browsing experience. By continuing, you agree to our use of cookies.'}
                {privacy_href && (
                  <>{' '}<a href={privacy_href} className="text-primary hover:underline">Privacy Policy</a></>
                )}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              {decline_text && (
                <Button variant="ghost" size="sm" onClick={decline}>
                  {decline_text}
                </Button>
              )}
              <Button size="sm" onClick={accept}>
                {accept_text || 'Accept'}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
