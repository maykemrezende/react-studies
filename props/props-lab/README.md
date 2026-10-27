# props-lab

Ambiente para os exercícios de props: React 19 + TypeScript em modo `strict` + Vite.

## Rodando

Precisa de Node ≥ 22.12 (a versão está em `.nvmrc`).

```bash
npm install
npm run dev
```

## Scripts

| Script              | O que faz                                                        |
| ------------------- | ---------------------------------------------------------------- |
| `npm run dev`       | Sobe o servidor. Erros de TS e ESLint aparecem no navegador.     |
| `npm run typecheck` | Roda o `tsc` (só checa tipos, não gera arquivos).                |
| `npm run lint`      | Roda o ESLint. Qualquer warning faz o comando falhar.            |
| `npm run check`     | `typecheck` + `lint`. Rode antes de cada commit.                 |
| `npm run build`     | `check` + build de produção em `dist/`.                          |

## Regras do ambiente (e por quê)

- **TypeScript `strict`.** Toda prop precisa de tipo. Nada de `any` implícito: o compilador
  é seu primeiro revisor de código.
- **`<StrictMode>` ligado em `src/main.tsx`.** Em desenvolvimento o React renderiza e roda
  os effects **duas vezes** de propósito. Se um `console.log` aparece duplicado, é isso.
  Se algo quebra por rodar duas vezes (ex.: um `setInterval` que acelera), o effect está
  sem cleanup — corrija o effect, não desligue o StrictMode.
- **`eslint-plugin-react-hooks` com warning = erro.** `rules-of-hooks` e `exhaustive-deps`
  quebram o lint e aparecem no overlay do navegador. Não use `eslint-disable` para calar a
  regra; ela quase sempre está apontando um bug real.

Use o VS Code com a extensão do ESLint (recomendada em `.vscode/extensions.json`) para ver
os erros enquanto digita.
