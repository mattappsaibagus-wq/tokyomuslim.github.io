# Tokyo Muslim Club

A static guide to mosques, prayer rooms and halal food in Tokyo, Yokohama and the Kanto region.
Live at **https://tokyomuslim.club/**.

- `index.html` — the page (styles inline)
- `assets/places.js` — every listing, with sources. **Edit this file to add or fix a place.**
- `assets/app.js` — prayer-time engine, Qibla bearing and directory filters (no dependencies)
- `mosques.html`, `halal-food.html`, `guide.html` — redirects from the old URLs

## Adding a place

Copy an entry in `assets/places.js`, keep the same fields, and add at least one source link in `src`.
Set `check: true` with a `note` when sources disagree or are more than ~2 years old.
For restaurants, `halal` is one of:

| value      | meaning |
|------------|---------|
| `full`     | whole menu halal or certified kitchen |
| `menu`     | certified halal dishes/courses; venue may also serve alcohol or non-halal food |
| `friendly` | halal meat or pork-free, certification not confirmed |

## Prayer times

Calculated in the browser with the standard astronomical method (sun declination and equation of time
from the Julian date; Dhuhr at solar noon; Asr from shadow length; Fajr/Isha from the method's angles).
Supported methods: MWL, Diyanet, JAKIM, KEMENAG, MUIS, Karachi, Egyptian, Umm al-Qura, ISNA, Jafari, with a Hanafi Asr option.

Quick check from the command line:

```bash
node -e "const a=require('./assets/app.js');console.log(a.prayerTimes(2026,6,21,a.CITIES.tokyo,a.METHODS.mwl,false))"
```

## Hosting (free)

This is a plain static site with no build step. It is served free by **GitHub Pages** from the `main`
branch of this repo (`CNAME` = `tokyomuslim.club`), so it uses no Netlify credits.

DNS at the registrar for GitHub Pages:

| Type  | Host  | Value |
|-------|-------|-------|
| A     | `@`   | `185.199.108.153` |
| A     | `@`   | `185.199.109.153` |
| A     | `@`   | `185.199.110.153` |
| A     | `@`   | `185.199.111.153` |
| CNAME | `www` | `mattappsaibagus-wq.github.io` |

Then in GitHub: **Settings → Pages → Source: Deploy from branch `main` / root**, custom domain
`tokyomuslim.club`, and tick **Enforce HTTPS**.

Local preview: `python3 -m http.server 8765` and open http://localhost:8765.

## Disclaimer

Hours, certification and prayer-room access change often. Listings are checked in good faith against public
sources; always confirm with the venue. Prayer times are calculated; follow your local mosque for congregation.

## License

Content: CC BY 4.0 · Code: MIT
