import React from 'react';

/** Hairline-ruled table. First column is a mono row label; header cells are mono gold. */
export function RuleTable({ columns = [], rows = [], labelWidth = 110, style }) {
  const tmpl = labelWidth + 'px ' + columns.slice(1).map(() => 'minmax(0,1fr)').join(' ');
  const cell = { padding: '10px 12px 10px 0', borderBottom: '1px solid var(--velour-line-soft)', fontSize: 13, lineHeight: 1.5, color: 'var(--velour-ink-soft)', fontWeight: 300 };
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase' };
  return (
    <div role="table" style={{ display: 'grid', gridTemplateColumns: tmpl, ...style }}>
      {columns.map((c, i) => <div role="columnheader" key={'h' + i} style={{ ...cell, ...mono, color: 'var(--velour-gold)', paddingTop: 0 }}>{c}</div>)}
      {rows.map((r, ri) => r.map((v, ci) => (
        <div role="cell" key={ri + '-' + ci} style={ci === 0 ? { ...cell, ...mono, color: 'var(--velour-ink-faint)' } : ci === r.length - 1 && r.length > 2 ? { ...cell, color: 'var(--velour-ink)' } : cell}>{v}</div>
      )))}
    </div>
  );
}
