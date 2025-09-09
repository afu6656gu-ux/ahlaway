// التنقل بين الصفحات
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        document.getElementById('main-nav').classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// قائمة الجوال
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(e) {
    const nav = document.getElementById('main-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// معالجة النماذج
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم تسجيل الدخول بنجاح!');
    document.getElementById('home').classList.add('active');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إنشاء الحساب بنجاح!');
    document.getElementById('home').classList.add('active');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني!');
    document.getElementById('home').classList.add('active');
});
