import React from 'react';
import { CTASection } from '@/components/sections/CTASection';
import { GallerySection } from '@/components/sections/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';

export default function GalleryPage() {
  return (
    <main className="pt-16">
      <HeroSection badge="Галерея"
        title="Визуальное путешествие по Belvedere"
        subtitle="Атмосфера, интерьеры и кулинарные шедевры нашего ресторана"
        variant="minimal" />
      <GallerySection badge="Интерьеры"
        title="Пространство для особенных моментов"
        subtitle="Каждый зал создан для комфорта и наслаждения"
        columns={3}
        images={[{"src_query": "luxury restaurant main dining room elegant chandelier", "alt": "Главный зал", "caption": "Главный зал на 50 мест"}, {"src_query": "restaurant vip private dining room elegant", "alt": "VIP-зал", "caption": "Приватный VIP-зал"}, {"src_query": "restaurant terrace outdoor dining evening lights", "alt": "Панорамная терраса", "caption": "Терраса с видом на город"}, {"src_query": "restaurant bar wine bottles elegant lighting", "alt": "Барная зона", "caption": "Барная зона с винотекой"}, {"src_query": "restaurant open kitchen chef cooking professional", "alt": "Открытая кухня", "caption": "Открытая кухня от шефа"}, {"src_query": "restaurant lounge area comfortable seating elegant", "alt": "Lounge зона", "caption": "Комфортная lounge-зона"}]} />
      <GallerySection badge="Кулинарные шедевры"
        title="Искусство на тарелке"
        subtitle="Наши блюда — это гармония вкуса и эстетики"
        columns={3}
        images={[{"src_query": "gourmet appetizer fine dining elegant plating", "alt": "Закуски", "caption": "Авторские закуски"}, {"src_query": "lobster dish fine dining restaurant plating", "alt": "Лобстер", "caption": "Лобстер термидор"}, {"src_query": "wagyu beef steak restaurant plating gourmet", "alt": "Вагю стейк", "caption": "Стейк из мраморной говядины"}, {"src_query": "seafood platter oysters fine dining elegant", "alt": "Морепродукты", "caption": "Плато из морепродуктов"}, {"src_query": "dessert fine dining chocolate artistic plating", "alt": "Десерт", "caption": "Авторский десерт"}, {"src_query": "wine pairing restaurant sommelier pouring", "alt": "Винная карта", "caption": "Винное сопровождение"}]} />
      <GallerySection badge="Мероприятия"
        title="Особенные моменты"
        subtitle="Праздники, которые запоминаются навсегда"
        columns={2}
        images={[{"src_query": "restaurant wedding reception elegant decoration", "alt": "Свадьба", "caption": "Свадебный банкет"}, {"src_query": "corporate event restaurant business dinner elegant", "alt": "Корпоратив", "caption": "Корпоративное мероприятие"}, {"src_query": "restaurant birthday celebration cake candles", "alt": "День рождения", "caption": "Празднование дня рождения"}, {"src_query": "wine tasting event restaurant elegant atmosphere", "alt": "Дегустация", "caption": "Винная дегустация"}]} />
      <CTASection title="Создайте свои незабываемые моменты"
        subtitle="Забронируйте столик в Belvedere и станьте частью нашей истории"
        cta_primary={{"label": "Забронировать сейчас", "href": "/booking"}}
        cta_secondary={{"label": "Организовать мероприятие", "href": "/contact"}}
        variant="default" />
    </main>
  );
}
