/* ==========================================================================
   developernasim.com — site script
   1) Edit SITE below (Calendly link, email)
   2) Edit PROJECTS to add / reorder portfolio items
   ========================================================================== */

const SITE = {
  // Paste your Calendly link, e.g. "https://calendly.com/developernasim/30min"
  calendly: "",
  // Optional public email, e.g. "hello@developernasim.com" ("" hides it)
  email: "",
  upwork: "https://www.upwork.com/freelancers/~01bf8d0b2c962776a5",
  upworkConsult: "https://www.upwork.com/services/consultation/development-it-md-2033591080153211877",
  youtube: "https://youtu.be/MtGWQqKGL7c",
};

const PROJECTS = [
  { slug: "skincare-business", title: "Skincare Business", cat: "Beauty · Brand site", group: "brand", stack: ["WordPress", "Elementor Pro"], text: "A calm, editorial site for a skincare and salon business: services with clear pricing, appointment CTAs and a layout the team edits themselves in Elementor Pro." },
  { slug: "automotive-business", title: "Automotive Business", cat: "Automotive · Lead generation", group: "service", stack: ["WordPress", "Elementor Pro", "Forms"], text: "Car rental and fleet site built to generate quotes: fleet cards, a trust section and a quote form, responsive on every breakpoint." },
  { slug: "bakery-business", title: "Bakery Business", cat: "Food · Local business", group: "service", stack: ["WordPress", "Elementor Pro"], text: "Custom Elementor Pro layout that shows the products first, builds trust and turns visits into orders and enquiries. Fast, SEO-friendly structure." },
  { slug: "digital-studio", title: "Digital Studio", cat: "Agency · Brand site", group: "brand", stack: ["WordPress", "Thrive Themes"], text: "An editorial studio site with oversized type and image-led case studies. Services, portfolio and enquiry flow in one clean layout." },
  { slug: "electronics-ecommerce", title: "Electronics Store", cat: "Electronics · eCommerce", group: "ecommerce", stack: ["WooCommerce", "Elementor Pro"], text: "High-performance electronics store: category filters, deal blocks, secure payment gateways and a shorter checkout flow. Mobile-first." },
  { slug: "lms-platform", title: "LMS Platform", cat: "Education · Online courses", group: "platform", stack: ["WordPress", "LMS", "Elementor"], text: "Course platform with categories, quizzes, registration and progress tracking. Easy for instructors and admins to manage." },
  { slug: "photography-portfolio", title: "Photography Portfolio", cat: "Photography · Booking", group: "brand", stack: ["WordPress", "Custom theme"], text: "A dark, cinematic portfolio for a portrait and events photographer, with galleries by category and a booking path." },
  { slug: "fashion-ecommerce", title: "Fashion eCommerce", cat: "Fashion · eCommerce", group: "ecommerce", stack: ["WooCommerce", "Elementor Pro"], text: "Fashion store with size variations, product galleries and a smooth mobile buying experience." },
  { slug: "skincare-ecommerce", title: "Skin Care Store", cat: "Beauty · eCommerce", group: "ecommerce", stack: ["WooCommerce", "Elementor"], text: "Soft, premium skin care shop: product categories, reviews, secure checkout and speed tuned for conversions." },
  { slug: "premium-coffee", title: "Premium Coffee Brand", cat: "Food & drink · Brand", group: "brand", stack: ["WordPress", "Elementor Pro"], text: "Coffee brand site with rich tones and clean type. Product display, brewing guides and contact forms." },
  { slug: "plant-gardening", title: "Plant & Gardening", cat: "Lifestyle · Brand site", group: "brand", stack: ["WordPress", "Elementor"], text: "Nature-led store and blog for a plant brand. Gallery sections, plant-care blog and quick product discovery." },
  { slug: "premium-cap-brand", title: "Premium Cap Brand", cat: "Fashion · One-page", group: "brand", stack: ["WordPress", "Elementor", "Snap scroll"], text: "One-page brand experience with snap scrolling and a hero slider. Minimal, bold and motion-driven." },
  { slug: "coffee-maker", title: "Coffee Maker Store", cat: "Home · eCommerce", group: "ecommerce", stack: ["WooCommerce", "Elementor Pro"], text: "Conversion-focused store for an espresso machine brand: features, specs and reviews that support the sale." },
  { slug: "electronics-product", title: "Lighting Shop", cat: "Electronics · Large catalogue", group: "ecommerce", stack: ["WooCommerce", "Elementor"], text: "Large catalogue shop with promo banners, a live reviews strip and category shortcuts for fast discovery." },
  { slug: "tshirt-wholesale", title: "T-Shirt Wholesale", cat: "Apparel · B2B eCommerce", group: "ecommerce", stack: ["WooCommerce", "Elementor Pro"], text: "Wholesale store for bulk orders: size and colour variations, B2B ordering and secure checkout." },
  { slug: "custom-web-development", title: "Fashion Brand Site", cat: "Fashion · Custom build", group: "brand", stack: ["WordPress", "Elementor Pro"], text: "Fully custom, responsive site built around the brand: clean code, SEO-friendly structure and a premium layout." },
  { slug: "ecommerce-development", title: "Luxury Store Builds", cat: "eCommerce · Multiple brands", group: "ecommerce", stack: ["WooCommerce", "Elementor"], text: "A selection of WooCommerce builds for supplement, pet and lifestyle brands, focused on trust and sales." },
];

