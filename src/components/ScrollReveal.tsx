'use client';

import type { ElementType, ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type RevealVariant = 'up' | 'down' | 'scale' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const variantClasses: Record<RevealVariant, { hidden: string; visible: string }> = {
  up: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  down: {
    hidden: 'opacity-0 -translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  scale: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  left: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  right: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
};

export default function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { hidden, visible } = variantClasses[variant];

  return (
    <Component
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isIntersecting ? visible : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
