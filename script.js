// ══════════════════════════════════════════════════
// ── ANÁLISE BALL — Script Principal ──
// ══════════════════════════════════════════════════

// ── Post data (atualize via admin.html) ──
var posts = [
  {
    title: "Oitavas da Champions hoje: Liverpool, Barcelona, City e Bayern entram em campo",
    cat: "futebol", catLabel: "Champions League",
    date: "18 Mar 2026", readTime: "5 min de leitura",
    text: "<p>Começa hoje a fase de mata-mata da Champions League 2025/26! Quatro jogos de ida das oitavas de final prometem emoção.</p><p><strong>Galatasaray x Liverpool</strong> (14h45) — Os turcos recebem os ingleses em Istambul. Liverpool favorito mas o ambiente no Ali Sami Yen é infernal.</p><p><strong>Newcastle x Barcelona</strong> (17h) — Um dos jogos mais aguardados. Lewandowski x Isak no duelo de centroavantes. St. James' Park vai ferver.</p><p><strong>Atlético de Madrid x Tottenham</strong> (17h) — Simeone quer abrir vantagem em casa com sua defesa sólida.</p><p><strong>Atalanta x Bayern de Munique</strong> (17h) — Bayern favorito mas a Dea de Gasperini pode surpreender com seu futebol intenso.</p><p>Amanhã tem o clássico <strong>Real Madrid x Manchester City</strong>! Haaland vs Mbappé.</p>"
  },
  {
    title: "Real Madrid x Manchester City: Mbappé vs Haaland no duelo do ano",
    cat: "futebol", catLabel: "Champions League",
    date: "17 Mar 2026", readTime: "7 min de leitura",
    text: "<p>O Santiago Bernabéu recebe amanhã o que muitos consideram o melhor jogo das oitavas de final da Champions League 2025/26.</p><p>De um lado, <strong>Kylian Mbappé</strong> vivendo sua melhor temporada com a camisa merengue. Do outro, <strong>Erling Haaland</strong>, a máquina de gols norueguesa que não para de quebrar recordes.</p><p>Guardiola volta ao Bernabéu pela primeira vez desde a eliminação dramática na temporada passada. Ancelotti tem o fator casa e um elenco que respira Champions League.</p><p>Escalações prováveis, análise tática e palpite no post completo.</p>"
  },
  {
    title: "SGA iguala recorde de Wilt Chamberlain com 35 pts e game-winner sobre o Nuggets",
    cat: "basquete", catLabel: "NBA",
    date: "16 Mar 2026", readTime: "5 min de leitura",
    text: "<p>Shai Gilgeous-Alexander fez história na noite de segunda-feira. Com 35 pontos, 15 assistências e 9 rebotes, igualou o recorde de Wilt Chamberlain de 126 jogos consecutivos com pelo menos 20 pontos.</p><p>Com o placar empatado a 10 segundos do fim, SGA criou espaço e converteu o step-back de três pontos para selar a vitória do <strong>Thunder por 129-126</strong> sobre o Nuggets.</p><p>SGA pode quebrar o recorde na quinta-feira em casa contra o Boston Celtics. O Thunder segue como principal favorito ao título do Oeste com a melhor campanha da NBA.</p>"
  },
  {
    title: "Celtics vs Cavaliers: a rivalidade que define o Leste em 2026",
    cat: "basquete", catLabel: "NBA",
    date: "15 Mar 2026", readTime: "6 min de leitura",
    text: "<p>Boston e Cleveland protagonizam a rivalidade mais quente da conferência Leste nesta temporada. Os Celtics, atuais campeões, enfrentam um Cavaliers reformulado e faminto.</p><p>Donovan Mitchell está jogando o basquete da vida dele e Evan Mobley se consolidou como um dos melhores defensores da liga. Do lado de Boston, Tatum e Brown continuam mortais.</p><p>Analisamos os matchups, os números e quem leva vantagem nos playoffs.</p>"
  },
  {
    title: "A história completa de como o Barcelona quebrou financeiramente",
    cat: "thread", catLabel: "Thread",
    date: "14 Mar 2026", readTime: "20 partes",
    text: "<p>O Barcelona viveu uma crise financeira sem precedentes nos últimos anos. A gestão de Bartomeu (2014-2020) foi marcada por gastos exorbitantes que comprometeram as finanças do clube por anos.</p><p>Tudo começou com a contratação de Neymar em 2013 — um negócio que custou muito mais do que os 57 milhões oficiais. Processos judiciais, bônus secretos e cláusulas ocultas.</p><p>Depois vieram os salários astronômicos: Messi ganhava mais de 100 milhões de euros por temporada. Griezmann, Dembélé e Coutinho foram contratações bilionárias que não deram retorno.</p><p>A pandemia de Covid em 2020 expôs os problemas estruturais. O Barça revelou uma dívida de mais de <strong>1,3 bilhão de euros</strong>.</p><p>Com Laporta, o clube apostou nas alavancas econômicas — vendendo direitos de TV e participações para se reerguer. A reconstrução ainda está em andamento mas os sinais são positivos com La Masia produzindo talentos como Lamine Yamal.</p>"
  },
  {
    title: "Como a NFL transformou o Draft na maior vitrine esportiva dos EUA",
    cat: "thread", catLabel: "Thread",
    date: "12 Mar 2026", readTime: "15 partes",
    text: "<p>O Draft da NFL deixou de ser um evento burocrático para se tornar um espetáculo de 3 dias que atrai milhões de espectadores.</p><p>Nos anos 80, o draft era feito num hotel em Nova York com pouca fanfarra. Hoje, é um evento itinerante que transforma cidades inteiras, com palcos gigantes, shows musicais e cobertura 24h.</p><p>A estratégia por trás: a NFL percebeu que o draft preenchia o vazio da offseason e mantinha os fãs engajados durante os meses sem jogos.</p><p>Analisamos a evolução do evento, os melhores e piores picks da história, e como o draft de 2026 promete ser o maior de todos.</p>"
  },
  {
    title: "A evolução tática de Guardiola: do tiki-taka ao jogo posicional moderno",
    cat: "thread", catLabel: "Thread",
    date: "10 Mar 2026", readTime: "18 partes",
    text: "<p>Pep Guardiola não inventou o tiki-taka — ele o transformou em algo muito maior. Do Barcelona ao Bayern e agora no City, sua filosofia evoluiu constantemente.</p><p>No Barça, era posse de bola com Messi de falso 9. No Bayern, foi transição rápida e largura. No City, o jogo posicional chegou ao ápice com laterais invertidos e zagueiros que sobem.</p><p>Nesta thread, mapeamos cada fase tática de Guardiola, as inspirações (Cruyff, Bielsa, Sacchi) e como ele continua reinventando o futebol em 2026.</p>"
  },
  {
    title: "GP da Austrália: preview completo e quem pode surpreender",
    cat: "f1", catLabel: "F1",
    date: "13 Mar 2026", readTime: "6 min de leitura",
    text: "<p>A temporada 2026 da F1 começa em Melbourne com novos regulamentos técnicos que prometem revolucionar o grid. As primeiras impressões dos treinos livres mostram que a hierarquia pode ter mudado.</p><p><strong>Mercedes</strong> e <strong>Red Bull</strong> chegam como favoritas, mas Ferrari e McLaren deram sinais muito fortes nos testes de pré-temporada no Bahrein.</p><p>Os novos regulamentos de motor e aerodinâmica criam uma incógnita: quem adaptou melhor o carro às novas regras? O circuito de Albert Park foi reformado e promete tempos recordes.</p><p>Verstappen busca o tetracampeonato. Hamilton, agora na Ferrari, quer provar que ainda pode vencer. Norris e Piastri são as apostas para surpreender.</p>"
  },
  {
    title: "Free Agency 2026: os melhores contratos e as apostas arriscadas",
    cat: "nfl", catLabel: "NFL",
    date: "11 Mar 2026", readTime: "9 min de leitura",
    text: "<p>A janela de agência livre da NFL 2026 movimentou centenas de milhões de dólares nas primeiras 48 horas. Separamos os melhores negócios e as apostas mais arriscadas da offseason.</p><p>A movimentação de quarterbacks foi o grande tema — vários times mudaram de titular, redesenhando o mapa de poder da liga para 2026. Alguns contratos são geniais, outros podem arruinar franquias por anos.</p><p>Destaque para os movimentos dos <strong>Bears</strong>, que montaram um elenco competitivo ao redor do QB jovem, e dos <strong>Cowboys</strong>, que fizeram apostas ousadas na defesa.</p>"
  },
  {
    title: "Trade Deadline: Oilers se reforçam e tentam o bicampeonato",
    cat: "nhl", catLabel: "NHL",
    date: "9 Mar 2026", readTime: "5 min de leitura",
    text: "<p>O Edmonton Oilers foi o grande protagonista da trade deadline da NHL 2026. O campeão defensor trouxe dois defensores experientes e um forward de profundidade para endurecer o elenco.</p><p><strong>Connor McDavid</strong> segue sendo o melhor jogador do mundo e está em grande fase — lidera a liga em assistências e é segundo em pontos. O desafio agora é manter a coesão do grupo durante os playoffs.</p><p>Outros times que se movimentaram bem: Panthers (trouxeram um goleiro reserva de elite), Rangers (reforçaram a primeira linha) e Avalanche (apostaram tudo com trades agressivos).</p>"
  },
  {
    title: "Flamengo anuncia reforço europeu para o Brasileirão 2026",
    cat: "futebol", catLabel: "Brasileirão",
    date: "8 Mar 2026", readTime: "4 min de leitura",
    text: "<p>O Flamengo anunciou a contratação de um meia-atacante revelado no futebol português para reforçar o elenco no Brasileirão 2026 e na Copa Libertadores.</p><p>O jogador se destacou na última temporada europeia com 12 gols e 8 assistências em 34 jogos, sendo eleito revelação do campeonato português.</p><p>Com valores consideráveis envolvidos na negociação, o Flamengo demonstra disposição de voltar ao topo do futebol nacional após uma temporada 2025 abaixo das expectativas.</p>"
  },
  {
    title: "Palmeiras x São Paulo: clássico define liderança do Paulistão",
    cat: "futebol", catLabel: "Paulistão",
    date: "7 Mar 2026", readTime: "4 min de leitura",
    text: "<p>O Choque-Rei de domingo pode definir quem lidera a fase de grupos do Campeonato Paulista 2026. Palmeiras e São Paulo chegam invictos e com os melhores ataques da competição.</p><p>Abel Ferreira aposta no contra-ataque letal com Estêvão e Endrick (emprestado pelo Real Madrid). Zubeldía mantém o São Paulo organizado e difícil de bater.</p><p>Escalações prováveis, desfalques e palpite.</p>"
  }
];

