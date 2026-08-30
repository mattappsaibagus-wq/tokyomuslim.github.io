# Tokyo Halal Guide

A premium, zero-dependency static website for Muslim travelers in Tokyo, Osaka, Kyoto, and beyond. Features live astronomical prayer times, verified halal dining with interactive Google Maps, Japanese phrasebook, kanji label decoder, currency converter, 3-day itinerary, and a trip-planning concierge.

**Live site:** https://tokyomuslim.club/  
**GitHub repo:** https://github.com/mattappsaibagus-wq/tokyomuslim.github.io

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Live Prayer Engine** | Astronomically-precise Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha for Tokyo, Osaka, Kyoto (solar declination + equation of time) with live countdown & active prayer highlighting |
| **Halal Directory** | 18+ verified venues across Tokyo, Osaka, Kyoto, Kobe — A5 Wagyu, Ramen, Sushi, Mosques, Prayer Rooms, Airport facilities |
| **Interactive Maps** | One-click Google Maps navigation, phone dialers, Japanese address copy-for-taxi |
| **Phrasebook & Kanji Decoder** | 20+ show-to-staff Japanese cards + searchable ingredient kanji lookup (pork, lard, gelatin, mirin, emulsifiers, agar) |
| **Currency Converter** | Live mid-market rates for USD, EUR, GBP, AUD, SGD, MYR, IDR, SAR, AED → JPY |
| **3-Day Itinerary** | Curated day-by-day Tokyo plan with prayer stops, halal meals, and sightseeing |
| **Contact Concierge** | Mailto-based form for private halal drivers, group packages, trip planning — works on static hosting |
| **Multi-City** | City selector for prayer times (Tokyo / Osaka / Kyoto) |
| **Light/Dark Mode** | System preference + manual toggle, persisted in localStorage |

---

## 📁 Project Structure

```
tokyo-muslim-guide/
├── index.html          # Single-file production site (all content + CSS + JS)
├── css/
│   └── style.css       # Legacy design system (emerald & gold theme) — now deprecated
├── js/
│   ├── data.js         # Legacy content arrays — deprecated
│   └── main.js         # Legacy rendering — deprecated
├── netlify.toml        # Netlify deploy config + security headers
└── LICENSE             # CC BY 4.0 (content) + MIT (code)
```

> **Note:** The entire site is now self-contained in `index.html` (no external CSS/JS dependencies). The `css/` and `js/` folders are legacy and no longer used.

---

## 🚀 Local Preview

No build step required. Just serve the file:

```bash
# From tokyo-muslim-guide/ directory
python3 -m http.server 8765
# Then open http://localhost:8765
```

Or simply double-click `index.html` in your file browser.

---

## 🌐 Publishing for Free

This is a single plain `index.html` — it works on **any** static host:

### GitHub Pages (Current Host)
Your repo is already configured at `mattappsaibagus-wq/tokyomuslim.github.io` with a `CNAME` pointing to `tokyomuslim.club`.

```bash
# Just push to main — GitHub Pages auto-deploys
git add index.html
git commit -m "Update Tokyo Halal Guide"
git push origin main
```

### Netlify Drop (30 seconds)
Drag the `tokyo-muslim-guide/` folder onto https://app.netlify.com/drop.

### Cloudflare Pages / Vercel
Import the GitHub repo with "Other" framework preset (no build command, output dir = root).

---

## 🔧 Custom Domain & Subdomain Setup

### Current: `tokyomuslim.club` → GitHub Pages

Your Namecheap DNS already points to GitHub Pages:
- **Nameservers:** `dns1.registrar-servers.com`, `dns2.registrar-servers.com` (Namecheap default)
- **A records:** `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (GitHub Pages IPs)
- **CNAME:** `www` → `mattappsaibagus-wq.github.io`

### Option: Add `guide.tokyomuslim.club` Subdomain

**In Namecheap (Advanced DNS tab):**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `guide` | `mattappsaibagus-wq.github.io` | Automatic |

**In GitHub Pages Settings:**
1. Go to repo **Settings → Pages → Custom domain**
2. Add `guide.tokyomuslim.club` (and optionally `tokyomuslim.club` if not already there)
3. Wait for "DNS check successful" → Enforce HTTPS ✓

The subdomain will be live in ~10–30 minutes with free SSL.

---

## 📊 Analytics (Add One to `<head>`)

Uncomment **one** option in `index.html` (lines ~17–30):

| Option | Privacy | Cost | Setup |
|--------|---------|------|-------|
| **Google Analytics (GA4)** | Standard | Free | Create GA4 property → replace `G-XXXXXXXXXX` |
| **Umami** (cloud.umami.is) | GDPR-friendly, no cookies | Free/self-hosted | Create site → replace `YOUR_WEBSITE_ID` |
| **Plausible** (plausible.io) | Privacy-first, <1KB | $9/mo or self-hosted | Add domain → replace `tokyomuslim.club` |
| **GoatCounter** (goatcounter.com) | No cookies, open-source | Free | Create counter → replace `yourname` |

---

## 🛠️ Customizing Content

All content lives in `index.html` — edit directly:

| Section | Search For |
|---------|------------|
| Venues (restaurants, mosques) | `data-category="mosque"` / `wagyu` / `ramen` / `sushi` |
| Prayer cities | `const CITIES = {` |
| Phrasebook cards | `class="phrase-card"` |
| Kanji decoder items | `class="kanji-item"` |
| Currency rates | `const RATES = {` |
| Itinerary days | `id="itinerary"` |
| Contact form email | `concierge@tokyomuslim.club` |

---

## 📜 Disclaimer

Opening hours, halal certifications, and prayer-space availability change over time. This guide is maintained in good faith — **always verify with the venue before visiting**.

---

## 📄 License

- **Content** (text, listings): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to share and adapt with attribution.
- **Code** (HTML/CSS/JS): [MIT](https://opensource.org/licenses/MIT) — free to reuse for any purpose.

---

## 🙏 Credits

- Prayer time algorithm: NOAA Solar Calculations / Umm al-Qura Hijri approximation
- Fonts: Google Fonts (Cormorant Garamond, Playfair Display, Plus Jakarta Sans, Noto Serif JP)
- Icons: Unicode emoji (no external assets)
- Inspired by the community at [Tokyo Muslim Club](https://tokyomuslim.club/)