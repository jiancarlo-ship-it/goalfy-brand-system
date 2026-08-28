import * as React from 'react';
import { Badge } from 'goalfy-brand-system';

export const States = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <Badge variant="success">Ativo</Badge>
    <Badge variant="warning">Pendente</Badge>
    <Badge variant="danger">Bloqueado</Badge>
    <Badge variant="brand">Beta</Badge>
  </div>
);
