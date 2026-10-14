import React from 'react';

/** 16:9 Velour deck page: warm gradient ground, grain, generous margins and a mono footer. */
export function SlideFrame({ children, footerLeft = 'Velour', footerRight, width = 1920, height = 1080, style }) {
  const mx = Math.round(width * 0.069);
  return (
    <section style={{ position: 'relative', width, height, overflow: 'hidden', boxSizing: 'border-box', padding: Math.round(height * 0.13) + 'px ' + mx + 'px 0', background: 'var(--surface-page-gradient)', color: 'var(--velour-ink)', fontFamily: 'var(--font-body)', fontWeight: 300, ...style }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--velour-grain)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>{children}</div>
      <SlideFooter left={footerLeft} right={footerRight} inset={mx} size={Math.round(width / 100)} />
    </section>
  );
}

/** Running footer: "VELOUR — <DECK>" left, "03 / 14" right. */
export function SlideFooter({ left, right, inset = 132, size = 18 }) {
  return (
    <div style={{ position: 'absolute', left: inset, right: inset, bottom: Math.round(inset * 0.4), display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: size, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--velour-ink-faint)' }}>
      <span>{left}</span><span>{right}</span>
    </div>
  );
}
