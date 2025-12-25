'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131022] dark:text-white mb-4 sm:mb-6 leading-tight">
            AutoTriumph
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#131022] dark:text-white mb-6 sm:mb-8 font-semibold">
            Умные чат-боты для аренды автомобилей
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#585c7b] dark:text-[#a0a0a0] mb-8 sm:mb-12 leading-relaxed">
            Автоматизируйте продажи через WhatsApp, Telegram, Email и Web Widget. 
            Естественные диалоги с AI, интеграция платежей и полный контроль.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="http://admin.your-proff-manager.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6366f1] dark:bg-[#7177f8] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#5855eb] dark:hover:bg-[#6369e6] transition-all text-base sm:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl text-center"
            >
              Начать бесплатно
            </a>
            <a
              href="#features"
              className="bg-white dark:bg-[#23303c] text-[#131022] dark:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl border-2 border-[#e2e5f1] dark:border-[#3a4a5c] hover:border-[#6366f1] dark:hover:border-[#7177f8] transition-all text-base sm:text-lg w-full sm:w-auto text-center"
            >
              Узнать больше
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative bg-gradient-to-br from-[#6366f1] to-[#7177f8] rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <DotLottieReact
                src="/animations/robot.json"
                loop
                autoplay
                style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
