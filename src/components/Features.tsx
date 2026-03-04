'use client';

import { ChatIcon, ChannelsIcon, BotIcon, PaymentIcon, AnalyticsIcon, CrmIcon, DocumentIcon, StoreIcon, MegaphoneIcon } from './icons';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const features = [
  { icon: ChannelsIcon, title: 'Единое окно коммуникаций', description: 'Почта, мессенджеры, сайт, CRM, телефония, рекламные источники, маркетплейсы — всё в одном месте', span: 'wide' as const },
  { icon: CrmIcon, title: 'Структурированный поток', description: 'Обращения группируются по клиентам, формируется карточка и задачи', span: 'normal' as const },
  { icon: PaymentIcon, title: 'Продажи до договора и оплаты', description: 'Сквозной процесс: потребности, предложение, договор, счёт, контроль платежа', span: 'normal' as const },
  { icon: ChatIcon, title: 'Встроенная техподдержка', description: 'Контур для клиентов на всех каналах, включая маркетплейсы', span: 'tall' as const },
  { icon: BotIcon, title: 'Фабрика чат-ботов', description: 'Боты под поддержку, продажи, заявки — работают как часть общей системы', span: 'normal' as const },
  { icon: StoreIcon, title: 'Управление маркетплейсами', description: 'Карточки на Avito, Ozon: создание, цены, мониторинг, аналитика', span: 'normal' as const },
  { icon: MegaphoneIcon, title: 'Маркетинг и реклама', description: 'Контент-план, таргет, сегментация. Сквозные метрики до платежа', span: 'normal' as const },
  { icon: DocumentIcon, title: 'Договоры и документы', description: 'Шаблоны, реквизиты, согласование, эквайринг', span: 'normal' as const },
  { icon: AnalyticsIcon, title: 'Мультибизнес-режим', description: 'Несколько проектов в одном окне с раздельными данными', span: 'wide' as const },
];

export default function Features() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Возможности платформы
        </h2>
        <p className={`text-[#94a3b8] mb-16 max-w-2xl transition-all duration-700 delay-100 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          Всё в одном месте — от первого обращения до результата
        </p>

        {/* Bento grid - uneven sizes, no standard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isWide = feature.span === 'wide';
            const isTall = feature.span === 'tall';
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border border-[#334155] bg-[#1e293b]/60 transition-all duration-500 hover:border-[#7177f8]/60 hover-lift ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isWide ? 'md:col-span-2' : ''} ${isTall ? 'md:row-span-2' : ''}`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl border border-[#334155] flex items-center justify-center mb-5 group-hover:border-[#7177f8] transition-colors shrink-0">
                    <IconComponent className="w-6 h-6 text-[#7177f8]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
