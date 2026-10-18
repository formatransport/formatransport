/* Uppdaterad formgivning */
(() => {
  if (document.getElementById('forma-design-v3')) return;

  const style = document.createElement('style');
  style.id = 'forma-design-v3';

  style.textContent = `
    body {
      font-family: Inter, "Segoe UI", Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .eyebrow,
    .trust-strip {
      display: none;
    }

    h1, h2, h3 {
      text-wrap: balance;
    }

    .section {
      padding-block: 72px;
    }

    .section-head {
      margin-bottom: 32px;
    }

    .section-head h2 {
      font-size: clamp(28px, 3vw, 38px);
    }

    .hero-banner {
      border-radius: 18px;
    }

    .hero-small {
      font-size: 13px;
      letter-spacing: 0;
    }

    .services {
      gap: 36px;
    }

    .service-card {
      border: 0;
      border-radius: 0;
      background: white;
    }

    .service-card img {
      border-radius: 12px;
      height: 300px;
    }

    .service-content {
      padding: 24px 0 0;
    }

    .service-content h3 {
      font-size: 26px;
      letter-spacing: -.035em;
    }

    .service-content p {
      font-size: 15px;
      line-height: 1.75;
    }

    .text-link {
      color: var(--ink);
      font-size: 14px;
      gap: 14px;
    }

    .about,
    .request-section,
    .contact-band {
      background: #f7f7f5;
    }

    .about-grid {
      gap: 64px;
    }

    .about-grid img,
    .feature-photo {
      border-radius: 12px;
    }

    .benefit {
      border-top: 1px solid #dfe3e1;
      padding-top: 24px;
    }

    .benefit h3 {
      font-size: 20px;
      font-weight: 600;
    }

    .benefit p {
      line-height: 1.8;
    }

    .step-number {
      color: #69716f;
      font-weight: 500;
      letter-spacing: .02em;
    }

    .steps h3 {
      font-size: 21px;
      font-weight: 600;
    }

    .page-heading {
      padding-block: 48px;
    }

    .page-heading h1 {
      max-width: 850px;
      font-weight: 650;
    }

    .page-heading .intro {
      font-size: 17px;
      line-height: 1.8;
    }

    .form-box {
      border-color: #e5e7e5;
      border-radius: 14px;
      padding: 32px;
    }

    .form-grid {
      gap: 22px 20px;
    }

    label {
      font-weight: 600;
      color: #303735;
    }

    input, select, textarea {
      border-color: #d5dbd7;
      border-radius: 7px;
    }

    .contact-grid h2 {
      font-size: clamp(28px, 3vw, 38px);
    }

    .reviews {
      background: white;
      padding: 42px 0 64px;
    }

    .reviews .container {
      max-width: 760px;
    }

    .reviews h2 {
      font-size: clamp(26px, 3vw, 34px);
      letter-spacing: -.04em;
      margin-bottom: 26px;
    }

    #reviews-slider {
      border: 1px solid #e5e8e6;
      border-radius: 16px;
      background: white;
      overflow: hidden;
      touch-action: pan-y;
    }

    .review-card {
      padding: 28px 30px;
      min-height: 240px;
      display: flex;
      flex-direction: column;
    }

    .review-top {
      min-height: 32px;
      margin-bottom: 22px;
      gap: 24px;
      align-items: center;
    }

    .review-source {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #26312d;
      letter-spacing: 0;
    }

    .review-brand-image {
      width: 28px;
      height: 28px;
      object-fit: contain;
      flex: none;
    }

    .review-brand-image.google {
      width: 78px;
      height: 26px;
    }

    .review-brand-image.timocom {
      width: 112px;
      height: 26px;
    }

    .review-rating {
      font-size: 11px;
      font-weight: 500;
      color: #626d67;
      text-align: right;
    }

    .review-stars {
      font-size: 17px;
      letter-spacing: 3px;
      color: #d59a28;
    }

    .review-quote {
      font-size: 19px;
      line-height: 1.6;
      font-weight: 400;
      letter-spacing: -.015em;
      margin: 0 0 22px;
    }

    .review-author {
      font-size: 13px;
      font-weight: 600;
      margin-top: auto;
      color: #28332d;
    }

    #review-note {
      display: none;
    }

    .review-controls {
      justify-content: flex-end;
      gap: 9px;
      margin-top: 14px;
    }

    .review-controls button {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border-color: #e1e6e2;
      font-size: 19px;
    }

    .review-controls button:hover {
      background: #f4f6f4;
      border-color: #b9c2bc;
    }

    .review-counter {
      order: -1;
      margin: 0 auto 0 0;
      font-size: 12px;
      color: #7b837e;
    }

    .review-card.changing {
      animation: forma-review-in .38s ease both;
    }

    @keyframes forma-review-in {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 650px) {
      .section {
        padding-block: 46px;
      }

      .services {
        gap: 34px;
      }

      .service-card img {
        height: 230px;
      }

      .service-content {
        padding-top: 20px;
      }

      .service-content h3 {
        font-size: 24px;
      }

      .about-grid {
        gap: 28px;
      }

      .page-heading {
        padding-block: 30px;
      }

      .page-heading h1 {
        font-size: 38px;
      }

      .reviews {
        padding: 26px 0 44px;
      }

      .reviews h2 {
        font-size: 27px;
        margin-bottom: 22px;
      }

      .review-card {
        padding: 22px;
        min-height: 244px;
      }

      .review-top {
        margin-bottom: 22px;
        gap: 12px;
      }

      .review-quote {
        font-size: 17px;
        line-height: 1.65;
      }

      .review-source {
        font-size: 13px;
        gap: 9px;
      }

      .review-rating {
        font-size: 10px;
      }

      .review-stars {
        font-size: 16px;
        letter-spacing: 2px;
      }

      .review-brand-image {
        width: 26px;
        height: 26px;
      }

      .form-box {
        padding: 24px 18px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .review-card.changing {
        animation: none;
      }
    }
  `;

  document.head.append(style);

  document.querySelectorAll('.trust-strip').forEach(element => {
    element.remove();
  });

  const headings = new Map([
    ['Vi kör. Eller du.', 'Våra tjänster'],
    ['Personlig service.Ansvar i varje steg.', 'Om Forma Transport'],
    ['Tryggt från början till slut.', 'Så arbetar vi'],
    ['En lastbil för ditt behov.', 'Lätta lastbilar med bakgavellyft'],
    ['Hyr på ett enkelt sätt.', 'Så hyr du'],
    ['Rätt upplägg för din transport.', 'Godstransporter'],
    ['Vad behöver du hjälp med?', 'Kontakta oss']
  ]);

  document.querySelectorAll('h2').forEach(heading => {
    const replacement = headings.get(heading.textContent.trim());

    if (replacement) {
      heading.textContent = replacement;
    }
  });

  /* Uthyrning */
  const rentalForm = document.querySelector('form[data-kind="rental"]');

  if (rentalForm) {
    const message = rentalForm.querySelector('textarea');

    if (message) {
      const label = Array.from(rentalForm.querySelectorAll('label'))
        .find(item => item.htmlFor === message.id);

      if (label) {
        label.textContent = 'Ditt meddelande (valfritt)';
      }

      message.removeAttribute('required');
      message.placeholder = 'Skriv ditt meddelande här';
    }

    const info = document.querySelector('#bokning .request-info');

    if (info) {
      const paragraphs = Array.from(info.children).filter(item =>
        item.tagName === 'P' &&
        !item.classList.contains('eyebrow')
      );

      paragraphs.forEach((paragraph, index) => {
        if (index === 0) {
          paragraph.textContent = 'Ange dina behov så återkommer vi.';
        } else {
          paragraph.remove();
        }
      });
    }

    const description = document.querySelector('.page-copy');

    if (description) {
      const paragraphs = Array.from(description.children).filter(item =>
        item.tagName === 'P' &&
        !item.classList.contains('eyebrow')
      );

      paragraphs.forEach((paragraph, index) => {
        if (index === 0) {
          paragraph.textContent =
            'Rymligt lastutrymme, bakgavellyft och vanligt B-körkort. Vi erbjuder både automat och manuell växellåda.';
        } else {
          paragraph.remove();
        }
      });
    }

    const contact = document.querySelector('#kontakt .contact-grid > div');

    if (contact) {
      const text = contact.querySelector('p:not(.eyebrow)');

      if (text) {
        text.textContent =
          'Har du frågor om uthyrningen? Kontakta oss så hjälper vi dig.';
      }
    }
  }

  /* Plattformsloggor följer med när recensionen växlar */
  const source = document.getElementById('review-source');

  if (!source) return;

  const brands = {
    Google: {
      url: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
      className: 'google',
      showName: false
    },
    Facebook: {
      url: 'https://www.facebook.com/images/fb_icon_325x325.png',
      className: 'facebook',
      showName: true
    },
    Clicktrans: {
      url: 'https://clicktrans.se/favicon.svg',
      className: 'clicktrans',
      showName: true
    },
    TIMOCOM: {
      url: 'https://www.timocom.se/hubfs/timocom-logo.svg',
      className: 'timocom',
      showName: false
    }
  };

  function brandLogo() {
    if (source.querySelector('img')) return;

    const name = source.textContent.trim();
    const brand = brands[name];

    if (!brand) return;

    const image = document.createElement('img');
    image.className = 'review-brand-image ' + brand.className;
    image.alt = brand.showName ? '' : name;
    image.src = brand.url;

    image.addEventListener('error', () => {
      if (!source.contains(image)) return;

      observer.disconnect();
      source.textContent = name;
      observer.observe(source, { childList: true });
    }, { once: true });

    source.replaceChildren(image);

    if (brand.showName) {
      const nameLabel = document.createElement('span');
      nameLabel.textContent = name;
      source.append(nameLabel);
    }
  }

  const observer = new MutationObserver(brandLogo);
  observer.observe(source, { childList: true });
  brandLogo();
})();
