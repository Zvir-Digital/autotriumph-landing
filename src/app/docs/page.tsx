'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  { id: 'base-url', title: 'Базовый URL' },
  { id: 'authentication', title: 'Авторизация' },
  { id: 'bots', title: 'Управление Ботами' },
  { id: 'dialogs', title: 'Управление Диалогами' },
  { id: 'clients', title: 'Управление Клиентами' },
  { id: 'vehicles', title: 'Управление Автомобилями' },
  { id: 'widget', title: 'Widget API' },
  { id: 'websocket', title: 'WebSocket' },
  { id: 'response-format', title: 'Формат Ответа' },
  { id: 'status-codes', title: 'HTTP Коды Ответов' },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-[#16212b] transition-colors">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Навигационное меню */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <nav className="bg-white dark:bg-[#23303c] rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c] p-4 shadow-sm">
                <h3 className="text-sm font-bold text-[#131022] dark:text-white mb-4 uppercase tracking-wide">
                  Содержание
                </h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-[#6366f1] dark:bg-[#7177f8] text-white font-medium'
                            : 'text-[#585c7b] dark:text-[#a0a0a0] hover:bg-[#f3f4f6] dark:hover:bg-[#2a3a4c] hover:text-[#6366f1] dark:hover:text-[#7177f8]'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(section.id);
                          if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth',
                            });
                          }
                        }}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Основной контент */}
          <div className="flex-1 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131022] dark:text-white mb-4 animate-fade-in-up">
            API Документация
          </h1>
          <p className="text-lg text-[#585c7b] dark:text-[#a0a0a0] mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Полное описание REST API для работы с платформой AutoTriumph
          </p>

          {/* Base URL */}
          <section id="base-url" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Базовый URL</h2>
            <div className="bg-[#f3f4f6] dark:bg-[#23303c] p-4 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
              <code className="text-[#6366f1] dark:text-[#7177f8] font-mono">
                http://api.your-proff-manager.ru
              </code>
            </div>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Авторизация</h2>
            <p className="text-[#585c7b] dark:text-[#a0a0a0] mb-4">
              Большинство endpoints требуют авторизации через JWT токен. Получите токен через эндпоинт авторизации.
            </p>
            <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
              <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/auth/login</h3>
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-3">Авторизация администратора</p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mb-3">
                <code className="text-sm text-[#131022] dark:text-white">
                  {`{
  "login": "admin",
  "password": "password"
}`}
                </code>
              </div>
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Ответ:</p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded">
                <code className="text-sm text-[#131022] dark:text-white">
                  {`{
  "token": "jwt_token_here",
  "admin": { "id": 1, "login": "admin" }
}`}
                </code>
              </div>
            </div>
            <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c] mt-4">
              <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/auth/users/register</h3>
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-3">Регистрация нового пользователя</p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded">
                <code className="text-sm text-[#131022] dark:text-white">
                  {`{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "Иван",
  "lastName": "Иванов",
  "phone": "+79991234567"
}`}
                </code>
              </div>
            </div>
            <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c] mt-4">
              <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/auth/users/login</h3>
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-3">Авторизация пользователя</p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded">
                <code className="text-sm text-[#131022] dark:text-white">
                  {`{
  "email": "user@example.com",
  "password": "password123"
}`}
                </code>
              </div>
            </div>
            <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mt-4">
              Используйте полученный токен в заголовке запросов:
            </p>
            <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mt-2">
              <code className="text-sm text-[#131022] dark:text-white">
                Authorization: Bearer &#123;token&#125;
              </code>
            </div>
          </section>

          {/* Bots API */}
          <section id="bots" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Управление Ботами</h2>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/bots</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Получить список ботов</p>
                <p className="text-xs text-[#585c7b] dark:text-[#a0a0a0]">Query параметры: search, status, limit, offset, orderBy, orderDirection</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/bots</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Создать нового бота</p>
                <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mt-2">
                  <code className="text-sm text-[#131022] dark:text-white">
                    {`{
  "name": "Мой бот",
  "status": "active",
  "generalSettings": {
    "channel": "whatsapp",
    "phoneNumber": "+79991234567"
  }
}`}
                  </code>
                </div>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/bots/:botId</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Получить информацию о боте</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">PUT /admin/bots/:botId</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Обновить настройки бота</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">DELETE /admin/bots/:botId</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Удалить бота</p>
              </div>
            </div>
          </section>

          {/* Dialogs API */}
          <section id="dialogs" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Управление Диалогами</h2>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/dialogs</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Получить список диалогов</p>
                <p className="text-xs text-[#585c7b] dark:text-[#a0a0a0]">Query параметры: botId, status, externalClientId, limit, offset</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/dialogs</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Создать новый диалог</p>
                <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mt-2">
                  <code className="text-sm text-[#131022] dark:text-white">
                    {`{
  "botId": 1,
  "externalClientId": "user123",
  "title": "Новый диалог",
  "status": "open"
}`}
                  </code>
                </div>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/dialogs/:dialogId/messages</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Получить сообщения диалога</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/dialogs/:dialogId/messages</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Отправить сообщение в диалог</p>
                <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mt-2">
                  <code className="text-sm text-[#131022] dark:text-white">
                    {`{
  "body": "Привет!",
  "attachments": []
}`}
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Clients API */}
          <section id="clients" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Управление Клиентами</h2>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/clients</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Получить список клиентов</p>
                <p className="text-xs text-[#585c7b] dark:text-[#a0a0a0]">Query параметры: search, status, vip, sortBy, sortOrder, limit, offset</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/clients/:id</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Получить информацию о клиенте</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">PUT /admin/clients/:id</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Обновить данные клиента</p>
              </div>
            </div>
          </section>

          {/* Vehicles API */}
          <section id="vehicles" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.7s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Управление Автомобилями</h2>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /admin/vehicles</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Получить список автомобилей</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /admin/vehicles</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Добавить новый автомобиль</p>
                <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mt-2">
                  <code className="text-sm text-[#131022] dark:text-white">
                    {`{
  "brand": "Mercedes-Benz",
  "seats": 4,
  "hours_weekday": 4,
  "hours_weekend": 6,
  "price_per_hour_min": 2500,
  "price_per_hour_max": 3000
}`}
                  </code>
                </div>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">PUT /admin/vehicles/:id</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Обновить данные автомобиля</p>
              </div>
            </div>
          </section>

          {/* Widget API */}
          <section id="widget" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Widget API (Публичный)</h2>
            <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-4">
              Эти endpoints доступны без авторизации для интеграции виджета на сайт
            </p>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /api/widget/init?botId=&#123;botId&#125;</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Получить конфигурацию виджета</p>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">POST /api/widget/message</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-2">Отправить сообщение от пользователя</p>
                <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mt-2">
                  <code className="text-sm text-[#131022] dark:text-white">
                    {`{
  "botId": 1,
  "clientId": "visitor123",
  "message": "Привет!",
  "metadata": {}
}`}
                  </code>
                </div>
              </div>

              <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
                <h3 className="text-lg font-bold text-[#131022] dark:text-white mb-2">GET /api/widget/dialogs?externalClientId=&#123;visitorId&#125;</h3>
                <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Получить существующий диалог</p>
              </div>
            </div>
          </section>

          {/* WebSocket */}
          <section id="websocket" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.9s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">WebSocket</h2>
            <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-4">
                Платформа поддерживает WebSocket для получения обновлений в реальном времени о новых сообщениях и изменениях в диалогах.
              </p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded">
                <code className="text-sm text-[#131022] dark:text-white">
                  ws://api.your-proff-manager.ru/ws
                </code>
              </div>
            </div>
          </section>

          {/* Response Format */}
          <section id="response-format" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '1s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">Формат Ответа</h2>
            <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-4">
                Все успешные ответы возвращаются в формате:
              </p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded mb-4">
                <code className="text-sm text-[#131022] dark:text-white">
                  {`{
  "success": true,
  "data": { ... }
}`}
                </code>
              </div>
              <p className="text-sm text-[#585c7b] dark:text-[#a0a0a0] mb-4">
                Ошибки возвращаются в формате:
              </p>
              <div className="bg-[#f3f4f6] dark:bg-[#1a2332] p-3 rounded">
                <code className="text-sm text-[#131022] dark:text-white">
                  {`{
  "success": false,
  "error": "Error message"
}`}
                </code>
              </div>
            </div>
          </section>

          {/* Status Codes */}
          <section id="status-codes" className="mb-12 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '1.1s', opacity: 0 }}>
            <h2 className="text-2xl font-bold text-[#131022] dark:text-white mb-4">HTTP Коды Ответов</h2>
            <div className="bg-white dark:bg-[#23303c] p-6 rounded-xl border border-[#e2e5f1] dark:border-[#3a4a5c]">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm">200</span>
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Успешный запрос</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded font-mono text-sm">201</span>
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Ресурс создан</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded font-mono text-sm">400</span>
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Неверный запрос</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm">401</span>
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Требуется авторизация</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm">404</span>
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Ресурс не найден</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm">500</span>
                  <span className="text-sm text-[#585c7b] dark:text-[#a0a0a0]">Внутренняя ошибка сервера</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <div className="bg-gradient-to-br from-[#6366f1] to-[#7177f8] p-8 rounded-2xl shadow-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Готовы Начать Интеграцию?</h2>
              <p className="text-white/90 mb-6">
                Получите доступ к админ-панели и начните использовать API
              </p>
              <a
                href="http://admin.your-proff-manager.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white dark:bg-[#23303c] text-[#131022] dark:text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-100 dark:hover:bg-[#2a3a4c] transition-all shadow-lg hover:shadow-xl"
              >
                Перейти в админ-панель
              </a>
            </div>
          </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

