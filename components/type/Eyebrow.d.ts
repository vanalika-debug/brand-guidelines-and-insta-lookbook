import * as React from 'react';
export interface EyebrowProps {
  children?: React.ReactNode;
  /** gold = section eyebrow; faint = footers, captions; soft = table row labels */
  tone?: 'gold' | 'faint' | 'soft';
  /** px. 11 on screen; ~20 on 1920 slides. */
  size?: number;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): React.JSX.Element;
