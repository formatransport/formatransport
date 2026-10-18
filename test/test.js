'use strict';

// Mobilmeny. Navigeringen visas även om JavaScript är avstängt.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('huvudmeny');
if (menuButton && navigation) {
  function closeMenu() {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Meny';
  }
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Stäng' : 'Meny';
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.documentElement.classList.add('js');
}

// Recensioner hämtade ur de underlag som företaget har lämnat.
const reviews = [
        {
          source: "Google",
          rating: "5 av 5",
          name: "Jesper Lindstrom",
          text: "Kanon hela vägen!",
          excerpt: true
        },
        {
          source: "Google",
          rating: "5 av 5",
          name: "Camilla Löf",
          text: "Mycket nöjd med allt från kontakt, flexibilitet och hantering",
          excerpt: true
        },
        {
          source: "Google",
          rating: "5 av 5",
          name: "Adnan Sahuric",
          text: "Otroligt smidigt och hjälpsamma! Rekommenderar verkligen."
        },
        {
          source: "Facebook",
          rating: "Rekommenderar",
          name: "Emma Llewellyn",
          text: "Smidig och pålitlig! Kommer använda igen",
          excerpt: true
        },
        {
          source: "Facebook",
          rating: "Rekommenderar",
          name: "Nathalie Maria Helena",
          text: "Väldigt bra företag att ha och göra med. Snabb återkoppling och bra priser!",
          excerpt: true
        },
        {
          source: "Facebook",
          rating: "Rekommenderar",
          name: "Rasoul Kariminezhad",
          text: "Allt rullade på smidigt, punktligt och utan några som helst problem.",
          excerpt: true
        },
        {
          source: "Facebook",
          rating: "Rekommenderar",
          name: "Tommy Pääkkönen",
          text: "Grymt nöjd och gods leveransen kom fram i tid.",
          excerpt: true
        },
        {
          source: "Facebook",
          rating: "Kundomdöme",
          name: "Oscar Malmqvist",
          text: "Kan varmt rekommendera Amar som varit supertrevlig, pålitlig och kommunikativ.",
          excerpt: true
        },
        {
          source: "Clicktrans",
          rating: "Positivt omdöme",
          name: "Owe",
          text: "Mycket nöjd, kom i tid, trevlig och hjälpsam, rekommenderas verkligen.",
          excerpt: true
        },
        {
          source: "Clicktrans",
          rating: "Positivt omdöme",
          name: "Jesper",
          text: "Allt var perfekt! Bra service, snabb leverans! Rekommenderar till ett hundra procent!"
        },
        {
          source: "Clicktrans",
          rating: "Positivt omdöme",
          name: "Pehr",
          text: "Perfekt service och håller tider. Bra kommunikation"
        },
        {
          source: "Clicktrans",
          rating: "Positivt omdöme",
          name: "Michael",
          text: "De hjälpte mig att flytta mina personliga tillhörigheter. Allt kom fram i gott skick.",
          excerpt: true
        },
        {
          source: "Clicktrans",
          rating: "Positivt omdöme",
          name: "Oscar",
          text: "Mycket trevlig och tillmötesgående. Bra kommunikation och bra pris. Kommer använda dom igen. Finns inget att anmärka på. Riktigt bra!"
        },
        {
          source: "TIMOCOM",
          rating: "5,0 av 5 · 1 betyg",
          name: "Betygsättning som leverantör",
          text: "Kommunikation med affärspartner: 5,0. Punktlighet vid lastning och lossning: 5,0. Hantering av varan: 5,0. Hantering av dokument: 5,0.",
          summary: true
        }
      ];

