import React from 'react';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/sections/ContactForm';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { GallerySection } from '@/components/sections/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PricingTable } from '@/components/sections/PricingTable';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import AnimatedBanner from '@/components/sections/AnimatedBanner';

export default function HomePage() {
  return (
    <main className="pt-16">
      <AnimatedBanner />
      <HeroSection title="Добро пожаловать в Bella Italia"
        subtitle="Аутентичная итальянская кухня в сердце города. Незабываемый вкус, тёплая атмосфера, идеальное место для встреч"
        badge="🍽️ Премиум ресторан"
        cta_primary={{"label": "Забронировать столик", "href": "/booking"}}
        cta_secondary={{"label": "Смотреть меню", "href": "#menu"}}
        image={["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop", "Delicious food plating"]}
        variant="dark" />
      <FeaturesGrid badge="Почему выбирают нас"
        title="Особенности Bella Italia"
        subtitle="Всё для идеального ужина"
        features={[{"icon": "ChefHat", "title": "Шефы мирового уровня", "description": "Наша команда обучалась в лучших ресторанах Италии"}, {"icon": "Wine", "title": "Премиум винотека", "description": "Избранные вина из виноградников Тосканы и Пьемонта"}, {"icon": "Music", "title": "Живая музыка", "description": "По выходным: итальянские музыканты и атмосфера романтики"}, {"icon": "Home", "title": "Уютный интерьер", "description": "Аутентичный дизайн, свечи, мягкое освещение"}, {"icon": "Clock", "title": "Быстрое обслуживание", "description": "Профессиональный персонал готов помочь в любой момент"}, {"icon": "MapPin", "title": "Удобное место", "description": "Центр города, легко припарковаться, близко метро"}]}
        variant="bento" />
      <GallerySection badge="Наша галерея"
        title="Атмосфера Bella Italia"
        subtitle="Откройте для себя наше пространство"
        columns={3}
        images={[{"src_query": "italian restaurant interior elegant lighting", "alt": "Интерьер ресторана", "caption": "Элегантный зал"}, {"src_query": "gourmet italian pasta dish", "alt": "Паста карбонара", "caption": "Паста Карбонара"}, {"src_query": "italian tiramisu dessert", "alt": "Тирамису", "caption": "Домашний Тирамису"}, {"src_query": "wine glasses italian restaurant", "alt": "Винотека", "caption": "Премиум вина"}, {"src_query": "risotto seafood italian cooking", "alt": "Ризотто", "caption": "Ризотто с морепродуктами"}, {"src_query": "restaurant outdoor seating romantic", "alt": "Веранда", "caption": "Летняя веранда"}]} />
      <PricingTable plans={[{"name": "Обеденный комбо", "price": "890", "features": ["Полноценный обед", "Паста или мясо", "Напиток", "Десерт"], "cta": {"label": "Забронировать", "href": "/booking"}}, {"name": "Романтический ужин", "price": "2490", "highlighted": true, "features": ["Аперитив", "2 основных блюда", "Вино на выбор", "Десерт и кофе", "Живая музыка"], "cta": {"label": "Забронировать", "href": "/booking"}}, {"name": "Банкетное меню", "price": "3990", "features": ["От 10 человек", "5-блюдное меню", "Вино и напитки", "Специальное оформление", "Личный менеджер"], "cta": {"label": "Забронировать", "href": "/booking"}}]}
        variant="cards" />
      <TestimonialsCarousel testimonials={[{"quote": "Это был самый волшебный вечер! Блюда восхитительны, персонал внимателен, атмосфера просто чарующая.", "author": "Елена", "role": "Посетитель", "avatar_query": "woman smiling portrait", "rating": 5}, {"quote": "Приводим сюда клиентов на переговоры. Сочетание вкуса и профессионализма неподражаемо!", "author": "Александр", "role": "Менеджер компании", "avatar_query": "man smiling portrait business", "rating": 5}, {"quote": "Предложили руку и сердце при живой музыке в Bella Italia. Невероятное место для судьбоносного момента!", "author": "Виктория", "role": "Невеста", "avatar_query": "woman happy romantic portrait", "rating": 5}]}
        variant="carousel" />
      <CTASection title="Готовы к незабываемому ужину?"
        subtitle="Забронируйте столик прямо сейчас и наслаждайтесь лучшей итальянской кухней"
        cta_primary={{"label": "Забронировать столик", "href": "/booking"}}
        cta_secondary={{"label": "Позвонить нам", "href": "tel:+79999999999"}}
        variant="dark" />
      <ContactForm badge="Контакты"
        title="Свяжитесь с нами"
        subtitle="Мы всегда рады помочь вам"
        info={{"address": "ул. Тверская, 15, Москва, 101000", "phone": "+7 (999) 999-99-99", "email": "info@bellaitalia.ru"}}
        web3forms_key="your_web3forms_key_here" />
    </main>
  );
}
