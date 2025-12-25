'use client';

import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
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

  // Управление анимацией drawer
  useEffect(() => {
    if (isMenuOpen) {
      // Небольшая задержка для запуска анимации открытия
      setTimeout(() => setIsMenuAnimating(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsMenuAnimating(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300); // Ждем завершения анимации закрытия
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 bg-white dark:bg-[#16212b] border-b-2 border-[#e2e5f1] dark:border-[#3a4a5c] shadow-sm transition-transform duration-300 ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="text-2xl md:text-3xl font-bold text-[#131022] dark:text-white hover:opacity-80 transition-opacity"
            >
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
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6366f1] dark:bg-[#7177f8] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl hover:bg-[#5855eb] dark:hover:bg-[#6369e6] transition-colors text-sm md:text-base"
            >
              Войти
            </a>
          </div>
          <button
            className="sm:hidden text-[#131022] dark:text-white"
            onClick={() => {
              if (isMenuOpen) {
                handleCloseMenu();
              } else {
                setIsMenuOpen(true);
              }
            }}
            aria-label="Меню"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Menu Drawer - вынесен за пределы header для правильного позиционирования */}
    {isMenuOpen && (
      <>
        {/* Backdrop */}
        <div 
          className={`sm:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleCloseMenu}
        />
        
        {/* Drawer */}
        <div className={`sm:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[70] bg-white dark:bg-[#16212b] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-6 px-6 pb-6">
            {/* Логотип в drawer */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#e2e5f1] dark:border-[#3a4a5c]">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    window.location.href = '/';
                  }
                }}
                className="text-2xl font-bold text-[#131022] dark:text-white hover:opacity-80 transition-opacity"
              >
                AutoTriumph
              </a>
              <button
                onClick={handleCloseMenu}
                className="text-[#131022] dark:text-white p-2 hover:bg-[#f3f4f6] dark:hover:bg-[#23303c] rounded-lg transition-colors"
                aria-label="Закрыть меню"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-1 flex-1 overflow-y-auto">
              <a
                href="#features"
                className="text-lg text-[#131022] dark:text-white font-medium py-3 px-4 rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#23303c] transition-colors"
                onClick={handleCloseMenu}
              >
                Возможности
              </a>
              <a
                href="#how-it-works"
                className="text-lg text-[#131022] dark:text-white font-medium py-3 px-4 rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#23303c] transition-colors"
                onClick={handleCloseMenu}
              >
                Как это работает
              </a>
              <a
                href="#tariffs"
                className="text-lg text-[#131022] dark:text-white font-medium py-3 px-4 rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#23303c] transition-colors"
                onClick={handleCloseMenu}
              >
                Тарифы
              </a>
              <a
                href="/docs"
                className="text-lg text-[#131022] dark:text-white font-medium py-3 px-4 rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#23303c] transition-colors"
                onClick={handleCloseMenu}
              >
                Документация
              </a>
            </div>
            <div className="mt-auto pt-4 border-t border-[#e2e5f1] dark:border-[#3a4a5c]">
              <a
                href="http://admin.your-proff-manager.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#6366f1] dark:bg-[#7177f8] text-white font-bold py-3 px-6 rounded-xl text-center hover:bg-[#5855eb] dark:hover:bg-[#6369e6] transition-colors"
                onClick={handleCloseMenu}
              >
                Войти
              </a>
            </div>
          </div>
        </div>
      </>
    )}
    </>
  );
}
