/* ============================================
   Rafael Unity Dev — Global JS
   main.js
   ============================================ */

/* ---------- THEME ---------- */
(function () {
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('themeBtn');
      if (btn) btn.textContent = '☀️';
    });
  }
})();

function toggleTheme() {
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    if (btn) btn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    if (btn) btn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

/* ---------- FILTER ---------- */
function filtrar(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card[data-cat]').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
