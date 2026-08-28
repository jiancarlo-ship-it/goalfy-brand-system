import * as React from 'react';
import { Input } from 'goalfy-brand-system';

export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Input placeholder="nome@empresa.com" />
    <Input defaultValue="Carlos Silva" />
  </div>
);
