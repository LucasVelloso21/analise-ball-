// ══════════════════════════════════════════════════
// ── ANÁLISE BALL — Script Principal ──
// ══════════════════════════════════════════════════

// ── Post data ──
var posts = [
  {
    title: "Oitavas da Champions hoje: Liverpool, Barcelona, City e Bayern entram em campo",
    cat: "futebol", catLabel: "Champions League",
    date: "10 Mar 2026", readTime: "5 min de leitura",
    text: "<p>Começa hoje a fase de mata-mata da Champions League 2025/26! Quatro jogos de ida das oitavas de final.</p><p><strong>Galatasaray x Liverpool</strong> (14h45) — Os turcos recebem os ingleses em Istambul. Liverpool favorito mas o ambiente é difícil.</p><p><strong>Newcastle x Barcelona</strong> (17h) — Um dos mais aguardados. Lewandowski x Isak no duelo de centroavantes.</p><p><strong>Atlético de Madrid x Tottenham</strong> (17h) — Simeone quer abrir vantagem em casa.</p><p><strong>Atalanta x Bayern de Munique</strong> (17h) — Bayern favorito mas a Dea pode surpreender.</p><p>Amanhã tem o clássico <strong>Real Madrid x Manchester City</strong>!</p>"
  },
  {
    title: "SGA iguala recorde de Wilt Chamberlain com 35 pts e game-winner sobre o Nuggets",
    cat: "basquete", catLabel: "NBA",
    date: "9 Mar 2026", readTime: "5 min de leitura",
    text: "<p>Shai Gilgeous-Alexander fez história na noite de segunda-feira. Com 35 pontos, 15 assistências e 9 rebotes, igualou o recorde de Wilt Chamberlain de 126 jogos consecutivos com pelo menos 20 pontos.</p><p>Com o placar empatado a 10 segundos do fim, SGA criou espaço e converteu o step-back de três pontos para selar a vitória do Thunder por 129-126 sobre o Nuggets.</p><p>SGA pode quebrar o recorde na quinta-feira em casa contra o Boston Celtics. O Thunder segue como favorito ao título do Oeste.</p>"
  },
  {
    title: "A história completa de como o Barcelona quebrou financeiramente",
    cat: "thread", catLabel: "Thread",
    date: "8 Mar 2026", readTime: "20 partes",
    text: "<p>O Barcelona viveu uma crise financeira sem precedentes nos últimos anos. A gestão de Bartomeu (2014-2020) foi marcada por gastos exorbitantes que comprometeram as finanças do clube por anos.</p><p>A pandemia de Covid em 2020 expôs os problemas estruturais. O Barça revelou uma dívida de mais de 1,3 bilhão de euros.</p><p>Com Laporta, o clube apostou nas alavancas econômicas para se reerguer e voltar a contratar. A reconstrução ainda está em andamento mas os sinais são positivos.</p>"
  },
  {
    title: "GP da Austrália: preview completo e quem pode surpreender",
    cat: "f1", catLabel: "F1",
    date: "6 Mar 2026", readTime: "6 min de leitura",
    text: "<p>A temporada 2026 da F1 começa em Melbourne com novos regulamentos técnicos. As primeiras impressões dos treinos livres mostram que a hierarquia pode ter mudado.</p><p>Mercedes e Red Bull chegam como favoritas, mas Ferrari e McLaren deram sinais fortes nos testes. O circuito de Albert Park foi reformado e promete tempos recordes.</p>"
  },
  {
    title: "Free Agency 2026: os melhores contratos e as apostas arriscadas",
    cat: "nfl", catLabel: "NFL",
    date: "7 Mar 2026", readTime: "9 min de leitura",
    text: "<p>A janela de agência livre da NFL 2026 movimentou centenas de milhões de dólares. Separamos os melhores negócios e as apostas mais arriscadas da offseason.</p><p>A movimentação de quarterbacks foi o grande tema — vários times mudaram de titular, redesenhando o mapa de poder da liga para 2026.</p>"
  },
  {
    title: "Trade Deadline: Oilers se reforçam e tentam o bicampeonato",
    cat: "nhl", catLabel: "NHL",
    date: "5 Mar 2026", readTime: "5 min de leitura",
    text: "<p>O Edmonton Oilers foi o grande protagonista da trade deadline da NHL 2026. O campeão defensor trouxe dois defensores experientes para endurecer o elenco e tentar o bicampeonato.</p><p>McDavid segue sendo o melhor jogador do mundo e está em grande fase. O desafio agora é manter a coesão durante os playoffs.</p>"
  },
  {
    title: "Flamengo anuncia reforço europeu para o Brasileirão 2026",
    cat: "futebol", catLabel: "Transferências",
    date: "4 Mar 2026", readTime: "4 min de leitura",
    text: "<p>O Flamengo anunciou a contratação de um meia-atacante revelado no futebol português para reforçar o elenco no Brasileirão 2026 e na Copa Libertadores.</p><p>O jogador se destacou na última temporada europeia e foi negociado com valores consideráveis, demonstrando a disposição do clube de voltar ao topo do futebol nacional.</p>"
  }
];

