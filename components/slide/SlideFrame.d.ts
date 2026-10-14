import * as React from 'react';
/**
 * 16:9 Velour deck page shell.
 * @startingPoint section="Slides" subtitle="Dark-ground deck page with mono footer" viewport="1280x720"
 */
export interface SlideFrameProps {
  children?: React.ReactNode;
  /** e.g. "Velour — Narrative" */
  footerLeft?: React.ReactNode;
  /** e.g. "03 / 14" */
  footerRight?: React.ReactNode;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}
export declare function SlideFrame(props: SlideFrameProps): React.JSX.Element;
export interface SlideFooterProps { left?: React.ReactNode; right?: React.ReactNode; inset?: number; size?: number; }
export declare function SlideFooter(props: SlideFooterProps): React.JSX.Element;
