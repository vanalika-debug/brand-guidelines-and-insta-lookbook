import * as React from 'react';
/**
 * Square panel with hairline gold border; the active variant carries a full gold border.
 * @startingPoint section="Content" subtitle="Four-up panel row with one highlighted" viewport="700x300"
 */
export interface PanelProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Gold border — the single highlighted panel in a row (e.g. the Promise, the last filter). */
  active?: boolean;
  padding?: number | string;
  style?: React.CSSProperties;
}
export declare function Panel(props: PanelProps): React.JSX.Element;
