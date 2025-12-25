export default function CTA() {
  return (
    <section id="start" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="bg-gradient-to-br from-[#6366f1] to-[#7177f8] p-8 sm:p-12 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
          Готовы начать?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4">
          Подключите первый бот за 5 минут и начните принимать заказы уже сегодня
        </p>
        <a
          href="http://admin.your-proff-manager.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white dark:bg-[#23303c] text-[#131022] dark:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-100 dark:hover:bg-[#2a3a4c] transition-all text-base sm:text-lg shadow-lg hover:shadow-xl"
        >
          Связаться с нами
        </a>
      </div>
    </section>
  );
}
