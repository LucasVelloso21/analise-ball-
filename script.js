// ── Post data ──
const posts = [
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
const modal = document.getElementById('post-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalCat = document.getElementById('modal-cat');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalText = document.getElementById('modal-text');

function getImgSrc(card) {
  const img = card.querySelector('.card-thumb img, .post-featured-thumb img');
  return img ? img.src : null;
}

function openPost(card) {
  const title = (card.querySelector('.card-title, .post-featured-title') || {}).textContent || '';
  const catEl = card.querySelector('.post-cat');
  const catLabel = catEl ? catEl.textContent.trim() : '';
  const catClass = catEl ? catEl.className.replace('post-cat', '').trim() : '';
  const footerSpans = card.querySelectorAll('.post-footer span');
  const date = footerSpans[0] ? footerSpans[0].textContent : '';
  const readTime = footerSpans[2] ? footerSpans[2].textContent : '';
  const imgSrc = getImgSrc(card);
  const post = posts.find(function(p) { return p.title === title.trim(); });

  modalCat.textContent = catLabel;
  modalCat.className = 'post-cat ' + catClass;
  modalTitle.textContent = title.trim();
  modalMeta.innerHTML = '<span>Análise Ball</span><span class="dot">·</span><span>' + date + '</span><span class="dot">·</span><span>' + readTime + '</span>';

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
var nav = document.getElementById('main-nav');
hamburger.addEventListener('click', function() { nav.classList.toggle('open'); });

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
    nav.classList.remove('open');

    // Scroll suave até a seção de posts
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
