import React from 'react';

/** Mono uppercase label: eyebrows, section markers, footers, tags. Never body copy. */
export function Eyebrow({ children, tone = 'gold', size = 11, as: Tag = 'div', style }) {
  const color = tone === 'faint' ? 'var(--velour-ink-faint)' : tone === 'soft' ? 'var(--velour-ink-soft)' : 'var(--velour-gold)';
  return <Tag style={{ fontFamily: 'var(--font-mono)', fontSize: size, fontWeight: 400, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', lineHeight: 1.5, color, margin: 0, ...style }}>{children}</Tag>;
}
