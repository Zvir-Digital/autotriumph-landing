'use client';

const audienceCards = [
  { title: 'ИП', description: 'Индивидуальные предприниматели' },
  { title: 'Самозанятые', description: 'Специалисты на самозанятости' },
  { title: 'Менеджеры', description: 'Руководители и менеджеры по продажам' },
  { title: 'Малый бизнес', description: 'Компании до 50 человек' },
  { title: 'Маркетплейсы', description: 'Продавцы на Ozon, Wildberries, Avito' },
];

export default function TrustBadge() {
  const duplicated = [...audienceCards, ...audienceCards, ...audienceCards];

  return (
    <section className="py-12 overflow-hidden border-y border-[#334155]/40">
      <p className="text-center text-[#64748b] text-xs uppercase tracking-[0.2em] mb-8">
        Платформа для
      </p>
      {/* Infinite marquee - 3 copies for seamless loop, no empty space */}
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-nowrap animate-marquee-infinite gap-0">
          {duplicated.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-3 w-[260px] min-w-[260px] rounded-xl border border-[#334155] bg-[#1e293b]/80 px-5 py-5 hover:border-[#7177f8]/50 transition-colors"
            >
              <div className="font-semibold text-white text-lg mb-1">{card.title}</div>
              <div className="text-sm text-[#94a3b8]">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
