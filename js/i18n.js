/* =============================================
   TSUKIMI RAMEN — i18n.js
   Language: EN / NL / JA
   ============================================= */

(function () {
  var t = {
    en: {
      /* Nav */
      'nav.home': 'Home',
      'nav.menu': 'Menu',
      'nav.about': 'About',
      'nav.reserve': 'Reserve',

      /* Hero */
      'hero.tagline': 'Authentic Japanese ramen above the busy streets of Damrak.',
      'hero.sub': 'Rich broths, fresh noodles, and a quiet spot upstairs in central Amsterdam.',
      'hero.address': 'Damrak 45 · Floor 1<br>Amsterdam',
      'hero.reserveBtn': 'Reserve a table',
      'hero.viewMenu': 'View Menu',
      'hero.hours': 'Open daily · 09:00 – 23:00',

      /* Index – Menu preview */
      'menuPreview.label': "A taste of what's upstairs",
      'menuPreview.heading': 'Fresh, simple <em>ramen.</em>',
      'card.tonkotsu.name': 'Tonkotsu Ramen',
      'card.tonkotsu.desc': 'Rich pork bone broth with noodles, chashu pork, bok choy and soft-boiled egg',
      'card.veg.name': 'Vegetable Miso Ramen',
      'card.veg.desc': 'Vegetarian-friendly ramen with miso, bok choy, corn, broccoli, bamboo shoots and seaweed',
      'card.special.name': 'Tsukimi Ramen Special',
      'card.special.desc': 'Rich pork bone broth with spareribs, bok choy, bamboo shoots, narutomaki and soft-boiled egg',
      'menuPreview.cta': 'Our Ramen \u2192',

      /* Index – Concept */
      'concept.label': 'Our story',
      'concept.text': 'Located just above the busy streets of Damrak, Tsukimi Ramen offers a quiet escape in the heart of Amsterdam. Step upstairs and enjoy a warm, casual ramen experience away from the crowds.',

      /* Index – Reserve CTA */
      'reserve.label': 'Reservations',
      'reserve.heading': '<em>Reserve your</em> table',
      'reserve.sub': 'Skip the wait and secure your spot upstairs.',
      'reserve.btn': 'Reserve now',
      'reserve.note': "We'll integrate online reservations soon.",

      /* Index – Location */
      'location.label': 'Find us',
      'location.heading': "We're <em>upstairs</em>",
      'location.desc': 'Located above At James on Damrak 45, floor 1.<br>Step upstairs and discover Tsukimi Ramen.',
      'location.addrKey': 'Address',
      'location.addrVal': 'Damrak 45, Floor 1, Amsterdam',
      'location.hoursKey': 'Hours',
      'location.hoursVal': '09:00 \u2013 23:00 daily',
      'location.phoneKey': 'Phone',
      'location.emailKey': 'Email',
      'location.note': "<strong>Look for At James on Damrak 45</strong> \u2014 we're on the first floor. Take the stairs up and you'll find us.",

      /* Social */
      'social.label': 'Follow us',
      'social.heading': 'Stay up to date',

      /* Footer */
      'footer.tagline': 'Ramen upstairs in the heart of Amsterdam',
      'footer.menu': 'Menu',
      'footer.about': 'About',

      /* Menu page */
      'menu.pageTitle': 'Our Menu',
      'menu.subtitle': 'Fresh ramen upstairs in the heart of Amsterdam',
      'menu.ramenCat': 'Ramen',
      'menu.sidesCat': 'Side Dishes',
      'menu.friedCat': 'Fried Dishes',
      'menu.dessertCat': 'Desserts',
      'menu.toppingsCat': 'Extra Toppings',
      'menu.saucesCat': 'Sauces',

      /* Menu – Ramen */
      'ramen.intro': 'We make our broths fresh every day — slow-cooked for hours so every bowl is packed with flavour. Pick your favourite and enjoy it upstairs, away from the busy streets below.',
      'ramen.special.name': 'Tsukimi Ramen Special',
      'ramen.special.desc': 'Rich pork bone broth with noodles, spareribs, bok choy, bamboo shoots, narutomaki, a soft-boiled seasoned egg, seaweed, white sesame seeds, and scallions',
      'ramen.tonkotsu.name': 'Tonkotsu Ramen',
      'ramen.tonkotsu.desc': 'Rich pork bone broth with noodles, chashu pork, bok choy, bamboo shoots, narutomaki, a soft-boiled seasoned egg, seaweed, white sesame seeds, and scallions',
      'ramen.paitan.name': 'Paitan Chicken Ramen',
      'ramen.paitan.desc': 'Paitan chicken broth with noodles, chicken fillet, bok choy, bamboo shoots, narutomaki, a soft-boiled seasoned egg, and scallions',
      'ramen.seafood.name': 'Seafood Ramen',
      'ramen.seafood.desc': 'Choice between paitan chicken or rich pork broth with noodles, diverse seafoods, bok choy, bamboo shoots, narutomaki, a soft-boiled seasoned egg, bonito flakes, and scallions',
      'ramen.vegmiso.name': 'Vegetable Miso Ramen',
      'ramen.vegmiso.desc': 'Vegetarian-friendly ramen with miso, noodles, bok choy, corn, broccoli, bamboo shoots, seaweed, and scallions',

      /* Menu – Sides */
      'sides.seaweed': 'Seasoned seaweed salad',
      'sides.edamame': 'Edamame',
      'sides.kimchi': 'Kimchi',
      'sides.kimchi.note': 'Korean fermented vegetables',
      'sides.dumplings': 'Pan-fried chicken dumplings',
      'sides.dumplings.note': '5\u00d7 or 10\u00d7',
      'sides.gyoza': 'Pan-fried vegetable gyoza',
      'sides.gyoza.note': '5\u00d7 or 10\u00d7',
      'sides.pancake': 'Japanese savory pancake sticks',
      'sides.pancake.note': '2 pieces',

      /* Menu – Fried */
      'fried.takoyaki': 'Takoyaki (octopus fritters)',
      'fried.chicken': 'Japanese fried chicken',
      'fried.spring': 'Spring rolls',
      'fried.shrimp': 'Ebi fry (Japanese fried shrimp)',
      'fried.skewers': 'Chicken onion skewers',

      /* Menu – Desserts */
      'dessert.dango': 'Dango sticks',
      'dessert.mochi': 'Mochi ice cream',
      'dessert.tofu': 'Tofu pudding',

      /* Toppings */
      'topping.chashu': 'Chashu pork (3\u00d7)',
      'topping.chicken': 'Chicken fillet (3\u00d7)',
      'topping.seafood': 'Diverse seafood (100g)',
      'topping.shrimp': 'Shrimps (2\u00d7)',
      'topping.egg': 'Ajitama egg',
      'topping.scallions': 'Scallions',
      'topping.redOnions': 'Red onions',
      'topping.dryOnions': 'Dry onions',
      'topping.corn': 'Corn',
      'topping.bamboo': 'Bamboo shoots',
      'topping.bokchoy': 'Boiled bok choy',
      'topping.boiledVeg': 'Boiled vegetables',
      'topping.noodles': 'Extra noodles',
      'topping.seaweed': 'Dried seaweed',

      /* Sauces */
      'sauce.mayo': 'Japanese mayonnaise',
      'sauce.sweetChili': 'Sweet chili sauce',
      'sauce.hot': 'Hot sauce (Sriracha)',
      'sauce.takoyaki': 'Takoyaki sauce',
      'sauce.okono': 'Okonomiyaki sauce',
      'sauce.teriyaki': 'Teriyaki sauce',

      /* About page */
      'about.label': 'About us',
      'about.p1': 'Tsukimi Ramen is a casual ramen spot located in the heart of Amsterdam, on the first floor of Damrak 45 \u2014 above At James, which has been welcoming guests since 2011.',
      'about.p2': 'Inspired by the energy of the city, we offer a simple and welcoming space just above the busy streets. Step upstairs and take a break from the crowds.',
      'about.p3': 'Our focus is on fresh, quality ramen made for a quick, comfortable meal in the city.',
      'about.viewMenu': 'View our menu',
      'about.reserve': 'Reserve a table',

      /* Full Menu PDF */
      'fullmenu.catbar': 'Full Menu PDF',
      'fullmenu.title': 'Full Menu',
      'fullmenu.desc': 'View our complete menu \u2014 including drinks, extra toppings and sauces \u2014 as a PDF.',
      'fullmenu.btn': 'View Full Menu (PDF)',

      /* Careers page */
      'nav.careers': 'Careers',
      'footer.careers': 'Careers',
      'careers.label': 'Join us',
      'careers.heading': 'Join the <em>Tsukimi Team</em>',
      'careers.intro': 'Want to work in the heart of Amsterdam? Tsukimi Ramen is a cozy Japanese ramen spot located above the busy streets of Damrak. We\u2019re always looking for friendly, motivated people who enjoy working in a warm and dynamic environment.',
      'careers.intro2': 'Join our team and be part of a growing concept focused on quality, hospitality, and authentic ramen.',
      'careers.perk1.title': 'Great food',
      'careers.perk1.desc': 'Staff meals included. Fresh ramen every shift.',
      'careers.perk2.title': 'Central location',
      'careers.perk2.desc': 'Right in the heart of Amsterdam, steps from Centraal Station.',
      'careers.perk3.title': 'Warm team',
      'careers.perk3.desc': 'A small, friendly team in a cozy and energetic atmosphere.',
      'careers.form.label': 'Apply now',
      'careers.form.heading': 'Send us your <em>application</em>',
      'careers.form.name': 'Full name',
      'careers.form.name.ph': 'Your name',
      'careers.form.email': 'Email address',
      'careers.form.email.ph': 'your@email.com',
      'careers.form.phone': 'Phone',
      'careers.form.phone.ph': '+31 6 ...',
      'careers.form.optional': '(optional)',
      'careers.form.position': 'Position',
      'careers.form.position.ph': 'Select a position\u2026',
      'careers.form.pos.kitchen': 'Kitchen Staff',
      'careers.form.pos.foh': 'Front of House',
      'careers.form.pos.dish': 'Dishwasher',
      'careers.form.pos.other': 'Other',
      'careers.form.message': 'Tell us about yourself',
      'careers.form.message.ph': 'Tell us a bit about yourself, your experience, and why you\u2019d like to join Tsukimi Ramen\u2026',
      'careers.form.cvnote': 'Want to include your CV or have a question? Email us at <a href="mailto:tsukimiramen@gmail.com">tsukimiramen@gmail.com</a> or call <a href="tel:+31643682172">06 43 68 21 72</a> \u2014 mention your name and the position you applied for.',
      'careers.form.submit': 'Send application',
      'careers.success.title': 'Thank you!',
      'careers.success.msg': 'We received your application and will get back to you soon.',

      /* Thank you page */
      'thankyou.label': 'Application received',
      'thankyou.heading': 'Thank <em>you!</em>',
      'thankyou.msg': 'We received your application and will get back to you as soon as possible.',
      'thankyou.sub': 'In the meantime, feel free to follow us on Instagram or take a look at our menu.',
      'thankyou.home': 'Back to home',
      'thankyou.menu': 'View our menu',
    },

    nl: {
      /* Nav */
      'nav.home': 'Home',
      'nav.menu': 'Menu',
      'nav.about': 'Over ons',
      'nav.reserve': 'Reserveer',

      /* Hero */
      'hero.tagline': 'Authentieke Japanse ramen boven de drukke straten van de Damrak.',
      'hero.sub': 'Rijke bouillons, verse noodles en een rustige plek op de eerste verdieping in het hart van Amsterdam.',
      'hero.address': 'Damrak 45 · Eerste verdieping<br>Amsterdam',
      'hero.reserveBtn': 'Reserveer een tafel',
      'hero.viewMenu': 'Bekijk menu',
      'hero.hours': 'Dagelijks open · 09:00 \u2013 23:00',

      /* Index – Menu preview */
      'menuPreview.label': 'Een voorproefje van boven',
      'menuPreview.heading': 'Vers, eenvoudig <em>ramen.</em>',
      'card.tonkotsu.name': 'Tonkotsu Ramen',
      'card.tonkotsu.desc': 'Rijke varkensbouillon met noedels, chashu varkensvlees, paksoi en zacht gekookt ei',
      'card.veg.name': 'Groente Miso Ramen',
      'card.veg.desc': 'Vegetarische ramen met miso, paksoi, mais, broccoli, bamboescheuten en zeewier',
      'card.special.name': 'Tsukimi Ramen Special',
      'card.special.desc': 'Rijke varkensbouilon met spareribs, paksoi, bamboescheuten, narutomaki en zacht gekookt ei',
      'menuPreview.cta': 'Ons Ramen \u2192',

      /* Index – Concept */
      'concept.label': 'Ons verhaal',
      'concept.text': 'Net boven de drukke straten van Damrak biedt Tsukimi Ramen een rustige plek in het hart van Amsterdam. Ga naar boven en geniet van een warm, casual ramen-ervaring weg van de drukte.',

      /* Index – Reserve CTA */
      'reserve.label': 'Reserveringen',
      'reserve.heading': '<em>Reserveer je</em> tafel',
      'reserve.sub': 'Sla het wachten over en zeker je plek boven.',
      'reserve.btn': 'Nu reserveren',
      'reserve.note': 'Online reserveringen komen binnenkort.',

      /* Index – Location */
      'location.label': 'Vind ons',
      'location.heading': 'Wij zitten <em>boven</em>',
      'location.desc': 'Gelegen boven At James op Damrak 45, eerste verdieping.<br>Loop naar boven en ontdek Tsukimi Ramen.',
      'location.addrKey': 'Adres',
      'location.addrVal': 'Damrak 45, Eerste verdieping, Amsterdam',
      'location.hoursKey': 'Openingstijden',
      'location.hoursVal': '09:00 \u2013 23:00 dagelijks',
      'location.phoneKey': 'Telefoon',
      'location.emailKey': 'E-mail',
      'location.note': '<strong>Zoek naar At James op Damrak 45</strong> \u2014 wij zitten op de eerste verdieping. Neem de trap omhoog en je vindt ons.',

      /* Social */
      'social.label': 'Volg ons',
      'social.heading': 'Blijf op de hoogte',

      /* Footer */
      'footer.tagline': 'Ramen boven in het hart van Amsterdam',
      'footer.menu': 'Menu',
      'footer.about': 'Over ons',

      /* Menu page */
      'menu.pageTitle': 'Ons Menu',
      'menu.subtitle': 'Verse ramen op de eerste verdieping in het hart van Amsterdam',
      'menu.ramenCat': 'Ramen',
      'menu.sidesCat': 'Bijgerechten',
      'menu.friedCat': 'Gefrituurde Gerechten',
      'menu.dessertCat': 'Nagerechten',
      'menu.toppingsCat': 'Extra Toppings',
      'menu.saucesCat': 'Sauzen',

      /* Menu – Ramen */
      'ramen.intro': 'We maken onze bouillons elke dag vers — urenlang langzaam gekookt zodat elke kom vol smaak zit. Kies je favoriet en geniet ervan boven, weg van de drukte beneden.',
      'ramen.special.name': 'Tsukimi Ramen Special',
      'ramen.special.desc': 'Rijke varkensbouillon met noedels, spareribs, paksoi, bamboescheuten, narutomaki, zacht gemarineerd ei, zeewier, witte sesamzaadjes en lente-ui',
      'ramen.tonkotsu.name': 'Tonkotsu Ramen',
      'ramen.tonkotsu.desc': 'Rijke varkensbouillon met noedels, chashu varkensvlees, paksoi, bamboescheuten, narutomaki, zacht gemarineerd ei, zeewier, witte sesamzaadjes en lente-ui',
      'ramen.paitan.name': 'Paitan Kip Ramen',
      'ramen.paitan.desc': 'Paitan kippenbouillon met noedels, kipfilet, paksoi, bamboescheuten, narutomaki, zacht gemarineerd ei en lente-ui',
      'ramen.seafood.name': 'Zeevruchten Ramen',
      'ramen.seafood.desc': 'Keuze tussen paitan kip of rijke varkensbouillon met noedels, diverse zeevruchten, paksoi, bamboescheuten, narutomaki, zacht gemarineerd ei, bonitovlokken en lente-ui',
      'ramen.vegmiso.name': 'Groente Miso Ramen',
      'ramen.vegmiso.desc': 'Vegetarische ramen met miso, noedels, paksoi, mais, broccoli, bamboescheuten, zeewier en lente-ui',

      /* Menu – Sides */
      'sides.seaweed': 'Gekruide zeewier salade',
      'sides.edamame': 'Edamame',
      'sides.kimchi': 'Kimchi',
      'sides.kimchi.note': 'Koreaanse gefermenteerde groenten',
      'sides.dumplings': 'Gebakken kip dumplings',
      'sides.dumplings.note': '5\u00d7 of 10\u00d7',
      'sides.gyoza': 'Gebakken groente gyoza',
      'sides.gyoza.note': '5\u00d7 of 10\u00d7',
      'sides.pancake': 'Japanse hartige pannenkoekstokjes',
      'sides.pancake.note': '2 stuks',

      /* Menu – Fried */
      'fried.takoyaki': 'Takoyaki (octopusbitterbal)',
      'fried.chicken': 'Japans gefrituurde kip',
      'fried.spring': "Loempia's",
      'fried.shrimp': 'Ebi fry (gefrituurde garnalen)',
      'fried.skewers': 'Kip-uispiesjes',

      /* Menu – Desserts */
      'dessert.dango': 'Dango stokjes',
      'dessert.mochi': 'Mochi ijs',
      'dessert.tofu': 'Tofu pudding',

      /* Toppings */
      'topping.chashu': 'Chashu varkensvlees (3\u00d7)',
      'topping.chicken': 'Kipfilet (3\u00d7)',
      'topping.seafood': 'Diverse zeevruchten (100g)',
      'topping.shrimp': 'Garnalen (2\u00d7)',
      'topping.egg': 'Ajitama ei',
      'topping.scallions': 'Lente-ui',
      'topping.redOnions': 'Rode ui',
      'topping.dryOnions': 'Droge ui',
      'topping.corn': 'Ma\u00efs',
      'topping.bamboo': 'Bamboescheuten',
      'topping.bokchoy': 'Gekookte paksoi',
      'topping.boiledVeg': 'Gekookte groenten',
      'topping.noodles': 'Extra noedels',
      'topping.seaweed': 'Gedroogd zeewier',

      /* Sauces */
      'sauce.mayo': 'Japanse mayonaise',
      'sauce.sweetChili': 'Zoete chilisaus',
      'sauce.hot': 'Hete saus (Sriracha)',
      'sauce.takoyaki': 'Takoyaki saus',
      'sauce.okono': 'Okonomiyaki saus',
      'sauce.teriyaki': 'Teriyaki saus',

      /* About page */
      'about.label': 'Over ons',
      'about.p1': 'Tsukimi Ramen is een casual ramen restaurant in het hart van Amsterdam, op de eerste verdieping van Damrak 45 \u2014 boven At James, dat gasten verwelkomt sinds 2011.',
      'about.p2': 'Ge\u00efnspireerd door de energie van de stad bieden wij een eenvoudige en gastvrije plek net boven de drukke straten. Ga naar boven en neem een pauze van de drukte.',
      'about.p3': 'Onze focus ligt op vers, kwalitatief ramen voor een snelle, comfortabele maaltijd in de stad.',
      'about.viewMenu': 'Bekijk ons menu',
      'about.reserve': 'Reserveer een tafel',

      /* Full Menu PDF */
      'fullmenu.catbar': 'Volledig Menu PDF',
      'fullmenu.title': 'Volledig Menu',
      'fullmenu.desc': 'Bekijk ons complete menu \u2014 inclusief dranken, extra toppings en sauzen \u2014 als PDF.',
      'fullmenu.btn': 'Bekijk volledig menu (PDF)',

      /* Careers page */
      'nav.careers': 'Vacatures',
      'footer.careers': 'Vacatures',
      'careers.label': 'Word collega',
      'careers.heading': 'Word onderdeel van het <em>Tsukimi Team</em>',
      'careers.intro': 'Wil jij werken in het hart van Amsterdam? Tsukimi Ramen is een gezellig Japans ramen restaurant boven de drukke straten van de Damrak. We zijn altijd op zoek naar vriendelijke, gemotiveerde mensen die het leuk vinden om in een warme en dynamische omgeving te werken.',
      'careers.intro2': 'Word onderdeel van ons team en draag bij aan een groeiend concept gericht op kwaliteit, gastvrijheid en authentieke ramen.',
      'careers.perk1.title': 'Lekker eten',
      'careers.perk1.desc': 'Personeelsmaaltijden inbegrepen. Verse ramen elke dienst.',
      'careers.perk2.title': 'Centrale locatie',
      'careers.perk2.desc': 'Midden in het hart van Amsterdam, op loopafstand van Centraal Station.',
      'careers.perk3.title': 'Warm team',
      'careers.perk3.desc': 'Een klein, gezellig team in een warme en energieke sfeer.',
      'careers.form.label': 'Solliciteer nu',
      'careers.form.heading': 'Stuur ons jouw <em>sollicitatie</em>',
      'careers.form.name': 'Volledige naam',
      'careers.form.name.ph': 'Jouw naam',
      'careers.form.email': 'E-mailadres',
      'careers.form.email.ph': 'jouw@email.com',
      'careers.form.phone': 'Telefoonnummer',
      'careers.form.phone.ph': '+31 6 ...',
      'careers.form.optional': '(optioneel)',
      'careers.form.position': 'Functie',
      'careers.form.position.ph': 'Kies een functie\u2026',
      'careers.form.pos.kitchen': 'Keukenhulp',
      'careers.form.pos.foh': 'Bediening',
      'careers.form.pos.dish': 'Afwassen',
      'careers.form.pos.other': 'Overig',
      'careers.form.message': 'Vertel iets over jezelf',
      'careers.form.message.ph': 'Vertel ons wat over jezelf, je ervaring en waarom je bij Tsukimi Ramen wil werken\u2026',
      'careers.form.cvnote': 'Wil je je cv meesturen of heb je een vraag? Mail ons op <a href="mailto:tsukimiramen@gmail.com">tsukimiramen@gmail.com</a> of bel <a href="tel:+31643682172">06 43 68 21 72</a> \u2014 vermeld je naam en de functie waarop je solliciteert.',
      'careers.form.submit': 'Verstuur sollicitatie',
      'careers.success.title': 'Bedankt!',
      'careers.success.msg': 'We hebben je sollicitatie ontvangen en nemen zo snel mogelijk contact met je op.',

      /* Thank you page */
      'thankyou.label': 'Sollicitatie ontvangen',
      'thankyou.heading': 'Bedankt <em>voor je sollicitatie!</em>',
      'thankyou.msg': 'We hebben je sollicitatie ontvangen en nemen zo snel mogelijk contact met je op.',
      'thankyou.sub': 'Volg ons ondertussen op Instagram of bekijk ons menu.',
      'thankyou.home': 'Terug naar home',
      'thankyou.menu': 'Bekijk ons menu',
    },

    ja: {
      /* Nav */
      'nav.home': '\u30db\u30fc\u30e0',
      'nav.menu': '\u30e1\u30cb\u30e5\u30fc',
      'nav.about': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',
      'nav.reserve': '\u4e88\u7d04',

      /* Hero */
      'hero.tagline': '\u30c0\u30e0\u30e9\u30fc\u30af\u306e\u8ce1\u308f\u3044\u901a\u308a\u306e\u4e0a\u3001\u672c\u683c\u7684\u306a\u65e5\u672c\u306e\u30e9\u30fc\u30e1\u30f3\u3002',
      'hero.sub': '\u6fc3\u539a\u306a\u30b9\u30fc\u30d7\u3001\u65b0\u9bae\u306a\u9eba\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u4e2d\u5fc3\u306e\u9759\u304b\u306a1\u968e\u5e2d\u3067\u3002',
      'hero.address': '\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u30fb1\u968e<br>\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0',
      'hero.reserveBtn': '\u30c6\u30fc\u30d6\u30eb\u3092\u4e88\u7d04\u3059\u308b',
      'hero.viewMenu': '\u30e1\u30cb\u30e5\u30fc\u3092\u898b\u308b',
      'hero.hours': '\u6bce\u65e5\u55b6\u696d · 09:00 \u2013 23:00',

      /* Index – Menu preview */
      'menuPreview.label': '上階の味をどうぞ',
      'menuPreview.heading': '\u65b0\u9bae\u3067\u30b7\u30f3\u30d7\u30eb\u306a<em>\u30e9\u30fc\u30e1\u30f3\u3002</em>',
      'card.tonkotsu.name': '豚骨ラーメン',
      'card.tonkotsu.desc': '濃厚な豚骨スープに、麺、チャーシュー、チンゲン菜、味玉を合わせたラーメン。',
      'card.veg.name': '野菜味噌ラーメン',
      'card.veg.desc': '味噌ベースのベジタリアンラーメンに、チンゲン菜、コーン、ブロッコリー、メンマ、海苔を合わせました。',
      'card.special.name': '月見ラーメンスペシャル',
      'card.special.desc': '濃厚な豚骨スープに、スペアリブ、チンゲン菜、メンマ、鳴門巻、味玉を合わせたラーメン。',
      'menuPreview.cta': 'ラーメンメニュー',

      /* Index – Concept */
      'concept.label': '\u30b9\u30c8\u30fc\u30ea\u30fc',
      'concept.text': '\u30c0\u30e0\u30e9\u30fc\u30af\u306e\u8ce1\u308f\u3044\u901a\u308a\u306e\u3059\u3050\u4e0a\u306b\u4f4d\u7f6e\u3059\u308b\u30c4\u30ad\u30df\u30e9\u30fc\u30e1\u30f3\u306f\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u306b\u9759\u304b\u306a\u3072\u3068\u3068\u304d\u3092\u3054\u63d0\u4f9b\u3057\u307e\u3059\u30021\u968e\u306b\u4e0a\u304c\u308a\u3001\u559d\u9a12\u304b\u3089\u96e2\u308c\u305f\u6e29\u304b\u304f\u30ab\u30b8\u30e5\u30a2\u30eb\u306a\u30e9\u30fc\u30e1\u30f3\u4f53\u9a13\u3092\u3069\u3046\u305e\u3002',

      /* Index – Reserve CTA */
      'reserve.label': '\u3054\u4e88\u7d04',
      'reserve.heading': '<em>\u30c6\u30fc\u30d6\u30eb\u3092</em>\u3054\u4e88\u7d04',
      'reserve.sub': '\u5f85\u3061\u6642\u9593\u306a\u3057\u30671\u968e\u306e\u304a\u5e2d\u3092\u78ba\u4fdd\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'reserve.btn': '\u4eca\u3059\u3050\u4e88\u7d04',
      'reserve.note': '\u30aa\u30f3\u30e9\u30a4\u30f3\u4e88\u7d04\u306f\u8fd1\u65e5\u516c\u958b\u4e88\u5b9a\u3067\u3059\u3002',

      /* Index – Location */
      'location.label': '\u30a2\u30af\u30bb\u30b9',
      'location.heading': 'ラーメン屋は一階にございます',
      'location.desc': '\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u306eAt James\u306e\u4e0a\u30011\u968e\u306b\u3054\u3056\u3044\u307e\u3059\u3002<br>\u968e\u6bb5\u3092\u4e0a\u304c\u3063\u3066\u30c4\u30ad\u30df\u30e9\u30fc\u30e1\u30f3\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002',
      'location.addrKey': '\u4f4f\u6240',
      'location.addrVal': '\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u30fb1\u968e\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0',
      'location.hoursKey': '\u55b6\u696d\u6642\u9593',
      'location.hoursVal': '\u6bce\u65e5 09:00 \u2013 23:00',
      'location.phoneKey': '\u96fb\u8a71',
      'location.emailKey': '\u30e1\u30fc\u30eb',
      'location.note': '<strong>\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u306eAt James\u3092\u304a\u63a2\u3057\u304f\u3060\u3055\u3044</strong> \u2014 1\u968e\u306b\u3054\u3056\u3044\u307e\u3059\u3002\u968e\u6bb5\u3092\u4e0a\u304c\u308b\u3068\u3059\u3050\u898b\u3064\u304b\u308a\u307e\u3059\u3002',

      /* Social */
      'social.label': 'フォローする',
      'social.heading': '最新情報をチェック',

      /* Footer */
      'footer.tagline': '\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u3067\u3001\u4e0a\u306e\u968e\u306e\u30e9\u30fc\u30e1\u30f3',
      'footer.menu': '\u30e1\u30cb\u30e5\u30fc',
      'footer.about': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',

      /* Menu page */
      'menu.pageTitle': '\u30e1\u30cb\u30e5\u30fc',
      'menu.subtitle': '\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u30011\u968e\u3067\u65b0\u9bae\u306a\u30e9\u30fc\u30e1\u30f3\u3092',
      'menu.ramenCat': '\u30e9\u30fc\u30e1\u30f3',
      'menu.sidesCat': '一品料理',
      'menu.friedCat': '\u63da\u3052\u7269',
      'menu.dessertCat': '\u30c7\u30b6\u30fc\u30c8',
      'menu.toppingsCat': '\u30c8\u30c3\u30d4\u30f3\u30b0',
      'menu.saucesCat': '\u30bd\u30fc\u30b9',

      /* Menu – Ramen */
      'ramen.intro': '\u30b9\u30fc\u30d7\u306f\u6bce\u65e5\u65b0\u9bae\u306b\u4f5c\u308a\u307e\u3059\u3002\u4f55\u6642\u9593\u3082\u30b3\u30c8\u30b3\u30c8\u3068\u716e\u8fbc\u3093\u3060\u30b9\u30fc\u30d7\u306f\u3001\u4e00\u676f\u4e00\u676f\u306b\u6df1\u3044\u65e8\u5473\u304c\u8a70\u307e\u3063\u3066\u3044\u307e\u3059\u3002\u304a\u597d\u307f\u306e\u4e00\u676f\u3092\u9078\u3093\u3067\u3001\u901a\u308a\u306e\u55a7\u9a12\u304b\u3089\u96e2\u308c\u305f1\u968e\u3067\u3054\u3086\u3063\u304f\u308a\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002',
      'ramen.special.name': '月見ラーメンスペシャル',
      'ramen.special.desc': '濃厚な豚骨スープ、麺、スペアリブ、チンゲン菜、メンマ、鳴人巻、味玉、海苔、白ごま、ネギ',
      'ramen.tonkotsu.name': '豚骨ラーメン',
      'ramen.tonkotsu.desc': '濃厚な豚骨スープ、麺、チャーシュー、チンゲン菜、メンマ、鳴人巻、味玉、海苔、白ごま、ネギ',
      'ramen.paitan.name': '白湯鶏ラーメン',
      'ramen.paitan.desc': '鶏白湯、麺、チキンフィレ、チンゲン菜、メンマ、鳴人巻、味玉、ネギ',
      'ramen.seafood.name': '海鮮ラーメン',
      'ramen.seafood.desc': '鶏白湯または豚骨スープ、麺、各種海鮮、チンゲン菜、メンマ、鳴人巻、味玉、鰹節、ネギ',
      'ramen.vegmiso.name': '野菜味噌ラーメン',
      'ramen.vegmiso.desc': '味噌ベースのベジタリアンラーメン、麺、チンゲン菜、コーン、ブロッコリー、メンマ、海苔、ネギ',

      /* Menu – Sides */
      'sides.seaweed': '\u5473\u4ed8\u3051\u6d77\u85fb\u30b5\u30e9\u30c0',
      'sides.edamame': '\u679d\u8c46',
      'sides.kimchi': '\u30ad\u30e0\u30c1',
      'sides.kimchi.note': '\u97d3\u56fd\u767a\u9175\u91ce\u83dc',
      'sides.dumplings': '鶏肉焼き餃子',
      'sides.dumplings.note': '5\u500b\u307e\u305f\u306f10\u500b',
      'sides.gyoza': '野菜餃子',
      'sides.gyoza.note': '5\u500b\u307e\u305f\u306f10\u500b',
      'sides.pancake': 'お好み焼き串',
      'sides.pancake.note': '2\u672c',

      /* Menu – Fried */
      'fried.takoyaki': '\u305f\u3053\u713c\u304d',
      'fried.chicken': '\u5510\u63da\u3052',
      'fried.spring': '\u6625\u5dfb\u304d',
      'fried.shrimp': '\u30a8\u30d3\u30d5\u30e9\u30a4',
      'fried.skewers': '\u9d8f\u306d\u304e\u4e32',

      /* Menu – Desserts */
      'dessert.dango': '団子串',
      'dessert.mochi': '餅アイス',
      'dessert.tofu': '\u8c46\u8150\u30d7\u30ea\u30f3',

      /* Toppings */
      'topping.chashu': '\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\uff083\u679a\uff09',
      'topping.chicken': '\u9d8f\u30d5\u30a3\u30ec\uff083\u679a\uff09',
      'topping.seafood': '\u5404\u7a2e\u6d77\u9bae\uff08100g\uff09',
      'topping.shrimp': '\u30a8\u30d3\uff082\u500b\uff09',
      'topping.egg': '\u5473\u7389',
      'topping.scallions': '\u30cd\u30ae',
      'topping.redOnions': '\u8d64\u7389\u306d\u304e',
      'topping.dryOnions': '\u4e7e\u71e5\u7389\u306d\u304e',
      'topping.corn': '\u30b3\u30fc\u30f3',
      'topping.bamboo': '\u7b4b\u306e\u5b50',
      'topping.bokchoy': '\u30086\u3067\u305f\u767d\u83dc',
      'topping.boiledVeg': '\u30086\u3067\u305f\u91ce\u83dc',
      'topping.noodles': '\u8ffd\u52a0\u306e\u9eba',
      'topping.seaweed': '\u6d77\u82d3',

      /* Sauces */
      'sauce.mayo': '\u30de\u30e8\u30cd\u30fc\u30ba',
      'sauce.sweetChili': '\u30b9\u30a4\u30fc\u30c8\u30c1\u30ea\u30bd\u30fc\u30b9',
      'sauce.hot': '\u30db\u30c3\u30c8\u30bd\u30fc\u30b9\uff08\u30b9\u30ea\u30e9\u30c1\u30e3\uff09',
      'sauce.takoyaki': '\u305f\u3053\u713c\u304d\u30bd\u30fc\u30b9',
      'sauce.okono': '\u304a\u597d\u307f\u30bd\u30fc\u30b9',
      'sauce.teriyaki': '\u7167\u308a\u713c\u304d\u30bd\u30fc\u30b9',

      /* About page */
      'about.label': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',
      'about.p1': '\u30c4\u30ad\u30df\u30e9\u30fc\u30e1\u30f3\u306f\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u306b\u4f4d\u7f6e\u3059\u308b\u30ab\u30b8\u30e5\u30a2\u30eb\u306a\u30e9\u30fc\u30e1\u30f3\u5c02\u9580\u5e97\u3067\u3059\u3002\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u30021\u968e\u3001At James\u306e\u4e0a\u306b\u3054\u3056\u3044\u307e\u3059\u30022011\u5e74\u304b\u3089\u55b6\u696d\u3057\u3066\u3044\u307e\u3059\u3002',
      'about.p2': '\u90fd\u5e02\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u306b\u30a4\u30f3\u30b9\u30d1\u30a4\u30a2\u3055\u308c\u3001\u8ce1\u308f\u3044\u901a\u308a\u306e\u3059\u3050\u4e0a\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u6e29\u304b\u3044\u7a7a\u9593\u3092\u3054\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u30021\u968e\u306b\u4e0a\u304c\u308a\u3001\u559d\u9a12\u304b\u3089\u9000\u3044\u3066\u30ea\u30e9\u30c3\u30af\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'about.p3': '\u65b0\u9bae\u3067\u8cea\u306e\u9ad8\u3044\u30e9\u30fc\u30e1\u30f3\u3092\u30011\u56de\u306e\u5feb\u9069\u306a\u98df\u4e8b\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u79c1\u305f\u3061\u306e\u76ee\u6a19\u3067\u3059\u3002',
      'about.viewMenu': '\u30e1\u30cb\u30e5\u30fc\u3092\u898b\u308b',
      'about.reserve': '\u30c6\u30fc\u30d6\u30eb\u3092\u4e88\u7d04\u3059\u308b',

      /* Full Menu PDF */
      'fullmenu.catbar': '\u5168\u30e1\u30cb\u30e5\u30fc PDF',
      'fullmenu.title': '\u5168\u30e1\u30cb\u30e5\u30fc',
      'fullmenu.desc': '\u30c9\u30ea\u30f3\u30af\u3001\u8ffd\u52a0\u30c8\u30c3\u30d4\u30f3\u30b0\u3001\u30bd\u30fc\u30b9\u3092\u542b\u3080\u5b8c\u5168\u306a\u30e1\u30cb\u30e5\u30fc\u3092PDF\u3067\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
      'fullmenu.btn': '\u30e1\u30cb\u30e5\u30fc\u3092PDF\u3067\u898b\u308b',

      /* Careers page */
      'nav.careers': '採用情報',
      'footer.careers': '採用情報',
      'careers.label': '一緒に働きませんか',
      'careers.heading': '<em>ツキミチーム</em>に参加しよう',
      'careers.intro': 'アムステルダムの中心で働いてみませんか？ツキミラーメンはダムラークの賑やかな通りの上に位置する、居心地の良い日本のラーメン専門店です。温かくダイナミックな環境で働くのが好きな、フレンドリーでやる気のある方を常に募集しています。',
      'careers.intro2': '私たちのチームに加わり、品質・おもてなし・本格ラーメンにこだわる成長するコンセプトの一員になってください。',
      'careers.perk1.title': '美味しい食事',
      'careers.perk1.desc': 'スタッフ食付き。毎シフト新鮮なラーメンを。',
      'careers.perk2.title': '好アクセス',
      'careers.perk2.desc': 'アムステルダム中央駅から徒歩圏内、市の中心に位置。',
      'careers.perk3.title': '温かいチーム',
      'careers.perk3.desc': '小さくてアットホームなチームで、活気ある雰囲気。',
      'careers.form.label': '今すぐ応募',
      'careers.form.heading': '応募書類を<em>送ってください</em>',
      'careers.form.name': 'お名前',
      'careers.form.name.ph': 'お名前',
      'careers.form.email': 'メールアドレス',
      'careers.form.email.ph': 'your@email.com',
      'careers.form.phone': '電話番号',
      'careers.form.phone.ph': '+31 6 ...',
      'careers.form.optional': '（任意）',
      'careers.form.position': '希望ポジション',
      'careers.form.position.ph': 'ポジションを選択\u2026',
      'careers.form.pos.kitchen': 'キッチンスタッフ',
      'careers.form.pos.foh': 'ホールスタッフ',
      'careers.form.pos.dish': '食器洗い',
      'careers.form.pos.other': 'その他',
      'careers.form.message': '自己紹介',
      'careers.form.message.ph': 'ご自身のこと、経験、ツキミラーメンで働きたい理由をお聞かせください\u2026',
      'careers.form.cvnote': '履歴書の添付やご質問は <a href="mailto:tsukimiramen@gmail.com">tsukimiramen@gmail.com</a> またはお電話 <a href="tel:+31643682172">06 43 68 21 72</a> までどうぞ。お名前と希望ポジションをご明記ください。',
      'careers.form.submit': '応募を送信',
      'careers.success.title': 'ありがとうございます！',
      'careers.success.msg': 'ご応募を受け付けました。近日中にご連絡いたします。',

      /* Thank you page */
      'thankyou.label': 'ご応募を受け付けました',
      'thankyou.heading': 'ありがとう<em>ございます！</em>',
      'thankyou.msg': 'ご応募を受け付けました。近日中にご連絡いたします。',
      'thankyou.sub': 'Instagramのフォローやメニューもぜひご覧ください。',
      'thankyou.home': 'ホームへ戻る',
      'thankyou.menu': 'メニューを見る',
    }
  };

  function applyLang(lang) {
    if (!t[lang]) return;
    var dict = t[lang];

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('.lang-switcher button').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('tsukimi-lang', lang);
    document.documentElement.lang = lang === 'ja' ? 'ja' : (lang === 'nl' ? 'nl' : 'en');
  }

  function initHamburger() {
    var btn = document.getElementById('nav-toggle-btn');
    var nav = document.querySelector('.site-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
    });
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('nav-open');
      });
    });
  }

  function init() {
    var saved = localStorage.getItem('tsukimi-lang') || 'en';
    applyLang(saved);
    document.querySelectorAll('.lang-switcher button').forEach(function(btn) {
      btn.addEventListener('click', function() { applyLang(btn.dataset.lang); });
    });
    initHamburger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
