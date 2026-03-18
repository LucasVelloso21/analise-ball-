# ⚽ Análise Ball — Esportes & Opinião

Portal esportivo independente com análises, threads e opinião sobre futebol, NBA, NFL, NHL e F1.

🔗 **[analise-ball.vercel.app](https://analise-ball.vercel.app)**

---

## 📸 Screenshots

### Página inicial
![Homepage — grid de posts, manchete e sidebar](./screenshots/homepage.png)

### Artigo aberto (layout jornal)
![Post aberto com foto à esquerda e texto à direita](./screenshots/post-aberto.png)

> **Nota:** adicione os prints na pasta `screenshots/` do repositório.

---

## 🛠 Tecnologias

| Camada      | Stack                                    |
|-------------|------------------------------------------|
| Frontend    | HTML, CSS (variáveis + grid), JavaScript |
| Fontes      | Google Fonts — Bebas Neue, DM Sans, DM Serif Display |
| Deploy      | Vercel                                   |
| Conteúdo    | Posts estáticos em `script.js` (array `posts[]`) |

---

## 📡 Sobre a API (descontinuada)

Durante os primeiros **6 dias** de desenvolvimento, o site consumia uma **API gratuita de notícias esportivas** para alimentar os posts automaticamente. Após o fim do período de teste gratuito, migramos o conteúdo para um array estático no `script.js`.

**Fluxo original:**
1. O site fazia fetch na API ao carregar a página
2. Os posts eram renderizados dinamicamente com título, imagem, categoria, data e texto
3. O modal de leitura exibia o conteúdo completo vindo da API

**Situação atual:**
- Os posts são definidos manualmente no array `posts[]` em `script.js`
- Para voltar a ter conteúdo dinâmico, basta integrar uma nova API (ex.: NewsAPI, TheNewsAPI, ou um CMS headless como Strapi/Contentful) e substituir o array estático pelo fetch

---

## 📂 Estrutura do projeto

```
analise-ball/
├── index.html        # Página principal
├── style.css         # Estilos (variáveis, grid, modal jornal, responsivo)
├── script.js         # Dados dos posts + lógica do modal/filtros
├── screenshots/      # Prints para o README
└── README.md
```

---

## 🚀 Próximos passos

- [ ] Integrar nova API de notícias esportivas ou CMS headless
- [ ] Adicionar sistema de busca por posts
- [ ] Modo escuro completo
- [ ] PWA (Progressive Web App) para mobile

---

**Feito com 🏀⚽🏈 por [@AnaliseBall](https://x.com/AnaliseBall)**
