import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Input base da Goalfy. Fundo neutro (--gf-elevated) em repouso, borda
 * escura e halo roxo (--gf-brand a 15% de opacidade) em foco.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => (
    <input ref={ref} className={['gf-input', className].filter(Boolean).join(' ')} {...rest} />
  )
);

Input.displayName = 'Input';
