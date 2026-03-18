// ══════════════════════════════════════════════════
// ── ANÁLISE BALL — Script Principal ──
// ══════════════════════════════════════════════════

var posts = [
  { title:"Manchester United vence bem o Aston Villa com Casemiro decisivo", cat:"futebol", catLabel:"Premier League", date:"16 Mar 2026", readTime:"4 min de leitura", img:"https://pbs.twimg.com/media/HDkT11zWsAAB83B.jpg", text:"<p>Muito diferente do último jogo, o <strong>Manchester United</strong> venceu muito bem o Aston Villa.</p><p>Casemiro se mostra mais pilar do que nunca para o bom funcionamento do time.</p><p><strong>Bruno Fernandes</strong> mostra novamente que está entre os melhores jogadores da posição e do mundo. Uma pena não renovar e poder continuar a bonita história que construiu.</p><p>Matheus Cunha foi bem novamente, para além do gol importantíssimo marcado. O Manchester United encaminha o seu objetivo de voltar para as competições europeias.</p>" },
  { title:"Liverpool decepciona novamente e Arne Slot mostra fragilidade", cat:"futebol", catLabel:"Premier League", date:"16 Mar 2026", readTime:"3 min de leitura", img:"https://pbs.twimg.com/media/HDkUMhLXYAA9Aro.jpg", text:"<p>Mais uma vez o trabalho de <strong>Arne Slot</strong> se mostra frágil, onde consegue fazer o Liverpool ser uma bagunça em diversos momentos.</p><p>Criou jogadas e situações para levar mais perigo, entretanto, desperdiçou sua grande maioria.</p><p>Apenas <strong>Dominik Szoboszlai</strong> e <strong>Rio Ngumoha</strong> se sobressaíram, sendo o meio-campista húngaro o MVP do time na temporada.</p><p>O Tottenham salva um ponto importante. Richarlison sendo decisivo.</p>" },
  { title:"O trabalho de Cesc Fàbregas no Como: verticalidade e associação", cat:"futebol", catLabel:"Serie A", date:"16 Mar 2026", readTime:"3 min de leitura", img:"https://pbs.twimg.com/media/HDkUkn5XgAElyur.jpg", text:"<p>Algo sempre importante de destacar do <strong>Como</strong>: elogiar o trabalho de Cesc Fàbregas é chover no molhado.</p><p>Um time extremamente vertical e associativo, que consegue quebrar a maioria dos times do campeonato italiano.</p><p>Embora o gol da vitória venha de escanteio, se utilizou dos espaços para atacar verticalmente e incomodar.</p>" },
  { title:"Bayern de Munique empata com Bayer Leverkusen em jogo com 2 expulsões", cat:"futebol", catLabel:"Bundesliga", date:"15 Mar 2026", readTime:"4 min de leitura", img:"https://pbs.twimg.com/media/HDbt7QkWMAA5j2K.jpg", text:"<p>Resultado ok para o <strong>Bayern de Munique</strong>, visto que teve dois jogadores expulsos.</p><p><strong>Harry Kane</strong> se mostrou novamente uma aberração, ao entrar e mudar o jogo — muito por ser além de um camisa 9.</p><p>Pelo lado do Bayer, sensação estranha. Vantagem numérica desde o minuto 42 e desperdiçou chances.</p><p>Méritos da Atalanta em sobreviver ao primeiro tempo e acreditar. Deu certo.</p>" },
  { title:"GP da China 2026: Mercedes domina e top 3 é todo da equipe", cat:"f1", catLabel:"F1", date:"15 Mar 2026", readTime:"3 min de leitura", img:"https://pbs.twimg.com/media/HDcGOodXAAAfA4N.jpg", text:"<p>O top 3 do <strong>GP da China de 2026</strong> é Mercedes FC. Começo de temporada avassalador.</p><p>Basicamente não há disputa com a Mercedes, embora a Ferrari tenha sido a equipe mais próxima.</p><p>A disputa de <strong>Lewis Hamilton</strong> e <strong>Charles Leclerc</strong> pelo 3° lugar foi o que mais gerou entretenimento.</p>" },
  { title:"Mercedes avassaladora: começo de temporada sem rivais na F1 2026", cat:"f1", catLabel:"F1", date:"15 Mar 2026", readTime:"3 min de leitura", img:"https://pbs.twimg.com/media/HDcH2RSWAAAU9oO.jpg", text:"<p>Basicamente não há disputa com a <strong>Mercedes</strong>. A Ferrari foi a equipe mais próxima mas é provável que tenhamos algo com as atualizações.</p><p>Começo de temporada avassalador para a equipe alemã.</p>" },
  { title:"Simplesmente não dá pra acreditar nesse lance", cat:"futebol", catLabel:"Futebol", date:"17 Mar 2026", readTime:"1 min de leitura", img:"https://pbs.twimg.com/ext_tw_video_thumb/2026005743900454912/pu/img/HNnrXe7sHbZU7jEd.jpg", text:"<p>Simplesmente não dá pra acreditar em um negócio desses. Um lance que desafia toda lógica.</p>" },
  { title:"Gui Santos: símbolo de resistência do esporte brasileiro", cat:"basquete", catLabel:"NBA", date:"12 Mar 2026", readTime:"2 min de leitura", img:"https://pbs.twimg.com/media/HDgMlOgXYAAMhjx.jpg", text:"<p>O salto de <strong>Gui Santos</strong> veio no momento certo. Enquanto grandes instituições encerram atividades de base, Gui surge como símbolo de resistência.</p><p>O esporte brasileiro ainda tem presente e muito futuro.</p>" },
  { title:"Volta Redonda classificado na Copa do Brasil nos pênaltis", cat:"futebol", catLabel:"Copa do Brasil", date:"12 Mar 2026", readTime:"2 min de leitura", img:"https://pbs.twimg.com/amplify_video_thumb/2032223439054893057/img/fX3A1zyzCls6qt-8.jpg", text:"<p><strong>Volta Redonda 0 (5)x(3) 0 América-RN</strong>. Classificados na Copa do Brasil!</p><p>Pênaltis não é loteria — é estudo e muito trabalho.</p>" }
];

