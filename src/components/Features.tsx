'use client';

import { ChatIcon, ChannelsIcon, CalculatorIcon, PaymentIcon, AnalyticsIcon, CarIcon, CrmIcon, DocumentIcon, TripIcon } from './icons';
import Lottie from 'lottie-react';
import { featureIconAnimation } from './animations/animations';

export default function Features() {
  const features = [
    {
      icon: ChatIcon,
      title: 'Естественные диалоги',
      description: 'AI-бот ведет разговор как живой менеджер, понимает контекст и извлекает данные автоматически',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: ChannelsIcon,
      title: 'Множество каналов',
      description: 'WhatsApp, Telegram, Email и Web Widget — все в одной панели управления',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: CalculatorIcon,
      title: 'Умные расчеты',
      description: 'Автоматический расчет расстояний через Yandex Maps и стоимости аренды',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: PaymentIcon,
      title: 'Интеграция платежей',
      description: 'Привязка любой онлайн кассы и эквайринга. Поддержка YooKassa, Сбербанк, Тинькофф и других платежных систем',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
      icon: AnalyticsIcon,
      title: 'Полная история',
      description: 'Каждое сообщение сохраняется в БД с метаданными AI и аналитикой',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    },
    {
      icon: CarIcon,
      title: 'Каталог автомобилей',
      description: 'Управление парком, ценами и доступностью прямо из админ-панели',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    },
    {
      icon: CrmIcon,
      title: 'CRM система',
      description: 'Полноценная CRM система для управления клиентами, заказами и взаимодействиями',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    },
    {
      icon: DocumentIcon,
      title: 'AI-договоры',
      description: 'Автоматическое заполнение договоров по шаблонам с помощью искусственного интеллекта',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      icon: TripIcon,
      title: 'Учет поездок и водителей',
      description: 'Полный учет всех поездок, водителей и их активности для контроля и аналитики',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131022] dark:text-white text-center mb-10 sm:mb-12 md:mb-16 px-4">
        Что умеет платформа
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={idx}
              className="bg-[#23303c] p-6 sm:p-8 rounded-2xl border border-[#3a4a5c] hover:border-[#7177f8] hover:shadow-xl transition-all group relative overflow-hidden"
            >
              {/* Фоновая анимация */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                <Lottie
                  animationData={featureIconAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform relative z-10`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#131022] dark:text-white mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#585c7b] dark:text-[#a0a0a0] leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
