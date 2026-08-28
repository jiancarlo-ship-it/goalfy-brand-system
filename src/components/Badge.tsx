import * as React from 'react';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'brand';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Estado que o badge comunica. @default 'brand' */
  variant?: BadgeVariant;
}

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  success: 'gf-badge-success',
  warning: 'gf-badge-warning',
  danger: 'gf-badge-danger',
  brand: 'gf-badge-brand',
};

/**
 * Badge de estado (ex: "Ativo", "Pendente", "Bloqueado", "Beta").
 * Fundo sempre no tint 300 da cor semântica, texto em --gf-ink, exceto
 * "brand" que usa a própria cor de marca no texto.
 */
export const Badge: React.FC<BadgeProps> = ({ variant = 'brand', className, children, ...rest }) => (
  <span className={['gf-badge', VARIANT_CLASS[variant], className].filter(Boolean).join(' ')} {...rest}>
    {children}
  </span>
);
