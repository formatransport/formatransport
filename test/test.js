"use strict";

/* Layout */
(() => {
  const style = document.createElement("style");

  style.textContent = `
    #review-note {
      display: none !important;
    }

    .review-card {
      min-height: 280px;
      overflow: hidden;
    }

    .review-quote {
      white-space: pre-line;
      overflow-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 12px;
    }

    .review-quote.expanded {
      display: block;
      overflow: visible;
    }

    .review-more {
      align-self: flex-start;
      border: 0;
      background: transparent;
      color: #384b40;
      font-size: 12px;
      font-weight: 600;
      padding: 8px 0;
      min-height: 44px;
      text-decoration: underline;
      text-underline-offset: 4px;
      margin: 0 0 14px;
    }

    .review-author {
      padding-top: 8px;
    }

    .hero-banner h1 {
      max-width: 610px;
    }

    .service-content p {
      max-width: 400px;
    }

    .reviews {
      padding: 34px 0 80px;
    }

    .reviews .container {
      max-width: 1160px;
      display: grid;
      grid-template-columns: .8fr 1.2fr;
      column-gap: 64px;
      align-items: start;
    }

    .reviews h2 {
      text-align: left;
      font-size: 42px;
      max-width: 340px;
      line-height: 1.12;
      padding-top: 28px;
    }

    #reviews-slider {
      min-width: 0;
      grid-column: 2;
      grid-row: 1;
    }

    .review-card {
      border-radius: 18px;
      padding: 30px;
    }

    .review-controls {
      grid-column: 2;
      grid-row: 2;
      margin-top: 16px;
    }

    /* Uthyrningens bild och specifikationer */

    .rental-overview {
      gap: 0;
      align-items: stretch;
      grid-template-columns: 1fr 1.05fr;
    }

    .rental-overview .page-copy {
      background: #202c25;
      color: white;
      padding: 44px;
      border-radius: 18px 0 0 18px;
    }

    .rental-overview .page-copy h2 {
      font-size: 38px;
      letter-spacing: -.04em;
      max-width: 420px;
    }

    .rental-overview .page-copy > p {
      font-size: 15px;
      color: #c1cec4;
      line-height: 1.8;
    }

    .rental-overview .feature-photo {
      height: 100%;
      min-height: 540px;
      border-radius: 0 18px 18px 0;
      object-fit: cover;
      object-position: center;
    }

    .rental-details {
      margin-top: 32px;
    }

    .rental-spec {
      border-top: 1px solid #ffffff24;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 20px 0;
    }

    .rental-spec-label {
      font-size: 12px;
      color: #b6c5b9;
    }

    .rental-spec-value {
      font-size: 21px;
      line-height: 1.3;
      font-weight: 600;
      letter-spacing: -.025em;
      text-align: right;
    }

    .rental-equipment {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 20px;
      padding-top: 23px;
      margin-top: 2px;
      border-top: 1px solid #ffffff24;
      font-size: 12px;
      color: #c1cec4;
    }

    @media (max-width: 900px) {
      .header-inner {
        position: relative;
        flex-wrap: nowrap;
      }

      .js .navigation.open {
        position: absolute;
        top: 100%;
        left: -18px;
        width: calc(100% + 36px);
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        background: white;
        border-bottom: 1px solid #e2e7e3;
        padding: 12px 24px 22px;
        box-shadow: 0 18px 24px #2026240c;
      }

      .js .navigation.open > a {
        padding: 12px 0;
      }

      .js .navigation.open > .button {
        padding: 13px 20px;
        margin-top: 12px;
      }

      .rental-overview .page-copy {
        padding: 30px;
      }

      .rental-overview .page-copy h2 {
        font-size: 32px;
      }

      .rental-spec-value {
        font-size: 18px;
      }

      .reviews .container {
        column-gap: 30px;
      }

      .reviews h2 {
        font-size: 34px;
      }
    }

    @media (max-width: 650px) {
      body {
        overflow-wrap: break-word;
      }

      .container {
        width: calc(100% - 36px);
      }

      .header-inner {
        min-height: 70px;
        padding-block: 10px;
      }

      .logo {
        width: 145px;
      }

      .menu-toggle {
        font-size: 13px;
      }

      .hero {
        padding: 12px 0 0;
      }

      .hero > .container {
        width: calc(100% - 24px);
      }

      .hero-banner {
        display: block;
        min-height: 0;
        background: #f5f7f3;
        border: 1px solid #e6ebe4;
        color: #202624;
        isolation: auto;
        border-radius: 16px;
      }

      .hero-banner::after {
        display: none;
      }

      .banner-image {
        position: static;
        inset: auto;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        object-position: center;
        z-index: auto;
      }

      .hero-copy {
        position: relative;
        margin-top: -20px;
        border-radius: 20px 20px 0 0;
        background: #f5f7f3;
        padding: 28px 23px 30px;
        max-width: none;
      }

      .hero-banner h1 {
        font-size: clamp(32px, 8.8vw, 41px);
        line-height: 1.08;
        letter-spacing: -.045em;
      }

      .hero .intro {
        font-size: 15px;
        color: #65706a;
        margin: 18px 0 0;
        line-height: 1.75;
      }

      .hero .button.secondary {
        background: white;
        color: #202624;
        border-color: #cdd5cf;
      }

      .hero .button.secondary:hover {
        background: #edf1eb;
      }

      .hero .actions {
        margin-top: 23px;
      }

      .hero .actions .button {
        min-width: 0;
        gap: 10px;
        font-size: 12px;
        min-height: 48px;
      }

      .hero-small {
        color: #65706a;
        font-size: 11px;
        margin: 20px 0 0;
      }

      .section {
        padding: 44px 0;
      }

      h2 {
        font-size: 30px;
        line-height: 1.15;
        letter-spacing: -.04em;
      }

      .section-head > p {
        font-size: 14px;
        line-height: 1.7;
        margin-top: 15px;
      }

      .service-card {
        min-height: 390px;
        border-radius: 14px;
      }

      .service-content {
        padding: 25px;
      }

      .service-content h3 {
        font-size: 29px;
      }

      .service-content p {
        font-size: 14px;
        line-height: 1.7;
      }

      .about-grid > img {
        order: -1;
        max-height: 300px;
        box-shadow: none;
        width: 100%;
        border-radius: 12px;
      }

      .about-copy p {
        font-size: 14px;
      }

      .benefit h3 {
        font-size: 20px;
      }

      .reviews {
        padding: 8px 0 48px;
      }

      .reviews .container {
        display: block;
      }

      .reviews h2 {
        padding-top: 0;
        font-size: 28px;
        max-width: none;
        margin-bottom: 24px;
      }

      .review-card {
        padding: 23px;
        min-height: 280px;
        border-radius: 14px;
        box-shadow: 0 10px 26px #18251b06;
      }

      .review-quote {
        font-size: 16px;
        line-height: 1.75;
        -webkit-line-clamp: 4;
      }

      .review-top {
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }

      .review-source {
        font-size: 12px;
      }

      .review-rating {
        font-size: 10px;
      }

      .review-stars {
        font-size: 16px;
        letter-spacing: 2px;
      }

      .review-author,
      .review-more {
        font-size: 12px;
      }

      .page-heading h1 {
        font-size: 36px;
      }

      .page-heading .intro {
        font-size: 15px;
      }

      .gallery img {
        height: 220px;
      }

      .contact-grid {
        gap: 28px;
      }

      .contact-grid h2 {
        font-size: 30px;
      }

      .contact-grid p {
        font-size: 14px;
      }

      .contact-links {
        width: 100%;
      }

      .contact-links a {
        font-size: 14px;
      }

      .contact-links a:first-child {
        font-size: 21px;
      }

      .form-grid {
        gap: 18px;
      }

      input, select, textarea {
        font-size: 16px;
      }

      .rental-overview {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .rental-overview .feature-photo {
        order: -1;
        height: 280px;
        min-height: 0;
        max-height: none;
        width: 100%;
        object-fit: cover;
        object-position: center 45%;
        border-radius: 16px 16px 0 0;
      }

      .rental-overview .page-copy {
        padding: 29px 25px 30px;
        border-radius: 0 0 16px 16px;
      }

      .rental-overview .page-copy h2 {
        font-size: 30px;
      }

      .rental-overview .page-copy > p {
        font-size: 14px;
        line-height: 1.8;
      }

      .rental-details {
        margin-top: 25px;
      }

      .rental-spec {
        padding: 18px 0;
        gap: 14px;
      }

      .rental-spec-label {
        font-size: 11px;
      }

      .rental-spec-value {
        font-size: 19px;
      }

      .rental-equipment {
        gap: 10px 17px;
        font-size: 12px;
      }
    }

    @media (max-width: 360px) {
      .hero .actions {
        flex-direction: column;
      }

      .hero .actions .button {
        flex: auto;
      }

      .review-card {
        padding: 18px;
      }
    }
  `;

  document.head.append(style);
})();

