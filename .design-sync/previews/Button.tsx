import * as React from 'react';
import { Button } from 'goalfy-brand-system';

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary">Começar agora</Button>
    <Button variant="secondary">Ver demonstração</Button>
    <Button variant="ghost">Saiba mais</Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" disabled>
      Começar agora
    </Button>
  </div>
);
