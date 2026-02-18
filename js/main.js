/**
 * Lemuria Content House – Unified Scripts
 */

// 1. SCROLL ANIMATIONS
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

  document.addEventListener('DOMContentLoaded', () => initInViewAnimations());
})();

// 2. VIDEO MODAL LOGIC
window.openVideo = function(url) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  
  if (!modal || !iframe) return;

  iframe.src = url;
  modal.classList.remove('hidden');
  
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
  });

  document.body.style.overflow = 'hidden';
};

window.closeVideo = function() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  
  if (!modal) return;

  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');

  setTimeout(() => {
    modal.classList.add('hidden');
    if (iframe) iframe.src = '';
    document.body.style.overflow = '';
  }, 300);
};

// 3. LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (closeBtn) closeBtn.addEventListener('click', () => window.closeVideo());
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) window.closeVideo(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) window.closeVideo(); });
});

// 4. MOBILE SCROLL FOCUS EFFECT
document.addEventListener('DOMContentLoaded', () => {
  // Sprawdzamy czy urządzenie obsługuje myszkę (hover).
  const isHoverable = window.matchMedia('(hover: hover)').matches;

  if (!isHoverable) {
    const observerOptions = {
      root: null,
      // ZMIANA TUTAJ:
      // -40% z góry i z dołu oznacza, że efekt działa TYLKO
      // na wąskim pasku (20% wysokości ekranu) idealnie na środku.
      // Jak tylko karta lekko wyjedzie, efekt zniknie.
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mobile-active');
        } else {
          entry.target.classList.remove('mobile-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fluxora-card').forEach((card) => {
      scrollObserver.observe(card);
    });
  }
});