/* Uthyrningens specifikationer */
(() => {
  if (!document.querySelector('form[data-kind="rental"]')) return;

  const overview = document.querySelector(".page-split");
  const facts = overview && overview.querySelector(".facts");

  if (!facts) return;

  overview.classList.add("rental-overview");

  const panel = document.createElement("div");
  panel.className = "rental-details";

  [
    ["Körkort", "Vanligt B-körkort"],
    ["Växellåda", "Automat & manuell"],
    ["Lastning", "Bakgavellyft"]
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "rental-spec";

    const title = document.createElement("span");
    title.className = "rental-spec-label";
    title.textContent = label;

    const content = document.createElement("span");
    content.className = "rental-spec-value";
    content.textContent = value;

    row.append(title, content);
    panel.append(row);
  });

  const equipment = document.createElement("div");
  equipment.className = "rental-equipment";

  ["Backkamera", "Tre sittplatser", "Bluetooth"].forEach(text => {
    const item = document.createElement("span");
    item.textContent = text;
    equipment.append(item);
  });

  panel.append(equipment);
  facts.replaceWith(panel);
})();

/* Mobilmeny */
(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("huvudmeny");

  if (!button || !nav) return;

  document.documentElement.classList.add("js");

  function close() {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.textContent = "Meny";
  }

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Stäng" : "Meny";
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a")) close();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !button.contains(event.target)) {
      close();
    }
  });
})();

