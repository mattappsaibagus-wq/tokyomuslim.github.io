/*
 * Tokyo Muslim Club — directory data
 * ---------------------------------------------------------------------------
 * Every entry was re-checked against public sources in October 2026.
 *
 * type    : mosque | prayer | food | grocery
 * halal   : (food only) full = whole menu halal / certified kitchen
 *                       menu = certified halal dishes or courses, venue also serves non-halal or alcohol
 *                       friendly = Muslim-friendly (pork-free / halal meat), no formal certification confirmed
 * region  : key into REGIONS below
 * check   : true when sources disagree or are older than ~2 years; the note says what to confirm
 * src     : public pages used for the check, so readers can verify for themselves
 *
 * To add a place, copy an entry, keep the fields in the same order and cite at least one source.
 */

window.REGIONS = {
  central:  'Central Tokyo · Ginza · Akihabara',
  west:     'Shinjuku · Shibuya · Meguro',
  east:     'Ueno · Asakusa · Skytree',
  north:    'Ikebukuro · Otsuka',
  outer:    'Outer Tokyo · Edogawa · Katsushika · Tama',
  kanagawa: 'Yokohama · Kanagawa',
  saitama:  'Saitama',
  chiba:    'Chiba',
  northkanto: 'Ibaraki · Gunma',
  airport:  'Airports',
  kansai:   'Beyond Kanto · Osaka · Kyoto · Kobe'
};

window.LAST_CHECKED = 'October 2026';