// ══════════════════════════════════════════
// ── SIDEBAR DINÂMICA: Threads + Ranking ──
// ══════════════════════════════════════════

function renderThreadsSidebar() {
  var threadsList = document.getElementById('threads-list');
  if (!threadsList) return;

  var threads = posts.filter(function(p) { return p.cat === 'thread'; });

  if (threads.length === 0) {
    threadsList.innerHTML = '<p style="font-size:12px;color:#9a9a94;">Nenhuma thread publicada ainda.</p>';
    return;
  }

  threadsList.innerHTML = threads.map(function(t, i) {
    var num = String(i + 1).padStart(2, '0');
    return '<div class="thread-card" data-thread-idx="' + i + '">' +
      '<span class="thread-num">' + num + '</span>' +
      '<div class="thread-label">Thread \u00b7 ' + t.readTime + '</div>' +
      '<div class="thread-title">' + t.title + '</div>' +
    '</div>';
  }).join('');

  threadsList.querySelectorAll('.thread-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var idx = parseInt(card.dataset.threadIdx);
      var threadPosts = posts.filter(function(p) { return p.cat === 'thread'; });
      if (threadPosts[idx]) openPostFromData(threadPosts[idx]);
    });
  });
}

function renderRankingSidebar() {
  var rankingList = document.getElementById('ranking-list');
  if (!rankingList) return;

  var top = posts.slice(0, 5);

  rankingList.innerHTML = top.map(function(p, i) {
    return '<div class="ranking-item" data-rank-idx="' + i + '">' +
      '<span class="rank-num">' + (i + 1) + '</span>' +
      '<div>' +
        '<div class="rank-title">' + truncateText(p.title, 50) + '</div>' +
        '<div class="rank-cat">' + (p.catLabel || p.cat) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  rankingList.querySelectorAll('.ranking-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var idx = parseInt(item.dataset.rankIdx);
      if (posts[idx]) openPostFromData(posts[idx]);
    });
  });
}