// ── Modal logic ──
var modal = document.getElementById('post-modal');
var modalOverlay = document.getElementById('modal-overlay');
var modalClose = document.getElementById('modal-close');
var modalImg = document.getElementById('modal-img');
var modalCat = document.getElementById('modal-cat');
var modalTitle = document.getElementById('modal-title');
var modalMeta = document.getElementById('modal-meta');
var modalText = document.getElementById('modal-text');

function getImgSrc(card) {
  var img = card.querySelector('.card-thumb img, .post-featured-thumb img');
  return img ? img.src : null;
}

function openPost(card) {
  var title = (card.querySelector('.card-title, .post-featured-title') || {}).textContent || '';
  var catEl = card.querySelector('.post-cat');
  var catLabel = catEl ? catEl.textContent.trim() : '';
  var catClass = catEl ? catEl.className.replace('post-cat', '').trim() : '';
  var footerSpans = card.querySelectorAll('.post-footer span');
  var date = footerSpans[0] ? footerSpans[0].textContent : '';
  var readTime = footerSpans[2] ? footerSpans[2].textContent : '';
  var imgSrc = getImgSrc(card);
  var post = posts.find(function(p) { return p.title === title.trim(); });

  modalCat.textContent = catLabel;
  modalCat.className = 'post-cat ' + catClass;
  modalTitle.textContent = title.trim();
  modalMeta.innerHTML = '<span>Análise Ball</span><span class="dot">\u00b7</span><span>' + date + '</span><span class="dot">\u00b7</span><span>' + readTime + '</span>';

  if (imgSrc) {
    modalImg.innerHTML = '<img src="' + imgSrc + '" alt="' + title.trim() + '"/>';
    modalImg.classList.remove('no-img');
  } else {
    modalImg.innerHTML = '';
    modalImg.classList.add('no-img');
  }

  modalText.innerHTML = post ? post.text : '<p>Conteúdo completo em breve.</p>';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePost() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.post-card, .post-featured').forEach(function(card) {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function(e) {
    if (e.target.closest('a, button')) return;
    openPost(card);
  });
});

modalOverlay.addEventListener('click', closePost);
modalClose.addEventListener('click', closePost);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePost(); });

// ── Hamburger ──
var hamburger = document.getElementById('hamburger');
var navEl = document.getElementById('main-nav');
hamburger.addEventListener('click', function() { navEl.classList.toggle('open'); });

