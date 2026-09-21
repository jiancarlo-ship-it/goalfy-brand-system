# Goalfy Brand System

Design tokens e componentes base de UI da Goalfy, extraídos 1:1 dos tokens
globais do kit Elementor de [goalfy.com.br](https://goalfy.com.br) (Ago/2026).
Fonte original: `../brand-system-goalfy.html`.

Nenhum valor aqui é inventado. Cor, tipografia, espaçamento e raio vêm do que
está de fato no ar no site.

## Assets de marca

- `assets/fonts/` — Red Hat Text (fonte oficial confirmada, `--gf-font-family`
  em `src/styles/tokens.css`), família completa em woff estático e
  woff2 variável.
- `assets/logo/` — logo Goalfy em PNG (versão tinta e versão original,
  fundo transparente).

**Nota sobre documentação desatualizada:** os arquivos `IDENTIDADE_VISUAL.md`
(pasta `Contexto e Identidade`) e a referência usada pela skill
`ad-art-brief` ainda marcam paleta/tipografia da Goalfy como `⚠️ PREENCHER`
(pendente de confirmação). Isso está desatualizado — os tokens deste
repositório (extraídos do site ao vivo em ago/2026) são a fonte real e
confirmada: cor de marca `#7F23F7` / `#8C31FF` / `#5D29A1`, fonte Red Hat
Text. Ao usar este design system, prefira sempre `src/styles/tokens.css` a
qualquer doc que diga "provisório".

## Instalação

```bash
npm install
npm run build
```

Gera `dist/index.js` (CJS), `dist/index.mjs` (ESM), `dist/index.d.ts` e
`dist/styles.css`.

## Uso

```tsx
import { Button, Badge, Card, Input, Logo } from 'goalfy-brand-system';
import 'goalfy-brand-system/dist/styles.css';

function Example() {
  return (
    <div className="gf-root">
      <Logo />
      <Button variant="primary">Começar agora</Button>
      <Badge variant="success">Ativo</Badge>
      <Card title="Pipeline de Vendas" description="24 oportunidades ativas" value="R$ 2,4M" delta="18% vs. mês anterior" />
    </div>
  );
}
```

## Tokens

Todos os tokens são CSS custom properties com prefixo `--gf-`, definidos em
`src/styles/tokens.css`:

- **Cor**: `--gf-color-brand-*` (roxo, 1000→100), `--gf-color-neutral-*`,
  `--gf-color-{success,info,warning,danger}-*`, e aliases semânticos
  (`--gf-bg`, `--gf-ink`, `--gf-brand`, etc).
- **Tipografia**: `--gf-font-family` (Red Hat Text, pesos 300–700 apenas —
  o site não carrega 800/900) e `--gf-font-size-*` (display → label).
- **Spacing**: `--gf-space-2` até `--gf-space-64`.
- **Radius**: `--gf-radius-none` até `--gf-radius-full` (botões usam `md` = 8px).

## Componentes

| Componente | Arquivo | Descrição |
|---|---|---|
| `Button` | `src/components/Button.tsx` | Variantes `primary` / `secondary` / `ghost` |
| `Badge` | `src/components/Badge.tsx` | Variantes `success` / `warning` / `danger` / `brand` |
| `Card` | `src/components/Card.tsx` | Card de métrica (título, descrição, valor, delta) |
| `Input` | `src/components/Input.tsx` | Input de texto com estado de foco em roxo |
| `Logo` | `src/components/Logo.tsx` | Wordmark oficial (SVG), `fill`/`accentFill` configuráveis |

## Escopo

Este pacote cobre tokens + os componentes de UI que já existiam no guia
estático original (`brand-system-goalfy.html`). Não é uma biblioteca de UI
completa — se crescer, a prioridade é o que a Goalfy realmente usa em
produto (form fields, navegação, etc), não componentes genéricos.