/* Sidtexter */
(() => {
  document.querySelectorAll(".trust-strip").forEach(item => item.remove());

  const headings = new Map([
    ["Vi kör. Eller du.", "Godstransporter & uthyrning"],
    ["Personlig service.Ansvar i varje steg.", "Om Forma Transport"],
    ["Tryggt från början till slut.", "Så arbetar vi"],
    ["En lastbil för ditt behov.", "Lätta lastbilar med bakgavellyft"],
    ["Hyr på ett enkelt sätt.", "Så hyr du"],
    ["Rätt upplägg för din transport.", "Godstransporter"],
    ["Vad behöver du hjälp med?", "Kontakta oss"]
  ]);

  document.querySelectorAll("h2").forEach(item => {
    const text = headings.get(item.textContent.trim());
    if (text) item.textContent = text;
  });

  const form = document.querySelector('form[data-kind="rental"]');

  if (!form) return;

  const heading = document.querySelector(".page-heading h1");

  if (heading) {
    heading.textContent = "Hyr lätt lastbil.";
  }

  const field = form.querySelector("textarea");

  if (field) {
    const label = Array.from(form.querySelectorAll("label"))
      .find(item => item.htmlFor === field.id);

    if (label) {
      label.textContent = "Ditt meddelande (valfritt)";
    }

    field.required = false;
    field.placeholder = "Skriv ditt meddelande här";
  }

  function shorten(selector, text) {
    const parent = document.querySelector(selector);

    if (!parent) return;

    const paragraphs = Array.from(parent.children).filter(item =>
      item.tagName === "P" && !item.classList.contains("eyebrow")
    );

    paragraphs.forEach((item, index) => {
      if (index === 0) item.textContent = text;
      else item.remove();
    });
  }

  shorten(
    "#bokning .request-info",
    "Ange dina behov så återkommer vi."
  );

  shorten(
    ".page-copy",
    "Rymligt lastutrymme, bakgavellyft och vanligt B-körkort. Vi erbjuder både automat och manuell växellåda."
  );

  shorten(
    "#kontakt .contact-grid > div",
    "Har du frågor om uthyrningen? Kontakta oss så hjälper vi dig."
  );
})();

