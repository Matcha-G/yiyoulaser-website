// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('易友激光科技网站已加载');

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 91, 146, 0.95)';
        } else {
            header.style.backgroundColor = '#1a5b92';
        }
    });
});