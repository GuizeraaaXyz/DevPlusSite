# Landing page Dev+ Control

Site estático independente, preparado para deploy na Vercel.

## Deploy na Vercel

1. Importe o repositório `GuizeraaaXyz/devplus-control` na Vercel.
2. Em **Root Directory**, selecione `landingpage`.
3. Use o preset **Other**, sem comando de build, e defina **Output Directory** como `.`.
4. Faça o deploy. A pasta contém o `index.html`, os assets e o `vercel.json`.

## Publicar uma nova versão

O site aponta para o asset `DevPlus-Control-Setup.exe` da release mais recente do GitHub. Publique uma release em `https://github.com/GuizeraaaXyz/devplus-control/releases` e inclua nela o instalador com esse nome.

Atualize também `site-config.js` com a versão do instalador publicado. O arquivo não contém chaves, tokens ou segredos. O instalador não deve ser copiado para esta pasta nem para o deploy estático da Vercel.

## Desenvolvimento local

Abra `index.html` no navegador ou sirva esta pasta com um servidor HTTP estático. Não há dependências de build.