window.PLACES = [
  /* ============================== MOSQUES ============================== */
  {
    id: 'tokyo-camii', type: 'mosque', region: 'west',
    name: 'Tokyo Camii & Turkish Culture Center', jp: '東京ジャーミイ・トルコ文化センター',
    area: 'Yoyogi-Uehara, Shibuya',
    address: '1-19 Oyama-cho, Shibuya-ku, Tokyo 151-0065', jpAddress: '〒151-0065 東京都渋谷区大山町1-19',
    access: 'Yoyogi-Uehara Stn, 5 min walk', phone: '+81 3-5790-0760', web: 'https://tokyocamii.org/',
    desc: "Japan's largest mosque, built in the Ottoman style. Separate women's gallery, wudu facilities, guided visits, and a halal market on the ground floor.",
    tags: ["Jumu'ah", "Women's section", 'Wudu', 'Halal market', 'Visitors welcome'],
    note: "Jumu'ah time changes with the season — check the timetable on tokyocamii.org before Friday.",
    src: [{ t: 'Tokyo Camii (official)', u: 'https://tokyocamii.org/' }]
  },
  {
    id: 'assalam-okachimachi', type: 'mosque', region: 'east',
    name: 'Masjid Assalam (Okachimachi Mosque)', jp: 'アッサラーム・モスク（御徒町）',
    area: 'Okachimachi, Taito',
    address: '4-6-7 Taito, Taito-ku, Tokyo 110-0016', jpAddress: '〒110-0016 東京都台東区台東4-6-7',
    access: 'Naka-Okachimachi Stn Exit 1, 2 min · JR Ueno, 10 min',
    desc: 'Community centre on the ground floor with prayer halls above. Run by the Assalaam Foundation, which also certifies several halal restaurants nearby.',
    tags: ['5 daily prayers', "Jumu'ah", "Women's area", 'Near halal ramen'],
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/1894/welcome-okachimachi-mosque-assalaam-masjid/' },
          { t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/mosque/Tokyo/AREAL2198/AREAM2948/M10012/' }]
  },
  {
    id: 'asakusa-mosque', type: 'mosque', region: 'east',
    name: 'Asakusa Mosque (Masjid Dar Al-Arqam)', jp: '浅草モスク（ダール・アルアルカム）',
    area: 'Higashi-Asakusa, Taito',
    address: '1-9-12 Higashi-Asakusa, Taito-ku, Tokyo 111-0025', jpAddress: '〒111-0025 東京都台東区東浅草1-9-12',
    access: 'Bus to Higashi-Asakusa stop, 2 min · Minami-Senju Stn, ~15 min', phone: '+81 3-3871-6061',
    desc: 'Small, welcoming mosque run by the Islamic Circle of Japan, about 13 minutes on foot from Senso-ji. Wudu area and separate men\'s and women\'s rooms.',
    tags: ["Jumu'ah", "Women's room", 'Wudu', 'Near Senso-ji'],
    src: [{ t: 'Wikipedia', u: 'https://en.wikipedia.org/wiki/Asakusa_Mosque' },
          { t: 'JNTO Muslim guide', u: 'https://www.japan.travel/en/my/muslim-guide/travel-ideas/5-tokyo-sightseeing-spots-with-prayer-facilities-nearby/' }]
  },
  {
    id: 'otsuka-mosque', type: 'mosque', region: 'north',
    name: 'Otsuka Mosque (Japan Islamic Trust)', jp: '大塚モスク',
    area: 'Minami-Otsuka, Toshima',
    address: '3-42-7 Minami-Otsuka, Toshima-ku, Tokyo', jpAddress: '東京都豊島区南大塚3-42-7',
    access: 'JR Otsuka Stn · one stop from Ikebukuro',
    desc: 'Run by the Japan Islamic Trust, which also certifies halal food. Daily prayers and Friday services, separate women\'s space and ablution area.',
    tags: ['5 daily prayers', "Jumu'ah", "Women's space", 'Wudu'],
    src: [{ t: 'Plaza Homes', u: 'https://www.realestate-tokyo.com/living-in-tokyo/religion/mosque-information/' },
          { t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/mosque/Tokyo/ikebukuro-sugamo-komagome/otsuka/M10011/' }]
  },
  {
    id: 'hiroo-mosque', type: 'mosque', region: 'west',
    name: 'Arabic Islamic Institute Mosque (Hiroo)', jp: 'アラブイスラーム学院 モスク',
    area: 'Moto-Azabu, Minato',
    address: '3-4-18 Moto-Azabu, Minato-ku, Tokyo', jpAddress: '東京都港区元麻布3-4-18',
    access: 'Hiroo Stn · ~10 min walk from Roppongi Hills',
    desc: 'Prayer hall inside the Arabic Islamic Institute, with daily prayers, Friday service and a separate women\'s room.',
    tags: ['Daily prayers', "Jumu'ah", "Women's room"],
    src: [{ t: 'Mosqpedia', u: 'https://mosqpedia.org/en/mosque/804' }]
  },
  {
    id: 'masjid-indonesia', type: 'mosque', region: 'west',
    name: 'Masjid Indonesia Tokyo', jp: 'インドネシア・モスク東京',
    area: 'Meguro',
    address: '4-6-6 Meguro, Meguro-ku, Tokyo 153-0063', jpAddress: '〒153-0063 東京都目黒区目黒4-6-6',
    access: 'Meguro Stn, ~16 min walk',
    desc: 'Four-storey mosque opened in 2017 on the grounds of the Indonesian School. Men and women pray on separate floors.',
    tags: ["Jumu'ah", 'Separate floors', 'Eid prayers'],
    src: [{ t: 'Mosqpedia', u: 'https://mosqpedia.org/en/mosque/810' },
          { t: 'Wikipedia', u: 'https://en.wikipedia.org/wiki/Indonesia_Tokyo_Mosque' }]
  },
  {
    id: 'shin-okubo-mosque', type: 'mosque', region: 'west',
    name: 'Shin-Okubo Mosque', jp: '新大久保モスク',
    area: 'Hyakunincho, Shinjuku',
    address: '2-10-6 Hyakunincho, Shinjuku-ku, Tokyo 169-0073', jpAddress: '〒169-0073 東京都新宿区百人町2-10-6',
    access: 'Shin-Okubo Stn, ~4 min',
    desc: "In the middle of \"Islam Yokocho\", Tokyo's halal shopping street. Wudu facilities and men's and women's prayer floors (no lift).",
    tags: ['Daily prayers', 'Wudu', 'Halal street'],
    check: true, note: 'Only one source gives the street number. Look for it next to the Nasco food court.',
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/107/' },
          { t: 'Tokyo Weekender', u: 'https://www.tokyoweekender.com/location/mosque-masjid-shin-okubo/' }]
  },
  {
    id: 'jame-kinshicho', type: 'mosque', region: 'east',
    name: 'Jame Masjid Kinshicho', jp: 'ジャーメ・マスジド（錦糸町）',
    area: 'Kinshicho, Sumida',
    address: 'Near JR Kinshicho Stn South Exit, Sumida-ku, Tokyo',
    access: 'JR Kinshicho Stn South Exit, a few minutes',
    desc: 'Neighbourhood mosque a short walk from Kinshicho Station, reported to be open around the clock. A good option near Tokyo Skytree.',
    tags: ['Open 24h (reported)', 'Near Skytree'],
    check: true, note: 'No published street address. Search “Jame Masjid Kinshicho” in Google Maps for the pin.',
    src: [{ t: 'Tokyo Weekender', u: 'https://www.tokyoweekender.com/location/jame-masjid-mosque/' }]
  },
  {
    id: 'makki-masjid', type: 'mosque', region: 'outer',
    name: 'Makki Masjid (Ohanajaya)', jp: 'マッキー・マスジド',
    area: 'Yotsugi, Katsushika',
    address: '5-22-14 Yotsugi, Katsushika-ku, Tokyo 124-0011', jpAddress: '〒124-0011 東京都葛飾区四つ木5-22-14',
    access: 'Keisei Ohanajaya Stn',
    desc: 'Founded in 2001 and known locally as the Ohanajaya mosque. A Tablighi Jamaat base in Tokyo.',
    tags: ['Daily prayers', "Jumu'ah"],
    check: true, note: 'Address from a single mosque database.',
    src: [{ t: 'Mosqpedia', u: 'https://mosqpedia.org/en/mosque/617' }]
  },
  {
    id: 'edogawa-mosque', type: 'mosque', region: 'outer',
    name: 'Edogawa Mosque (Nishi-Kasai)', jp: '江戸川モスク（西葛西）',
    area: 'Nishi-Kasai, Edogawa',
    address: 'Nishi-Kasai, Edogawa-ku, Tokyo',
    access: 'Nishi-Kasai Stn (Tozai Line)',
    desc: 'Mosque and community centre run by the Japan Islamic Trust, opened in 2021 for the large South Asian community in Nishi-Kasai.',
    tags: ["Jumu'ah", 'Community centre'],
    check: true, note: 'No published street address. Contact the Japan Islamic Trust or search Google Maps for the pin.',
    src: [{ t: 'Arab News (2021)', u: 'https://www.arabnews.com/node/1930671' }]
  },
  {
    id: 'hachioji-masjid', type: 'mosque', region: 'outer',
    name: 'Hachioji Masjid (Al-Tawheed)', jp: '八王子モスク',
    area: 'Hachioji, West Tokyo',
    address: '36-6 Hiraoka-machi, Hachioji, Tokyo 192-0061', jpAddress: '〒192-0061 東京都八王子市平岡町36-6',
    access: 'Bus from Hachioji Stn to Hiraoka-cho stop',
    desc: "Three-storey mosque in a residential street, built in 2002, with men's and women's prayer spaces. Handy if you are hiking Mt Takao.",
    tags: ['Daily prayers', "Women's space", 'Near Mt Takao'],
    src: [{ t: 'JNTO Muslim guide', u: 'https://www.japan.travel/en/my/muslim-guide/travel-ideas/destination-guide/nature-trail-tokyo-day-trip/' }]
  },
  {
    id: 'yokohama-masjid', type: 'mosque', region: 'kanagawa',
    name: "Ja'me Masjid Yokohama", jp: '横浜モスク',
    area: 'Tsuzuki, Yokohama',
    address: '1-31-13 Hayabuchi, Tsuzuki-ku, Yokohama 224-0025', jpAddress: '〒224-0025 神奈川県横浜市都筑区早渕1-31-13',
    access: 'Higashi-Yamata Stn, ~19 min · Nakamachidai Stn, ~20 min',
    desc: "Yokohama's main mosque, established in 2006 and reopened in 2020 after renovation. The best option for Friday prayers in Yokohama.",
    tags: ["Jumu'ah", 'Daily prayers'],
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/masjid/jame-masjid-yokohamayokohama-mosque/' },
          { t: 'Wikipedia', u: 'https://en.wikipedia.org/wiki/Yokohama_Mosque' }]
  },
  {
    id: 'ebina-mosque', type: 'mosque', region: 'kanagawa',
    name: 'Ebina Mosque', jp: '海老名モスク',
    area: 'Ebina, Kanagawa',
    address: '3-12-1 Kamigo, Ebina, Kanagawa 243-0434', jpAddress: '〒243-0434 神奈川県海老名市上郷3-12-1',
    access: 'Ebina Stn, ~20 min walk',
    desc: 'Community mosque in central Kanagawa, on the way to Hakone and Odawara.',
    tags: ['Daily prayers', "Jumu'ah"],
    src: [{ t: 'Japan Muslim Guide', u: 'https://muslim-guide.jp/mosque/ebina-mosque/' },
          { t: 'Halal Media Japan', u: 'https://halalmedia.jp/masjid/ebina-masjidebina-mosque/' }]
  },
  {
    id: 'gyotoku-masjid-hira', type: 'mosque', region: 'chiba',
    name: 'Masjid Hira (Gyotoku Mosque)', jp: '行徳モスク（マスジド・ヒラー）',
    area: 'Gyotoku, Ichikawa',
    address: '3-3-19 Gyotoku-Ekimae, Ichikawa, Chiba 272-0133', jpAddress: '〒272-0133 千葉県市川市行徳駅前3-3-19',
    access: 'Gyotoku Stn (Tozai Line), 5 min · 2 stops past Nishi-Kasai',
    desc: "Islamic Circle of Japan mosque in front of Gyotoku Station. Women on the 1st floor, men on the 2nd. Khutbah in English and Urdu. About 18 minutes by car from Tokyo Disney Resort.",
    tags: ['5 daily prayers', "Jumu'ah", "Women's floor", 'Near Disney'],
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/15207/review-for-hira-mosque-gyotoku-by-hanim-san/2/' },
          { t: 'Mosqpedia', u: 'https://mosqpedia.org/ar/mosque/809' }]
  },
  {
    id: 'toda-masjid', type: 'mosque', region: 'saitama',
    name: 'Toda Masjid', jp: '戸田モスク',
    area: 'Toda, Saitama',
    address: '4-5-1 Niizo-Minami, Toda, Saitama 335-0026', jpAddress: '〒335-0026 埼玉県戸田市新曽南4-5-1',
    access: 'JR Saikyo Line, Toda area',
    desc: 'Community mosque on the Saikyo Line, about 25 minutes from Shinjuku.',
    tags: ['Daily prayers', "Jumu'ah"],
    check: true, note: 'Directory listing only. Confirm prayer times locally.',
    src: [{ t: 'Halal in Japan — Kanto masjids', u: 'https://www.halalinjapan.com/kanto-masjids.html' }]
  },
  {
    id: 'saitama-masjid', type: 'mosque', region: 'saitama',
    name: 'Saitama Masjid', jp: '埼玉モスク',
    area: 'Sakura-ku, Saitama City',
    address: '560-8 Okubo-Ryoke, Sakura-ku, Saitama 338-0826', jpAddress: '〒338-0826 埼玉県さいたま市桜区大久保領家560-8',
    access: 'Near Saitama University · bus recommended',
    desc: 'Mosque near Saitama University that serves students and local families.',
    tags: ['Daily prayers', "Jumu'ah", 'Students'],
    check: true, note: 'Directory listing only.',
    src: [{ t: 'Halal in Japan — Kanto masjids', u: 'https://www.halalinjapan.com/kanto-masjids.html' }]
  },
  {
    id: 'tsukuba-masjid', type: 'mosque', region: 'northkanto',
    name: 'Tsukuba Masjid', jp: 'つくばモスク',
    area: 'Tsukuba, Ibaraki',
    address: '315-9 Kaname, Tsukuba, Ibaraki', jpAddress: '茨城県つくば市要315-9',
    access: 'Car or bus from Tsukuba Stn (Tsukuba Express)',
    desc: "Run by the Tsukuba Islamic Association, serving Tsukuba's large research and university community. Holds Jumu'ah and Eid prayers.",
    tags: ["Jumu'ah", 'Eid', 'Students'],
    note: 'Some directories give 315-10 Kaname. The association lists 315-9.',
    src: [{ t: 'Tsukuba Islamic Association', u: 'https://tsukuba-islamic-assoc.com/services/' },
          { t: 'Japan Muslim Guide', u: 'https://muslim-guide.jp/mosque/tsukuba-masjid-tsukuba-mosque/' }]
  },
  {
    id: 'isesaki-masjid', type: 'mosque', region: 'northkanto',
    name: 'Isesaki Mosque (Jame Masjid Muhammadiya)', jp: '伊勢崎モスク',
    area: 'Isesaki, Gunma',
    address: '37-4 Kita-machi, Isesaki, Gunma 372-0056', jpAddress: '〒372-0056 群馬県伊勢崎市北町37-4',
    access: 'Isesaki, Gunma',
    desc: "One of north Kanto's established mosques, serving the large Pakistani and South Asian community in Gunma.",
    tags: ['Daily prayers', "Jumu'ah"],
    check: true, note: 'Directory listings only.',
    src: [{ t: 'Halal in Japan — Kanto masjids', u: 'https://www.halalinjapan.com/kanto-masjids.html' }]
  },

  /* ============================ PRAYER ROOMS ============================ */
  {
    id: 'tokyo-station-prayer', type: 'prayer', region: 'central',
    name: 'Tokyo Station Prayer Room', jp: '東京駅 祈祷室',
    area: 'Marunouchi North Exit',
    address: 'JR East Travel Service Center, Marunouchi North Exit, Tokyo Station', jpAddress: '東京都千代田区丸の内1-9-1 東京駅 丸の内北口',
    access: 'Inside the station, Marunouchi North Exit',
    hours: 'About 10:00–17:00',
    desc: 'Small 8 m² room inside the JR East Travel Service Center with a washing space for wudu. Free and open to people of any faith. Press the intercom and staff will open the door.',
    tags: ['Wudu', 'Free', 'Intercom entry', '~2 people'],
    note: 'Opening hours have changed over the years. Check with JR East before planning around it.',
    src: [{ t: 'Japan Today', u: 'https://japantoday.com/category/national/jr-east-to-open-prayer-room-at-tokyo-station' },
          { t: 'Arab News Japan', u: 'https://www.arabnews.jp/en/japan/article_113425/' }]
  },
  {
    id: 'jnto-tic', type: 'prayer', region: 'central',
    name: 'JNTO Tourist Information Center', jp: 'JNTOツーリスト・インフォメーション・センター',
    area: 'Yurakucho / Marunouchi',
    address: 'Shin-Tokyo Bldg 1F, 3-3-1 Marunouchi, Chiyoda-ku, Tokyo', jpAddress: '東京都千代田区丸の内3-3-1 新東京ビル1F',
    access: 'Yurakucho Stn, 3 min',
    desc: "Japan's national tourist office has a small prayer space for about two people. Staff can also help with halal restaurant searches.",
    tags: ['Free', '~2 people', 'Tourist info'],
    src: [{ t: 'Japan Today', u: 'https://japantoday.com/category/national/jr-east-to-open-prayer-room-at-tokyo-station' }]
  },
  {
    id: 'matsuya-ginza', type: 'prayer', region: 'central',
    name: 'Matsuya Ginza Prayer Room', jp: '松屋銀座 礼拝室',
    area: 'Ginza',
    address: '3-6-1 Ginza, Chuo-ku, Tokyo', jpAddress: '東京都中央区銀座3-6-1 松屋銀座',
    access: 'Ginza Stn, directly connected',
    desc: 'Department store prayer room with a foot-washing area, prayer mats and a Qibla marker. It gets a queue at peak prayer times.',
    tags: ['Wudu', 'Prayer mats', 'Qibla marked'],
    check: true, note: 'Sources disagree on the floor. Ask at the information counter.',
    src: [{ t: 'Malay Mail (2024)', u: 'https://www.malaymail.com/news/malaysia/2024/08/17/in-japan-more-stores-now-feature-surau-as-muslim-arrivals-soar/147319' }]
  },
  {
    id: 'shibuya-parco', type: 'prayer', region: 'west',
    name: 'Shibuya PARCO Prayer Room (5F)', jp: '渋谷パルコ 5F 礼拝室',
    area: 'Shibuya',
    address: '15-1 Udagawa-cho, Shibuya-ku, Tokyo', jpAddress: '東京都渋谷区宇田川町15-1 渋谷PARCO 5F',
    access: 'Shibuya Stn, 5 min',
    desc: 'Free prayer room on the 5th floor with wudu facilities and separate men\'s and women\'s areas for about 4–5 people each.',
    tags: ['Wudu', 'Men / women', 'Free'],
    src: [{ t: 'JNTO Muslim guide', u: 'https://www.japan.travel/en/my/muslim-guide/travel-ideas/visit-shibuya-tokyos-cultural-hub/' },
          { t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/81/' }]
  },
  {
    id: 'shibuya-dogenzaka', type: 'prayer', region: 'west',
    name: 'Shibuya Prayer Room (Dogenzaka)', jp: '渋谷 礼拝室（道玄坂）',
    area: 'Dogenzaka, Shibuya',
    address: '2-15-1 Dogenzaka, Shibuya-ku, Tokyo', jpAddress: '東京都渋谷区道玄坂2-15-1',
    access: 'Shibuya Stn Hachiko Exit, ~4 min (towards 109)',
    desc: 'A community musalla in a converted room in an office building. No separation between men and women.',
    tags: ['Community-run', 'Mixed space'],
    check: true, note: 'Single source and status unconfirmed. Shibuya PARCO is the reliable alternative nearby.',
    src: [{ t: 'Halaltrip', u: 'https://www.halaltrip.com/other/blog/find-mosques-and-prayer-places-in-tokyo/' }]
  },
  {
    id: 'skytree-prayer', type: 'prayer', region: 'east',
    name: 'Tokyo Skytree Prayer Room (1F)', jp: '東京スカイツリー 1F 礼拝室',
    area: 'Oshiage, Sumida',
    address: '1-1-2 Oshiage, Sumida-ku, Tokyo', jpAddress: '東京都墨田区押上1-1-2',
    access: 'Tokyo Skytree Stn / Oshiage Stn',
    desc: 'Opened in 2021 at visitors\' request. Separate men\'s and women\'s rooms, three prayer rugs each and a Qibla compass on the ceiling.',
    tags: ['Men / women', 'Prayer mats', 'Qibla marked'],
    note: 'Hours are not published. Ask the information desk.',
    src: [{ t: 'Arab News Japan', u: 'https://www.arabnews.jp/en/japan/article_44768' }]
  },
  {
    id: 'world-porters', type: 'prayer', region: 'kanagawa',
    name: 'Yokohama World Porters Prayer Room (6F)', jp: '横浜ワールドポーターズ 6F 礼拝室',
    area: 'Minato Mirai, Yokohama',
    address: '2-2-1 Shinko, Naka-ku, Yokohama', jpAddress: '神奈川県横浜市中区新港2-2-1',
    access: 'Minato Mirai / Shinko, Yokohama',
    desc: 'Large enough for a small jama\'ah. Prayer mats, mukena/telekung, wudu space and a partition between men and women.',
    tags: ['Wudu', 'Mukena', 'Men / women'],
    note: 'Get permission and the door code at the 2F information counter first.',
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/31743/shopping-amusement-experience-enjoy-yokohama-fam-trip-fullest' }]
  },
  {
    id: 'disneysea-prayer', type: 'prayer', region: 'chiba',
    name: 'Tokyo DisneySea — prayer space on request', jp: '東京ディズニーシー（礼拝スペース）',
    area: 'Maihama, Urayasu',
    address: '1-13 Maihama, Urayasu, Chiba', jpAddress: '千葉県浦安市舞浜1-13',
    access: 'Maihama Stn → Disney Resort Line',
    desc: 'There is no public prayer room, but cast members can arrange a quiet space. Bring your own mat.',
    tags: ['On request', 'Bring a mat'],
    check: true, note: "Ask Guest Relations on arrival. Masjid Hira in Gyotoku is about 18 minutes away by car.",
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/18703/useful-tips-for-muslim-who-plan-to-travel-to-japan-part-2/2/' }]
  },
  {
    id: 'haneda-t3', type: 'prayer', region: 'airport',
    name: 'Haneda Airport Terminal 3 Prayer Rooms', jp: '羽田空港 第3ターミナル 祈祷室',
    area: 'Haneda (HND) · International',
    address: 'Terminal 3, 3F Departures, near check-in counter L', jpAddress: '東京都大田区羽田空港2-6-5 第3ターミナル 3F 出発ロビー',
    access: 'Haneda Airport Terminal 3 Stn',
    hours: '24 hours',
    desc: 'Two rooms (men and women) in the departure lobby with ablution areas, carpet and a Qibla marking on the ceiling. Use the intercom to enter.',
    tags: ['24h', 'Wudu', 'Men / women', 'Intercom entry'],
    note: 'Prayer mats are not always provided.',
    src: [{ t: 'Zenbird', u: 'https://zenbird.media/halal-foods-and-prayer-rooms-available-muslim-friendly-haneda-airport-hnd/' },
          { t: 'Groovy Japan', u: 'https://www.groovyjapan.com/en/iman_en-25/' }]
  },
  {
    id: 'narita-prayer', type: 'prayer', region: 'airport',
    name: 'Narita Airport Prayer Rooms', jp: '成田空港 祈祷室',
    area: 'Narita (NRT) · T1, T2, T3',
    address: 'T1 Central Bldg 5F (landside) & Gate 28 area (airside) · T2 Main Bldg 1F · T3', jpAddress: '千葉県成田市古込1-1 成田国際空港',
    access: 'Narita Airport Terminal 1 / Terminal 2·3 Stn',
    desc: 'Every terminal has a prayer room, before and after passport control in T1 and T2. Rooms have ablution stations and Qibla direction.',
    tags: ['All terminals', 'Wudu', 'Landside & airside'],
    note: 'Rooms have moved during renovations. Check the Narita Airport website for the current floor plan.',
    src: [{ t: 'Narita Airport (official)', u: 'https://www.narita-airport.jp/en/service/ud/guide/' },
          { t: 'Groovy Japan', u: 'https://www.groovyjapan.com/en/iman_en-25/' }]
  },

  /* =============================== FOOD =============================== */
  {
    id: 'panga', type: 'food', halal: 'full', region: 'east', cuisine: 'Wagyu yakiniku',
    name: 'Halal Wagyu Yakiniku PANGA', jp: 'ハラール和牛焼肉 ぱんが',
    area: 'Okachimachi / Ueno',
    address: '3-27-9 Taito, Taito-ku, Tokyo 110-0016', jpAddress: '〒110-0016 東京都台東区台東3-27-9',
    access: 'Okachimachi / Shin-Okachimachi Stn', phone: '+81 3-3839-8929',
    desc: 'They buy whole halal-slaughtered cattle, so all the beef is halal. Charcoal-grilled wagyu at the table, popular with Tokyo\'s Muslim community.',
    tags: ['All-halal beef', 'Wagyu', 'Reserve ahead'],
    note: 'PANGA also runs a Ueno branch (Hatoya 3 Bldg 2F, 3-27-3 Ueno, +81 3-5846-8529) and an Asakusa branch. Check which one you are booking.',
    src: [{ t: 'TableCheck', u: 'https://www.tablecheck.com/yakiniku-panga-okachimachi' },
          { t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/21978/special-issue-on-yakiniku-restaurants-which-serve-halal-meat/2/' }]
  },
  {
    id: 'ayam-ya', type: 'food', halal: 'full', region: 'east', cuisine: 'Chicken ramen',
    name: 'Ayam-YA Shin-Okachimachi', jp: 'アヤム屋 新御徒町',
    area: 'Motoasakusa, Taito',
    address: '3-10-3 Motoasakusa, Taito-ku, Tokyo 111-0041', jpAddress: '〒111-0041 東京都台東区元浅草3-10-3',
    access: 'Shin-Okachimachi Stn (Oedo Line), 5 min', phone: '+81 3-4360-3672',
    hours: '11:30–15:00, 17:00–20:00',
    desc: 'Rich chicken paitan ramen, tsukemen and karaage. Japan Halal Foundation all-halal rating, and no alcohol on the premises.',
    tags: ['No alcohol', 'Chicken paitan', 'JHF certified'],
    note: 'The original Okachimachi shop (4-10-1 Taito) closed and moved here.',
    src: [{ t: 'JAL Japan Travel', u: 'https://en.jal.japantravel.com/places/tokyo/ayam-ya-halal-ramen-tokyo/706' },
          { t: 'Halal Navi (2026)', u: 'https://www.halal-navi.com/blog/en/best-halal-ramen-tokyo-2026/' }]
  },
  {
    id: 'shunpudou', type: 'food', halal: 'full', region: 'east', cuisine: 'Wagyu ramen & gyukatsu',
    name: 'Halal Wagyu Ramen & Beef Cutlet Shunpudou', jp: 'ハラール和牛ラーメン＆牛カツ 春風堂',
    area: 'Asakusa',
    address: '3F Heiwa Bldg, 2-6-11 Asakusa, Taito-ku, Tokyo 111-0032', jpAddress: '〒111-0032 東京都台東区浅草2-6-11 平和ビル3F',
    access: 'Asakusa Stn, ~10 min · near Nakamise', phone: '+81 3-5830-6700',
    hours: '11:00–22:00 daily',
    desc: 'The largest halal ramen shop in Asakusa. A5 wagyu ramen on an 8-hour chicken broth, plus wagyu gyukatsu. Has a prayer space.',
    tags: ['Prayer space', 'Wagyu', 'Halal ingredients'],
    src: [{ t: 'Time Out Tokyo', u: 'https://www.timeout.com/tokyo/restaurants/halal-wagyu-ramen-beef-cutlet-shunpudou' },
          { t: 'LIVE JAPAN', u: 'https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-asakusa/spot-lj0143737/' }]
  },
  {
    id: 'sushiken', type: 'food', halal: 'menu', region: 'east', cuisine: 'Sushi',
    name: 'Asakusa Sushiken', jp: '浅草 すし賢',
    area: 'Asakusa',
    address: '2-11-4 Asakusa, Taito-ku, Tokyo 111-0032', jpAddress: '〒111-0032 東京都台東区浅草2-11-4',
    access: 'Tsukuba Express Asakusa Stn Exit A1, 1 min', phone: '+81 3-5246-6547',
    desc: 'One of Tokyo\'s first sushi restaurants with Japan Halal Foundation-certified food: halal vinegar and soy sauce, with a prayer space.',
    tags: ['JHF-certified food', 'Prayer space', 'Lunch sets'],
    note: 'The food is certified but the restaurant serves alcohol to other diners. Lunch sets run about ¥1,200–2,200.',
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/4577/sushi-ken-a-sushi-restaurant-in-asakusa-starts-serving-dishes-for-muslims/2/' },
          { t: 'Tabelog', u: 'https://tabelog.com/en/tokyo/A1311/A131102/13010528/' }]
  },
  {
    id: 'honolu-asakusa', type: 'food', halal: 'full', region: 'east', cuisine: 'Ramen',
    name: 'Honolu Premier Asakusa Hanare', jp: 'ホノル プレミア 浅草 はなれ',
    area: 'Asakusa',
    address: '3-17-3 Asakusa, Taito-ku, Tokyo', jpAddress: '東京都台東区浅草3-17-3',
    access: 'Asakusa, north of Senso-ji',
    hours: '11:30–21:00',
    desc: 'Asakusa branch of the Honolu halal ramen group. Certified halal, no pork, no alcohol.',
    tags: ['No alcohol', 'Certified'],
    check: true, note: 'One directory lists a Honolu at 1-5-11 Kaminarimon instead. Confirm on Google Maps.',
    src: [{ t: 'Zabihah', u: 'https://www.zabihah.com/restaurants/08dd8e62-8418-4559-8bd6-ed75a66fc72e/honolu-premier-asakusa-hanare-tokyo-kant' },
          { t: 'Hotel Tavinos', u: 'https://hoteltavinos.com/en/blog/asakusa-must-try-noodle-shops/' }]
  },
  {
    id: 'naritaya', type: 'food', halal: 'full', region: 'east', cuisine: 'Ramen',
    name: 'Naritaya Halal Ramen', jp: '成田屋 ハラールラーメン',
    area: 'Asakusa',
    address: '2-7-13 Asakusa, Taito-ku, Tokyo 111-0032', jpAddress: '〒111-0032 東京都台東区浅草2-7-13',
    access: '3 min from Senso-ji, inside the arcade', phone: '+81 3-4285-9806',
    desc: 'Small, long-running halal ramen counter behind Senso-ji, approved by the Otsuka mosque. Known for its ramen and halal gyudon.',
    tags: ['All-halal', 'Near Senso-ji', 'Budget'],
    check: true, note: 'Most listings date from 2015–2019. Call before going.',
    src: [{ t: 'Time Out Tokyo', u: 'https://www.timeout.com/tokyo/restaurants/naritaya' }]
  },
  {
    id: 'gonpachi-asakusa', type: 'food', halal: 'menu', region: 'east', cuisine: 'Wagyu course',
    name: 'Gonpachi Asakusa Azumabashi', jp: '権八 浅草吾妻橋',
    area: 'Kaminarimon, Asakusa',
    address: 'Nakagawa Bldg 1F–2F, 2-1-15 Kaminarimon, Taito-ku, Tokyo', jpAddress: '東京都台東区雷門2-1-15 中川ビル1F・2F',
    access: 'Asakusa Stn Exit 4 (Ginza Line) / A5 (Asakusa Line)', phone: '+81 3-5830-3791',
    hours: '11:30–23:00',
    desc: 'Atmospheric izakaya with a Japan Halal Foundation-certified halal wagyu steak course.',
    tags: ['Halal course', 'Book 3 days ahead', 'Wagyu'],
    note: 'Only the halal course is certified. Book at least 3 business days ahead. The beef and price change; recently Shiretoko beef at about ¥21,780.',
    src: [{ t: 'Groovy Japan', u: 'https://groovyjapan.com/en/gonpachi02' },
          { t: 'Metropolis', u: 'https://metropolisjapan.com/gonpachi-asakusa/' }]
  },
  {
    id: 'godaime', type: 'food', halal: 'full', region: 'east', cuisine: 'Wagyu steak & burgers',
    name: 'Godaime — Halal Wagyu', jp: '五代目 ハラール和牛',
    area: 'Asakusa',
    address: '3-27-5 Asakusa, Taito-ku, Tokyo 111-0032', jpAddress: '〒111-0032 東京都台東区浅草3-27-5',
    access: 'Asakusa Stn, ~500 m',
    desc: 'Japanese halal wagyu steaks and burgers, alcohol-free, with a prayer room on site.',
    tags: ['Alcohol-free', 'Prayer room', 'Wagyu'],
    check: true, note: 'Another listing places a Godaime branch in Shibuya. Confirm which one you are booking.',
    src: [{ t: 'TableCheck', u: 'https://www.tablecheck.com/wagyu-burger-steak-ramen-5w-tokyo' }]
  },
  {
    id: 'luxe-asakusa', type: 'food', halal: 'full', region: 'east', cuisine: 'Burgers',
    name: "LUXE BURGERS & Sunny's Table Asakusa", jp: 'ラックスバーガーズ 浅草',
    area: 'Asakusa',
    address: '2F, 1-16-10 Asakusa, Taito-ku, Tokyo 111-0032', jpAddress: '〒111-0032 東京都台東区浅草1-16-10 2F',
    access: 'Asakusa Stn',
    desc: 'Halal-certified burger restaurant opened in December 2023, with more than 30 burgers including wagyu and lamb.',
    tags: ['Certified', 'Wagyu & lamb', 'Family-friendly'],
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/228/' }]
  },
  {
    id: 'shinjukutei-ueno', type: 'food', halal: 'full', region: 'east', cuisine: 'Wagyu ramen',
    name: 'Halal Wagyu Ramen Shinjuku-tei — Ueno Park', jp: 'ハラール和牛ラーメン 新宿亭 上野公園店',
    area: 'Yushima, near Ueno Park',
    address: 'Ikenohata Bldg 1F, 3-45-10 Yushima, Bunkyo-ku, Tokyo 113-0034', jpAddress: '〒113-0034 東京都文京区湯島3-45-10 池之端ビル1F',
    access: 'Yushima Stn · Ueno Park, short walk',
    hours: '12:00–22:00, closed Tue',
    desc: 'A5 wagyu ramen certified by the Japan Halal Foundation. No alcohol, no haram ingredients.',
    tags: ['JHF certified', 'No alcohol', 'Wagyu'],
    src: [{ t: 'Halal Food in Japan (Oct 2025)', u: 'https://www.halalfoodinjapan.com/en/post/242/' }]
  },
  {
    id: 'toribushi', type: 'food', halal: 'friendly', region: 'east', cuisine: 'Chicken ramen',
    name: 'Halal Ramen Toribushi', jp: 'ハラールラーメン 鶏節',
    area: 'Okachimachi',
    address: 'Okachimachi Green Heights 106, 6-1-6 Ueno, Taito-ku, Tokyo 110-0005', jpAddress: '〒110-0005 東京都台東区上野6-1-6 御徒町グリーンハイツ106',
    access: 'JR Okachimachi Stn, 2 min', phone: '+81 3-6284-2413',
    desc: 'Slow-cooked chicken broth ramen and tsukemen, about 6 minutes from Masjid Assalam.',
    tags: ['Chicken broth', 'Near mosque'],
    check: true, note: 'Listed as Muslim-friendly based on visitor reports, not certified. One map record marks this branch closed. Call first.',
    src: [{ t: 'Groovy Japan (opening, 2022)', u: 'https://www.groovyjapan.com/en/nahaaru/' },
          { t: 'Halal Navi (2026)', u: 'https://www.halal-navi.com/blog/en/halal-food-asakusa-ueno-2026-area-guide/' }]
  },
  {
    id: 'shinjukutei', type: 'food', halal: 'full', region: 'west', cuisine: 'Wagyu ramen',
    name: 'Halal Wagyu Ramen Shinjuku-tei', jp: 'ハラール和牛ラーメン 新宿亭',
    area: 'Shinjuku-sanchome',
    address: 'Eclair Shinjuku B103, 3-11-6 Shinjuku, Shinjuku-ku, Tokyo', jpAddress: '東京都新宿区新宿3-11-6 エクレール新宿 B103',
    access: 'Shinjuku-sanchome Stn, ~140 m',
    desc: 'Fully certified wagyu ramen with no pork and no alcohol, and one of the most-reviewed halal restaurants in Tokyo. Has a prayer room with wudu.',
    tags: ['Certified', 'No alcohol', 'Prayer room'],
    note: 'Also has a Yotsuya branch (B1F Ueno Bldg, 1-23 Yotsuya, +81 80-5913-0146). The two listings disagree on which certifier.',
    src: [{ t: 'TableCheck', u: 'https://www.tablecheck.com/en/shinjukutei-shinjuku' },
          { t: 'Halal Navi (2026)', u: 'https://www.halal-navi.com/blog/en/best-halal-ramen-tokyo-2026/' }]
  },
  {
    id: 'honolu-ebisu', type: 'food', halal: 'full', region: 'west', cuisine: 'Ramen',
    name: 'Halal Ramen & Dining Honolu Ebisu', jp: 'ホノル 恵比寿',
    area: 'Ebisu',
    address: 'Americabashi Bldg 1F, 1-23-1 Ebisu-Minami, Shibuya-ku, Tokyo', jpAddress: '東京都渋谷区恵比寿南1-23-1 アメリカ橋ビル1F',
    access: 'Ebisu Stn, ~5 min',
    hours: '11:30–15:00, 17:00–21:30',
    desc: 'Chicken-broth ramen, halal gyoza and karaage. Still operating as of mid-2026.',
    tags: ['Certified', 'Gyoza', 'English menu'],
    src: [{ t: 'Time Out Tokyo', u: 'https://www.timeout.com/tokyo/restaurants/honolu-ebisu' },
          { t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/118/' }]
  },
  {
    id: 'gyumon', type: 'food', halal: 'menu', region: 'west', cuisine: 'Wagyu yakiniku',
    name: 'Gyumon Shibuya', jp: '牛門 渋谷本店',
    area: 'Shibuya',
    address: '3-14-5 Shibuya, Shibuya-ku, Tokyo', jpAddress: '東京都渋谷区渋谷3-14-5',
    access: 'Shibuya Stn, ~10 min (off Meiji-dori)',
    desc: 'Small yakiniku spot whose halal wagyu courses are certified by the Malaysia Halal Corporation.',
    tags: ['Halal courses', 'Wagyu', 'Grill at table'],
    note: 'Order the halal course specifically. The regular menu is not halal.',
    src: [{ t: 'Time Out Tokyo', u: 'https://www.timeout.com/tokyo/restaurants/gyumon' },
          { t: 'Savor Japan', u: 'https://savorjapan.com/0031072528/map' }]
  },
  {
    id: 'mb-wagyu-okubo', type: 'food', halal: 'full', region: 'west', cuisine: 'Wagyu ramen',
    name: 'MB Halal Wagyu Ramen Okubo', jp: 'MBハラール和牛ラーメン 大久保',
    area: 'Okubo / Shin-Okubo',
    address: '2-32-3 Hyakunincho, Shinjuku-ku, Tokyo', jpAddress: '東京都新宿区百人町2-32-3',
    access: 'JR Okubo Stn, 1 min',
    desc: 'Wagyu ramen in the Shin-Okubo halal quarter, a few minutes from the Shin-Okubo mosque.',
    tags: ['Wagyu', 'Near mosque'],
    check: true, note: 'Guides disagree on certification and another listing gives 1-20-16 Hyakunincho. Ask to see the certificate.',
    src: [{ t: 'Halal Food in Japan (2026)', u: 'https://www.halalfoodinjapan.com/en/post/254/' }]
  },
  {
    id: 'bosphorus-hasan', type: 'food', halal: 'menu', region: 'west', cuisine: 'Turkish',
    name: 'Bosphorus Hasan Shinjuku', jp: 'ボスフォラス・ハサン 新宿店',
    area: 'Shinjuku-sanchome',
    address: '2-7-2 Shinjuku, Shinjuku-ku, Tokyo 160-0022', jpAddress: '〒160-0022 東京都新宿区新宿2-7-2',
    access: 'Short walk from Shinjuku Stn',
    desc: 'Long-standing Turkish restaurant with kebabs, meze and pide made with halal meat.',
    tags: ['Halal meat', 'Turkish'],
    note: 'Alcohol is served. Listings disagree on the phone number and floor.',
    src: [{ t: 'Tabelog', u: 'https://tabelog.com/en/tokyo/A1304/A130401/13095048/' },
          { t: 'Halal Food in Japan', u: 'https://halalfoodinjapan.com/restaurant/Tokyo/AREAL2115/AREAM2115/R10027' }]
  },
  {
    id: 'malaychan', type: 'food', halal: 'full', region: 'north', cuisine: 'Malaysian',
    name: 'Malaychan (Satu)', jp: 'マレーちゃん',
    area: 'Nishi-Ikebukuro',
    address: '3-22-6 Nishi-Ikebukuro, Toshima-ku, Tokyo', jpAddress: '東京都豊島区西池袋3-22-6',
    access: 'Ikebukuro Stn West Exit, 5–9 min', phone: '+81 3-5391-7638', web: 'https://malaychan-satu.jp/',
    desc: 'Halal-certified Malaysian cooking — nasi lemak, rendang, roti canai — and a favourite with Malaysian students.',
    tags: ['Certified', 'Malaysian'],
    note: 'Malaychan 2 in Higashi-Ikebukuro is a different shop with no certification. Opening days have changed over time.',
    src: [{ t: 'Time Out Tokyo', u: 'https://www.timeout.com/tokyo/restaurants/malay-chan' },
          { t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/14/' }]
  },
  {
    id: 'kebabula', type: 'food', halal: 'friendly', region: 'north', cuisine: 'Kebab café',
    name: 'Kebabula', jp: 'ケバブラ',
    area: 'Minami-Otsuka',
    address: '3-53-7 Minami-Otsuka, Toshima-ku, Tokyo', jpAddress: '東京都豊島区南大塚3-53-7',
    access: 'JR Otsuka Stn · near Otsuka Mosque', phone: '+81 3-6903-1173',
    desc: 'Small kebab café a couple of minutes from Otsuka Mosque.',
    tags: ['Near mosque', 'Quick bite'],
    note: 'A reviewer noted one curry on the menu is not halal. Ask before ordering.',
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/58/' }]
  },
  {
    id: 'cinta-jawa', type: 'food', halal: 'menu', region: 'central', cuisine: 'Indonesian',
    name: 'Cinta Jawa Cafe Akihabara', jp: 'チンタジャワカフェ 秋葉原',
    area: 'Akihabara',
    address: '1F, 1-1-7 Kanda-Izumicho, Chiyoda-ku, Tokyo 101-0024', jpAddress: '〒101-0024 東京都千代田区神田和泉町1-1-7',
    access: 'JR Akihabara Stn', phone: '+81 3-5821-6682',
    desc: 'Muslim-owned Indonesian kitchen serving nasi goreng, rendang and ayam penyet. There is a prayer room upstairs for about 7 people, with mukena.',
    tags: ['Muslim-owned', 'Prayer room', 'Halal food'],
    note: 'Beer is on the menu. Branches also in Shibuya and Yokohama.',
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/146/' },
          { t: 'FUN! JAPAN', u: 'https://www.fun-japan.jp/id/articles/1526' }]
  },
  {
    id: 'luxe-nihonbashi', type: 'food', halal: 'full', region: 'central', cuisine: 'Burgers',
    name: 'Luxe Burgers Nihonbashi', jp: 'ラックスバーガーズ 日本橋',
    area: 'Nihonbashi',
    address: '6-13 Nihonbashi-Kobunacho, Chuo-ku, Tokyo 103-0024', jpAddress: '〒103-0024 東京都中央区日本橋小舟町6-13',
    access: 'Nihonbashi area', phone: '+81 3-6206-2466', web: 'https://luxe-burgers.com/',
    desc: 'Original branch of the halal burger restaurant, with Japan Halal Foundation certification.',
    tags: ['JHF certified', 'Burgers'],
    check: true, note: 'Certification last confirmed in a 2021 review.',
    src: [{ t: 'Halal Food in Japan', u: 'https://halalfoodinjapan.com/restaurant/Tokyo/AREAL2141/AREAM2143/R10764' }]
  },
  {
    id: 'sario-chinatown', type: 'food', halal: 'menu', region: 'kanagawa', cuisine: 'Chinese',
    name: 'SARIO Heichin Saryo — Chinatown', jp: '聘珍茶寮 SARIO 中華街店',
    area: 'Yokohama Chinatown',
    address: '143 Yamashita-cho, Naka-ku, Yokohama 231-0023', jpAddress: '〒231-0023 神奈川県横浜市中区山下町143',
    access: 'Motomachi-Chukagai Stn · next to Zenrin Gate', phone: '+81 45-663-5126',
    hours: '11:00–20:00',
    desc: 'A rare Muslim-friendly option in Yokohama Chinatown, using halal-certified chicken.',
    tags: ['Halal chicken', 'Chinatown'],
    check: true, note: "Confirm which dishes are halal when you order.",
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/post/149/' }]
  },
  {
    id: 'khazana-yokohama', type: 'food', halal: 'menu', region: 'kanagawa', cuisine: 'Indian',
    name: 'Khazana Minatomirai', jp: 'カザナ みなとみらい',
    area: 'Minato Mirai, Yokohama',
    address: "Queen's Square B1, 2-3 Minatomirai, Nishi-ku, Yokohama 220-0012", jpAddress: '〒220-0012 神奈川県横浜市西区みなとみらい2-3 クイーンズスクエア B1',
    access: 'Minatomirai Stn, directly connected',
    hours: '11:00–22:00',
    desc: 'Indian buffet and à la carte with a halal sign on display. Convenient while sightseeing at Minato Mirai.',
    tags: ['Halal food', 'Buffet'],
    note: 'Alcohol is served. A sister branch at DECKS Odaiba is reported as halal-certified.',
    src: [{ t: 'Zabihah', u: 'https://www.zabihah.com/restaurants/cade2b30-7767-11ef-95ae-6045bdeb9f57/khazana-yokohama-shi-kanagawa-ken' },
          { t: 'Halal Media Japan', u: 'https://www.halalmedia.jp/archives/23986/halal-hunting-inside-queens-square-yokohama/2/' }]
  },
  {
    id: 'kajiya-ramen', type: 'food', halal: 'full', region: 'kanagawa', cuisine: 'Ramen',
    name: 'Kajiya Ramen Kamakura', jp: '鍛冶屋ラーメン 鎌倉',
    area: 'Yukinoshita, Kamakura',
    address: 'Shangri-La Tsurugaoka, 1-9-29 Yukinoshita, Kamakura, Kanagawa', jpAddress: '神奈川県鎌倉市雪ノ下1-9-29',
    access: 'Kamakura Stn, towards Tsurugaoka Hachimangu', phone: '+81 467-38-8887',
    desc: "Fully halal-certified ramen with a prayer space. One of Kamakura's few halal restaurants.",
    tags: ['Certified', 'Prayer space'],
    check: true, note: 'Not the same business as "Kajiya" seafood in Komachi, which offers a Muslim-friendly menu but is not certified.',
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/142/' }]
  },
  {
    id: 'kousushi', type: 'food', halal: 'friendly', region: 'saitama', cuisine: 'Sushi & unagi',
    name: 'Kawagoe Kousushi', jp: '幸すし 川越',
    area: 'Kawagoe Old Town',
    address: '1-13-7 Motomachi, Kawagoe, Saitama 350-0062', jpAddress: '〒350-0062 埼玉県川越市元町1-13-7',
    access: 'Hon-Kawagoe Stn, ~15 min (Kurazukuri street)', phone: '+81 49-224-0333',
    hours: '11:30–14:00, 17:00–20:00',
    desc: 'Sushi house founded in the 1800s in "Little Edo". Its Muslim-friendly menu uses halal chicken and beef and all-halal seasonings, including for unagi.',
    tags: ['Muslim-friendly menu', 'Halal seasonings', 'Day trip'],
    note: 'Reserve unaju at least 1 day ahead. A reviewer mentions a prayer room. Ask when you book.',
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/en/archives/35369/kawagoe-halal-restaurant-kousuhi/' }]
  },
  {
    id: 'himalaya-funabashi', type: 'food', halal: 'full', region: 'chiba', cuisine: 'Indian & Nepali',
    name: 'Himalaya Curry Funabashi', jp: 'ヒマラヤカレー 船橋',
    area: 'Funabashi',
    address: '2-1-1 Hama-cho, Funabashi, Chiba', jpAddress: '千葉県船橋市浜町2-1-1',
    access: 'Funabashi bayside area', phone: '+81 47-421-7633',
    desc: 'Curry restaurant listed as halal-certified, in the LaLaport Tokyo-Bay area.',
    tags: ['Certified (listed)', 'Curry'],
    check: true, note: 'Directory listing. Confirm the certificate in store.',
    src: [{ t: 'Halal in Japan — Chiba', u: 'https://www.halalinjapan.com/chiba-halal-food-restaurants.html' }]
  },
  {
    id: 'narita-noodles', type: 'food', halal: 'menu', region: 'airport', cuisine: 'Soba & udon',
    name: 'Narita Airport halal noodles', jp: 'そじ坊（第2ターミナル）・杵屋麦丸（第1ターミナル）',
    area: 'Narita (NRT)',
    address: 'Sojibo — T2 Main Bldg 4F · Kineya Mugimaru — T1 Central Bldg 5F', jpAddress: '千葉県成田市古込1-1 成田国際空港',
    access: 'Landside, before security',
    desc: 'Two airport noodle counters with halal certification: Sojibo (soba, Japan Halal Association) in T2 and Kineya Mugimaru (udon) in T1.',
    tags: ['Certified menu', 'Airport'],
    check: true, note: 'Airport tenants change often. Check the Narita Airport website.',
    src: [{ t: 'Halal Navi (2026)', u: 'https://www.halal-navi.com/blog/en/narita-airport-chiba-2026-prayer-rooms-halal-food/' }]
  },

  /* ============================== GROCERY ============================== */
  {
    id: 'camii-market', type: 'grocery', region: 'west',
    name: 'Tokyo Camii Halal Market', jp: '東京ジャーミイ ハラールマーケット',
    area: 'Yoyogi-Uehara, Shibuya',
    address: 'Tokyo Camii 1F, Oyama-cho, Shibuya-ku, Tokyo 151-0065', jpAddress: '〒151-0065 東京都渋谷区大山町1-19 東京ジャーミイ1F',
    access: 'Yoyogi-Uehara Stn, 5 min', phone: '+81 3-5790-0760', web: 'https://halalmarket.tokyocamii.org/',
    hours: '10:00–19:00 daily',
    desc: "The mosque's own shop: Turkish, Malaysian and Indonesian groceries, halal meat, sweets and crafts.",
    tags: ['Halal meat', 'Turkish', 'Online shop'],
    note: 'Sometimes closes early for stocktaking, so check notices on tokyocamii.org.',
    src: [{ t: 'Tokyo Camii Halal Market (official)', u: 'https://halalmarket.tokyocamii.org/' }]
  },
  {
    id: 'nasco', type: 'grocery', region: 'west',
    name: 'Nasco Halal Food (Shin-Okubo)', jp: 'ナスコ ハラールフード 新大久保',
    area: 'Hyakunincho, Shinjuku',
    address: '2-9-3-104 Hyakunincho, Shinjuku-ku, Tokyo 169-0073', jpAddress: '〒169-0073 東京都新宿区百人町2-9-3-104',
    access: 'Shin-Okubo Stn (Islam Yokocho)', phone: '+81 3-5337-1477',
    desc: "One of the oldest halal grocers on Shin-Okubo's \"Islam Yokocho\". Halal meat, spices, rice and frozen goods, plus a food court and kebab stand next door.",
    tags: ['Halal meat', 'Spices', 'Food court'],
    note: 'Time Out gives 2-10-8 Hyakunincho. It is the same block, near the mosque.',
    src: [{ t: 'Halal Food in Japan', u: 'https://halalfoodinjapan.com/post/47' },
          { t: 'Time Out Tokyo', u: 'https://www.timeout.com/tokyo/shopping/green-nasco' }]
  },
  {
    id: 'mmmart', type: 'grocery', region: 'north',
    name: 'MMmart Halal Grocery', jp: 'MMマート',
    area: 'Kita-Otsuka',
    address: '3-32-3 Kita-Otsuka, Toshima-ku, Tokyo', jpAddress: '東京都豊島区北大塚3-32-3',
    access: 'JR Otsuka Stn North Exit, ~5 min', phone: '+81 3-5927-9044',
    desc: 'Neighbourhood halal grocery near Otsuka Mosque.',
    tags: ['Halal meat', 'Near mosque'],
    src: [{ t: 'Halal Food in Japan', u: 'https://www.halalfoodinjapan.com/en/post/62/' }]
  },

  /* ======================== BEYOND KANTO (KANSAI) ======================== */
  {
    id: 'kobe-mosque', type: 'mosque', region: 'kansai',
    name: 'Kobe Mosque', jp: '神戸モスク',
    area: 'Kitano, Kobe',
    address: '2-25-14 Nakayamate-dori, Chuo-ku, Kobe 650-0004', jpAddress: '〒650-0004 兵庫県神戸市中央区中山手通2-25-14',
    access: 'Uphill from Sannomiya, Kitano district', phone: '+81 78-231-6060',
    desc: "Japan's first mosque, completed in 1935, which survived both the 1945 air raids and the 1995 earthquake. A landmark of the Kitano foreign quarter.",
    tags: ['Historic (1935)', 'Daily prayers', "Jumu'ah"],
    src: [{ t: 'Wikipedia', u: 'https://en.wikipedia.org/wiki/Kobe_Mosque' }]
  },
  {
    id: 'osaka-masjid', type: 'mosque', region: 'kansai',
    name: 'Osaka Masjid', jp: '大阪マスジド',
    area: 'Owada, Nishiyodogawa',
    address: '4-12-16 Owada, Nishiyodogawa-ku, Osaka', jpAddress: '大阪府大阪市西淀川区大和田4-12-16',
    access: 'Chibune Stn (Hanshin Main Line)',
    desc: 'One of the largest mosques in Japan. Halal grocery on the ground floor and prayer hall on the 3rd floor.',
    tags: ['Large', 'Halal grocery', "Jumu'ah"],
    src: [{ t: 'Time Out Osaka', u: 'https://www.timeout.com/osaka/things-to-do/osaka-masjid' }]
  },
  {
    id: 'kyoto-mosque', type: 'mosque', region: 'kansai',
    name: 'Kyoto Mosque (Kyoto Muslim Association)', jp: '京都モスク',
    area: 'Kamigyo, near the Imperial Palace',
    address: 'River Side Kojinguchi 1F, 92 Miyagaki-cho, Kamigyo-ku, Kyoto 602-0853', jpAddress: '〒602-0853 京都府京都市上京区宮垣町92 リバーサイド荒神口1F',
    access: 'Near Kojinguchi, by the Kamo River', phone: '+81 75-231-3499',
    desc: "Holds the five daily prayers, Jumu'ah and Eid prayers, with space for about 110 people and men's and women's areas.",
    tags: ['5 daily prayers', "Jumu'ah", "Women's area"],
    note: 'The office is reported open Tue–Sat 12:00–18:00.',
    src: [{ t: 'Kyoto City official guide', u: 'https://kyoto.travel/en/muslim/index.html' },
          { t: 'Traditional Kyoto', u: 'https://traditionalkyoto.com/home/travel-support/kyoto-for-muslims/' }]
  },
  {
    id: 'ayam-ya-namba', type: 'food', halal: 'full', region: 'kansai', cuisine: 'Chicken ramen',
    name: 'Ayam-YA Namba', jp: 'アヤム屋 難波',
    area: 'Nipponbashi, Osaka',
    address: '1-10-7 Nipponbashi-Higashi, Naniwa-ku, Osaka', jpAddress: '大阪府大阪市浪速区日本橋東1-10-7',
    access: 'Nipponbashi / Namba area',
    desc: 'Osaka branch of Ayam-YA. No pork, no beef and no MSG. You can do wudu and pray in the shop, and prayer cloths are provided for women.',
    tags: ['No pork', 'Prayer space'],
    check: true, note: 'Sources disagree on the closing day. Check before going.',
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/40135/dont-miss-to-stop-by-at-the-authentic-ayam-ya-ramen-shop-in-osaka/' }]
  },
  {
    id: 'yoshiya-arashiyama', type: 'food', halal: 'full', region: 'kansai', cuisine: 'Japanese',
    name: 'Yoshiya Arashiyama', jp: '嵐山 よしや',
    area: 'Arashiyama, Kyoto',
    address: '31 Saga-Tenryuji Tsukurimichi-cho, Ukyo-ku, Kyoto', jpAddress: '京都府京都市右京区嵯峨天龍寺造路町31',
    access: 'Arashiyama, near Tenryu-ji',
    hours: '11:00–17:00',
    desc: 'Halal-certified Japanese set meals next to the bamboo grove, with a tatami prayer room (partitioned for men and women) and wudu space.',
    tags: ['Certified', 'Prayer room', 'Wudu'],
    src: [{ t: 'Halal Media Japan', u: 'https://halalmedia.jp/archives/36251/kyoto-style-pray-space-at-the-authentic-japanese-restaurant-yoshiya-arashiyama-kyoto/' }]
  }
];

/* Places removed from the previous edition, kept here so the change is transparent. */
window.REMOVED = [
  { name: 'CoCo Ichibanya Halal Akihabara', why: 'Closed in 2020, along with the Shinjuku halal branch.' },
  { name: 'Shinjuku Takashimaya prayer room', why: 'Reported permanently closed.' },
  { name: '"Menya Musashi — Halal Beef Broth"', why: 'No evidence of a halal menu. The chain uses pork-bone broth. The address given was also not a real address.' },
  { name: '"Gyoumu Super — Tokyo Camii Branch"', why: 'Does not exist. The shop at Tokyo Camii is the Tokyo Camii Halal Market (now listed).' },
  { name: '"Torikizoku Namba — Halal Menu"', why: 'No evidence of any halal menu. Torikizoku is an izakaya chain that serves alcohol.' },
  { name: '"Arashiyama Muslim Prayer Room (Maruman)"', why: 'Could not be verified. Replaced with Yoshiya Arashiyama, which has a confirmed prayer room.' },
  { name: '"Osaka Islamic Center, Ebisu-Nishi"', why: 'Wrong name and address. The main mosque is Osaka Masjid in Owada, Nishiyodogawa (now listed).' },
  { name: 'Sekai Cafe Asakusa', why: 'Permanently closed in 2020 (listed on the old Halal Food page).' },
  { name: 'Halal Ramen Ouka, Shinjuku Gyoen', why: 'Permanently closed in 2020 (listed on the old Halal Food page).' },
  { name: 'Mazulu Halal Beef Noodle, Tokyo Station', why: 'Closed on 30 September 2020.' }
];

window.CORRECTED = [
  { name: 'Nishi-Kasai Mosque "Masjid Hira, 3-3-19 Nishi-Kasai"', why: 'Two mosques had been merged into one listing. Masjid Hira is the Gyotoku Mosque at 3-3-19 Gyotoku-Ekimae, Ichikawa (Chiba). The Nishi-Kasai mosque is a separate Japan Islamic Trust centre. Both are now listed separately.' },
  { name: 'Ayam-YA', why: 'Moved from 4-10-1 Taito to 3-10-3 Motoasakusa. The phone number is now 03-4360-3672.' },
  { name: 'Asakusa Sushiken', why: 'Phone corrected to 03-5246-6547. It serves alcohol, so it is now labelled "certified halal menu" rather than all-halal.' },
  { name: 'Kobe Mosque', why: 'Address corrected to 2-25-14 Nakayamate-dori (it had shown a Nagata-dori address) and phone to 078-231-6060.' },
  { name: 'Kyoto Mosque', why: 'Address corrected to 92 Miyagaki-cho, Kamigyo-ku (it had shown an Ukyo-ku address).' },
  { name: 'Haneda T3 prayer rooms', why: 'Location corrected to the 3F departure lobby near check-in counter L.' },
  { name: "Tokyo Camii Jumu'ah", why: 'Removed the fixed "13:00" time because it changes with the season.' },
  { name: 'Prayer-time calculator', why: 'Dhuhr (and so every derived time) was about 55 minutes late for Tokyo, and Asr used a fixed sun angle. Rewritten with the standard astronomical formulas.' },
  { name: 'Currency converter', why: 'Removed. It said "live mid-market rates" but the rates were fixed in the code.' }
];
