import React from 'react';

/** The Velour wordmark. Always the master PNG — never typeset, recoloured or redrawn. Min 120px wide. */
export function Logo({ src = 'assets/logo/velour-logo-master.png', width = 240, alt = 'Velour — Luxury Dark Chocolates', style }) {
  const w = Math.max(120, width);
  return <img src={src} width={w} alt={alt} style={{ display: 'block', height: 'auto', ...style }} />;
}
