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
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
    });

    // Close mobile nav
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
