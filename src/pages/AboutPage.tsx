import React from 'react';
import { CTASection } from '@/components/sections/CTASection';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { HeroSection } from '@/components/sections/HeroSection';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { Timeline } from '@/components/sections/Timeline';

export default function AboutPage() {
  return (
    <main className="pt-16">
      <HeroSection badge="О ресторане"
        title="История вкуса длиной в 13 лет"
        subtitle="Belvedere — это место, где традиции встречаются с инновациями, а каждый ужин становится незабываемым событием"
        cta_primary={{"label": "Забронировать стол", "href": "/booking"}}
        image={["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop", "Restaurant interior"]}
        variant="split" />
      <Timeline badge="Наш путь"
        title="История успеха"
        subtitle="От небольшого бистро до премиального ресторана с мишленовским признанием"
        events={[{"date": "2010", "title": "Открытие Belvedere", "description": "Начали с камерного ресторана на 30 мест с фокусом на средиземноморскую кухню"}, {"date": "2013", "title": "Первая награда", "description": "Получили премию 'Лучший ресторан года' от ресторанной ассоциации"}, {"date": "2015", "title": "Расширение", "description": "Открыли VIP-залы и панорамную террасу, увеличили вместимость до 80 гостей"}, {"date": "2017", "title": "Новая концепция", "description": "Приглашение шеф-повара с мишленовским опытом и запуск авторского меню"}, {"date": "2019", "title": "Международное признание", "description": "Вошли в топ-10 лучших ресторанов страны по версии гастрономических критиков"}, {"date": "2022", "title": "Винная карта мирового уровня", "description": "Получили Wine Spectator Award за выдающуюся коллекцию вин"}, {"date": "2024", "title": "Сегодня", "description": "Belvedere — эталон гастрономического искусства с 50 000+ довольных гостей"}]} />
      <FeaturesGrid badge="Наши ценности"
        title="Философия Belvedere"
        subtitle="Принципы, которым мы следуем каждый день"
        features={[{"icon": "Heart", "title": "Любовь к делу", "description": "Каждое блюдо создается с душой и вниманием к деталям. Мы любим то, что делаем, и это чувствуется в каждом элементе."}, {"icon": "Leaf", "title": "Сезонность и свежесть", "description": "Работаем только с проверенными фермерами и поставщиками. Меню меняется в зависимости от сезона для максимального вкуса."}, {"icon": "Users", "title": "Гостеприимство", "description": "Каждый гость для нас особенный. Мы создаем атмосферу, где вы чувствуете себя как дома, но с сервисом мирового уровня."}, {"icon": "Award", "title": "Постоянное совершенствование", "description": "Регулярно обучаем команду, экспериментируем с новыми техниками и следим за мировыми трендами гастрономии."}]}
        variant="grid" />
      <TeamGrid badge="Команда мечты"
        title="Люди, создающие волшебство"
        subtitle="Познакомьтесь с профессионалами, которые делают каждый ваш визит незабываемым"
        members={[{"name": "Максим Дубровский", "role": "Шеф-повар", "image": ["https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop", "Sushi platter"], "bio": "15 лет опыта в ресторанах Мишлен. Стажировался во Франции и Италии. Автор уникальной концепции fusion-кухни.", "socials": [{"platform": "instagram", "url": "#"}]}, {"name": "Анна Королёва", "role": "Су-шеф", "image": ["https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop", "Fresh pizza"], "bio": "Призёр международных кулинарных конкурсов. Специализируется на современной интерпретации классических блюд.", "socials": [{"platform": "instagram", "url": "#"}]}, {"name": "Виктор Белов", "role": "Главный сомелье", "image": ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop", "Laptop coding"], "bio": "Сертифицированный сомелье с 10-летним стажем. Куратор винной карты из 300+ позиций лучших мировых вин.", "socials": [{"platform": "instagram", "url": "#"}]}, {"name": "Елена Морозова", "role": "Управляющая", "image": ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop", "Man smiling"], "bio": "Эксперт в области ресторанного менеджмента. Создает атмосферу, где каждый гость чувствует себя особенным.", "socials": [{"platform": "instagram", "url": "#"}]}]} />
      <CTASection title="Станьте частью истории Belvedere"
        subtitle="Забронируйте столик и почувствуйте, что значит настоящее гастрономическое искусство"
        cta_primary={{"label": "Забронировать стол", "href": "/booking"}}
        variant="dark" />
    </main>
  );
}
