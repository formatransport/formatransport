"use strict";

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

/* Kortare sidtexter */
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
  if (heading) heading.textContent = "Hyr lätt lastbil.";

  const field = form.querySelector("textarea");

  if (field) {
    const label = Array.from(form.querySelectorAll("label"))
      .find(item => item.htmlFor === field.id);

    if (label) label.textContent = "Ditt meddelande (valfritt)";

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
      text: "Kanon hela vägen!"
    },
    {
      source: "Google",
      rating: "5 av 5",
      name: "Camilla Löf",
      text: "Mycket nöjd med allt från kontakt, flexibilitet och hantering"
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
      text: "Smidig och pålitlig! Kommer använda igen"
    },
    {
      source: "Facebook",
      rating: "Rekommenderar",
      name: "Nathalie Maria Helena",
      text: "Väldigt bra företag att ha och göra med. Snabb återkoppling och bra priser!"
    },
    {
      source: "Facebook",
      rating: "Rekommenderar",
      name: "Rasoul Kariminezhad",
      text: "Allt rullade på smidigt, punktligt och utan några som helst problem."
    },
    {
      source: "Facebook",
      rating: "Rekommenderar",
      name: "Tommy Pääkkönen",
      text: "Grymt nöjd och gods leveransen kom fram i tid."
    },
    {
      source: "Facebook",
      rating: "Kundomdöme",
      name: "Oscar Malmqvist",
      text: "Kan varmt rekommendera Amar som varit supertrevlig, pålitlig och kommunikativ."
    },
    {
      source: "Clicktrans",
      rating: "Positivt omdöme",
      name: "Owe",
      text: "Mycket nöjd, kom i tid, trevlig och hjälpsam, rekommenderas verkligen."
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
      text: "De hjälpte mig att flytta mina personliga tillhörigheter. Allt kom fram i gott skick."
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
  let timer;
  let touch = null;
  let animation;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function show(position, manual = false) {
    index = (position + reviews.length) % reviews.length;

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
    author.textContent = review.name;

    author.dataset.initials = review.name
      .split(" ")
      .slice(0, 2)
      .map(part => part[0])
      .join("")
      .toUpperCase();

    counter.textContent = `${index + 1} / ${reviews.length}`;

    card.setAttribute(
      "aria-label",
      `Omdöme ${index + 1} av ${reviews.length}`
    );

    slider.setAttribute("aria-live", manual ? "polite" : "off");

    if (animation) animation.cancel();

    if (!motion.matches && typeof card.animate === "function") {
      animation = card.animate([
        { opacity: .3, transform: "translateY(7px)" },
        { opacity: 1, transform: "translateY(0)" }
      ], {
        duration: 350,
        easing: "ease-out"
      });
    }
  }

  function schedule(delay = 4000) {
    window.clearTimeout(timer);

    if (document.hidden) return;

    timer = window.setTimeout(() => {
      show(index + 1);
      schedule();
    }, delay);
  }

  function move(direction) {
    show(index + direction, true);
    schedule(6000);
  }

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));

  slider.addEventListener("touchstart", event => {
    touch = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };

    schedule(8000);
  }, { passive: true });

  slider.addEventListener("touchend", event => {
    if (touch && event.changedTouches.length) {
      const dx = event.changedTouches[0].clientX - touch.x;
      const dy = event.changedTouches[0].clientY - touch.y;

      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        move(dx < 0 ? 1 : -1);
      } else {
        schedule(6000);
      }
    }

    touch = null;
  }, { passive: true });

  slider.addEventListener("touchcancel", () => {
    touch = null;
    schedule();
  }, { passive: true });

  slider.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  const section = slider.closest(".reviews");

  section.addEventListener("focusin", () => {
    window.clearTimeout(timer);
  });

  section.addEventListener("focusout", event => {
    if (!section.contains(event.relatedTarget)) schedule();
  });

  document.addEventListener("visibilitychange", () => schedule());

  controls.hidden = false;
  show(0);
  schedule();
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
