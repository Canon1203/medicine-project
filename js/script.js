/**
 * 中医门户网站 — 岐黄之道
 * 交互逻辑脚本
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== 移动端菜单 ====================
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // 点击导航链接后关闭菜单
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      }
    });
  }

  // ==================== 搜索功能 ====================
  const searchInput = document.getElementById('headerSearch');
  const searchBtn = document.getElementById('searchBtn');

  function performSearch() {
    const query = searchInput ? searchInput.value.trim() : '';
    if (query) {
      alert('🔍 搜索"' + query + '"——功能开发中，敬请期待！');
      searchInput.value = '';
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  // ==================== 按钮提示 ====================
  // 所有 [data-wip] 按钮点击时弹出提示
  document.querySelectorAll('[data-wip]').forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = btn.dataset.wip || '功能开发中';
      // 使用自定义提示而非 alert，后续可替换为 toast
      showToast(msg + '——敬请期待！');
    });
  });

  // ==================== Toast 提示 ====================
  function showToast(message) {
    // 移除已有 toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--green-dark, #1a3c2a);
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 24px;
      font-size: 0.9rem;
      font-family: var(--font-sans, sans-serif);
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: toastIn 0.4s ease, toastOut 0.4s ease 2.2s forwards;
      white-space: nowrap;
    `;
    document.body.appendChild(toast);

    // 动画
    const style = document.createElement('style');
    style.textContent = `
      @keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
      @keyframes toastOut { from { opacity:1; transform:translateX(-50%) translateY(0); } to { opacity:0; transform:translateX(-50%) translateY(-10px); } }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      toast.remove();
      style.remove();
    }, 2700);
  }

  // ==================== 滚动动画 ====================
  // 简单的元素入场动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察卡片类元素
  document.querySelectorAll('.entry-card, .feature-card, .cta-card, .culture-card, .knowledge-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ==================== 回到顶部 ====================
  // 滚动监听：显示/隐藏回到顶部按钮
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  console.log('🌿 岐黄之道 — 中医门户网站已就绪');
  console.log('   传承千年智慧 · 守护生命健康');
});
