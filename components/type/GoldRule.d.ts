import * as React from 'react';
export interface GoldRuleProps {
  /** px. 40 on screen; ~86 on 1920 slides. */
  width?: number;
  weight?: number;
  style?: React.CSSProperties;
}
export declare function GoldRule(props: GoldRuleProps): React.JSX.Element;
