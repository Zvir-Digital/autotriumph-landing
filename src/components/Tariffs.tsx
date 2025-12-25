import { CheckIcon } from './icons';

export default function Tariffs() {
  const tariffs = [
    {
      name: 'Старт',
      price: 'Бесплатно',
      period: 'навсегда',
      description: 'Для тестирования платформы',
      features: [
        'До 100 сообщений в месяц',
        '1 канал связи',
        'Базовые функции AI',
        'Техническая поддержка',
      ],
      popular: false,
    },
    {
      name: 'Бизнес',
      price: '9 990₽',
      period: 'в месяц',
      description: 'Для малого и среднего бизнеса',
      features: [
        'Неограниченное количество сообщений',
        'Все каналы связи',
        'Полный функционал AI',
        'Приоритетная поддержка',
        'Аналитика и отчеты',
        'Интеграция платежей',
      ],
      popular: true,
    },
    {
      name: 'Профессионал',
      price: '19 990₽',
      period: 'в месяц',
      description: 'Для крупных компаний',
      features: [
        'Все из тарифа Бизнес',
        'Персональный менеджер',
        'Кастомные интеграции',
        'Обучение команды',
        'SLA 99.9%',
        'Доступ к API',
      ],
      popular: false,
    },
  ];

  return (
    <section id="tariffs" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131022] dark:text-white text-center mb-4 px-4">
        Тарифы
      </h2>
      <p className="text-center text-[#585c7b] dark:text-[#a0a0a0] mb-10 sm:mb-12 md:mb-16 text-lg">
        Выберите подходящий тариф для вашего бизнеса
      </p>
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {tariffs.map((tariff, idx) => (
          <div
            key={idx}
            className={`bg-[#23303c] p-6 sm:p-8 rounded-2xl border-2 ${
              tariff.popular
                ? 'border-[#7177f8] shadow-xl scale-105'
                : 'border-[#3a4a5c]'
            } hover:shadow-xl transition-all`}
          >
            {tariff.popular && (
              <div className="bg-[#6366f1] dark:bg-[#7177f8] text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                Популярный
              </div>
            )}
            <h3 className="text-2xl font-bold text-[#131022] dark:text-white mb-2">{tariff.name}</h3>
            <p className="text-[#585c7b] dark:text-[#a0a0a0] mb-4 text-sm">{tariff.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#131022] dark:text-white">{tariff.price}</span>
              <span className="text-[#585c7b] dark:text-[#a0a0a0] ml-2">{tariff.period}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {tariff.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-[#6366f1] dark:text-[#7177f8] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="http://admin.your-proff-manager.ru"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center font-bold py-3 px-6 rounded-xl transition-all text-base sm:text-lg ${
                tariff.popular
                  ? 'bg-[#6366f1] dark:bg-[#7177f8] text-white hover:bg-[#5855eb] dark:hover:bg-[#6369e6]'
                  : 'bg-[#f3f4f6] dark:bg-[#2a3a4c] text-[#131022] dark:text-white hover:bg-[#e5e7eb] dark:hover:bg-[#3a4a5c]'
              }`}
            >
              Выбрать тариф
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
