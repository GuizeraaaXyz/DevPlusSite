# Landing page Dev+ Control

Site estático independente, preparado para deploy na Vercel.

## Deploy na Vercel

1. Importe o repositório `GuizeraaaXyz/DevPlusSite` na Vercel.
2. Use a raiz do repositório como **Root Directory**.
3. Use o preset **Other**, sem comando de build, e defina **Output Directory** como `.`.
4. Faça o deploy. O repositório contém o `index.html`, os assets e o `vercel.json`.

## Publicar uma nova versão

O site aponta para o asset `DevPlus-Control-Setup.exe` da release mais recente do GitHub. Publique uma release em `https://github.com/GuizeraaaXyz/devplus-control/releases` e inclua nela o instalador com esse nome.

Atualize também `site-config.js` com a versão do instalador publicado. O arquivo não contém chaves, tokens ou segredos. O instalador não deve ser copiado para esta pasta nem para o deploy estático da Vercel.

A seção de licença direciona os clientes ao WhatsApp configurado em `site-config.js`. Depois de confirmar o pagamento, envie a chave mensal para o cliente ativar no aplicativo; o prazo começa na primeira ativação.

A página apresenta a licença mensal por R$ 14,90 e deixa claro que a compra é combinada manualmente pelo WhatsApp. O Dev+ Control é um cliente desktop executado no PC do usuário; não é um serviço de hospedagem de bots.

## Indexação e descoberta

- `robots.txt` permite indexação pública e aponta para o sitemap.
- `sitemap.xml` lista a página inicial.
- `licenca.html` resume a licença AGPL-3.0 e aponta para o texto integral e o código-fonte.
- `privacidade.html` descreve os dados tratados pelo site, aplicativo e integrações identificadas no código.
- `llms.txt` resume o produto e aponta para download, releases, código-fonte e suporte.
- `index.html` inclui canonical, Open Graph, Twitter Cards e dados estruturados `SoftwareApplication`.

Esses arquivos usam `https://devplus-control-whca.vercel.app/` como domínio canônico atual. Se o domínio de produção mudar, atualize o domínio em `robots.txt`, `sitemap.xml` e `index.html` antes do deploy.

## Desenvolvimento local

Abra `index.html` no navegador ou sirva esta pasta com um servidor HTTP estático. Não há dependências de build.
