import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AnimatedBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const banners = [
    { title: '🍝 Спецпредложение', subtitle: 'Скидка 20% на вторую бутылку вина', badge: 'Каждый вторник', bgGradient: 'from-orange-400 via-red-500 to-rose-600' },
    { title: '🎉 Групповые бронирования', subtitle: 'Специальная цена для компаний от 10 человек', badge: 'Без ограничений', bgGradient: 'from-purple-500 via-pink-500 to-red-500' },
    { title: '🥂 Романтичный ужин', subtitle: 'Комплимент десерт для влюбленных', badge: 'Весь вечер', bgGradient: 'from-pink-400 via-rose-400 to-orange-400' },
    { title: '👨‍🍳 Дегустация вин', subtitle: 'Встреча с сомелье по средам в 19:00', badge: 'Бесплатно', bgGradient: 'from-amber-500 via-orange-500 to-red-600' }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % banners.length), 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
        .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
        .animate-slide-in-delay { animation: slideIn 0.8s ease-out forwards 0.2s; opacity: 0; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }
      `}</style>
      
      <div className="relative h-64 md:h-80 w-full">
        {banners.map((banner, idx) => (
          <div key={idx} className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient} transition-all duration-1000 ease-out flex items-center justify-center ${idx === currentSlide ? 'opacity-100 scale-100 z-10' : idx < currentSlide ? 'opacity-0 -translate-x-full scale-95 z-0' : 'opacity-0 translate-x-full scale-95 z-0'}`}>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-glow" />
              <div className="absolute -bottom-32 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-glow" style={{animationDelay: '1s'}} />
              <div className="absolute top-1/2 -left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" />
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-2xl">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-full text-sm font-semibold animate-bounce">✨ {banner.badge}</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in drop-shadow-lg">{ banner.title }</h2>
              <p className="text-lg md:text-xl text-white/95 animate-slide-in-delay drop-shadow-md">{banner.subtitle}</p>
              <div className="mt-6 flex justify-center gap-2" style={{animation: 'slideIn 0.8s ease-out 0.4s forwards', opacity: 0}}>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse-ring" />
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse-ring" style={{animationDelay: '0.4s'}} />
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse-ring" style={{animationDelay: '0.8s'}} />
              </div>
            </div>
          </div>
        ))}
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 transition-all rounded-full p-3 backdrop-blur hover:scale-110" aria-label="Пред">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 transition-all rounded-full p-3 backdrop-blur hover:scale-110" aria-label="Далее">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, idx) => (
            <button key={idx} onClick={() => { setCurrentSlide(idx); setIsAutoPlay(false); setTimeout(() => setIsAutoPlay(true), 10000); }} className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'}`} aria-label={`Слайд ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;