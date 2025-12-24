'use client';

import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Прокрутка вниз - скрываем шапку
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Прокрутка вверх - показываем шапку
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`sticky top-0 z-50 bg-white dark:bg-[#16212b] border-b-2 border-[#e2e5f1] dark:border-[#3a4a5c] shadow-sm transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-2xl md:text-3xl font-bold text-[#131022] dark:text-white">
            AutoTriumph
          </a>
          <div className="hidden sm:flex items-center gap-4 md:gap-6">
            <a
              href="#features"
              className="text-[#585c7b] dark:text-[#a0a0a0] hover:text-[#6366f1] dark:hover:text-[#7177f8] font-medium transition-colors"
            >
              Возможности
            </a>
            <a
              href="#how-it-works"
              className="text-[#585c7b] dark:text-[#a0a0a0] hover:text-[#6366f1] dark:hover:text-[#7177f8] font-medium transition-colors"
            >
              Как это работает
            </a>
            <a
              href="#tariffs"
              className="text-[#585c7b] dark:text-[#a0a0a0] hover:text-[#6366f1] dark:hover:text-[#7177f8] font-medium transition-colors"
            >
              Тарифы
            </a>
            <a
              href="/docs"
              className="text-[#585c7b] dark:text-[#a0a0a0] hover:text-[#6366f1] dark:hover:text-[#7177f8] font-medium transition-colors"
            >
              Документация
            </a>
            <a
              href="http://admin.your-proff-manager.ru"
              className="bg-[#6366f1] dark:bg-[#7177f8] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl hover:bg-[#5855eb] dark:hover:bg-[#6369e6] transition-colors text-sm md:text-base"
            >
              Войти
            </a>
          </div>
          <button
            className="sm:hidden text-[#131022] dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-white dark:bg-[#16212b] mt-16">
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="#features"
              className="text-lg text-[#131022] dark:text-white font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Возможности
            </a>
            <a
              href="#how-it-works"
              className="text-lg text-[#131022] dark:text-white font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Как Это Работает
            </a>
            <a
              href="#tariffs"
              className="text-lg text-[#131022] dark:text-white font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </a>
            <a
              href="/docs"
              className="text-lg text-[#131022] dark:text-white font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Документация
            </a>
            <a
              href="http://admin.your-proff-manager.ru"
              className="bg-[#6366f1] dark:bg-[#7177f8] text-white font-bold py-3 px-6 rounded-xl text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Войти
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
