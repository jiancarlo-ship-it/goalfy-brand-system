## Setup

No provider needed — this is a plain CSS design system. Import the stylesheet once, and wrap the app root in `.gf-root` so the base font (Red Hat Text) and ink color inherit everywhere:

```tsx
import 'goalfy-brand-system/dist/styles.css';

<div className="gf-root">{/* your app */}</div>
```

`.gf-root` sets `font-family: var(--gf-font-family)` and `color: var(--gf-ink)`. Without it, text falls back to the browser default sans-serif.

## Styling idiom

Two layers, both CSS custom properties prefixed `--gf-`, no CSS-in-JS, no props for styling:

**1. Shipped component classes** — each component applies its own class automatically (`Button` → `.gf-btn` + `.gf-btn-{primary,secondary,ghost}`, `Badge` → `.gf-badge` + `.gf-badge-{success,warning,danger,brand}`, `Card` → `.gf-card` + `.gf-card-title/-desc/-value/-delta`, `Input` → `.gf-input`). Never hand-write these classes — use the component's `variant` prop.

**2. Tokens, for your own layout glue** (containers, spacing between components, custom compositions):

| Purpose | Tokens |
|---|---|
| Brand color | `--gf-brand` (#7F23F7), `--gf-brand-deep` (#5D29A1, button bg), `--gf-brand-hi` (hover) |
| Neutrals | `--gf-bg`, `--gf-surface`, `--gf-elevated`, `--gf-border`, `--gf-ink`, `--gf-muted`, `--gf-faint` |
| Semantic | `--gf-color-{success,info,warning,danger}-{900,600,300,100}` (900 = solid, 300 = tint for badge-style backgrounds) |
| Spacing | `--gf-space-2` … `--gf-space-64` |
| Radius | `--gf-radius-{none,sm,md,lg,xl,full}` (`md` = 8px, what buttons/inputs use) |
| Type scale | `--gf-font-size-{display,h1,h2,h3,h4,body-lg,body,body-sm,caption,label}` + utility classes `.gf-text-h1` … `.gf-text-label` |

Font is **Red Hat Text**, weights 300–700 only — never use 800/900, the real site doesn't load them and the browser fakes a bold that looks off-brand.

## Where the truth lives

- `styles.css` (bound copy of `dist/styles.css`) — read this before styling anything custom; it's the full token list.
- Each component's `.prompt.md` — usage examples per component.

## Example

```tsx
import { Button, Badge, Card } from 'goalfy-brand-system';

<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gf-space-24)' }}>
  <div style={{ display: 'flex', gap: 'var(--gf-space-8)', alignItems: 'center' }}>
    <Badge variant="success">Ativo</Badge>
    <Button variant="primary">Começar agora</Button>
  </div>
  <Card title="Pipeline de Vendas" value="R$ 2,4M" delta="18% vs. mês anterior" deltaDirection="up" />
</div>
```
