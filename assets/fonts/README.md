# Red Hat Text — Fonte da Goalfy

Fonte oficial usada em [goalfy.com.br](https://www.goalfy.com.br) (confirmada no `brand-system-goalfy.html`).
Baixada diretamente do Google Fonts em **04/08/2026**.

## Licença

**SIL Open Font License 1.1** — gratuita para uso pessoal e comercial, pode ser
incorporada em produtos/materiais de marca sem custo ou atribuição obrigatória
(embora dar crédito seja uma boa prática). Detalhes: https://openfontlicense.org

## Conteúdo da pasta

```
fonts/
├── fonts.css                          → @font-face pronto para usar em HTML/web
├── woff2-variable/                    → RECOMENDADO para web (peso 300–700 num único arquivo)
│   ├── RedHatText-Variable-wght-latin.woff2
│   ├── RedHatText-Variable-wght-latin-ext.woff2
│   ├── RedHatText-Variable-Italic-latin.woff2
│   └── RedHatText-Variable-Italic-latin-ext.woff2
└── woff-static/                       → 1 arquivo por peso (uso em apps/editores que não suportam fonte variável)
    ├── RedHatText-Light300.woff
    ├── RedHatText-Regular400.woff
    ├── RedHatText-Medium500.woff
    ├── RedHatText-SemiBold600.woff
    ├── RedHatText-Bold700.woff
    └── RedHatText-Italic400.woff
```

## Como usar

**Na web:** importe `fonts.css` e use `font-family: 'Red Hat Text', sans-serif;`.

**No sistema (Word, Canva, Figma, PowerPoint etc.):** dê duplo-clique num arquivo
da pasta `woff-static/` para visualizar — para instalar como fonte do sistema,
o formato ideal é `.ttf`/`.otf`. Se precisar desse formato, é só converter
qualquer um dos `.woff` (ex. via [FontForge](https://fontforge.org) ou
[CloudConvert](https://cloudconvert.com/woff-to-ttf)), já que o Google Fonts só
distribui em `.woff`/`.woff2`.

## Pesos usados no site (não usar acima de 700)

O site carrega no máximo peso **700 (Bold)**. Embora o CSS do site declare
`font-weight: 900` em alguns `h1`, isso é apenas negrito sintético do navegador
(fake bold) — não existe um arquivo de peso 900 nesta família. Para manter a
identidade visual fiel, o ideal é usar sempre 300–700.
