// التنقل بين الصفحات
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // إظهار الصفحة المطلوبة
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        
        // إغلاق قائمة الجوال إذا كانت مفتوحة
        document.getElementById('main-nav').classList.remove('active');
        
        // التمرين إلى أعلى الصفحة
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

// معالجة نموذج تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // في حالة نجاح تسجيل الدخول، انتقل إلى الصفحة الرئيسية
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');
    
    // إظهار رسالة نجاح (يمكنك إزالة هذا الجزء لاحقاً)
    alert('تم تسجيل الدخول بنجاح!');
});

// معالجة نموذج إنشاء حساب
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // في حالة نجاح إنشاء الحساب، انتقل إلى الصفحة الرئيسية
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');
    
    // إظهار رسالة نجاح (يمكنك إزالة هذا الجزء لاحقاً)
    alert('تم إنشاء الحساب بنجاح!');
});

// معالجة نموذج استعادة كلمة المرور
document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // في حالة نجاح إرسال طلب الاستعادة، انتقل إلى الصفحة الرئيسية
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');
    
    // إظهار رسالة نجاح (يمكنك إزالة هذا الجزء لاحقاً)
    alert('تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني!');
});