# developernasim.com — Portfolio site

Plain HTML + CSS + JS. Kono build step nai, kono framework nai. GitHub e push korle Vercel / Netlify automatic live kore dibe.

```
developernasim-site/
├── index.html          Home (reference site er moto section)
├── work.html           17 ta project, filter + popup
├── about.html          SEO bio ("Developer Nasim", "Top Rated Plus WordPress developer")
├── book-a-call.html    Calendly / Upwork consultation
├── 404.html
├── robots.txt, sitemap.xml
└── assets/
    ├── css/style.css   Design system (color, font, layout)
    ├── js/main.js      SITE settings + PROJECTS list + header/footer
    ├── img/            nasim.png (Upwork photo), video-thumb.jpg
    └── work/           17 ta Upwork portfolio image
```

---

## 1. Live korar age 3 ta jinis change koro

`assets/js/main.js` er ekdom upore:

```js
const SITE = {
  calendly: "https://calendly.com/YOUR-NAME/30min", // tomar Calendly link
  email: "hello@developernasim.com",                 // public email (na chaile "" rakho)
  ...
};
```

- **Calendly** link dile Book a Call page e calendar embed hoye jabe. Faka rakhle Upwork consultation + message button dekhabe.
- **Portfolio image HD korte**: `assets/work/` folder e same naam e (jemon `skincare-business.jpg`) boro image replace koro. Ekhon Upwork theke neya 640px image ache.
- **Notun project add**: `main.js` er `PROJECTS` list e ekta line add koro, ar `assets/work/<slug>.jpg` image rakho.

---

## 2. GitHub e upload (ekbar)

1. https://github.com/new e jao → Repository name: `developernasim-site` → **Public** ba Private → Create.
2. Ei folder e PowerShell/Terminal khulo, then:

```
git init
git add .
git commit -m "New portfolio site"
git branch -M main
git remote add origin https://github.com/<tomar-username>/developernasim-site.git
git push -u origin main
```

(Git na thakle GitHub Desktop install kore "Add existing repository" diye o kora jay.)

---

## 3. Vercel diye live (recommended, free)

1. https://vercel.com → **Sign up with GitHub**.
2. **Add New → Project** → `developernasim-site` repo select → **Import**.
3. Framework Preset: **Other**. Build command faka, Output directory faka → **Deploy**.
4. 30 second e `developernasim-site.vercel.app` live hobe.

### Domain connect (developernasim.com)
1. Vercel project → **Settings → Domains** → `developernasim.com` add koro (ar `www.developernasim.com`).
2. Vercel je DNS record dibe, oita tomar domain provider (Namecheap / Hostinger / Cloudflare) er DNS e boshao:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
3. Purono hosting er A record (jodi thake) delete koro. 10 min – 24 ghonta e live.

> Ekhon developernasim.com e je Next.js site ache, oitar DNS jekhane point kora, sei record gula replace korte hobe.

**Netlify** chaile: https://app.netlify.com → Add new site → Import from GitHub → same repo → Deploy. Domain: Site settings → Domain management.

Erpor theke shudhu `git push` korle site auto update hobe.

---

## 4. Google e "Developer Nasim" / "best WordPress developer on Upwork" e ashar jonno

Site e already ache: Person + ProfessionalService + FAQPage schema, about page e clear bio, sitemap, robots.

Live hobar por:
1. https://search.google.com/search-console → Add property → `developernasim.com` → DNS diye verify.
2. **Sitemaps** → `sitemap.xml` submit.
3. **URL inspection** → `https://developernasim.com/about.html` → Request indexing.
4. Upwork profile, LinkedIn, YouTube description, GitHub — shob jaygay `developernasim.com` link dao. Google er AI mode ei "sameAs" link gula mile dekhe tomake chine.
5. LinkedIn headline ar Upwork title e same phrase use koro: **"MD Nasim – WordPress Developer & Web Designer"**. Same naam, same title shob jaygay = Google confident hoy.
6. Proti mash e 1 ta notun project `PROJECTS` e add koro — fresh content rank e help kore.

---

## 5. WordPress e chaile

Ei design ta WordPress e banate chaile: Elementor e Hello theme + ei `style.css` er color/font (Inter Tight, Instrument Serif, JetBrains Mono; `#3B5BFF` CTA, `#A6FF4D` neon) global settings e boshiye section by section rebuild koro. Kintu static site (upore 3 number) fast, free, ar maintenance lage na — recommended.

## Local e dekhte

Folder e `index.html` double click korleo cholbe. Ba: `npx serve .`
