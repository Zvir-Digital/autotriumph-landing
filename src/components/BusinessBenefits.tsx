'use client';

import { LightningIcon, TargetIcon, RocketIcon } from './icons';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ScrollReveal from './ScrollReveal';

const benefits = [
  { icon: LightningIcon, title: 'Порядок вместо хаоса', description: 'Исчезает путаница кабинетов и переписок — единая картина с понятными статусами', stat: '1 окно' },
  { icon: TargetIcon, title: 'Предсказуемый результат', description: 'Процессы понятны, масштабируемы — от первого касания до оплаты', stat: 'Система' },
  { icon: RocketIcon, title: 'Масштаб без роста штата', description: 'Поток растёт, качество сохраняется за счёт автоматизации и ботов', stat: 'Рост' },
];

export default function BusinessBenefits() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Что даёт Аметаверс
          </h2>
          <p className="text-[#94a3b8] mb-16 max-w-xl">
            Единый пульт управления бизнесом для ИП, самозанятых и менеджеров
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <ScrollReveal key={idx} variant="up" delay={idx * 80}>
              <div className="rounded-2xl border border-[#334155] bg-[#1e293b]/90 p-6 md:p-8 hover:border-[#7177f8]/50 transition-all duration-300 hover-lift hover:scale-[1.02]">
                <div className="rounded-xl border border-[#7177f8]/50 w-14 h-14 flex items-center justify-center mb-5">
                  <IconComponent className="w-7 h-7 text-[#7177f8]" />
                </div>
                <div className="text-3xl font-bold text-[#7177f8] mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{benefit.description}</p>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
