import React from 'react';

/** The short gold rule that follows a headline or closes a statement. */
export function GoldRule({ width = 40, weight = 1.5, style }) {
  return <hr style={{ width, height: weight, background: 'var(--velour-gold)', border: 0, margin: 0, ...style }} />;
}