/* Recensioner */
(() => {
  const slider = document.getElementById("reviews-slider");

  if (!slider) return;

  const reviews = [
    {
      source: "Google",
      rating: "5 av 5",
      name: "Jesper Lindstrom",
      text: "Kanon hela vägen!\nFrån första kontakt tills att hojen stod på uppfarten funkade allt perfa!\nBra pris, snabb leverans"
    },
    {
      source: "Google",
      rating: "5 av 5",
      name: "Camilla Löf",
      text: "Mycket nöjd med allt från kontakt, flexibilitet och hantering 👌"
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
      text: "Smidig och pålitlig! Kommer använda igen ⭐"
    },
    {
      source: "Facebook",
      rating: "Rekommenderar",
      name: "Nathalie Maria Helena",
      text: "Väldigt bra företag att ha och göra med. Snabb återkoppling och bra priser! Trevlig chaufför som hämtade i Västerås och körde till en camping i Marks kommun. Rekommenderar er verkligen ✨"
    },
    {
      source: "Facebook",
      rating: "Rekommenderar",
      name: "Rasoul Kariminezhad",
      text: "Jag anlitade Forma Transport för en full last transport och är mycket nöjd med allt från första kontakt till slutförd transport. Kommunikationen fungerade helt felfritt; de tog kontakt exakt när de hade lovat att höra av sig, vilket skapade en stor trygghet genom hela processen. Allt rullade på smidigt, punktligt och utan några som helst problem.\nDet är ett nystartat företag men det märks inte alls. Det märks att de har erfarenhet inom branschen sedan många år tillbaka. De är mycket professionella och pålitliga.\nJag kan rekommendera detta företag till alla som behöver hjälp med transport!\nTack för hjälpen! ⭐⭐⭐⭐⭐"
    },
    {
      source: "Facebook",
      rating: "Rekommenderar",
      name: "Tommy Pääkkönen",
      text: "Smidig upphämtning i Tyresö med leverans i Landskrona väl informerad om leverans tid. Grymt nöjd och gods leveransen kom fram i tid. Kommer absolut att använda Forma Transport igen.⭐⭐⭐⭐⭐\n\nTack Med vänlig hälsning,\nTommy @ FIRESPECT AB"
    },
    {
      source: "Facebook",
      rating: "Kundomdöme",
      name: "Oscar Malmqvist",
      text: "Kan varmt rekommendera Amar som varit supertrevlig, pålitlig och kommunikativ. Han hjälpte mig få hem en pall med gods en Söndagmorgon och levererade på kvällen till Stockholm. Dessutom till ett bra pris! Kommer använda hans transporttjänster igen när det behövs. Ett riktigt guldkorn att ha i sin kontaktlista. Tack Amar för fantastiskt bra service!! 🙏👍💐. Med vänlig hälsning, Oscar"
    },
    {
      source: "Clicktrans",
      rating: "Positivt omdöme",
      name: "Owe",
      text: "Mycket nöjd, kom i tid, trevlig och hjälpsam, rekommenderas verkligen. / Owe"
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
      text: "De hjälpte mig att flytta mina personliga tillhörigheter. Allt kom fram i gott skick. Jag är tacksam för deras hjälp och rekommenderar dem varmt."
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
      text: "Kommunikation med affärspartner: 5,0. Punktlighet vid lastning och lossning: 5,0. Hantering av varan: 5,0. Hantering av dokument: 5,0."
    }
  ];

  const card = document.getElementById("review-card");
  const source = document.getElementById("review-source");
  const rating = document.getElementById("review-rating");
  const quote = document.getElementById("review-text");
  const author = document.getElementById("review-author");
  const counter = document.getElementById("review-counter");
  const controls = document.getElementById("review-controls");
  const previous = document.getElementById("review-prev");
  const next = document.getElementById("review-next");
  const note = document.getElementById("review-note");

  if (
    !card || !source || !rating || !quote ||
    !author || !counter || !controls || !previous || !next
  ) return;

  const brands = {
    Google: [
      "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
      false
    ],
    Facebook: [
      "https://www.facebook.com/images/fb_icon_325x325.png",
      true
    ],
    Clicktrans: [
      "https://clicktrans.se/favicon.svg",
      true
    ],
    TIMOCOM: [
      "https://www.timocom.se/hubfs/timocom-logo.svg",
      false
    ]
  };

  let index = 0;
  let nextAt = Date.now() + 4000;
  let reading = false;
  let touch = null;
  let animation;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const more = document.createElement("button");

  more.type = "button";
  more.className = "review-more";
  more.setAttribute("aria-controls", "review-text");

  quote.after(more);

  function show(position, manual = false) {
    index = (position + reviews.length) % reviews.length;
    reading = false;

    const review = reviews[index];
    const brand = brands[review.source];

    source.replaceChildren();

    if (brand) {
      const image = document.createElement("img");

      image.className = "review-brand " + review.source.toLowerCase();
      image.alt = brand[1] ? "" : review.source;
      image.src = brand[0];

      image.addEventListener("error", () => {
        if (source.contains(image)) {
          source.textContent = review.source;
        }
      }, { once: true });

      source.append(image);

      if (brand[1]) {
        source.append(document.createTextNode(review.source));
      }
    } else {
      source.textContent = review.source;
    }

    const stars =
      review.source === "Google" || review.source === "TIMOCOM";

    rating.textContent = stars ? "★★★★★" : review.rating;
    rating.classList.toggle("review-stars", stars);
    rating.setAttribute("aria-label", review.rating);

    if (stars) rating.setAttribute("role", "img");
    else rating.removeAttribute("role");

    quote.textContent = review.text;
    quote.classList.remove("expanded");

    author.textContent = review.name;

    author.dataset.initials = review.name
      .split(" ")
      .slice(0, 2)
      .map(part => part[0])
      .join("")
      .toUpperCase();

    if (note) {
      note.textContent = "";
      note.hidden = true;
    }

    more.hidden = review.text.length <= 100;
    more.textContent = "Läs hela recensionen";
    more.setAttribute("aria-expanded", "false");

    counter.textContent = `${index + 1} / ${reviews.length}`;

    card.setAttribute(
      "aria-label",
      `Omdöme ${index + 1} av ${reviews.length}`
    );

    slider.setAttribute("aria-live", manual ? "polite" : "off");

    if (animation) animation.cancel();

    if (!motion.matches && typeof card.animate === "function") {
      animation = card.animate([
        { opacity: .3, transform: "translateX(14px)" },
        { opacity: 1, transform: "translateX(0)" }
      ], {
        duration: 320,
        easing: "ease-out"
      });
    }
  }

  function move(direction, manual = false) {
    show(index + direction, manual);
    nextAt = Date.now() + (manual ? 6000 : 4000);
  }

  previous.addEventListener("click", () => move(-1, true));
  next.addEventListener("click", () => move(1, true));

  more.addEventListener("click", () => {
    reading = !reading;

    quote.classList.toggle("expanded", reading);
    more.setAttribute("aria-expanded", String(reading));

    more.textContent = reading
      ? "Visa mindre"
      : "Läs hela recensionen";

    nextAt = Date.now() + 4000;
  });

  slider.addEventListener("touchstart", event => {
    touch = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };

    nextAt = Date.now() + 6000;
  }, { passive: true });

  slider.addEventListener("touchend", event => {
    if (touch && event.changedTouches.length) {
      const dx = event.changedTouches[0].clientX - touch.x;
      const dy = event.changedTouches[0].clientY - touch.y;

      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        move(dx < 0 ? 1 : -1, true);
      }
    }

    touch = null;
    nextAt = Date.now() + 6000;
  }, { passive: true });

  slider.addEventListener("touchcancel", () => {
    touch = null;
  }, { passive: true });

  slider.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1, true);
    }
  });

  document.addEventListener("visibilitychange", () => {
    nextAt = Date.now() + 4000;
  });

  window.addEventListener("pageshow", () => {
    nextAt = Date.now() + 4000;
  });

  window.setInterval(() => {
    if (!document.hidden && !reading && Date.now() >= nextAt) {
      move(1);
    }
  }, 500);

  controls.hidden = false;
  show(0);
})();

