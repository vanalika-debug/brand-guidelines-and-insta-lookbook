import React from 'react';
import { Eyebrow } from '../type/Eyebrow.jsx';

/** Boxed content: square, hairline border, panel fill. Mark the one key panel in a row as active. */
export function Panel({ eyebrow, title, children, active = false, padding = 28, style }) {
  return (
    <div style={{ background: 'var(--velour-panel)', border: '1px solid ' + (active ? 'var(--velour-gold)' : 'var(--velour-line)'), padding, display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      {eyebrow && <Eyebrow size={10}>{eyebrow}</Eyebrow>}
      {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--type-title)', lineHeight: 'var(--lh-display-loose)', color: 'var(--velour-ink)', textWrap: 'balance' }}>{title}</div>}
      {children && <div style={{ fontSize: 'var(--type-body-s)', lineHeight: 'var(--lh-body)', color: 'var(--velour-ink-soft)', fontWeight: 300 }}>{children}</div>}
    </div>
  );
}
