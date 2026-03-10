// ── Post data ──
const posts = [
  {
    id: "champions-oitavas-2026",
    cat: "futebol",
    catLabel: "Champions League",
    title: "Oitavas da Champions hoje: Liverpool, Barcelona, City e Bayern entram em campo",
    date: "10 Mar 2026",
    readTime: "5 min de leitura",
    img: null,
    text: `
      <p>Começa hoje a fase de mata-mata da UEFA Champions League 2025/26. São quatro jogos de ida das oitavas de final, com grandes duelos europeus prometendo muita emoção.</p>
      <p><strong>Galatasaray x Liverpool</strong> (14h45) — Os turcos recebem os ingleses em Istambul num ambiente que promete ser elétrico. Liverpool chega como favorito, mas o Galatasaray em casa é sempre perigoso.</p>
      <p><strong>Newcastle x Barcelona</strong> (17h) — Um dos confrontos mais aguardados. O Newcastle vive grande fase na Premier League e recebe o Barça diante de sua torcida. Lewandowski x Isak é o duelo de centroavantes do jogo.</p>
      <p><strong>Atlético de Madrid x Tottenham</strong> (17h) — O Atleti de Simeone quer aproveitar o fator casa para abrir vantagem sobre os Spurs, que chegam embalados na temporada inglesa.</p>
      <p><strong>Atalanta x Bayern de Munique</strong> (17h) — A Dea surpreendeu na fase de liga e quer continuar fazendo história. O Bayern, porém, é favorito e chega com força máxima.</p>
      <p>Amanhã, quarta-feira, os jogos continuam com o grande clássico <strong>Real Madrid x Manchester City</strong> — mais um capítulo de uma das rivalidades mais intensas do futebol europeu recente.</p>
    `
  },
  {
    id: "sga-record-wilt",
    cat: "basquete",
    catLabel: "NBA",
    title: "SGA iguala recorde de Wilt Chamberlain com 35 pts e game-winner sobre o Nuggets",
    date: "9 Mar 2026",
    readTime: "5 min de leitura",
    img: "sga",
    text: `
      <p>Shai Gilgeous-Alexander fez história na noite de segunda-feira. Com 35 pontos, 15 assistências e 9 rebotes, o astro do Oklahoma City Thunder igualou o recorde de Wilt Chamberlain de 126 jogos consecutivos com pelo menos 20 pontos.</p>
      <p>O jogo foi tenso até o fim. Com o placar empatado a 10 segundos do fim, SGA recebeu na entrada da área, criou espaço sobre Spencer Jones e converteu o step-back de três pontos para selar a vitória do Thunder por 129-126 sobre o Denver Nuggets.</p>
      <p>"Ele me destruiu hoje", admitiu Christian Braun, do Nuggets. "Sei que vou enfrenta-lo de novo nos playoffs. Ele foi melhor que eu nessa partida."</p>
      <p>Chamberlain estabeleceu seu recorde entre 1961 e 1963, numa era completamente diferente do basquete. SGA pode quebrar a marca na próxima quinta-feira, em casa contra o Boston Celtics.</p>
      <p>O Thunder segue como favorito ao título com o melhor campanha do Oeste e SGA na briga pelo segundo MVP consecutivo.</p>
    `
  },
  {
    id: "barcelona-financial",
    cat: "thread",
    catLabel: "Thread",
    title: "A história completa de como o Barcelona quebrou financeiramente",
    date: "8 Mar 2026",
    readTime: "20 partes",
    img: null,
    text: `
      <p>O Barcelona é um dos maiores clubes da história do futebol, mas nos últimos anos viveu uma crise financeira sem precedentes. Esta thread conta tudo — desde os contratos astronômicos até a tentativa de reconstrução.</p>
      <p><strong>Como chegou até aqui:</strong> A gestão de Josep Maria Bartomeu (2014-2020) foi marcada por gastos exorbitantes em contratações que não renderam, renovações polêmicas e decisões que comprometeram as finanças do clube por anos.</p>
      <p>O ponto de virada foi a pandemia de Covid-19 em 2020, que expôs de vez os problemas estruturais. O Barcelona revelou uma dívida de mais de 1,3 bilhão de euros — um número que chocou o mundo do futebol.</p>
      <p>Com a chegada de Joan Laporta, o clube apostou nas chamadas "alavancas econômicas" — vendas de ativos e direitos de transmissão futuros — para se reerguer e poder contratar jogadores.</p>
      <p>A reconstrução ainda está em andamento, mas os primeiros sinais são positivos. O clube voltou a competir na Champions League e busca recuperar o protagonismo europeu perdido.</p>
    `
  },
  {
    id: "f1-australia-2026",
    cat: "f1",
    catLabel: "F1",
    title: "GP da Austrália: preview completo e quem pode surpreender",
    date: "6 Mar 2026",
    readTime: "6 min de leitura",
    img: "f1",
    text: `
      <p>A temporada 2026 da Fórmula 1 começa neste fim de semana em Melbourne, na Austrália. Com novos regulamentos técnicos e muita expectativa, o GP da Austrália promete ser um dos mais imprevisíveis dos últimos anos.</p>
      <p><strong>Os novos carros:</strong> As equipes estreiam monoplaces com motorização híbrida atualizada e aerodinâmica completamente redesenhada. As primeiras impressões dos treinos livres mostraram que a hierarquia pode ter mudado significativamente.</p>
      <p><strong>Favoritos:</strong> Mercedes e Red Bull chegam como favoritas, mas a Ferrari e a McLaren deram sinais fortes durante os testes de pré-temporada. A surpresa pode vir da Aston Martin, que trouxe um pacote de atualizações agressivo.</p>
      <p><strong>Atenção especial:</strong> O circuito de Albert Park passou por reformas e está ainda mais veloz. Esperam-se tempos de volta recordes e muita ação nas ultrapassagens.</p>
      <p>A corrida acontece no domingo, com transmissão ao vivo pela Band e Bandsports. Não perca!</p>
    `
  },
  {
    id: "nfl-free-agency-2026",
    cat: "nfl",
    catLabel: "NFL",
    title: "Free Agency 2026: os melhores contratos e as apostas arriscadas",
    date: "7 Mar 2026",
    readTime: "9 min de leitura",
    img: null,
    text: `
      <p>A janela de agência livre da NFL 2026 abriu oficialmente e as negociações já movimentaram centenas de milhões de dólares. Separamos os movimentos mais importantes e analisamos quem saiu na frente.</p>
      <p><strong>Melhores contratos:</strong> Alguns times aproveitaram o mercado para se reforçar com jogadores de alto nível por valores razoáveis, apostando na saúde e consistência de veteranos experientes.</p>
      <p><strong>Apostas arriscadas:</strong> Outros franqueados pagaram valores recordes por jogadores que chegam de lesões ou com histórico irregular. O risco é alto, mas a recompensa pode ser o Super Bowl.</p>
      <p>A movimentação de quarterbacks foi o grande tema desta offseason. Vários times mudaram de titular, o que pode redesenhar completamente o mapa de poder da liga para a temporada 2026.</p>
      <p>O Draft de 2026 se aproxima e promete ser um dos mais disputados da história recente, especialmente na primeira rodada onde há múltiplos prospectos de elite em posições de necessidade.</p>
    `
  },
  {
    id: "oilers-nhl-trade",
    cat: "nhl",
    catLabel: "NHL",
    title: "Trade Deadline: Oilers se reforçam e tentam o bicampeonato",
    date: "5 Mar 2026",
    readTime: "5 min de leitura",
    img: null,
    text: `
      <p>O Edmonton Oilers foi o grande protagonista da trade deadline da NHL 2026. O campeão defensor fez movimentos cirúrgicos para endurecer o elenco e tentar conquistar o segundo título consecutivo.</p>
      <p>A prioridade foi a defesa — historicamente o ponto fraco do time de McDavid e Draisaitl. Dois defensores experientes foram trazidos para dar mais solidez à retaguarda sem abrir mão da velocidade ofensiva.</p>
      <p><strong>McDavid</strong> segue sendo o melhor jogador do mundo e está em um dos seus melhores momentos na temporada. Com Draisaitl igualmente inspirado, o ataque dos Oilers é de outro nível.</p>
      <p>O desafio agora é manter a coesão durante os playoffs, onde a intensidade é completamente diferente da temporada regular. O caminho até a final promete ser duro, especialmente se cruzarem com o Boston Bruins ou o Carolina Hurricanes.</p>
    `
  },
  {
    id: "flamengo-reforco-2026",
    cat: "futebol",
    catLabel: "Transferências",
    title: "Flamengo anuncia reforço europeu para o Brasileirão 2026",
    date: "4 Mar 2026",
    readTime: "4 min de leitura",
    img: null,
    text: `
      <p>O Flamengo anunciou a contratação de um meia-atacante revelado no futebol português, ex-Sporting, para reforçar o elenco na disputa do Brasileirão 2026 e da Copa Libertadores.</p>
      <p>O jogador se destacou na última temporada europeia com bons números e chamou a atenção de vários clubes brasileiros. O Rubro-Negro saiu na frente e fechou o negócio por uma quantia considerável, demonstrando a disposição do clube de investir para voltar ao topo do futebol nacional.</p>
      <p>A chegada reforça o setor de criação do Flamengo, que sentiu a falta de um jogador com esse perfil na temporada passada. A comissão técnica espera que o reforço se adapte rapidamente ao futebol brasileiro.</p>
      <p>O Brasileirão 2026 começa no final de março e o Flamengo chega como um dos favoritos ao título, ao lado de Palmeiras e Athletico Paranaense.</p>
    `
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

// Map image keys to actual src in DOM
function getImgSrc(card) {
  const img = card.querySelector('.card-thumb img, .post-featured-thumb img');
  return img ? img.src : null;
}

function openPost(card) {
  const title = card.querySelector('.card-title, .post-featured-title')?.textContent.trim();
  const catEl = card.querySelector('.post-cat');
  const catLabel = catEl?.textContent.trim();
  const catClass = catEl?.className.replace('post-cat', '').trim();
  const footerSpans = card.querySelectorAll('.post-footer span');
  const date = footerSpans[0]?.textContent;
  const readTime = footerSpans[2]?.textContent;
  const imgSrc = getImgSrc(card);

  // Find post data
  const post = posts.find(p => p.title === title) || null;

  // Set modal content
  modalCat.textContent = catLabel || '';
  modalCat.className = 'post-cat ' + (catClass || '');
  modalTitle.textContent = title || '';
  modalMeta.innerHTML = `<span>Análise Ball</span><span class="dot">·</span><span>${date || ''}</span><span class="dot">·</span><span>${readTime || ''}</span>`;

  if (imgSrc && !imgSrc.includes('unsplash') === false || imgSrc) {
    modalImg.innerHTML = `<img src="${imgSrc}" alt="${title}"/>`;
    modalImg.classList.remove('no-img');
  } else {
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

// Attach click to all cards
document.querySelectorAll('.post-card, .post-featured').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => openPost(card));
});

modalOverlay.addEventListener('click', closePost);
modalClose.addEventListener('click', closePost);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));

// ── Category filter ──
const navLinks = document.querySelectorAll('.nav-link');
const allCards = document.querySelectorAll('.post-card, .post-featured');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const cat = link.dataset.cat;
    allCards.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
    nav.classList.remove('open');
  });
});

// ── Load more (simulado) ──
const loadBtn = document.getElementById('load-more');
loadBtn.addEventListener('click', () => {
  loadBtn.textContent = 'Carregando...';
  loadBtn.disabled = true;
  setTimeout(() => {
    loadBtn.textContent = 'Não há mais posts';
    loadBtn.style.opacity = '0.4';
    loadBtn.style.cursor = 'default';
  }, 1000);
});
