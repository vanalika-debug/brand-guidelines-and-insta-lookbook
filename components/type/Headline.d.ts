import * as React from 'react';
export interface HeadlineProps {
  children?: React.ReactNode;
  /** xl 96 · l 72 · m 56 · s 44 · xs 34 · title 24 (px), or any CSS size */
  size?: 'xl' | 'l' | 'm' | 's' | 'xs' | 'title' | string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function Headline(props: HeadlineProps): React.JSX.Element;
export interface EmProps { children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Em(props: EmProps): React.JSX.Element;
