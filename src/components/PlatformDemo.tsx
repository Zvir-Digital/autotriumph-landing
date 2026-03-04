'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ScrollReveal from './ScrollReveal';
import { MessageIcon, BotIcon, UserIcon, DocumentIcon, CheckIcon } from './icons';

const flowSteps = [
  { label: 'Клиент пишет', Icon: MessageIcon, desc: 'Обращение приходит с любого канала' },
  { label: 'AI обрабатывает', Icon: BotIcon, desc: 'Система классифицирует и передаёт боту' },
  { label: 'Карточка клиента', Icon: UserIcon, desc: 'История, контакты, задачи в одной карточке' },
  { label: 'Договор + оплата', Icon: DocumentIcon, desc: 'Шаблон договора, счёт, эквайринг' },
  { label: 'Сделка закрыта', Icon: CheckIcon, desc: 'Статус обновлён, клиент в сопровождении' },
];

const mockMessages = [
  { from: 'client' as const, text: 'Здравствуйте! Интересует ваш товар', time: '10:32' },
  { from: 'bot' as const, text: 'Добрый день! Уточните, пожалуйста, какой именно товар вас интересует?', time: '10:32' },
  { from: 'client' as const, text: 'Модель X-200, есть в наличии?', time: '10:33' },
  { from: 'bot' as const, text: 'Да, в наличии. Цена 15 990 ₽. Оформить заказ?', time: '10:33' },
];

export default function PlatformDemo() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontVariationSettings: '"wght" 800' }}>
            Как это выглядит в работе
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Пример: клиент пишет в мессенджер — система создаёт карточку, бот ведёт диалог, менеджер видит всё в одном окне
          </p>
        </ScrollReveal>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="order-2 lg:order-1 relative">
            <div className="relative overflow-hidden rounded-2xl border border-[#334155] bg-[#1e293b]">
                <div className="bg-[#0f172a] px-5 py-4 border-b border-[#334155] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#334155] flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-[#7177f8]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Иван Петров</div>
                    <div className="text-xs text-[#64748b]">WhatsApp • Новый клиент</div>
                  </div>
                </div>
                <div className="p-5 space-y-4 min-h-[260px]">
                  {mockMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-xl ${
                          msg.from === 'client'
                            ? 'bg-[#7177f8] text-white'
                            : 'bg-[#334155] text-[#e2e8f0] border-l-2 border-[#7177f8]'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <span className="text-xs opacity-70">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          {/* Flow - vertical timeline with icons, not cards */}
          <div className="order-1 lg:order-2 space-y-0">
            {flowSteps.map((step, idx) => {
              const { Icon } = step;
              return (
                <div
                  key={idx}
                  className={`flex gap-5 py-5 border-b border-[#334155]/50 last:border-0 transition-all duration-500 ${
                    isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#1e293b] border border-[#334155] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#7177f8]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{step.label}</div>
                    <div className="text-sm text-[#94a3b8] mt-1">{step.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ScrollReveal variant="scale" delay={200} className="mt-16 text-center">
          <a
            href="http://admin.your-proff-manager.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#7177f8] text-white font-semibold rounded-xl hover:bg-[#6369e6] transition-all duration-300 animate-attention-pulse"
          >
            Попробовать бесплатно
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
