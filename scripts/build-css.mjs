// Concatena os CSS-source (tokens primeiro, sempre) em dist/styles.css.
// Sem PostCSS/Tailwind aqui de propósito: os tokens já são CSS puro,
// não precisa de pipeline extra pra um design system desse tamanho.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const files = ['src/styles/tokens.css', 'src/styles/components.css'];

const banner = `/* Goalfy Brand System — CSS gerado, não editar direto. Fonte: ${files.join(', ')} */\n\n`;
const merged = banner + files.map((f) => readFileSync(join(root, f), 'utf8')).join('\n\n');

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'styles.css'), merged);

console.log(`styles.css gerado (${merged.length} bytes) a partir de ${files.length} arquivos.`);
