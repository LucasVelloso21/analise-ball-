// ══════════════════════════════════════════════════
// ── ANÁLISE BALL — Script Principal ──
// ══════════════════════════════════════════════════

// ── Posts reais baseados no conteúdo do @AnaliseBall ──
var posts = [
  {
    title: "Manchester United vence bem o Aston Villa com Casemiro decisivo",
    cat: "futebol", catLabel: "Premier League",
    date: "16 Mar 2026", readTime: "4 min de leitura",
    img: "https://pbs.twimg.com/media/HDkT11zWsAAB83B.jpg",
    text: "<p>Muito diferente do último jogo, onde acabou fazendo o seu primeiro jogo ruim do início ao fim sob o comando de Carrick, o <strong>Manchester United</strong> venceu muito bem o Aston Villa.</p><p>Casemiro se mostra mais pilar do que nunca para o bom funcionamento do time, algo que vem faz muito tempo.</p><p>Bruno Fernandes mostra novamente que está entre os melhores jogadores da posição e do mundo, ganhando o devido reconhecimento a cada temporada e jogos passados. Uma pena não renovar e poder continuar a bonita história que construiu.</p><p><strong>Matheus Cunha</strong> foi bem novamente, para além do gol importantíssimo marcado. O Manchester United encaminha o seu objetivo de voltar para as competições europeias.</p>"
  },
  {
    title: "Liverpool decepciona novamente e Arne Slot mostra fragilidade",
    cat: "futebol", catLabel: "Premier League",
    date: "16 Mar 2026", readTime: "3 min de leitura",
    img: "https://pbs.twimg.com/media/HDkUMhLXYAA9Aro.jpg",
    text: "<p>Mais uma vez o trabalho de <strong>Arne Slot</strong> se mostra frágil, onde consegue fazer o Liverpool ser uma bagunça em diversos momentos.</p><p>Criou jogadas e situações para levar mais perigo, entretanto, desperdiçou sua grande maioria.</p><p>Apenas <strong>Dominik Szoboszlai</strong> e <strong>Rio Ngumoha</strong> se sobressaíram, sendo o meio-campista húngaro o MVP do time na temporada de forma isolada.</p><p>O Tottenham salva um ponto importante. A expectativa era de uma derrota e conseguiu um empate com Richarlison sendo decisivo.</p>"
  },
  {
    title: "O trabalho de Cesc Fàbregas no Como: verticalidade e associação",
    cat: "futebol", catLabel: "Serie A",
    date: "16 Mar 2026", readTime: "3 min de leitura",
    img: "https://pbs.twimg.com/media/HDkUkn5XgAElyur.jpg",
    text: "<p>Algo sempre importante e legal de se destacar do <strong>Como</strong>, onde elogiar o trabalho de Cesc Fàbregas é chover no molhado:</p><p>Um time extremamente vertical em inúmeros momentos e associativo, que com isso, consegue quebrar a maioria dos times do campeonato italiano.</p><p>Embora o gol da vitória venha de uma jogada de escanteio, se utilizou dos espaços para atacar verticalmente e incomodar. Isso é algo maneiro e que merece destaque.</p>"
  },
  {
    title: "Bayern de Munique empata com Bayer Leverkusen em jogo com 2 expulsões",
    cat: "futebol", catLabel: "Bundesliga",
    date: "15 Mar 2026", readTime: "4 min de leitura",
    img: "https://pbs.twimg.com/media/HDbt7QkWMAA5j2K.jpg",
    text: "<p>Resultado ok para o <strong>Bayern de Munique</strong>, visto que teve dois jogadores expulsos no decorrer da partida. Foi bem em tentar fazer o seu jogo.</p><p><strong>Harry Kane</strong> se mostrou novamente uma aberração, ao entrar e mudar o jogo por determinado tempo — muito por ser além de um camisa 9.</p><p>Pelo lado do Bayer Leverkusen, fica uma sensação estranha. Fez 2 jogos que exigiam concentração máxima e conseguiram bons resultados, visto que são inferiores. A grande questão é ter tido vantagem numérica desde o minuto 42 e desperdiçar chances.</p><p>Méritos da <strong>Atalanta</strong> em conseguir sobreviver ao primeiro tempo, acreditar que seria possível sair com um resultado ok e tentar mais. Deu certo.</p>"
  },
  {
    title: "GP da China 2026: Mercedes domina e top 3 é todo da equipe",
    cat: "f1", catLabel: "F1",
    date: "15 Mar 2026", readTime: "3 min de leitura",
    img: "https://pbs.twimg.com/media/HDcGOodXAAAfA4N.jpg",
    text: "<p>O top 3 do <strong>GP da China de 2026</strong> é Mercedes FC. Começo de temporada avassalador.</p><p>Basicamente não há disputa com a Mercedes, embora a Ferrari tenha sido a equipe mais próxima de conseguir algo nesse sentido. É bem provável que tenhamos algo com as atualizações.</p><p>A disputa de <strong>Lewis Hamilton</strong> e <strong>Charles Leclerc</strong> pelo 3° lugar foi o que mais gerou entretenimento no GP.</p>"
  },
  {
    title: "Mercedes avassaladora: começo de temporada sem rivais na F1 2026",
    cat: "f1", catLabel: "F1",
    date: "15 Mar 2026", readTime: "3 min de leitura",
    img: "https://pbs.twimg.com/media/HDcH2RSWAAAU9oO.jpg",
    text: "<p>Basicamente não há disputa com a <strong>Mercedes</strong>, a realidade é essa. Embora a Ferrari tenha sido a equipe mais próxima de conseguir algo nesse sentido, é bem provável que tenhamos algo com as atualizações ao longo da temporada.</p><p>No mais, começo de temporada avassalador para a equipe alemã que dominou o GP da China de ponta a ponta.</p>"
  },
  {
    title: "Gui Santos: símbolo de resistência do esporte brasileiro",
    cat: "basquete", catLabel: "NBA",
    date: "12 Mar 2026", readTime: "2 min de leitura",
    img: "https://pbs.twimg.com/media/HDgMlOgXYAAMhjx.jpg",
    text: "<p>O salto de <strong>Gui Santos</strong> veio no momento certo. Enquanto grandes instituições como São Paulo e Corinthians encerram atividades de base no esporte, Gui Santos surge como um símbolo de resistência.</p><p>Mostrando que o esporte brasileiro ainda tem presente e muito futuro. Um orgulho para o basquete nacional.</p>"
  },
  {
    title: "Volta Redonda classificado na Copa do Brasil nos pênaltis",
    cat: "futebol", catLabel: "Copa do Brasil",
    date: "12 Mar 2026", readTime: "2 min de leitura",
    img: "https://pbs.twimg.com/amplify_video_thumb/2032223439054893057/img/fX3A1zyzCls6qt-8.jpg",
    text: "<p>Classificados na Copa do Brasil! <strong>Volta Redonda 0 (5)x(3) 0 América-RN</strong>.</p><p>Alguns dizem que pênaltis é loteria. Preferimos acreditar que é estudo e muito trabalho. O estudo atrelado ao treinamento no dia a dia só tem a nos aproximar das conquistas.</p>"
  },
  {
    title: "Simplesmente não dá pra acreditar nesse lance",
    cat: "futebol", catLabel: "Futebol",
    date: "17 Mar 2026", readTime: "1 min de leitura",
    img: "https://pbs.twimg.com/ext_tw_video_thumb/2026005743900454912/pu/img/HNnrXe7sHbZU7jEd.jpg",
    text: "<p>Simplesmente não dá pra acreditar em um negócio desses. Um lance que desafia a lógica do futebol e mostra que esse esporte é imprevisível como nenhum outro.</p>"
  }
];

