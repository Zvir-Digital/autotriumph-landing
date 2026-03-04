'use client';

import ScrollReveal from './ScrollReveal';
import { RocketIcon, CalendarIcon, ZapIcon } from './icons';

const promos = [
  {
    title: 'Бесплатный старт',
    subtitle: 'Познакомьтесь с платформой без обязательств',
    cta: 'Начать бесплатно',
    href: 'http://admin.your-proff-manager.ru',
    Icon: RocketIcon,
  },
  {
    title: 'Персональная демонстрация',
    subtitle: 'Покажем, как Аметаверс решит ваши задачи',
    cta: 'Записаться на демо',
    href: 'http://admin.your-proff-manager.ru',
    Icon: CalendarIcon,
  },
  {
    title: 'Подключение за 1 день',
    subtitle: 'Каналы, боты и базовые сценарии — быстро',
    cta: 'Оставить заявку',
    href: 'http://admin.your-proff-manager.ru',
    Icon: ZapIcon,
  },
];

export default function PromoBanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Начните уже сегодня
          </h2>
          <p className="text-[#94a3b8] mb-16 max-w-xl">
            Выберите удобный способ — регистрация, демо или консультация
          </p>
        </ScrollReveal>

        {/* Asymmetric: angled clip-paths, varied heights */}
        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo, idx) => {
            const Icon = promo.Icon;
            const isFeatured = idx === 1;
            return (
              <ScrollReveal key={idx} variant="up" delay={idx * 100}>
              <a
                href={promo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative overflow-hidden rounded-2xl border border-[#334155] bg-[#1e293b]/80 transition-all duration-300 hover:border-[#7177f8] hover-lift hover:scale-[1.02] ${
                  isFeatured ? 'md:-translate-y-4' : ''
                }`}
                style={{ minHeight: isFeatured ? 220 : 180 }}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl border border-[#334155] flex items-center justify-center mb-5 group-hover:border-[#7177f8] transition-colors">
                    <Icon className="w-7 h-7 text-[#7177f8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                  <p className="text-[#94a3b8] text-sm mb-6 flex-1">{promo.subtitle}</p>
                  <span className={`inline-flex items-center gap-2 text-[#7177f8] font-semibold text-sm group-hover:gap-4 transition-all ${idx === 0 ? 'animate-subtle-blink' : ''}`}>
                    {promo.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
