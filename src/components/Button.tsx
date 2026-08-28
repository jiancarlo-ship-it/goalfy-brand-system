import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual do botão. @default 'primary' */
  variant?: ButtonVariant;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'gf-btn-primary',
  secondary: 'gf-btn-secondary',
  ghost: 'gf-btn-ghost',
};

/**
 * Botão base da Goalfy. Radius 8px, altura 44px, cores extraídas do kit
 * Elementor real (primary usa --gf-brand-deep, hover --gf-brand-hi).
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...rest }, ref) => (
    <button
      ref={ref}
      className={['gf-btn', VARIANT_CLASS[variant], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