const GROUPS = { all: "All work", ecommerce: "eCommerce", brand: "Brand sites", service: "Service business", platform: "Platforms" };

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const ARROW = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARROW_UR = '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const LOGO = `<span class="logo-mark">N</span><span class="logo-word">Nasim<small>WordPress Developer</small></span>`;

/* ---------- Header & footer ---------- */
function renderChrome() {
  const page = document.body.dataset.page || "";
  const links = [["work", "work.html", "Work"], ["services", "index.html#services", "Services"], ["pricing", "index.html#pricing", "Pricing"], ["about", "about.html", "About"], ["reviews", "index.html#reviews", "Reviews"]];

  const top = document.createElement("div");
  top.className = "topbar";
  top.innerHTML = `<div class="wrap">
      <div class="topbar-items">
        <span><i class="live"></i>Available for new projects</span>
        <span class="hide-sm"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>Top Rated Plus on Upwork</span>
        <span class="hide-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>Dhaka, Bangladesh · GMT+6</span>
      </div>
      <div class="topbar-social">
        <a href="${SITE.upwork}" target="_blank" rel="noopener">Upwork</a>
        <a href="${SITE.youtube}" target="_blank" rel="noopener">YouTube</a>
      </div>
    </div>`;

  const head = $("#site-header");
  if (head) {
    head.before(top);
    head.className = "site-header";
    head.innerHTML = `
      <div class="wrap nav">
        <a class="logo" href="index.html" aria-label="Nasim, home">${LOGO}</a>
        <ul class="nav-links">
          ${links.map(([k, h, t]) => `<li><a href="${h}"${k === page ? ' aria-current="page"' : ""}>${t}</a></li>`).join("")}
        </ul>
        <div class="nav-right">
          <a class="btn btn--neon btn--sm" href="book-a-call.html">Book a call ${ARROW}</a>
          <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span></button>
        </div>
      </div>`;
    const menu = document.createElement("nav");
    menu.className = "mobile-menu";
    menu.setAttribute("aria-label", "Mobile");
    menu.innerHTML = [["index.html", "Home"], ...links.map(([, h, t]) => [h, t])]
      .map(([h, t], i) => `<a class="m-link" href="${h}">${t}<span>0${i + 1}</span></a>`).join("") +
      `<a class="btn btn--neon" href="book-a-call.html">Book a call ${ARROW}</a>
       <a class="btn btn--line-light" href="${SITE.upwork}" target="_blank" rel="noopener">Hire me on Upwork</a>`;
    document.body.appendChild(menu);
    const burger = $(".burger", head);
    burger.addEventListener("click", () => burger.setAttribute("aria-expanded", document.body.classList.toggle("menu-open")));
    $$("a", menu).forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));
    const onScroll = () => head.classList.toggle("scrolled", scrollY > 50);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const foot = $("#site-footer");
  if (foot) {
    foot.className = "site-footer";
    foot.innerHTML = `
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <a class="logo" href="index.html">${LOGO}</a>
            <p>MD Nasim is a Top Rated Plus WordPress developer and web designer. Elementor websites, WooCommerce stores and redesigns for businesses in the USA, UK, Canada and Australia.</p>
            <span class="badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>4.8 from 22 Upwork reviews</span>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><a href="index.html">Home</a></li><li><a href="work.html">Work</a></li><li><a href="about.html">About</a></li>
              <li><a href="index.html#pricing">Pricing</a></li><li><a href="book-a-call.html">Book a call</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="index.html#services">WordPress websites</a></li><li><a href="index.html#services">WooCommerce stores</a></li>
              <li><a href="index.html#services">Website redesign</a></li><li><a href="index.html#services">Speed &amp; Core Web Vitals</a></li>
              <li><a href="index.html#services">Care &amp; security</a></li>
            </ul>
          </div>
          <div>
            <h4>Let's work together</h4>
            <div class="foot-contact">
              <a href="book-a-call.html"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4" stroke-linecap="round"/></svg></span><span>Book a call<small>Free 30-minute consultation</small></span></a>
              <a href="${SITE.upwork}" target="_blank" rel="noopener"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16v11H8l-4 4V5z" stroke-linejoin="round"/></svg></span><span>Upwork<small>Message or hire directly</small></span></a>
              ${SITE.email ? `<a href="mailto:${SITE.email}"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span><span>Email<small>${SITE.email}</small></span></a>` : ""}
            </div>
          </div>
        </div>
        <div class="foot-big" aria-hidden="true">Developer <span>Nasim</span></div>
        <div class="foot-bottom">
          <span>© ${new Date().getFullYear()} MD Nasim. All rights reserved.</span>
          <span>Structure first. Design second. Results always.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>`;
  }

  if (page !== "book") {
    const fl = document.createElement("a");
    fl.className = "float-cta";
    fl.href = "book-a-call.html";
    fl.innerHTML = `<img src="assets/img/nasim.png" alt="" width="42" height="42"><span class="txt"><b>Talk to Nasim</b>Free 30-min call</span><span class="btn btn--neon btn--sm">Book a call</span>`;
    document.body.appendChild(fl);
    addEventListener("scroll", () => fl.classList.toggle("show", scrollY > 1000), { passive: true });
  }
}

