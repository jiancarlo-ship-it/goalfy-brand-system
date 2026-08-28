import * as React from 'react';

export interface CardProps {
  title: string;
  description?: string;
  /** Valor em destaque, ex: "R$ 2,4M" */
  value?: string;
  /** Texto da variação, ex: "18% vs. mês anterior" */
  delta?: string;
  deltaDirection?: 'up' | 'down';
  className?: string;
}

/**
 * Card de métrica (ex: "Pipeline de Vendas"). Barra de destaque à esquerda
 * na cor de marca, valor grande, delta com seta colorida por direção.
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  value,
  delta,
  deltaDirection = 'up',
  className,
}) => (
  <div className={['gf-card', className].filter(Boolean).join(' ')}>
    <h4 className="gf-card-title">{title}</h4>
    {description && <p className="gf-card-desc">{description}</p>}
    {value && <div className="gf-card-value">{value}</div>}
    {delta && (
      <div className="gf-card-delta">
        <span className={`gf-card-arrow-${deltaDirection}`}>{deltaDirection === 'up' ? '↑' : '↓'}</span> {delta}
      </div>
    )}
  </div>
);
