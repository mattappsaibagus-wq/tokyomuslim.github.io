/* Tokyo Muslim Club — app logic (prayer times, Qibla, directory). No dependencies. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   * 1. Prayer-time engine
   *    Standard astronomical method (as used by PrayTimes.org / most apps):
   *    sun declination + equation of time from the Julian date, Dhuhr at
   *    solar noon, other times from the sun's depression angle.
   * ------------------------------------------------------------------ */
  var dtr = function (d) { return d * Math.PI / 180; };
  var rtd = function (r) { return r * 180 / Math.PI; };
  var fix = function (a, b) { a = a - b * Math.floor(a / b); return a < 0 ? a + b : a; };

  function julian(y, m, d) {
    if (m <= 2) { y -= 1; m += 12; }
    var A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
  }

  function sunPosition(jd) {
    var D = jd - 2451545.0;
    var g = fix(357.529 + 0.98560028 * D, 360);
    var q = fix(280.459 + 0.98564736 * D, 360);
    var L = fix(q + 1.915 * Math.sin(dtr(g)) + 0.020 * Math.sin(dtr(2 * g)), 360);
    var e = 23.439 - 0.00000036 * D;
    var RA = rtd(Math.atan2(Math.cos(dtr(e)) * Math.sin(dtr(L)), Math.cos(dtr(L)))) / 15;
    return {
      decl: rtd(Math.asin(Math.sin(dtr(e)) * Math.sin(dtr(L)))),
      eqt: q / 15 - fix(RA, 24)
    };
  }

  var METHODS = {
    mwl:     { name: 'Muslim World League',               fajr: 18,   isha: 17 },
    diyanet: { name: 'Diyanet (Türkiye) — Tokyo Camii',   fajr: 18,   isha: 17 },
    jakim:   { name: 'JAKIM (Malaysia)',                  fajr: 20,   isha: 18 },
    kemenag: { name: 'KEMENAG (Indonesia)',               fajr: 20,   isha: 18 },
    muis:    { name: 'MUIS (Singapore)',                  fajr: 20,   isha: 18 },
    karachi: { name: 'Karachi (South Asia)',              fajr: 18,   isha: 18 },
    egypt:   { name: 'Egyptian General Authority',        fajr: 19.5, isha: 17.5 },
    makkah:  { name: 'Umm al-Qura (Makkah)',              fajr: 18.5, ishaMin: 90 },
    isna:    { name: 'ISNA (North America)',              fajr: 15,   isha: 15 },
    jafari:  { name: 'Shia Ithna-Ashari (Jafari)',        fajr: 16,   isha: 14, maghrib: 4 }
  };

  var CITIES = {
    tokyo:    { name: 'Tokyo',    lat: 35.6812, lon: 139.7671 },
    yokohama: { name: 'Yokohama', lat: 35.4437, lon: 139.6380 },
    saitama:  { name: 'Saitama',  lat: 35.8617, lon: 139.6455 },
    chiba:    { name: 'Chiba',    lat: 35.6074, lon: 140.1065 },
    narita:   { name: 'Narita',   lat: 35.7720, lon: 140.3929 },
    tsukuba:  { name: 'Tsukuba',  lat: 36.0835, lon: 140.0764 },
    kamakura: { name: 'Kamakura', lat: 35.3192, lon: 139.5467 },
    osaka:    { name: 'Osaka',    lat: 34.6937, lon: 135.5023 },
    kyoto:    { name: 'Kyoto',    lat: 35.0116, lon: 135.7681 }
  };

  /* Returns prayer times as fractional hours in JST for the given Y/M/D. */
  function prayerTimes(y, m, d, city, method, hanafi) {
    var tz = 9;
    var jd = julian(y, m, d) - city.lon / (15 * 24);
    var lat = city.lat;

    // Each time is refined once using the sun position at that time of day.
    function sunAt(hours) { return sunPosition(jd + hours / 24); }
    function noon(hours) { return fix(12 - sunAt(hours).eqt, 24); }
    function angleTime(angle, hours, ccw) {
      var s = sunAt(hours);
      var cosT = (-Math.sin(dtr(angle)) - Math.sin(dtr(s.decl)) * Math.sin(dtr(lat))) /
                 (Math.cos(dtr(s.decl)) * Math.cos(dtr(lat)));
      var t = rtd(Math.acos(Math.max(-1, Math.min(1, cosT)))) / 15;
      return noon(hours) + (ccw ? -t : t);
    }
    function asrTime(factor, hours) {
      var s = sunAt(hours);
      var angle = -rtd(Math.atan(1 / (factor + Math.tan(dtr(Math.abs(lat - s.decl))))));
      return angleTime(angle, hours, false);
    }

    var riseSet = 0.833;
    var t = {
      fajr:    angleTime(method.fajr, 5, true),
      sunrise: angleTime(riseSet, 6, true),
      dhuhr:   noon(12),
      asr:     asrTime(hanafi ? 2 : 1, 13),
      maghrib: angleTime(method.maghrib || riseSet, 18, false)
    };
    t.isha = method.ishaMin != null ? t.maghrib + method.ishaMin / 60 : angleTime(method.isha, 18, false);
    // Most apps add a small safety margin to Dhuhr and Maghrib; keep times exact but
    // round to the minute when displayed.
    var lonShift = tz - city.lon / 15;
    Object.keys(t).forEach(function (k) { t[k] = fix(t[k] + lonShift, 24); });
    return t;
  }

  /* Great-circle bearing to the Kaaba. */
  function qibla(lat, lon) {
    var kLat = dtr(21.4225), kLon = dtr(39.8262), pLat = dtr(lat), dLon = kLon - dtr(lon);
    var b = rtd(Math.atan2(Math.sin(dLon), Math.cos(pLat) * Math.tan(kLat) - Math.sin(pLat) * Math.cos(dLon)));
    return fix(b, 360);
  }

  // Expose for tests (node) without polluting much.
  var api = { prayerTimes: prayerTimes, qibla: qibla, METHODS: METHODS, CITIES: CITIES };
  if (typeof module !== 'undefined') module.exports = api;
  if (typeof document === 'undefined') return;

  /* ------------------------------------------------------------------ *
   * Small helpers
   * ------------------------------------------------------------------ */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function hhmm(h) {
    var mins = Math.round(h * 60) % 1440;
    return String(Math.floor(mins / 60)).padStart(2, '0') + ':' + String(mins % 60).padStart(2, '0');
  }
  function jstNow() {
    var p = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Tokyo', year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23'
    }).formatToParts(new Date());
    var o = {};
    p.forEach(function (x) { o[x.type] = +x.value; });
    return o;
  }
  var toastTimer;
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  }
  function copy(text, msg) {
    var done = function () { toast(msg || 'Copied'); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { legacyCopy(text); done(); });
    } else { legacyCopy(text); done(); }
  }
  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ------------------------------------------------------------------ *
   * 2. Theme
   * ------------------------------------------------------------------ */
  var root = document.documentElement;
  var savedTheme = store.get('tmc-theme', '');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  $('#themeToggle').addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store.set('tmc-theme', next);
  });

  /* ------------------------------------------------------------------ *
   * 3. Prayer widget
   * ------------------------------------------------------------------ */
  var NAMES = [['fajr', 'Fajr', 'الفجر'], ['sunrise', 'Sunrise', 'الشروق'], ['dhuhr', 'Dhuhr', 'الظهر'],
               ['asr', 'Asr', 'العصر'], ['maghrib', 'Maghrib', 'المغرب'], ['isha', 'Isha', 'العشاء']];
  var citySel = $('#citySelect'), methodSel = $('#methodSelect'), asrSel = $('#asrSelect');

  Object.keys(CITIES).forEach(function (k) { citySel.add(new Option(CITIES[k].name, k)); });
  Object.keys(METHODS).forEach(function (k) { methodSel.add(new Option(METHODS[k].name, k)); });
  citySel.value = CITIES[store.get('tmc-city')] ? store.get('tmc-city') : 'tokyo';
  methodSel.value = METHODS[store.get('tmc-method')] ? store.get('tmc-method') : 'mwl';
  asrSel.value = store.get('tmc-asr', 'standard') === 'hanafi' ? 'hanafi' : 'standard';

  [citySel, methodSel, asrSel].forEach(function (el) {
    el.addEventListener('change', function () {
      store.set('tmc-city', citySel.value);
      store.set('tmc-method', methodSel.value);
      store.set('tmc-asr', asrSel.value);
      renderPrayer();
    });
  });

  var grid = $('#prayerGrid');
  grid.innerHTML = NAMES.map(function (n) {
    return '<li class="pt" data-k="' + n[0] + '"><span class="pt-ar" lang="ar">' + n[2] + '</span>' +
      '<span class="pt-name">' + n[1] + '</span><span class="pt-time" data-time>--:--</span></li>';
  }).join('');

  function renderPrayer() {
    var now = jstNow();
    var city = CITIES[citySel.value], method = METHODS[methodSel.value], hanafi = asrSel.value === 'hanafi';
    var t = prayerTimes(now.year, now.month, now.day, city, method, hanafi);
    var nowH = now.hour + now.minute / 60 + now.second / 3600;

    var next = null;
    NAMES.forEach(function (n) {
      if (n[0] === 'sunrise') return;
      if (!next && t[n[0]] > nowH) next = n;
    });
    var nextTime;
    if (next) nextTime = t[next[0]];
    else {
      // After Isha: next is tomorrow's Fajr.
      var tm = new Date(Date.UTC(now.year, now.month - 1, now.day + 1));
      next = NAMES[0];
      nextTime = prayerTimes(tm.getUTCFullYear(), tm.getUTCMonth() + 1, tm.getUTCDate(), city, method, hanafi).fajr + 24;
    }
    // "Current" prayer = last one that has started (Sunrise ends Fajr).
    var current = null;
    NAMES.forEach(function (n) { if (t[n[0]] <= nowH) current = n[0]; });

    $$('.pt', grid).forEach(function (li) {
      var k = li.getAttribute('data-k');
      $('[data-time]', li).textContent = hhmm(t[k]);
      li.classList.toggle('is-next', k === next[0]);
      li.classList.toggle('is-now', k === current && k !== 'sunrise');
      li.classList.toggle('is-muted', k === 'sunrise');
    });

    var diff = Math.max(0, Math.round((nextTime - nowH) * 3600));
    var hh = Math.floor(diff / 3600), mm = Math.floor(diff % 3600 / 60), ss = diff % 60;
    var cd = (hh ? hh + 'h ' : '') + String(mm).padStart(2, '0') + 'm ' + String(ss).padStart(2, '0') + 's';
    $('#nextName').textContent = next[1];
    $('#nextTime').textContent = hhmm(nextTime % 24);
    $('#nextCountdown').textContent = cd;
    $('#heroNext').textContent = next[1] + ' ' + hhmm(nextTime % 24);
    $('#heroCountdown').textContent = 'in ' + cd;
    $('#jstClock').textContent = String(now.hour).padStart(2, '0') + ':' + String(now.minute).padStart(2, '0');
    $('#prayerCity').textContent = city.name;
    $('#prayerCityTitle').textContent = city.name;
    $$('[data-city-echo]').forEach(function (el) { el.textContent = city.name; });
    $('#qiblaDeg').textContent = Math.round(qibla(city.lat, city.lon)) + '°';
    $('#qiblaNeedle').style.transform = 'rotate(' + qibla(city.lat, city.lon) + 'deg)';
    $('#methodName').textContent = method.name + (hanafi ? ' · Hanafi Asr' : '');

    var dateFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tokyo', weekday: 'long', day: 'numeric', month: 'long' });
    var hijriFmt;
    try { hijriFmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', { timeZone: 'Asia/Tokyo', day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { hijriFmt = null; }
    var d = new Date();
    $('#todayDate').textContent = dateFmt.format(d) + (hijriFmt ? ' · ' + hijriFmt.format(d) : '');
  }
  renderPrayer();
  setInterval(renderPrayer, 1000);

  /* ------------------------------------------------------------------ *
   * 4. Directory
   * ------------------------------------------------------------------ */
  var PLACES = window.PLACES || [], REGIONS = window.REGIONS || {};
  var TYPE = {
    mosque:  { label: 'Mosque',       plural: 'Mosques' },
    prayer:  { label: 'Prayer room',  plural: 'Prayer rooms' },
    food:    { label: 'Halal dining', plural: 'Halal dining' },
    grocery: { label: 'Halal grocery', plural: 'Groceries' }
  };
  var HALAL = {
    full:     { label: 'Fully halal', cls: 'b-full', tip: 'Entire menu halal or certified kitchen' },
    menu:     { label: 'Certified halal menu', cls: 'b-menu', tip: 'Certified dishes or courses; venue may also serve non-halal items or alcohol' },
    friendly: { label: 'Muslim-friendly', cls: 'b-friendly', tip: 'Pork-free or halal meat, certification not confirmed' }
  };

  var state = { type: 'all', region: 'all', q: '', fullOnly: false };
  var listEl = $('#placeList'), countEl = $('#resultCount'), regionSel = $('#regionSelect');

  Object.keys(REGIONS).forEach(function (k) {
    var n = PLACES.filter(function (p) { return p.region === k; }).length;
    if (n) regionSel.add(new Option(REGIONS[k] + ' (' + n + ')', k));
  });

  // Hero stats + chip counts
  function count(type) { return PLACES.filter(function (p) { return type === 'all' || p.type === type; }).length; }
  $$('[data-count]').forEach(function (el) { el.textContent = count(el.getAttribute('data-count')); });
  $('#statAreas').textContent = new Set(PLACES.map(function (p) { return p.region; })).size;
  $$('[data-last-checked]').forEach(function (el) { el.textContent = window.LAST_CHECKED || ''; });

  function mapsUrl(p) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.name + ' ' + (p.jpAddress || p.address));
  }

  function card(p) {
    var t = TYPE[p.type], h = p.halal ? HALAL[p.halal] : null;
    var eyebrow = t.label + (p.cuisine ? ' · ' + p.cuisine : '');
    var html = '<article class="card card-' + p.type + '" id="' + esc(p.id) + '">';
    html += '<header class="card-head"><p class="eyebrow">' + esc(eyebrow) + '</p>';
    html += '<h3 class="card-title">' + esc(p.name) + '</h3>';
    if (p.jp) html += '<p class="card-jp" lang="ja">' + esc(p.jp) + '</p>';
    html += '<div class="badges">';
    if (h) html += '<span class="badge ' + h.cls + '" title="' + esc(h.tip) + '">' + h.label + '</span>';
    html += p.check
      ? '<span class="badge b-check" title="Sources disagree or are dated">Confirm before visiting</span>'
      : '<span class="badge b-ok" title="Re-checked ' + esc(window.LAST_CHECKED) + '">Checked ' + esc(window.LAST_CHECKED) + '</span>';
    html += '</div></header>';
    html += '<p class="card-desc">' + esc(p.desc) + '</p>';
    html += '<dl class="facts">';
    html += '<div><dt>Area</dt><dd>' + esc(p.area) + '</dd></div>';
    html += '<div><dt>Address</dt><dd>' + esc(p.address) + (p.jpAddress ? '<span class="jp" lang="ja">' + esc(p.jpAddress) + '</span>' : '') + '</dd></div>';
    if (p.access) html += '<div><dt>Access</dt><dd>' + esc(p.access) + '</dd></div>';
    if (p.hours) html += '<div><dt>Hours</dt><dd>' + esc(p.hours) + '</dd></div>';
    if (p.phone) html += '<div><dt>Phone</dt><dd><a href="tel:' + esc(p.phone.replace(/[^+\d]/g, '')) + '">' + esc(p.phone) + '</a></dd></div>';
    html += '</dl>';
    if (p.tags && p.tags.length) html += '<ul class="tags">' + p.tags.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (p.note) html += '<p class="note' + (p.check ? ' note-check' : '') + '"><span aria-hidden="true">' + (p.check ? '!' : 'i') + '</span>' + esc(p.note) + '</p>';
    html += '<footer class="card-foot">';
    html += '<a class="btn btn-primary" href="' + mapsUrl(p) + '" target="_blank" rel="noopener">Open in Maps</a>';
    if (p.jpAddress) html += '<button class="btn btn-ghost" type="button" data-copy="' + esc(p.jpAddress) + '">Copy address for taxi</button>';
    if (p.web) html += '<a class="btn btn-ghost" href="' + esc(p.web) + '" target="_blank" rel="noopener">Website</a>';
    html += '</footer>';
    if (p.src && p.src.length) {
      html += '<p class="sources">Sources: ' + p.src.map(function (s) {
        return '<a href="' + esc(s.u) + '" target="_blank" rel="noopener">' + esc(s.t) + '</a>';
      }).join(' · ') + '</p>';
    }
    return html + '</article>';
  }

  function matches(p) {
    if (state.type !== 'all' && p.type !== state.type) return false;
    if (state.region !== 'all' && p.region !== state.region) return false;
    if (state.fullOnly && p.type === 'food' && p.halal !== 'full') return false;
    if (state.q) {
      var hay = [p.name, p.jp, p.area, p.address, p.cuisine, p.desc, (p.tags || []).join(' '), REGIONS[p.region]].join(' ').toLowerCase();
      return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
    }
    return true;
  }

  var ORDER = { mosque: 0, prayer: 1, food: 2, grocery: 3 };
  var REGION_ORDER = Object.keys(REGIONS);
  function render() {
    var items = PLACES.filter(matches).sort(function (a, b) {
      return (REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region)) ||
             (ORDER[a.type] - ORDER[b.type]) || a.name.localeCompare(b.name);
    });
    countEl.textContent = items.length + (items.length === 1 ? ' place' : ' places');
    if (!items.length) {
      listEl.innerHTML = '<div class="empty"><p class="empty-title">Nothing matches yet.</p><p>Try a different area or clear the search. Know a place we are missing? <a href="#suggest">Tell us</a>.</p></div>';
      return;
    }
    var html = '', lastRegion = null;
    items.forEach(function (p) {
      if (p.region !== lastRegion) {
        if (lastRegion !== null) html += '</div>';
        html += '<h3 class="region-head"><span>' + esc(REGIONS[p.region]) + '</span></h3><div class="cards">';
        lastRegion = p.region;
      }
      html += card(p);
    });
    listEl.innerHTML = html + '</div>';
  }

  $$('.chip[data-type]').forEach(function (c) {
    c.addEventListener('click', function () {
      state.type = c.getAttribute('data-type');
      $$('.chip[data-type]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === c)); });
      $('#fullOnlyWrap').hidden = !(state.type === 'food' || state.type === 'all');
      render();
    });
  });
  regionSel.addEventListener('change', function () { state.region = regionSel.value; render(); });
  $('#fullOnly').addEventListener('change', function (e) { state.fullOnly = e.target.checked; render(); });
  var qTimer;
  $('#search').addEventListener('input', function (e) {
    clearTimeout(qTimer);
    qTimer = setTimeout(function () { state.q = e.target.value.trim().toLowerCase(); render(); }, 120);
  });
  listEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]');
    if (b) copy(b.getAttribute('data-copy'), 'Japanese address copied — show it to your driver');
  });
  // Shortcut links like #dir-mosque in the hero
  $$('[data-jump]').forEach(function (a) {
    a.addEventListener('click', function () {
      var chip = $('.chip[data-type="' + a.getAttribute('data-jump') + '"]');
      if (chip) chip.click();
    });
  });
  render();

  /* ------------------------------------------------------------------ *
   * 5. Change log
   * ------------------------------------------------------------------ */
  function logList(arr) {
    return arr.map(function (x) { return '<li><strong>' + esc(x.name) + '</strong><span>' + esc(x.why) + '</span></li>'; }).join('');
  }
  $('#removedList').innerHTML = logList(window.REMOVED || []);
  $('#correctedList').innerHTML = logList(window.CORRECTED || []);

  /* ------------------------------------------------------------------ *
   * 6. Phrasebook & label decoder
   * ------------------------------------------------------------------ */
  $$('[data-phrase]').forEach(function (b) {
    b.addEventListener('click', function () { copy(b.getAttribute('data-phrase'), 'Japanese copied — show it to staff'); });
  });
  var labelSearch = $('#labelSearch');
  labelSearch.addEventListener('input', function () {
    var q = labelSearch.value.trim().toLowerCase();
    $$('.label-row').forEach(function (r) {
      r.hidden = q && r.textContent.toLowerCase().indexOf(q) === -1;
    });
  });

  /* Mobile nav */
  var navBtn = $('#navToggle'), nav = $('#siteNav');
  navBtn.addEventListener('click', function () {
    var open = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  $$('#siteNav a').forEach(function (a) {
    a.addEventListener('click', function () { navBtn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); });
  });
})();
