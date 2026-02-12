/**
 * Lemuria Content House – main scripts
 * Intersection Observer for scroll animations, video modal, in-view animations
 */

(function () {
  const once = true;
  if (!window.__inViewIO) {
    window.__inViewIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
  }

  window.initInViewAnimations = function (selector = '.animate-on-scroll') {
    document.querySelectorAll(selector).forEach((el) => {
      window.__inViewIO.observe(el);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initInViewAnimations());
  } else {
    initInViewAnimations();
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  const closeBtn = document.getElementById('close-modal-btn');
  const playBtn = document.getElementById('play-adamed-video');
  const triggers = document.querySelectorAll('.js-video-trigger');

  const adamedVideoUrl = 'https://player.vimeo.com/video/1160318863?autoplay=1&title=0&byline=0&portrait=0';

  function openModal(src) {
    if (!modal || !iframe) return;
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
    });
    iframe.src = src;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      if (iframe) iframe.src = '';
      document.body.style.overflow = '';
    }, 300);
  }

  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(adamedVideoUrl);
    });
  }

  triggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const src = btn.getAttribute('data-video-src');
      if (src) openModal(src);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.scroll-item').forEach((el) => observer.observe(el));
});
