// Mobilmeny
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Offert – enkel validering + tack
const offertForm = document.getElementById('offertForm');
const formSuccess = document.getElementById('formSuccess');

if (offertForm) {
  offertForm.addEventListener('submit', (e) => {

    const requiredIds = [
      'namn',
      'telefon',
      'epost',
      'upphamtning',
      'leverans',
      'datum'
    ];

    let valid = true;

    requiredIds.forEach(id => {
      const el = document.getElementById(id);

      if (!el || !el.value.trim()) {
        valid = false;
        el?.classList.add('invalid');

        el?.addEventListener(
          'input',
          () => el.classList.remove('invalid'),
          { once: true }
        );
      }
    });

    if (!valid) {
    if (!valid) {
  e.preventDefault();
}
    }
  });
}

// År i sidfot
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


function cookieChoice(type){
  localStorage.setItem("cookieConsent", type);
  document.getElementById("cookieConsent").style.display = "none";
}

function toggleDetails(){
  document.getElementById("cookieDetails").classList.toggle("hidden");
}

window.addEventListener("load", () => {
  const consent = localStorage.getItem("cookieConsent");
  if(consent){
    document.getElementById("cookieConsent").style.display = "none";
  }
});
