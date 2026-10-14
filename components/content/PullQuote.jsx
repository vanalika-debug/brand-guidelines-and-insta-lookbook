import React from 'react';
import { Eyebrow } from '../type/Eyebrow.jsx';

/** Founder or customer quote: gold left rule, Fraunces italic in gold-bright, mono attribution. */
export function PullQuote({ children, cite, size = 24, style }) {
  return (
    <figure style={{ margin: 0, borderLeft: '1.5px solid var(--velour-gold)', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 14, ...style }}>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: size, lineHeight: 1.3, color: 'var(--velour-gold-bright)', textWrap: 'pretty' }}>{children}</blockquote>
      {cite && <Eyebrow as="figcaption" tone="faint" size={10}>{cite}</Eyebrow>}
    </figure>
  );
}