(() => {
  const slider = document.getElementById('reviews-slider');
  if (!slider) return;
  const card = document.getElementById('review-card');
  const source = document.getElementById('review-source');
  const rating = document.getElementById('review-rating');
  const quote = document.getElementById('review-text');
  const author = document.getElementById('review-author');
  const note = document.getElementById('review-note');
  const counter = document.getElementById('review-counter');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let hovering = false;
  let touching = false;
  let visible = false;
  let lastInteraction = 0;
  let startX = null;
  let startY = null;
  let recovery;
  let stopped = false;

  function show(next) {
    index = (next + reviews.length) % reviews.length;
    const review = reviews[index];
    source.textContent = review.source;
    const stars = review.source === 'Google' || review.source === 'TIMOCOM';
    rating.textContent = stars ? '★★★★★' : review.rating;
    rating.classList.toggle('review-stars', stars);
    if (stars) {
      rating.setAttribute('role', 'img');
      rating.setAttribute('aria-label', review.rating);
      rating.title = review.rating;
    } else {
      rating.removeAttribute('role');
      rating.removeAttribute('aria-label');
      rating.removeAttribute('title');
    }
    quote.textContent = review.text;
    quote.setAttribute('role', review.summary ? 'paragraph' : 'blockquote');
    author.textContent = review.name;
    note.textContent = review.summary ? 'Betyg utan skriven kundkommentar' : review.excerpt ? 'Utdrag ur kundens recension' : '';
    note.hidden = !note.textContent;
    counter.textContent = `${index + 1} / ${reviews.length}`;
    card.setAttribute('aria-label', `Omdöme ${index + 1} av ${reviews.length}`);
    card.classList.remove('changing');
    if (!motion.matches) {
      void card.offsetWidth;
      card.classList.add('changing');
    }
  }
  function manual(direction) {
    lastInteraction = Date.now();
    show(index + direction);
  }
  document.getElementById('review-prev').addEventListener('click', () => manual(-1));
  document.getElementById('review-next').addEventListener('click', () => manual(1));
  document.getElementById('review-controls').hidden = false;
  slider.addEventListener('pointerenter', event => { hovering = event.pointerType === 'mouse'; });
  slider.addEventListener('pointerleave', () => { hovering = false; });
  slider.addEventListener('pointerdown', () => {
    touching = true;
    lastInteraction = Date.now();
    window.clearTimeout(recovery);
    recovery = window.setTimeout(() => { touching = false; }, 12000);
  });
  function endInteraction() {
    if (!touching) return;
    touching = false;
    lastInteraction = Date.now();
    window.clearTimeout(recovery);
  }
  window.addEventListener('pointerup', endInteraction);
  window.addEventListener('pointercancel', endInteraction);
  slider.addEventListener('touchstart', event => {
    hovering = false;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, {passive: true});
  slider.addEventListener('touchend', event => {
    if (startX !== null && event.changedTouches.length) {
      const dx = event.changedTouches[0].clientX - startX;
      const dy = event.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) manual(dx < 0 ? 1 : -1);
    }
    startX = null;
    startY = null;
    touching = false;
    lastInteraction = Date.now();
  }, {passive: true});
  slider.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      manual(event.key === 'ArrowRight' ? 1 : -1);
    }
    if (event.key === 'Escape') stopped = true;
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, {threshold: 0.05}).observe(slider);
  } else visible = true;
  window.setInterval(() => {
    const focused = document.activeElement;
    const keyboardFocused = focused &&
      (slider.contains(focused) || document.getElementById('review-controls').contains(focused)) &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      focused.matches(':focus-visible');
    if (visible && !document.hidden && !hovering && !touching && !keyboardFocused && !stopped && Date.now() - lastInteraction >= 4500) show(index + 1);
  }, 4500);
  show(0);
})();

// Båda formulären använder den ursprungliga Formspree-adressen.
// Inget mejl skickas förrän besökaren själv skickar formuläret.
function localDateTime() {
  const now = new Date();
  const pad = number => String(number).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

document.querySelectorAll('[data-request-form]').forEach(form => {
  const pickup = form.querySelector('[data-pickup]');
  const returned = form.querySelector('[data-return]');
  const date = form.querySelector('[data-future-date]');
  if (date) date.min = localDateTime().slice(0, 10);
  if (pickup) pickup.min = localDateTime();
  if (returned) returned.min = localDateTime();
  function validateDates() {
    if (!pickup || !returned) return;
    returned.min = pickup.value || localDateTime();
    returned.setCustomValidity(pickup.value && returned.value && returned.value <= pickup.value ? 'Återlämningen måste vara efter hämtningen.' : '');
  }
  if (pickup) pickup.addEventListener('input', validateDates);
  if (returned) returned.addEventListener('input', validateDates);
  // Normal HTML-POST finns kvar som reserv om dessa webbläsarfunktioner saknas.
  if (!window.fetch || !window.FormData || !window.AbortController) return;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    validateDates();
    if (!form.reportValidity()) return;
    const button = form.querySelector('[type=submit]');
    if (button.disabled) return;
    const status = form.querySelector('.form-status');
    const label = button.textContent;
    button.disabled = true;
    button.textContent = 'Skickar…';
    status.hidden = false;
    status.className = 'form-status';
    status.textContent = 'Din förfrågan skickas.';
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {method: 'POST', body: new FormData(form), headers: {Accept: 'application/json'}, signal: controller.signal});
      if (!response.ok) throw new Error('Formulärtjänsten kunde inte bekräfta mottagandet.');
      status.className = 'form-status success';
      status.textContent = form.dataset.kind === 'rental' ? 'Tack! Din bokningsförfrågan är skickad. Vi återkommer med tillgänglighet och pris. Bokningen gäller efter vår bekräftelse.' : 'Tack! Din offertförfrågan är skickad. Vi återkommer till dig.';
      form.reset();
      validateDates();
    } catch (error) {
      status.className = 'form-status error';
      status.textContent = 'Vi kunde inte bekräfta att förfrågan kom fram. Dina uppgifter finns kvar i formuläret. Kontakta oss på 076-021 72 61 eller info@formatransport.se så hjälper vi dig.';
    } finally {
      window.clearTimeout(timeout);
      button.disabled = false;
      button.textContent = label;
    }
  });
});
