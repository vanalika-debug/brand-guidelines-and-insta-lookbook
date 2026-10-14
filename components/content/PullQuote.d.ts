import * as React from 'react';
export interface PullQuoteProps {
  children?: React.ReactNode;
  /** "Name · Source, Year" */
  cite?: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): React.JSX.Element;
