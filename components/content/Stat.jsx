import React from 'react';

/** A sourced figure: hairline above, Fraunces numeral in gold-bright, short Archivo label. */
export function Stat({ value, label, size = 40, style }) {
  return (
    <div style={{ borderTop: '1px solid var(--velour-line)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10, ...style }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size, lineHeight: 1.05, color: 'var(--velour-gold-bright)', letterSpacing: '-0.01em' }}>{value}</div>
      <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--velour-ink-soft)', fontWeight: 300 }}>{label}</div>
    </div>
  );
}