/* ---------- Work ---------- */
function workCard(p, i) {
  return `
    <button class="wcard reveal" data-slug="${p.slug}" aria-label="Open ${p.title} project">
      <div class="img"><img src="assets/work/${p.slug}.jpg" alt="${p.title} website designed and developed by MD Nasim" loading="lazy" width="640" height="480"></div>
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <div class="cap"><div><h3>${p.title}</h3><p>${p.cat}</p></div><span class="go">${ARROW_UR}</span></div>
    </button>`;
}

function renderWork() {
  const home = $('[data-work="home"]');
  if (home) {
    const picks = ["skincare-business", "automotive-business", "bakery-business", "electronics-ecommerce"];
    home.innerHTML = picks.map((s, i) => workCard(PROJECTS.find((p) => p.slug === s), i)).join("");
  }
  const all = $('[data-work="all"]');
  if (all) {
    const filters = $("#filters");
    const count = (g) => (g === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.group === g).length);
    filters.innerHTML = Object.entries(GROUPS).map(([g, t], i) => `<button class="filter" data-g="${g}" aria-pressed="${i === 0}">${t}<span class="count">${count(g)}</span></button>`).join("");
    const draw = (g) => {
      const list = g === "all" ? PROJECTS : PROJECTS.filter((p) => p.group === g);
      all.innerHTML = list.map(workCard).join("");
      observe();
    };
    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      $$(".filter", filters).forEach((x) => x.setAttribute("aria-pressed", x === b));
      draw(b.dataset.g);
    });
    draw("all");
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest(".wcard");
    if (c) openModal(c.dataset.slug);
  });
}

function openModal(slug) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return;
  let m = $("#modal");
  if (!m) {
    m = document.createElement("div");
    m.id = "modal"; m.className = "modal";
    m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    document.body.appendChild(m);
    m.addEventListener("click", (e) => { if (e.target.matches(".modal-bg, .modal-close")) closeModal(); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }
  m.innerHTML = `
    <div class="modal-bg"></div>
    <div class="modal-box">
      <button class="modal-close" aria-label="Close">×</button>
      <div class="modal-img"><img src="assets/work/${p.slug}.jpg" alt="${p.title} website by MD Nasim"></div>
      <div class="modal-body">
        <span class="eyebrow">Case study</span>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <dl>
          <dt>Category</dt><dd>${p.cat}</dd>
          <dt>Built with</dt><dd>${p.stack.join(", ")}</dd>
          <dt>Role</dt><dd>Design, development, responsive QA, speed</dd>
          <dt>Listed on</dt><dd><a href="${SITE.upwork}" target="_blank" rel="noopener">Upwork portfolio</a></dd>
        </dl>
        <a class="btn btn--cta" style="margin-top:auto" href="book-a-call.html">Build something like this ${ARROW}</a>
      </div>
    </div>`;
  m.classList.add("open");
  document.body.style.overflow = "hidden";
  $(".modal-close", m).focus();
}
function closeModal() { $("#modal")?.classList.remove("open"); document.body.style.overflow = ""; }

/* ---------- Pricing tiers ---------- */
function initTiers() {
  const tiers = $$(".tier");
  tiers.forEach((t) => t.addEventListener("click", () => {
    tiers.forEach((x) => x.setAttribute("aria-selected", x === t));
    $$(".tier-panel").forEach((p) => p.classList.toggle("active", p.id === t.getAttribute("aria-controls")));
  }));
}

/* ---------- Booking ---------- */
function initBooking() {
  $$("[data-upwork-consult]").forEach((a) => (a.href = SITE.upworkConsult));
  $$("[data-upwork]").forEach((a) => (a.href = SITE.upwork));
  const box = $("#calendly");
  if (!box || !SITE.calendly) return;
  box.innerHTML = `<div class="calendly-inline-widget" data-url="${SITE.calendly}?hide_gdpr_banner=1&primary_color=3b5bff"></div>`;
  const s = document.createElement("script");
  s.src = "https://assets.calendly.com/assets/external/widget.js";
  s.async = true;
  document.body.appendChild(s);
}

/* ---------- Reveal ---------- */
let io;
function observe() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("is-in")); return; }
  io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal:not(.is-in)").forEach((el) => {
    // Anything already on screen shows immediately, so the first view is never blank
    if (el.getBoundingClientRect().top < innerHeight) el.classList.add("is-in");
    else io.observe(el);
  });
}

renderChrome();
renderWork();
initTiers();
initBooking();
observe();