// ── Category filter ──
var navLinks = document.querySelectorAll('.nav-link');
var allCards = document.querySelectorAll('.post-card, .post-featured');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    navLinks.forEach(function(l) { l.classList.remove('active'); });
    link.classList.add('active');
    var cat = link.dataset.cat;
    allCards.forEach(function(card) {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
    navEl.classList.remove('open');

    var postsSection = document.querySelector('.posts-section');
    if (postsSection) {
      postsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Load more ──
var loadBtn = document.getElementById('load-more');
loadBtn.addEventListener('click', function() {
  loadBtn.textContent = 'Carregando...';
  loadBtn.disabled = true;
  setTimeout(function() {
    loadBtn.textContent = 'Não há mais posts';
    loadBtn.style.opacity = '0.4';
    loadBtn.style.cursor = 'default';
  }, 1000);
});


// ══════════════════════════════════════════════════════════════
// ── INTEGRAÇÃO 2: RSS FEED DO X (via rss.app)             ──
// ══════════════════════════════════════════════════════════════

var RSS_FEED_URL = 'https://rss.app/feeds/v1.1/9QoEF0bvtjASd99D.json';

var AVATAR_URL = 'https://pbs.twimg.com/profile_images/1895267817038684160/jxB7R0mn_400x400.jpg';
var X_PROFILE = 'https://x.com/analiseball';
var MAX_TWEETS = 4;

// SVG do logo do X
var X_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="rss-tweet-x-logo"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';

// Formata data relativa
function timeAgo(dateStr) {
  var now = new Date();
  var date = new Date(dateStr);
  var diffMs = now - date;
  var diffMin = Math.floor(diffMs / 60000);
  var diffH = Math.floor(diffMin / 60);
  var diffD = Math.floor(diffH / 24);

  if (diffMin < 1) return 'agora';
  if (diffMin < 60) return diffMin + 'min';
  if (diffH < 24) return diffH + 'h';
  if (diffD < 7) return diffD + 'd';
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' });
}

// Cria HTML de um tweet card
function createTweetCard(tweet) {
  var card = document.createElement('a');
  card.className = 'rss-tweet-card';
  card.href = tweet.link || X_PROFILE;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  var mediaHTML = '';
  if (tweet.image) {
    mediaHTML = '<div class="rss-tweet-media"><img src="' + tweet.image + '" alt="" loading="lazy" /></div>';
  }

  card.innerHTML =
    '<div class="rss-tweet-header">' +
      '<img class="rss-tweet-avatar" src="' + AVATAR_URL + '" alt="Avatar" />' +
      '<div class="rss-tweet-author">' +
        '<span class="rss-tweet-name">An\u00e1lise Ball</span>' +
        '<span class="rss-tweet-handle">@AnaliseBall</span>' +
      '</div>' +
      X_SVG +
    '</div>' +
    '<div class="rss-tweet-text">' + (tweet.text || '') + '</div>' +
    mediaHTML +
    '<div class="rss-tweet-footer">' +
      '<span class="rss-tweet-date">' + timeAgo(tweet.date) + '</span>' +
    '</div>';

  return card;
}

// Renderiza tweets no grid
function renderTweets(tweets) {
  var grid = document.getElementById('rss-tweets-grid');
  var loading = document.getElementById('rss-loading');
  if (loading) loading.remove();

  if (!tweets || tweets.length === 0) {
    grid.innerHTML =
      '<div class="rss-empty">' +
        '<p>Nenhum tweet dispon\u00edvel no momento.</p>' +
        '<p>Siga <a href="' + X_PROFILE + '" target="_blank">@AnaliseBall no X</a> para ver o conte\u00fado em tempo real.</p>' +
      '</div>';
    return;
  }

  tweets.slice(0, MAX_TWEETS).forEach(function(tweet) {
    grid.appendChild(createTweetCard(tweet));
  });
}

// Tweets de exemplo (fallback caso o feed falhe)
function getExampleTweets() {
  return [
    {
      text: "\ud83c\udfc6 Oitavas da Champions HOJE! Liverpool, Barcelona, City e Bayern em campo. Quem avan\u00e7a? Minha an\u00e1lise completa no site \ud83d\udc47",
      date: new Date(Date.now() - 2 * 3600000).toISOString(),
      link: X_PROFILE,
      image: null
    },
    {
      text: "\ud83c\udfc0 SGA \u00e9 INEVIT\u00c1VEL. 35 pts, 15 ast, game-winner no buzzer. Igualou Wilt Chamberlain \u2014 126 jogos seguidos com 20+ pontos. O Thunder \u00e9 REAL.",
      date: new Date(Date.now() - 5 * 3600000).toISOString(),
      link: X_PROFILE,
      image: null
    },
    {
      text: "\ud83e\uddf5 THREAD: A hist\u00f3ria completa de como o Barcelona quebrou financeiramente. De Neymar a Bartomeu, dos sal\u00e1rios absurdos \u00e0s alavancas. 1/20 \u2935\ufe0f",
      date: new Date(Date.now() - 24 * 3600000).toISOString(),
      link: X_PROFILE,
      image: null
    },
    {
      text: "\ud83c\udfce\ufe0f F1 2026 come\u00e7a DOMINGO! Novos regulamentos, nova era. Mercedes e Red Bull favoritas mas Ferrari e McLaren podem surpreender.",
      date: new Date(Date.now() - 48 * 3600000).toISOString(),
      link: X_PROFILE,
      image: null
    }
  ];
}

// Busca o feed RSS real
function fetchRSSFeed() {
  fetch(RSS_FEED_URL)
    .then(function(response) {
      if (!response.ok) throw new Error('Falha ao carregar feed');
      return response.json();
    })
    .then(function(data) {
      // JSON Feed spec: items em data.items
      var items = data.items || data.entries || [];

      if (items.length === 0) {
        renderTweets(getExampleTweets());
        return;
      }

      var tweets = items.map(function(item) {
        // Extrai imagem se existir
        var image = null;
        if (item.image) {
          image = item.image;
        } else if (item.attachments && item.attachments.length > 0) {
          var att = item.attachments[0];
          if (att.mime_type && att.mime_type.indexOf('image') !== -1) {
            image = att.url;
          }
        }

        // Limpa texto HTML para texto puro
        var rawText = item.content_text || item.title || item.summary || item.description || '';
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = rawText;
        var cleanText = tempDiv.textContent || tempDiv.innerText || '';

        return {
          text: cleanText.trim(),
          date: item.date_published || item.date_modified || item.pubDate || new Date().toISOString(),
          link: item.url || item.external_url || item.link || X_PROFILE,
          image: image
        };
      });

      renderTweets(tweets);
    })
    .catch(function(err) {
      console.warn('RSS Feed indisponivel, usando tweets de exemplo:', err);
      renderTweets(getExampleTweets());
    });
}

// Inicializa o feed
fetchRSSFeed();
