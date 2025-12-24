'use client';

import { MessageIcon, BotIcon, RouteIcon, CheckIcon } from './icons';
import Lottie from 'lottie-react';
import { processAnimation } from './animations/animations';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: MessageIcon,
      title: 'Клиент Пишет В Мессенджер',
      description: 'WhatsApp, Telegram или Email — не важно, бот отвечает везде одинаково хорошо',
    },
    {
      step: '02',
      icon: BotIcon,
      title: 'AI Ведет Диалог',
      description: 'Извлекает имя, телефон, дату, маршрут и количество гостей естественным образом',
    },
    {
      step: '03',
      icon: RouteIcon,
      title: 'Автоматический Расчет',
      description: 'Система считает расстояние, подбирает автомобили и рассчитывает стоимость',
    },
    {
      step: '04',
      icon: CheckIcon,
      title: 'Оплата И Подтверждение',
      description: 'Клиент оплачивает предоплату через YooKassa, заказ автоматически создается',
    },
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] dark:from-[#1a2332] dark:to-[#16212b] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131022] dark:text-white text-center mb-10 sm:mb-12 md:mb-16 px-4">
          Как Это Работает
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#23303c] p-6 sm:p-8 rounded-2xl border border-[#e2e5f1] dark:border-[#3a4a5c] hover:shadow-xl transition-all relative overflow-hidden"
              >
                {/* Анимация процесса */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 opacity-30 -translate-y-1/2 z-0">
                    <Lottie
                      animationData={processAnimation}
                      loop={true}
                      autoplay={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="bg-gradient-to-br from-[#6366f1] to-[#7177f8] text-white font-bold text-2xl sm:text-3xl px-6 py-4 rounded-xl shrink-0 w-20 h-20 flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="text-[#6366f1] dark:text-[#7177f8] pt-2">
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#131022] dark:text-white mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#585c7b] dark:text-[#a0a0a0] leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
