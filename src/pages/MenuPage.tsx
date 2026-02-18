import React from 'react';
import { CTASection } from '@/components/sections/CTASection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { PricingTable } from '@/components/sections/PricingTable';

export default function MenuPage() {
  return (
    <main className="pt-16">
      <HeroSection badge="Наше меню"
        title="Кулинарное искусство на вашей тарелке"
        subtitle="Авторские блюда из сезонных продуктов высочайшего качества"
        cta_primary={{"label": "Забронировать столик", "href": "/booking"}}
        image={["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", "Fine dining restaurant"]}
        variant="centered" />
      <PricingTable badge="Дегустационные сеты"
        title="Авторские сеты от шефа"
        subtitle="Готовые комплексные предложения для полного погружения в мир вкуса"
        plans={[{"name": "Вечерняя классика", "price": "4500", "period": "на персону", "description": "Идеальный выбор для романтического ужина", "features": ["Приветственный аперитив", "Закуска на выбор", "Суп дня от шефа", "Основное блюдо", "Десерт", "Чай или кофе"], "cta": "Выбрать", "href": "/booking"}, {"name": "Дегустационное меню", "price": "8500", "period": "на персону", "description": "Путешествие сквозь вкусы от нашего шефа", "features": ["Шампанское в качестве аперитива", "7 авторских блюд", "Винное сопровождение (4 бокала)", "Сырная тарелка", "Дижестив", "Подарок от шефа"], "highlighted": true, "cta": "Забронировать", "href": "/booking"}, {"name": "Гастрономическое путешествие", "price": "15000", "period": "на персону", "description": "Эксклюзивный опыт для истинных гурманов", "features": ["VIP встреча с шампанским", "10 уникальных блюд", "Премиум винное сопровождение", "Экскурсия на кухню", "Личная встреча с шеф-поваром", "Именной сертификат", "Эксклюзивные рецепты в подарок"], "cta": "Забронировать", "href": "/booking"}]}
        variant="cards" />
      <PortfolioGrid badge="Наши блюда"
        title="Избранное из меню"
        subtitle="Самые популярные позиции, которые влюбляют в себя с первого кусочка"
        items={[{"title": "Тартар из мраморной говядины", "description": "С трюфельным маслом, перепелиным яйцом и хрустящими чипсами из пармезана", "image": ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop", "Restaurant interior"], "category": "Холодные закуски", "tags": ["Хит сезона", "Авторское"]}, {"title": "Тигровые креветки фламбе", "description": "На гриле с соусом из белого вина, чеснока и розмарина", "image": ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", "Team collaboration"], "category": "Горячие закуски", "tags": ["Популярное"]}, {"title": "Крем-суп из белых грибов", "description": "С трюфельной пеной и хрустящим беконом", "image": ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", "Modern house exterior"], "category": "Супы", "tags": ["Сезонное"]}, {"title": "Стейк Рибай", "description": "Мраморная говядина Black Angus, 300г, с овощами гриль и соусом демиглас", "image": ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", "Fine dining restaurant"], "category": "Основные блюда", "tags": ["Бестселлер", "Премиум"]}, {"title": "Дорадо в соляной корке", "description": "С лимонным кремом, спаржей и молодым картофелем", "image": ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop", "Lake panorama"], "category": "Рыба", "tags": ["Авторское"]}, {"title": "Шоколадный фондан", "description": "С жидким центром, ванильным мороженым и ягодным кули", "image": ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", "Modern office building"], "category": "Десерты", "tags": ["Хит сезона"]}]} />
      <CTASection title="Попробуйте наши блюда уже сегодня"
        subtitle="Забронируйте столик и насладитесь авторской кухней от шефа с мишленовским опытом"
        cta_primary={{"label": "Забронировать стол", "href": "/booking"}}
        cta_secondary={{"label": "Скачать полное меню PDF", "href": "#"}}
        variant="default" />
    </main>
  );
}
