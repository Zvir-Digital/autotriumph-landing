export default function Footer() {
  return (
    <footer className="w-full bg-[#131022] dark:bg-[#0a0f14] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AutoTriumph</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Платформа для автоматизации аренды автомобилей через умных чат-ботов. 
              Увеличьте продажи и сократите затраты на обслуживание клиентов.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Возможности</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">AI диалоги</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Множество каналов</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Интеграция платежей</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Аналитика</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a 
                  href="http://admin.your-proff-manager.ru" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Админ панель
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-white transition-colors">
                  API документация
                </a>
              </li>
              <li>
                <a href="#tariffs" className="hover:text-white transition-colors">
                  Тарифы
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 2025 AutoTriumph. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
