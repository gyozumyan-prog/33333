import React from 'react';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { HeroSection } from '@/components/sections/HeroSection';

export default function ContactPage() {
  return (
    <main className="pt-16">
      <HeroSection badge="Контакты"
        title="Мы всегда рады вас видеть"
        subtitle="Свяжитесь с нами любым удобным способом"
        image={["https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop", "Colorful salad"]}
        variant="centered" />
      <ContactForm badge="Напишите нам"
        title="Остались вопросы?"
        subtitle="Заполните форму, и мы свяжемся с вами в ближайшее время"
        info={{"address": "Москва, ул. Примерная, 10, БЦ 'Панорама', 5 этаж", "phone": "+7 (495) 123-45-67", "email": "info@belvedere-rest.ru"}}
        web3forms_key="YOUR_WEB3FORMS_ACCESS_KEY" />
      <FeaturesGrid badge="Режим работы"
        title="Когда нас посетить"
        subtitle="Мы работаем для вас каждый день"
        features={[{"icon": "Clock", "title": "Часы работы", "description": "Понедельник - Четверг: 12:00 - 23:00\nПятница - Суббота: 12:00 - 01:00\nВоскресенье: 12:00 - 23:00"}, {"icon": "Phone", "title": "Телефоны", "description": "Бронирование: +7 (495) 123-45-67\nБанкеты: +7 (495) 123-45-68\nWhatsApp: +7 (925) 123-45-67"}, {"icon": "Mail", "title": "Email", "description": "Общие вопросы: info@belvedere-rest.ru\nБронирование: booking@belvedere-rest.ru\nМероприятия: events@belvedere-rest.ru"}, {"icon": "MapPin", "title": "Как добраться", "description": "Метро 'Площадь Революции' — 5 мин пешком\nПарковка для гостей — подземная, бесплатная\nВход со стороны главного фасада здания"}]}
        variant="grid" />
      <FAQAccordion badge="Частые вопросы"
        title="Ответы на популярные вопросы"
        subtitle="Всё, что нужно знать перед визитом"
        items={[{"question": "Нужно ли бронировать столик заранее?", "answer": "Да, мы настоятельно рекомендуем бронировать столики заранее, особенно на выходные и праздничные дни. Это гарантирует вам место в удобное время."}, {"question": "Есть ли у вас парковка?", "answer": "Да, для наших гостей доступна бесплатная подземная парковка на 50 мест. Вход с улицы Примерной."}, {"question": "Можно ли провести у вас банкет или корпоратив?", "answer": "Конечно! У нас есть VIP-залы вместимостью от 15 до 40 человек. Мы предлагаем индивидуальное меню и полный спектр услуг по организации мероприятий."}, {"question": "Принимаете ли вы карты оплаты?", "answer": "Да, мы принимаем все основные банковские карты, включая Visa, MasterCard, МИР. Также возможна оплата наличными."}, {"question": "Есть ли вегетарианские и веганские опции?", "answer": "Да, в нашем меню представлены вегетарианские и веганские блюда. Также мы можем адаптировать меню под особые диетические требования — просто сообщите об этом при бронировании."}, {"question": "Работаете ли вы в праздничные дни?", "answer": "Да, мы работаем во все праздничные дни. В новогоднюю ночь действует специальное праздничное меню. Рекомендуем бронировать столики заранее."}]} />
      <CTASection title="Готовы посетить нас?"
        subtitle="Забронируйте столик прямо сейчас и насладитесь незабываемым вечером"
        cta_primary={{"label": "Забронировать стол", "href": "/booking"}}
        cta_secondary={{"label": "Позвонить нам", "href": "tel:+74951234567"}}
        variant="dark" />
    </main>
  );
}