// ── Render news list (cards horizontais estilo jornal) ──
function renderNewsList() {
  var el = document.getElementById('news-list');
  if (!el) return;
  // Skip first post (already in headline)
  posts.slice(1).forEach(function(p, i) {
    var item = document.createElement('div');
    item.className = 'news-item';
    item.dataset.cat = p.cat;
    var excerpt = p.text.replace(/<[^>]*>/g,'').substring(0,120) + '...';
    item.innerHTML =
      '<div class="news-thumb"><img src="'+p.img+'" alt="" loading="lazy"/></div>' +
      '<div class="news-body">' +
        '<span class="post-cat '+p.cat+'">'+p.catLabel+'</span>' +
        '<div class="news-title">'+p.title+'</div>' +
        '<div class="news-excerpt">'+excerpt+'</div>' +
        '<div class="post-footer"><span>'+p.date+'</span><span class="dot">\u00b7</span><span>'+p.readTime+'</span></div>' +
      '</div>';
    item.addEventListener('click', function() { openPostFromData(p); });
    el.appendChild(item);
  });
}

// ── Sidebar ──
function renderThreadsSidebar() {
  var el = document.getElementById('threads-list');
  if (!el) return;
  posts.slice(0,3).forEach(function(p,i) {
    var card = document.createElement('div');
    card.className = 'thread-card';
    card.innerHTML = '<span class="thread-num">'+String(i+1).padStart(2,'0')+'</span><div class="thread-label">'+p.catLabel+' \u00b7 '+p.readTime+'</div><div class="thread-title">'+p.title+'</div>';
    card.addEventListener('click', function() { openPostFromData(p); });
    el.appendChild(card);
  });
}
function renderRankingSidebar() {
  var el = document.getElementById('ranking-list');
  if (!el) return;
  posts.slice(0,5).forEach(function(p,i) {
    var item = document.createElement('div');
    item.className = 'ranking-item';
    item.innerHTML = '<span class="rank-num">'+(i+1)+'</span><div><div class="rank-title">'+(p.title.length>45?p.title.substring(0,45)+'...':p.title)+'</div><div class="rank-cat">'+p.catLabel+'</div></div>';
    item.addEventListener('click', function() { openPostFromData(p); });
    el.appendChild(item);
  });
}

// ── Modal ──
var modal=document.getElementById('post-modal'), modalOverlay=document.getElementById('modal-overlay'), modalClose=document.getElementById('modal-close'), modalImg=document.getElementById('modal-img'), modalCat=document.getElementById('modal-cat'), modalTitle=document.getElementById('modal-title'), modalMeta=document.getElementById('modal-meta'), modalText=document.getElementById('modal-text');

