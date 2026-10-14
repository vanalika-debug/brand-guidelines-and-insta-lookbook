import * as React from 'react';
export interface StatProps {
  value: React.ReactNode;
  label?: React.ReactNode;
  /** numeral size in px */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): React.JSX.Element;
