// components.js — injecte le header et le footer sur toutes les pages
// Usage : <script src="../js/components.js"></script> (adapter le chemin selon la profondeur)

(function () {
  const depth = document.currentScript.getAttribute('data-depth') || '0';
  const base = depth === '1' ? '../' : '';

  // ── HEADER ──
  const headerHTML = `
  <header id="site-header">
    <a class="logo" href="${base}index.html">Sillon de <span>Vie</span></a>
    <ul class="nav-links">
      <li><a href="${base}index.html">Accueil</a></li>
      <li><a href="${base}a-propos.html">À propos</a></li>
      <li><a href="${base}prestations/index.html">Prestations</a></li>
      <li><a href="${base}prestations/tarifs.html">Tarifs</a></li>
      <li><a href="${base}contact/index.html" class="nav-cta">Contact</a></li>
    </ul>
    <div class="burger" id="burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav">
    <a href="${base}index.html">Accueil</a>
    <a href="${base}a-propos.html">À propos</a>
    <a href="${base}prestations/index.html">Toutes les prestations</a>
    <a href="${base}prestations/biographie-de-vie.html" class="mobile-sub">Biographie de vie</a>
    <a href="${base}prestations/biographie-a-deux.html" class="mobile-sub">Biographie à deux</a>
    <a href="${base}prestations/biographie-de-naissance.html" class="mobile-sub">Biographie de naissance</a>
    <a href="${base}prestations/biographie-de-sportif.html" class="mobile-sub">Biographie de sportif</a>
    <a href="${base}prestations/recit-aventures.html" class="mobile-sub">Récit d'aventures</a>
    <a href="${base}prestations/betalecture.html" class="mobile-sub">Bétalecture</a>
    <a href="${base}prestations/auto-edition.html" class="mobile-sub">Auto-édition</a>
    <a href="${base}prestations/ecrire-pour-surmonter.html" class="mobile-sub">Écrire pour surmonter</a>
    <a href="${base}prestations/tarifs.html">Tarifs</a>
    <a href="${base}contact/index.html">Contact</a>
  </nav>`;

  // ── FOOTER ──
  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="logo" href="${base}index.html">Sillon de <span>Vie</span></a>
        <p>Biographe narrateur basé à Épinal (Vosges). J'accompagne les personnes dans l'écriture de leur histoire, avec écoute, respect et confidentialité.</p>
      </div>
      <div class="footer-col">
        <h4>Prestations</h4>
        <ul>
          <li><a href="${base}prestations/biographie-de-vie.html">Biographie de vie</a></li>
          <li><a href="${base}prestations/biographie-a-deux.html">Biographie à deux</a></li>
          <li><a href="${base}prestations/biographie-de-naissance.html">Biographie de naissance</a></li>
          <li><a href="${base}prestations/biographie-de-sportif.html">Biographie de sportif</a></li>
          <li><a href="${base}prestations/recit-aventures.html">Récit d'aventures</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="${base}prestations/betalecture.html">Bétalecture</a></li>
          <li><a href="${base}prestations/auto-edition.html">Auto-édition</a></li>
          <li><a href="${base}prestations/ecrire-pour-surmonter.html">Écrire pour surmonter</a></li>
          <li><a href="${base}prestations/tarifs.html">Tarifs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+33662618500">+33 6 62 61 85 00</a></li>
          <li><a href="${base}contact/index.html">Formulaire de contact</a></li>
          <li><a href="https://www.sillondevie.fr" target="_blank">sillondevie.fr</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Éric Collenne · Biographe narrateur · Épinal, Vosges</p>
      <nav>
        <a href="${base}index.html">Accueil</a>
        <a href="${base}prestations/tarifs.html">Tarifs</a>
        <a href="${base}contact/index.html">Contact</a>
      </nav>
    </div>
  </footer>`;

  // Injection
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Scroll header shadow
  const hdr = document.getElementById('site-header');
  window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', window.scrollY > 40));

  // Burger
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('open');
  });

  // Active link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(l => { if (l.href === location.href) l.classList.add('active'); });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
})();
