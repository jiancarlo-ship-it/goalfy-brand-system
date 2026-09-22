# Integrações — usando estes assets em outras ferramentas

## `ad-art-chatgpt-pipeline`

O repositório [`ad-art-chatgpt-pipeline`](https://github.com/jiancarlo-ship-it/ad-art-chatgpt-pipeline)
(geração de arte de anúncio) é um sistema genérico — ele mesmo não guarda
identidade visual de nenhuma marca, cada usuário cria sua própria
`config/<marca>.json`. Para a Goalfy, não é preciso preencher esse arquivo
do zero: `ad-art-chatgpt-pipeline.config.json` neste diretório já vem
pronto com a paleta, o logo e a tipografia oficiais.

### Pré-requisito: clonar os dois repositórios como pastas irmãs

Os caminhos do logo/fonte dentro do config são relativos, e assumem que
`ad-art-chatgpt-pipeline` e `goalfy-brand-system` estão lado a lado, dentro
da mesma pasta pai:

```
qualquer-pasta/
├── ad-art-chatgpt-pipeline/
└── goalfy-brand-system/
```

Se você clonar em outra estrutura, os caminhos `../../goalfy-brand-system/...`
dentro do config vão apontar pro lugar errado — ajuste-os manualmente nesse
caso (ou copie os arquivos de `assets/` para dentro da pasta `config/` do
pipeline e simplifique os caminhos).

### Passo a passo

```bash
# a partir da pasta pai onde os dois repos serão clonados
git clone https://github.com/jiancarlo-ship-it/goalfy-brand-system.git
git clone https://github.com/jiancarlo-ship-it/ad-art-chatgpt-pipeline.git

cp goalfy-brand-system/integrations/ad-art-chatgpt-pipeline.config.json \
   ad-art-chatgpt-pipeline/config/goalfy.json
```

Pronto — `config/goalfy.json` já existe preenchido. Siga o resto do
`README.md`/`CLAUDE.md` do pipeline a partir do passo "Crie a estrutura do
projeto" (o passo de identidade de marca já está resolvido).
