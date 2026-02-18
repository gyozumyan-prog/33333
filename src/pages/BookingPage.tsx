import React from 'react';
import { ContactForm } from '@/components/sections/ContactForm';
import { HeroSection } from '@/components/sections/HeroSection';

export default function BookingPage() {
  return (
    <main className="pt-16">
      <HeroSection title="Система бронирования"
        subtitle="Забронируйте столик в Bella Italia за несколько минут"
        badge="🎯 Быстрое и удобное бронирование"
        variant="centered" />
      <ContactForm badge="Забронировать столик"
        title="Форма бронирования"
        subtitle="Укажите удобную дату и время"
        info={{"address": "ул. Тверская, 15, Москва, 101000", "phone": "+7 (999) 999-99-99", "email": "booking@bellaitalia.ru"}}
        web3forms_key="your_web3forms_key_here" />
    </main>
  );
}
