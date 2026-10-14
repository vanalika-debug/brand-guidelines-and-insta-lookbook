import * as React from 'react';
/**
 * Velour wordmark from the master transparent PNG.
 * @startingPoint section="Brand" subtitle="Master wordmark on the dark ground" viewport="700x260"
 */
export interface LogoProps {
  /** Path to the master PNG. Default: assets/logo/velour-logo-master.png */
  src?: string;
  /** Rendered width in px. Clamped to a 120px minimum. */
  width?: number;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): React.JSX.Element;