function openPostFromData(p) {
  modalCat.textContent = p.catLabel||p.cat;
  modalCat.className = 'post-cat '+(p.cat||'');
  modalTitle.textContent = p.title;
  modalMeta.innerHTML = '<span>Análise Ball</span><span class="dot">\u00b7</span><span>'+p.date+'</span><span class="dot">\u00b7</span><span>'+p.readTime+'</span>';
  if (p.img) { modalImg.innerHTML='<img src="'+p.img+'" alt=""/>'; modalImg.classList.remove('no-img'); }
  else { modalImg.innerHTML=''; modalImg.classList.add('no-img'); }
  modalText.innerHTML = p.text||'<p>Conteúdo em breve.</p>';
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closePost() { modal.classList.remove('open'); document.body.style.overflow=''; }

// Headline click
var hl = document.querySelector('.headline-card');
if (hl) hl.addEventListener('click', function() { openPostFromData(posts[0]); });

modalOverlay.addEventListener('click', closePost);
modalClose.addEventListener('click', closePost);
document.addEventListener('keydown', function(e) { if(e.key==='Escape') closePost(); });

// Hamburger
document.getElementById('hamburger').addEventListener('click', function() { document.getElementById('main-nav').classList.toggle('open'); });

// Category filter
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(function(l){l.classList.remove('active');});
    link.classList.add('active');
    var cat = link.dataset.cat;
    document.querySelectorAll('.news-item').forEach(function(item) {
      item.style.display = (cat==='all'||item.dataset.cat===cat) ? '' : 'none';
    });
    // Also filter headline
    if (hl) hl.style.display = (cat==='all'||posts[0].cat===cat) ? '' : 'none';
    document.getElementById('main-nav').classList.remove('open');
  });
});

// Load more
var lb=document.getElementById('load-more');
if(lb) lb.addEventListener('click',function(){lb.textContent='Carregando...';lb.disabled=true;setTimeout(function(){lb.textContent='Não há mais posts';lb.style.opacity='0.4';},1000);});

// ── RSS FEED ──
var RSS_FEED_URL='https://rss.app/feeds/v1.1/9QoEF0bvtjASd99D.json', AVATAR='logo.jpg', X_PROFILE='https://x.com/analiseball';
var X_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="rss-tweet-x-logo"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
function timeAgo(d){var ms=new Date()-new Date(d),m=Math.floor(ms/60000),h=Math.floor(m/60),dd=Math.floor(h/24);if(m<1)return'agora';if(m<60)return m+'min';if(h<24)return h+'h';if(dd<7)return dd+'d';return new Date(d).toLocaleDateString('pt-BR',{day:'numeric',month:'short'});}
function renderTweets(tw){var g=document.getElementById('rss-tweets-grid'),l=document.getElementById('rss-loading');if(l)l.remove();if(!tw||!tw.length){g.innerHTML='<div class="rss-empty"><p>Siga <a href="'+X_PROFILE+'" target="_blank">@AnaliseBall</a> no X</p></div>';return;}tw.slice(0,4).forEach(function(t){var c=document.createElement('a');c.className='rss-tweet-card';c.href=t.link||X_PROFILE;c.target='_blank';c.rel='noopener';var media=t.image?'<div class="rss-tweet-media"><img src="'+t.image+'" alt="" loading="lazy"/></div>':'';c.innerHTML='<div class="rss-tweet-header"><img class="rss-tweet-avatar" src="'+AVATAR+'" alt=""/><div class="rss-tweet-author"><span class="rss-tweet-name">Análise Ball</span><span class="rss-tweet-handle">@AnaliseBall</span></div>'+X_SVG+'</div><div class="rss-tweet-text">'+t.text+'</div>'+media+'<div class="rss-tweet-footer"><span class="rss-tweet-date">'+timeAgo(t.date)+'</span></div>';g.appendChild(c);});}
function fetchRSSFeed(){fetch(RSS_FEED_URL).then(function(r){if(!r.ok)throw 0;return r.json();}).then(function(d){var items=d.items||[];if(!items.length){renderTweets([]);return;}renderTweets(items.map(function(i){var img=i.image||(i.attachments&&i.attachments[0]?i.attachments[0].url:null);var div=document.createElement('div');div.innerHTML=i.content_text||i.title||'';return{text:(div.textContent||'').trim().split('\u2014')[0].trim(),date:i.date_published||'',link:i.url||X_PROFILE,image:img};}));}).catch(function(){renderTweets([]);});}

// ── INIT ──
renderNewsList();
renderThreadsSidebar();
renderRankingSidebar();
fetchRSSFeed();
