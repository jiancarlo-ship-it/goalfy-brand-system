import * as React from 'react';
import { Card } from 'goalfy-brand-system';

export const MetricUp = () => (
  <Card
    title="Pipeline de Vendas"
    description="24 oportunidades ativas"
    value="R$ 2,4M"
    delta="18% vs. mês anterior"
    deltaDirection="up"
  />
);

export const MetricDown = () => (
  <Card
    title="Churn"
    description="Clientes cancelados no mês"
    value="3"
    delta="12% vs. mês anterior"
    deltaDirection="down"
  />
);

export const SemValor = () => (
  <Card title="Onboarding" description="Novos usuários ativados essa semana" />
);
