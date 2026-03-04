'use client';

import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section id="start" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b]/40 to-[#0f172a]" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(113, 119, 248, 0.08), transparent)' }} />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale" className="max-w-3xl mx-auto text-center rounded-2xl border border-[#7177f8]/30 bg-[#1e293b]/80 backdrop-blur-sm p-12 md:p-16">
          <ScrollReveal variant="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы превратить работу в систему?
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={200}>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-xl mx-auto">
              Подключите каналы, настройте ботов и автоматизацию — начните управлять бизнесом из одного окна
            </p>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={300}>
            <a
              href="http://admin.your-proff-manager.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7177f8] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#6369e6] transition-all duration-300 animate-attention-pulse"
            >
              Войти в платформу
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
