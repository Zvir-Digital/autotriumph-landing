'use client';

import { LightningIcon, TargetIcon, RocketIcon } from './icons';
import Lottie from 'lottie-react';

// Анимация для статистики - счетчик
const counterAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Counter",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ripple",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100] },
          { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [0] },
          { t: 60, s: [100] }
        ]},
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 0, s: [50, 50, 100] },
          { i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 30, s: [200, 200, 100] },
          { t: 60, s: [50, 50, 100] }
        ]}
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [30, 30] },
              p: { a: 0, k: [0, 0] },
              nm: "Circle"
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 0.5] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke"
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 },
              nm: "Transform"
            }
          ],
          nm: "Circle Shape",
          np: 2,
          cix: 2,
          bm: 0
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

export default function Stats() {
  const stats = [
    {
      value: '2-3 сек',
      label: 'Время ответа AI',
      icon: LightningIcon,
    },
    {
      value: '100%',
      label: 'Точность извлечения данных',
      icon: TargetIcon,
    },
    {
      value: '4 сек',
      label: 'Полный цикл обработки',
      icon: RocketIcon,
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="bg-gradient-to-br from-[#6366f1] to-[#7177f8] p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto relative overflow-hidden">
        {/* Фоновые анимации */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32">
            <Lottie animationData={counterAnimation} loop={true} autoplay={true} />
          </div>
          <div className="absolute bottom-10 right-10 w-32 h-32">
            <Lottie animationData={counterAnimation} loop={true} autoplay={true} style={{ animationDelay: '1s' }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="text-white">
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
