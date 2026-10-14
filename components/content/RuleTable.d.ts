import * as React from 'react';
export interface RuleTableProps {
  /** Header labels. First is the row-label column (may be ""). */
  columns?: React.ReactNode[];
  /** Each row: [label, ...cells]. The last column renders in Ink (the "Velour way"). */
  rows?: React.ReactNode[][];
  labelWidth?: number;
  style?: React.CSSProperties;
}
export declare function RuleTable(props: RuleTableProps): React.JSX.Element;
