import * as React from 'react';
import { Logo } from 'goalfy-brand-system';

export const OnWhite = () => (
  <div style={{ padding: 24, background: '#FFFFFF' }}>
    <Logo style={{ width: 180, height: 'auto', display: 'block' }} />
  </div>
);

export const OnBrand = () => (
  <div style={{ padding: 24, background: '#7F23F7' }}>
    <Logo fill="#FFFFFF" accentFill="#FFFFFF" style={{ width: 180, height: 'auto', display: 'block' }} />
  </div>
);
