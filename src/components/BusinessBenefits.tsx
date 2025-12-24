'use client';

import { LightningIcon, TargetIcon, RocketIcon } from './icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: LightningIcon,
      title: 'Экономия Времени',
      description: 'Автоматизация обработки заказов экономит до 80% времени менеджеров',
      stat: '80%',
    },
    {
      icon: TargetIcon,
      title: 'Увеличение Конверсии',
      description: 'Круглосуточная доступность и мгновенные ответы повышают конверсию на 40%',
      stat: '+40%',
    },
    {
      icon: RocketIcon,
      title: 'Рост Продаж',
      description: 'Автоматизация позволяет обрабатывать в 5 раз больше заказов без увеличения штата',
      stat: '5x',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#6366f1] to-[#7177f8] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 px-4">
          Как Это Улучшит Ваш Бизнес
        </h2>
        <p className="text-center text-white/90 mb-10 sm:mb-12 md:mb-16 text-lg max-w-2xl mx-auto">
          Реальные результаты от внедрения платформы AutoTriumph
        </p>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#23303c] p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden"
              >
                {/* Анимация денег/инвестиций на первой карточке */}
                {idx === 0 && (
                  <div className="absolute bottom-4 right-4 w-32 h-32 opacity-20">
                    <DotLottieReact
                      src="/animations/Money Investment.lottie"
                      loop
                      autoplay
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}
                <div className="bg-[#6366f1] dark:bg-[#7177f8] w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative z-10">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#6366f1] dark:text-[#7177f8] mb-2 relative z-10">
                  {benefit.stat}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#131022] dark:text-white mb-3 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-[#585c7b] dark:text-[#a0a0a0] leading-relaxed relative z-10">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
