'use client';

import { CheckIcon } from './icons';
import ScrollReveal from './ScrollReveal';

export default function Tariffs() {
  const tariffs = [
    {
      name: 'Старт',
      price: 'Бесплатно',
      period: 'навсегда',
      description: 'Для знакомства с платформой',
      features: ['Ограниченное количество сообщений', '1–2 канала связи', 'Базовые функции AI и ботов', 'Техническая поддержка'],
      popular: false,
    },
    {
      name: 'Бизнес',
      price: 'По запросу',
      period: '',
      description: 'Для малого и среднего бизнеса',
      features: ['Неограниченные сообщения', 'Все каналы и интеграции', 'Полный функционал AI и ботов', 'Продажи, договоры, эквайринг', 'Маркетплейсы и реклама', 'Приоритетная поддержка'],
      popular: true,
    },
    {
      name: 'Мультибизнес',
      price: 'По запросу',
      period: '',
      description: 'Для нескольких проектов',
      features: ['Всё из тарифа Бизнес', 'Несколько бизнесов в одном окне', 'Раздельные данные и отчётность', 'Персональный менеджер', 'Кастомные интеграции'],
      popular: false,
    },
  ];

  return (
    <section id="tariffs" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Тарифы
          </h2>
          <p className="text-[#94a3b8] mb-16 max-w-xl">
            Выберите подходящий вариант для вашего бизнеса
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tariffs.map((tariff, idx) => (
            <ScrollReveal key={idx} variant="up" delay={idx * 100}>
            <div
              className={`rounded-2xl border bg-[#1e293b]/80 p-6 md:p-8 transition-all duration-300 hover-lift hover:scale-[1.02] ${
                tariff.popular ? 'border-[#7177f8] md:-translate-y-2' : 'border-[#334155]'
              }`}
            >
              {tariff.popular && (
                <div className="rounded-lg border border-[#7177f8] bg-[#7177f8]/10 text-[#7177f8] text-xs font-bold px-3 py-1.5 inline-block mb-5">
                  Популярный
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{tariff.name}</h3>
              <p className="text-[#94a3b8] mb-5 text-sm">{tariff.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{tariff.price}</span>
                {tariff.period && <span className="text-[#94a3b8] ml-2">{tariff.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {tariff.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#7177f8] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#94a3b8]">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="http://admin.your-proff-manager.ru"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-4 px-6 rounded-xl transition-all ${
                  tariff.popular
                    ? 'bg-[#7177f8] text-white hover:bg-[#6369e6] animate-attention-pulse'
                    : 'border-2 border-[#334155] text-white hover:border-[#7177f8] hover:text-[#7177f8]'
                }`}
              >
                Связаться с нами
              </a>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
