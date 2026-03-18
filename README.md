# ⚽ Análise Ball — Portal Esportivo

Portal esportivo independente com conteúdo direto do **X (Twitter)**. Análises, threads e opinião sobre futebol, NBA, NFL, F1, NHL e mais.

🔗 **Site ao vivo:** [analiseball.vercel.app](https://analiseball.vercel.app)  
🐦 **X / Twitter:** [@AnaliseBall](https://x.com/analiseball)

---

## 📁 Estrutura do projeto

```
├── index.html    → Página principal do portal
├── style.css     → Estilos do site
├── script.js     → Lógica, posts, feed RSS e interações
├── admin.html    → Painel de administração de posts
└── README.md     → Este arquivo
```

## 🚀 Como funciona

O site é **100% estático** (HTML + CSS + JS puro) hospedado gratuitamente na **Vercel** via GitHub.

### Integração com o X (Twitter)

O site se conecta ao X de duas formas:

1. **Embed da Timeline** — Widget oficial do X na sidebar que mostra os tweets em tempo real
2. **Feed RSS** — Via [rss.app](https://rss.app), puxa os últimos tweets e renderiza como cards integrados ao layout do site

### Painel Admin

Acessível em `/admin.html`, permite:

- Criar, editar e deletar posts
- Escolher categoria e formatar conteúdo
- Exportar o código dos posts para colar no `script.js`

## 🛠️ Como atualizar o site

1. Acesse `seusite.vercel.app/admin.html`
2. Crie ou edite um post
3. Clique em **"Copiar código"** na seção de exportação
4. Abra o `script.js` no GitHub
5. Substitua o array `var posts = [...]` pelo código copiado
6. Faça o commit — a Vercel atualiza automaticamente

## 📦 Tecnologias

- HTML5 / CSS3 / JavaScript (Vanilla)
- Google Fonts (Bebas Neue, DM Sans, DM Serif Display)
- Twitter Embed Widget
- RSS.app (feed JSON)
- Vercel (hospedagem)

## 📄 Licença

Projeto pessoal — Análise Ball © 2026
