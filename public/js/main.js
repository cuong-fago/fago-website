/* GrowVi — main.js (V2 menu) */

(function () {
  'use strict';

  /* ─── Floating Pill — shrink on scroll ──────────────────────── */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Mobile Drawer ──────────────────────────────────────────── */
  const drawerOverlay = document.getElementById('drawer-overlay');
  const pillToggle    = document.getElementById('pill-toggle');
  const drawerClose   = document.getElementById('drawer-close');
  const drawerScrim   = document.getElementById('drawer-scrim');

  function openDrawer() {
    drawerOverlay.classList.add('open');
    pillToggle.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawerOverlay.classList.remove('open');
    pillToggle.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (pillToggle) {
    pillToggle.addEventListener('click', () =>
      drawerOverlay.classList.contains('open') ? closeDrawer() : openDrawer()
    );
  }
  if (drawerClose)  drawerClose.addEventListener('click', closeDrawer);
  if (drawerScrim)  drawerScrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* Dịch vụ sub-toggle */
  const toggleSvc = document.getElementById('drawer-toggle-svc');
  const subSvc    = document.getElementById('drawer-sub-svc');
  const arrowSvc  = document.getElementById('drawer-svc-arrow');
  if (toggleSvc) {
    toggleSvc.addEventListener('click', () => {
      const open = subSvc.classList.toggle('open');
      arrowSvc.textContent = open ? '↑' : '↓';
    });
  }

  /* Close drawer when any link clicked */
  if (drawerOverlay) {
    drawerOverlay.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => setTimeout(closeDrawer, 150))
    );
  }

  /* ─── Smooth Scroll ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─── Scroll-in Animation ─────────────────────────────────────── */
  const animateEls = document.querySelectorAll(
    '.fade-up, .svc-card, .why-item, .step, .case-card, .testimonial-card'
  );

  if ('IntersectionObserver' in window && animateEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    animateEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
  } else {
    animateEls.forEach((el) => el.classList.add('visible'));
  }

  /* ─── Counter Animation ───────────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1400;
          const step = 16;
          const increment = target / (duration / step);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            el.textContent = Math.floor(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, step);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterIO.observe(el));
  }

  /* ─── Contact Form ────────────────────────────────────────────── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Đang gửi…';
      btn.disabled = true;
      await new Promise((r) => setTimeout(r, 1000));
      btn.textContent = '✓ Đã gửi — GrowVi sẽ liên hệ trong 24h';
      btn.style.background = 'var(--green)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 4000);
    });
  }

})();

