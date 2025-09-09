// التنقل بين الصفحات
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        document.getElementById('main-nav').classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