// ══════════════════════════════════════════
// ── SIDEBAR: Threads + Ranking ──
// ══════════════════════════════════════════

function renderThreadsSidebar() {
  var el = document.getElementById('threads-list');
  if (!el) return;
  var threads = posts.filter(function(p) { return p.cat === 'thread'; });
  if (threads.length === 0) {
    // Sem threads ainda, mostra os posts de futebol como destaques
    var destaques = posts.filter(function(p) { return p.cat === 'futebol'; }).slice(0, 3);
    el.innerHTML = destaques.map(function(t, i) {
      return '<div class="thread-card" data-tidx="' + i + '">' +
        '<span class="thread-num">' + String(i+1).padStart(2,'0') + '</span>' +
        '<div class="thread-label">' + t.catLabel + ' \u00b7 ' + t.readTime + '</div>' +
        '<div class="thread-title">' + t.title + '</div>' +
      '</div>';
    }).join('');
    el.querySelectorAll('.thread-card').forEach(function(c) {
      c.addEventListener('click', function() {
        var futebolPosts = posts.filter(function(p) { return p.cat === 'futebol'; });
        openPostFromData(futebolPosts[parseInt(c.dataset.tidx)]);
      });
    });
    return;
  }
  el.innerHTML = threads.map(function(t, i) {
    return '<div class="thread-card" data-tidx="' + i + '">' +
      '<span class="thread-num">' + String(i+1).padStart(2,'0') + '</span>' +
      '<div class="thread-label">Thread \u00b7 ' + t.readTime + '</div>' +
      '<div class="thread-title">' + t.title + '</div>' +
    '</div>';
  }).join('');
  el.querySelectorAll('.thread-card').forEach(function(c) {
    c.addEventListener('click', function() {
      var th = posts.filter(function(p) { return p.cat === 'thread'; });
      openPostFromData(th[parseInt(c.dataset.tidx)]);
    });
  });
}

