'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Non-standard background: angled stripes + orbs */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#7177f8]/10 to-transparent -skew-x-12 origin-top" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7177f8]/15 blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#6366f1]/10 blur-[80px] animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Аметаверс
            </h1>
            <p className="text-xl sm:text-2xl text-[#94a3b8] mb-6 font-medium">
              Операционная платформа для бизнеса
            </p>
            <p className="text-base sm:text-lg text-[#64748b] mb-10 leading-relaxed max-w-xl">
              Единое окно для менеджера и руководителя: все входящие сообщения, заявки и продажи 
              собираются в одном месте — от первого обращения до договора, оплаты и сопровождения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://admin.your-proff-manager.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#7177f8] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#6369e6] transition-all duration-300 text-center animate-attention-pulse"
              >
                Войти в платформу
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center border-2 border-[#334155] text-white font-bold py-4 px-8 rounded-xl hover:border-[#7177f8] hover:text-[#7177f8] transition-all duration-300 text-center"
              >
                Узнать больше
              </a>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            <div className="relative overflow-hidden rounded-2xl border border-[#334155] bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8">
                <div className="relative w-full h-[380px] flex items-center justify-center">
                  <DotLottieReact
                    src="/animations/robot.json"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%', maxWidth: '420px', maxHeight: '420px' }}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
