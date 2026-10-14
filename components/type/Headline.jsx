import React from 'react';

const SIZES = { xl: 'var(--type-display-xl)', l: 'var(--type-display-l)', m: 'var(--type-display-m)', s: 'var(--type-display-s)', xs: 'var(--type-display-xs)', title: 'var(--type-title)' };

/** Fraunces headline. Put the one emotional phrase in <Em>. */
export function Headline({ children, size = 'l', as: Tag = 'h2', style }) {
  const lh = size === 'title' || size === 'xs' ? 'var(--lh-display-loose)' : 'var(--lh-display)';
  return <Tag style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: SIZES[size] || size, lineHeight: lh, letterSpacing: 'var(--ls-display)', color: 'var(--velour-ink)', margin: 0, textWrap: 'balance', ...style }}>{children}</Tag>;
}

/** Gold-bright italic — the single emotional phrase in a headline or paragraph. */
export function Em({ children, style }) {
  return <em style={{ fontStyle: 'italic', color: 'var(--velour-gold-bright)', ...style }}>{children}</em>;
}
