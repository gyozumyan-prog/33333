import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ScrollToTop } from '@/components/sections/ScrollToTop';
import HomePage from '@/pages/HomePage';
import BookingPage from '@/pages/BookingPage';

export default function App() {
  return (
    <>
      <Navbar
        brand="Арман"
        links={[{"label": "Главная", "href": "/"}, {"label": "Забронировать", "href": "/booking"}]}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer
        brand="Арман"
        description="Элегантный ресторан европейской кухни. Идеальное место для романтического ужина, деловых встреч и праздников."
      />
      <ScrollToTop />
    </>
  );
}
