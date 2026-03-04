'use client';

import { LightningIcon, TargetIcon, RocketIcon } from './icons';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '1 окно', label: 'Все коммуникации и заявки', icon: LightningIcon },
  { value: 'Сквозной', label: 'Процесс до договора и оплаты', icon: TargetIcon },
  { value: 'Масштаб', label: 'Без раздувания штата', icon: RocketIcon },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale" className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl border-2 border-[#7177f8]/30">
          <div className="bg-[#1e293b] p-10 md:p-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <ScrollReveal key={idx} variant="up" delay={idx * 80}>
                  <div className="text-white">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-lg border border-[#7177f8]/50 p-3">
                        <IconComponent className="w-6 h-6 text-[#7177f8]" />
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