function renderRankingSidebar() {
  var el = document.getElementById('ranking-list');
  if (!el) return;
  posts.slice(0, 5).forEach(function(p, i) {
    var div = document.createElement('div');
    div.className = 'ranking-item';
    div.innerHTML = '<span class="rank-num">' + (i+1) + '</span><div><div class="rank-title">' +
      (p.title.length > 50 ? p.title.substring(0,50)+'...' : p.title) +
      '</div><div class="rank-cat">' + (p.catLabel||p.cat) + '</div></div>';
    div.style.cursor = 'pointer';
    div.addEventListener('click', function() { openPostFromData(p); });
    el.appendChild(div);
  });
}

// ══════════════════════════════
// ── Modal ──
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
  if (post.img) {
    modalImg.innerHTML = '<img src="' + post.img + '" alt="' + post.title + '"/>';
    modalImg.classList.remove('no-img');
  } else {
    modalImg.innerHTML = '';
    modalImg.classList.add('no-img');
  }
  modalText.innerHTML = post.text || '<p>Conteúdo completo em breve.</p>';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePost() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.post-card, .post-featured').forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (e.target.closest('a, button')) return;
    openPost(card);
  });
});
modalOverlay.addEventListener('click', closePost);
modalClose.addEventListener('click', closePost);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePost(); });

// ── Hamburger ──
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('open');
});

// ── Category filter ──
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
    link.classList.add('active');
    var cat = link.dataset.cat;
    document.querySelectorAll('.post-card, .post-featured').forEach(function(card) {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
    document.getElementById('main-nav').classList.remove('open');
  });
});

// ── Load more ──
var loadBtn = document.getElementById('load-more');
if (loadBtn) loadBtn.addEventListener('click', function() {
  loadBtn.textContent = 'Carregando...';
  loadBtn.disabled = true;
  setTimeout(function() { loadBtn.textContent = 'Não há mais posts'; loadBtn.style.opacity = '0.4'; }, 1000);
});

// ══════════════════════════════════════════
// ── RSS FEED DO X ──
// ══════════════════════════════════════════

var RSS_FEED_URL = 'https://rss.app/feeds/v1.1/9QoEF0bvtjASd99D.json';
var AVATAR_URL = 'https://pbs.twimg.com/profile_images/1895267817038684160/jxB7R0mn_400x400.jpg';
var X_PROFILE = 'https://x.com/analiseball';
var X_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="rss-tweet-x-logo"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';

function timeAgo(d) {
  var ms = new Date() - new Date(d), m = Math.floor(ms/60000), h = Math.floor(m/60), dd = Math.floor(h/24);
  if (m < 1) return 'agora'; if (m < 60) return m+'min'; if (h < 24) return h+'h'; if (dd < 7) return dd+'d';
  return new Date(d).toLocaleDateString('pt-BR',{day:'numeric',month:'short'});
}

function renderTweets(tweets) {
  var g = document.getElementById('rss-tweets-grid');
  var l = document.getElementById('rss-loading');
  if (l) l.remove();
  if (!tweets||!tweets.length) { g.innerHTML='<div class="rss-empty"><p>Siga <a href="'+X_PROFILE+'" target="_blank">@AnaliseBall</a> no X</p></div>'; return; }
  tweets.slice(0,4).forEach(function(t) {
    var c = document.createElement('a');
    c.className = 'rss-tweet-card'; c.href = t.link||X_PROFILE; c.target = '_blank'; c.rel = 'noopener';
    var media = t.image ? '<div class="rss-tweet-media"><img src="'+t.image+'" alt="" loading="lazy"/></div>' : '';
    c.innerHTML = '<div class="rss-tweet-header"><img class="rss-tweet-avatar" src="'+AVATAR_URL+'" alt=""/><div class="rss-tweet-author"><span class="rss-tweet-name">Análise Ball</span><span class="rss-tweet-handle">@AnaliseBall</span></div>'+X_SVG+'</div><div class="rss-tweet-text">'+t.text+'</div>'+media+'<div class="rss-tweet-footer"><span class="rss-tweet-date">'+timeAgo(t.date)+'</span></div>';
    g.appendChild(c);
  });
}

function fetchRSSFeed() {
  fetch(RSS_FEED_URL)
    .then(function(r) { if(!r.ok) throw 0; return r.json(); })
    .then(function(d) {
      var items = d.items||[];
      if(!items.length) { renderTweets([]); return; }
      renderTweets(items.map(function(i) {
        var img = i.image || (i.attachments&&i.attachments[0]?i.attachments[0].url:null);
        var div = document.createElement('div'); div.innerHTML = i.content_text||i.title||'';
        return { text:(div.textContent||'').trim().split('—')[0].trim(), date:i.date_published||'', link:i.url||X_PROFILE, image:img };
      }));
    })
    .catch(function() { renderTweets([]); });
}

// ── INIT ──
renderThreadsSidebar();
renderRankingSidebar();
fetchRSSFeed();
