import React from 'react';
import { Eyebrow } from '../type/Eyebrow.jsx';

/** List with en-dash markers. Items may start with a bold lead-in. */
export function DashList({ title, items = [], size = 14, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, ...style }}>
      {title && <Eyebrow tone="faint" size={10}>{title}</Eyebrow>}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', fontSize: size, lineHeight: 1.55, color: 'var(--velour-ink-soft)', fontWeight: 300 }}>
            <span style={{ color: 'var(--velour-ink-faint)' }}>–</span>
            <span>{typeof it === 'object' && it && it.lead ? <><strong style={{ color: 'var(--velour-ink)', fontWeight: 600 }}>{it.lead}</strong> {it.text}</> : it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
