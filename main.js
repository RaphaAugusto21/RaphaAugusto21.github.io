/* ============================================
   Rafael Augusto — Portfolio
   main.js
   ============================================ */

/* ---------- TEMA ---------- */
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('themeBtn').textContent = '☀️';
    });
  }
})();

function toggleTheme() {
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  const isDark = html.getAttribute('data-theme') !== 'light';

  if (isDark) {
    html.setAttribute('data-theme', 'light');
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    html.removeAttribute('data-theme');
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

/* ---------- FILTRO DE APPS ---------- */
function filtrar(categoria, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.card').forEach(card => {
    if (categoria === 'todos' || card.classList.contains(categoria)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