function truncateText(str, len) {
  return str.length > len ? str.substring(0, len) + '...' : str;
}

// ══════════════════════════════
// ── Modal logic ──
// ══════════════════════════════

var modal = document.getElementById('post-modal');
var modalOverlay = document.getElementById('modal-overlay');
var modalClose = document.getElementById('modal-close');
var modalImg = document.getElementById('modal-img');
var modalCat = document.getElementById('modal-cat');
var modalTitle = document.getElementById('modal-title');
var modalMeta = document.getElementById('modal-meta');
var modalText = document.getElementById('modal-text');

function openPost(card) {
  var title = (card.querySelector('.card-title, .post-featured-title') || {}).textContent || '';
  var post = posts.find(function(p) { return p.title === title.trim(); });
  if (post) openPostFromData(post);
}

function openPostFromData(post) {
  modalCat.textContent = post.catLabel || post.cat;
  modalCat.className = 'post-cat ' + (post.cat || '');
  modalTitle.textContent = post.title;
  modalMeta.innerHTML = '<span>Análise Ball</span><span class="dot">\u00b7</span><span>' + post.date + '</span><span class="dot">\u00b7</span><span>' + post.readTime + '</span>';
  modalImg.innerHTML = '';
  modalImg.classList.add('no-img');
  modalText.innerHTML = post.text || '<p>Conteúdo completo em breve.</p>';
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
    if (postsSection) postsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Load more ──
var loadBtn = document.getElementById('load-more');
if (loadBtn) {
  loadBtn.addEventListener('click', function() {
    loadBtn.textContent = 'Carregando...';
    loadBtn.disabled = true;
    setTimeout(function() {
      loadBtn.textContent = 'Não há mais posts';
      loadBtn.style.opacity = '0.4';
      loadBtn.style.cursor = 'default';
    }, 1000);
  });
}

// ══════════════════════════════════════════════════════════════
// ── INTEGRAÇÃO: RSS FEED DO X (via rss.app)                ──
// ══════════════════════════════════════════════════════════════

var RSS_FEED_URL = 'https://rss.app/feeds/v1.1/9QoEF0bvtjASd99D.json';
var AVATAR_URL = 'https://pbs.twimg.com/profile_images/1895267817038684160/jxB7R0mn_400x400.jpg';
var X_PROFILE = 'https://x.com/analiseball';
var MAX_TWEETS = 4;
var X_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="rss-tweet-x-logo"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';

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
      '<img class="rss-tweet-avatar" src="' + AVATAR_URL + '" alt="" />' +
      '<div class="rss-tweet-author">' +
        '<span class="rss-tweet-name">Análise Ball</span>' +
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

function renderTweets(tweets) {
  var grid = document.getElementById('rss-tweets-grid');
  var loading = document.getElementById('rss-loading');
  if (loading) loading.remove();
  if (!tweets || tweets.length === 0) {
    grid.innerHTML = '<div class="rss-empty"><p>Siga <a href="' + X_PROFILE + '" target="_blank">@AnaliseBall no X</a> para ver o conteúdo em tempo real.</p></div>';
    return;
  }
  tweets.slice(0, MAX_TWEETS).forEach(function(tweet) {
    grid.appendChild(createTweetCard(tweet));
  });
}

function getExampleTweets() {
  return [
    { text: "\ud83c\udfc6 Oitavas da Champions HOJE! Liverpool, Barcelona, City e Bayern em campo. Quem avança?", date: new Date(Date.now() - 2*3600000).toISOString(), link: X_PROFILE, image: null },
    { text: "\ud83c\udfc0 SGA é INEVITÁVEL. 35 pts, game-winner no buzzer. Igualou Wilt Chamberlain — 126 jogos seguidos com 20+ pontos.", date: new Date(Date.now() - 5*3600000).toISOString(), link: X_PROFILE, image: null },
    { text: "\ud83e\uddf5 THREAD: Como o Barcelona quebrou financeiramente. De Neymar a Bartomeu, dos salários absurdos às alavancas. 1/20", date: new Date(Date.now() - 24*3600000).toISOString(), link: X_PROFILE, image: null },
    { text: "\ud83c\udfce\ufe0f F1 2026 começa neste final de semana! Novos regulamentos, nova era. Mercedes e Red Bull favoritas.", date: new Date(Date.now() - 48*3600000).toISOString(), link: X_PROFILE, image: null }
  ];
}

function fetchRSSFeed() {
  fetch(RSS_FEED_URL)
    .then(function(res) { if (!res.ok) throw new Error('Feed falhou'); return res.json(); })
    .then(function(data) {
      var items = data.items || data.entries || [];
      if (items.length === 0) { renderTweets(getExampleTweets()); return; }
      var tweets = items.map(function(item) {
        var image = null;
        if (item.image) image = item.image;
        else if (item.attachments && item.attachments.length > 0 && item.attachments[0].mime_type && item.attachments[0].mime_type.indexOf('image') !== -1) image = item.attachments[0].url;
        var raw = item.content_text || item.title || item.summary || '';
        var div = document.createElement('div'); div.innerHTML = raw;
        return { text: (div.textContent || '').trim(), date: item.date_published || item.date_modified || new Date().toISOString(), link: item.url || item.external_url || X_PROFILE, image: image };
      });
      renderTweets(tweets);
    })
    .catch(function() { renderTweets(getExampleTweets()); });
}

// ── INIT ──
renderThreadsSidebar();
renderRankingSidebar();
fetchRSSFeed();