/* Formulär */
function localDateTime() {
  const now = new Date();
  const pad = number => String(number).padStart(2, "0");

  return (
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}` +
    `T${pad(now.getHours())}:${pad(now.getMinutes())}`
  );
}

document.querySelectorAll("[data-request-form]").forEach(form => {
  const pickup = form.querySelector("[data-pickup]");
  const returned = form.querySelector("[data-return]");
  const date = form.querySelector("[data-future-date]");

  if (form.dataset.kind === "transport") {
    if (date) {
      date.required = false;

      const label = form.querySelector('label[for="datum"]');

      if (label) {
        label.textContent = "Önskat transportdatum (valfritt)";
      }
    }

    const weight = form.querySelector('[name="vikt"]');

    if (weight) {
      weight.required = true;
      weight.min = "0.01";

      const label = form.querySelector('label[for="vikt"]');

      if (label) {
        label.textContent = "Godsets vikt i kg *";
      }
    }
  }

  if (date) date.min = localDateTime().slice(0, 10);
  if (pickup) pickup.min = localDateTime();
  if (returned) returned.min = localDateTime();

  function validateDates() {
    if (!pickup || !returned) return;

    returned.min = pickup.value || localDateTime();

    returned.setCustomValidity(
      pickup.value && returned.value && returned.value <= pickup.value
        ? "Återlämningen måste vara efter hämtningen."
        : ""
    );
  }

  if (pickup) pickup.addEventListener("input", validateDates);
  if (returned) returned.addEventListener("input", validateDates);

  if (!window.fetch || !window.FormData || !window.AbortController) return;

  form.addEventListener("submit", async event => {
    event.preventDefault();
    validateDates();

    if (!form.reportValidity()) return;

    const button = form.querySelector("[type=submit]");
    const status = form.querySelector(".form-status");

    if (button.disabled) return;

    const label = button.textContent;

    button.disabled = true;
    button.textContent = "Skickar…";

    status.hidden = false;
    status.className = "form-status";
    status.textContent = "Din förfrågan skickas.";

    const controller = new AbortController();

    const timeout = window.setTimeout(() => {
      controller.abort();
    }, 20000);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error("Förfrågan kunde inte bekräftas.");
      }

      status.className = "form-status success";
      status.textContent =
        "Tack! Din förfrågan är skickad. Vi återkommer till dig.";

      form.reset();
      validateDates();
    } catch (error) {
      status.className = "form-status error";
      status.textContent =
        "Vi kunde inte bekräfta att förfrågan kom fram. Dina uppgifter finns kvar. Kontakta oss på 076-021 72 61 eller info@formatransport.se.";
    } finally {
      window.clearTimeout(timeout);
      button.disabled = false;
      button.textContent = label;
    }
  });
});
