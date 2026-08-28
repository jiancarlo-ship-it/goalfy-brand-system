# Notas do design-sync — Goalfy Brand System

## Setup deste repo

- Sem Storybook (confirmado direto — o repo foi criado do zero nesta mesma sessão, nunca teve `.storybook/`). Shape = `package`.
- Sem provider/context — os componentes são CSS puro, sem React Context. Nenhum `cfg.provider` necessário.
- Playwright: instalado `playwright-core` + `playwright@1.62.1` em `.ds-sync/node_modules` (não no repo principal) pra rodar o render check. Chromium ficou em `%LOCALAPPDATA%\ms-playwright\` (build 1234), fora do `~/.cache` (ambiente Windows/git-bash).

## Achado corrigido durante a primeira sincronização

- O preview `Disabled` do `Button` mostrou que `.gf-btn:disabled` não tinha nenhum estilo (botão desabilitado idêntico ao habilitado). Corrigido em `src/styles/components.css` (`opacity: 0.5; cursor: not-allowed;`) antes de gradear — não era um problema do preview, era um gap real do design system.

## Known render warns (triados como legítimos)

- Nenhum pendente. `[GRID_OVERFLOW]` em `Button` e `Card` foi resolvido com `cfg.overrides.{Button,Card}.cardMode = "column"` (múltiplas stories mais largas que a grid do card padrão).

## Re-sync risks

- `.design-sync/previews/*.tsx` usam textos em pt-BR fixos (ex: "Carlos Silva", "Pipeline de Vendas") — se o brand system real da Goalfy trocar de idioma de referência ou de exemplos canônicos, esses previews ficam desatualizados e precisam ser reescritos manualmente, o converter não detecta isso.
- Os tokens em `src/styles/tokens.css` foram extraídos manualmente do `brand-system-goalfy.html` (Ago/2026). Se o site da Goalfy mudar cor/fonte/spacing, esse arquivo precisa ser atualizado à mão — não há sincronização automática com goalfy.com.br.
- `cssEntry` aponta pra `dist/styles.css`, gerado por `scripts/build-css.mjs` (concatenação simples de `tokens.css` + `components.css`). Qualquer novo arquivo CSS precisa ser adicionado nesse script manualmente.
- Componentes cobertos hoje: Button, Badge, Card, Input, Logo — o mínimo do guia estático original. Se a Goalfy pedir mais componentes de produto (form fields, navegação, tabelas), eles entram como próxima rodada, não foi feito agora por escopo (decisão do usuário: "só tokens + poucos componentes básicos").
