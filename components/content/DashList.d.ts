import * as React from 'react';
export type DashItem = React.ReactNode | { lead: string; text: React.ReactNode };
export interface DashListProps {
  /** Optional mono heading, e.g. "What stays out" */
  title?: React.ReactNode;
  items?: DashItem[];
  size?: number;
  style?: React.CSSProperties;
}
export declare function DashList(props: DashListProps): React.JSX.Element;
