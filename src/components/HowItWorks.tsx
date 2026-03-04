'use client';

import { ChannelsIcon, BotIcon, DocumentIcon, CheckIcon } from './icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ScrollReveal from './ScrollReveal';

const steps = [
  { step: '01', icon: ChannelsIcon, title: 'Подключите каналы', description: 'Почта, мессенджеры, сайт, CRM, маркетплейсы — все входящие сообщения и заявки в одном окне' },
  { step: '02', icon: BotIcon, title: 'Настройте ботов и AI', description: 'Чат-боты под поддержку, продажи или сбор заявок. Загрузите ядро, подключите сценарии' },
  { step: '03', icon: DocumentIcon, title: 'Автоматизируйте документы', description: 'Шаблоны договоров, заполнение, реквизиты, счета и контроль оплаты' },
  { step: '04', icon: CheckIcon, title: 'Управляйте процессами', description: 'Очередь работ с приоритетами. Единая картина от первого обращения до результата' },
];

export default function HowItWorks() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Как это работает
          </h2>
          <p className="text-[#94a3b8] mb-16 max-w-xl">
            Четыре шага к единому окну управления
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={100} className="flex justify-center mb-16">
          <div className="relative w-full max-w-lg h-[220px] md:h-[280px]">
            <DotLottieReact
              src="/animations/robot_chat.json"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} variant="up" delay={idx * 80}>
                <div className="rounded-2xl border border-[#334155] bg-[#1e293b]/80 p-6 md:p-8 hover:border-[#7177f8]/50 transition-all duration-300 hover-lift hover:scale-[1.02]">
                  <div className="flex items-start gap-5 mb-4">
                    <span className="text-2xl font-bold text-[#7177f8] tabular-nums">{item.step}</span>
                    <div className="rounded-lg border border-[#334155] p-2">
                      <IconComponent className="w-6 h-6 text-[#7177f8]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
