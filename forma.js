// Mobilmeny
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
if (menuToggle && nav){
  menuToggle.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Offert – enkel validering + tack
const offertForm = document.getElementById('offertForm');
const formSuccess = document.getElementById('formSuccess');

if (offertForm){
  offertForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const requiredIds = ['namn','telefon','epost','upphamtning','leverans','datum'];
    let valid = true;

    requiredIds.forEach(id=>{
      const el = document.getElementById(id);
      if (!el || !el.value.trim()){
        valid = false;
        el?.classList.add('invalid');
        el?.addEventListener('input', ()=> el.classList.remove('invalid'), { once:true });
      }
    });

    if (!valid) return;

    formSuccess.hidden = false;
    offertForm.reset();
    formSuccess.scrollIntoView({ behavior:'smooth', block:'center' });
  });
}

// År i sidfot
const yearEl = document.getElementById('year');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
