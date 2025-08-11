document.addEventListener('DOMContentLoaded', () => {
  showPage('home');

  document.querySelectorAll('nav a[data-page]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const page = a.getAttribute('data-page');
      showPage(page);
    });
  });
});

function showPage(id) {
  document.querySelectorAll('main .content').forEach(sec => sec.classList.add('hidden'));
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}