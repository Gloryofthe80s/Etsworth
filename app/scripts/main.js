$(document).ready(function () {

    window.setSmoothScroll = function() {
        smoothScroll.init({
            speed: 1000,
            easing: 'linear'
        });
    }

    window.playerScore = new PlayerScore();
    window.playerScoreView = new PlayerScoreView({model: playerScore});

    //set up dispatcher and set triggers
    window.dispatcher = _.clone(Backbone.Events);

    dispatcher.on('itemViewClicked', function() {
        this.trigger('revealYourPrice');
    })

    dispatcher.on('tellAllStopClickEvents', function() {
        this.trigger('stopClickEvents', ['click']);
    })

    dispatcher.on('flashAnswerCorrect', function() {
        flashCorrect();
    });
    dispatcher.on('flashAnswerIncorrect', function() {
        flashIncorrect();
    });

    function flashCorrect() {
        new FlashCorrectView();
    }

    function flashIncorrect() {
        new FlashIncorrectView();
    }

    window.dummyData = [
  [
    {
      "title": "Triptych no.3, Japan, original watercolor and sumi-ink",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/106899453/triptych-no3-japan-original-watercolor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/003/0/5949766/il_570xN.365811173_7tpf.jpg"
    },
    {
      "title": "Repitition",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/160659702/repitition?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/2/5890224/il_570xN.494120118_mam2.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting. Wall Art. Modern Art. Original. Contemporary Painting. Huge. 30 x 48. Blue Cream White Coastal Blue",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/184678653/abstract-painting-wall-art-modern-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5440733/il_570xN.583831190_ndyh.jpg"
    },
    {
      "title": "simple minimal &quot;before the storm&quot; original modern textured acrylic earthy nature contemporary elephant bird PAINTING by Shanna",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/184190060/simple-minimal-before-the-storm-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5515066/il_570xN.582049798_a5t0.jpg"
    }
  ],
  [
    {
      "title": "Artista Pintando en Edmonton/ Artist painting in Edmonton",
      "price": "654.00",
      "url": "https://www.etsy.com/listing/172541593/artista-pintando-en-edmonton-artist?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/8904292/il_570xN.538629934_luue.jpg"
    },
    {
      "title": "ON SALE TODAY, 36 inches, Olive Green, 3 piece Wall art set, Large Wall Art Canvas Trees, Green, Triptych art, painting, tree decor original",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/186192431/on-sale-today-36-inches-olive-green-3?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/1/6934340/il_570xN.589407348_ri9r.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL FINE ART on canvas large painting abstract painting Purple Impasto Texture contemporary wall art by Nandita",
      "price": "229.00",
      "url": "https://www.etsy.com/listing/157393510/original-fine-art-on-canvas-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/8187066/il_570xN.482204030_c59g.jpg"
    },
    {
      "title": "Original Abstract Art Painting Expressionist Contemporary Bold Bright Modern Acrylic Painting on Canvas by Linda Monfort",
      "price": "110.00",
      "url": "https://www.etsy.com/listing/184190518/original-abstract-art-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/5132283/il_570xN.582051500_pz08.jpg"
    }
  ],
  [
    {
      "title": "MYSTIC LANDSCAPE original oil painting orchid purple orange fine art flowers modern  contemporary art  - The artist Carol Lee",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/185815192/mystic-landscape-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/9225448/il_570xN.588073164_36n1.jpg"
    },
    {
      "title": "Marley Giclee Canvas Reproduction - Bob Marley Art - Wall Art",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/171650142/marley-giclee-canvas-reproduction-bob?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/7088875/il_570xN.535532769_46g5.jpg"
    }
  ],
  [
    {
      "title": "Abstract Original Oil Painting Large 29 x 35 Contemporary Modern",
      "price": "355.00",
      "url": "https://www.etsy.com/listing/128886857/abstract-original-oil-painting-large-29?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/015/0/5275473/il_570xN.447077757_etgd.jpg"
    },
    {
      "title": "Watercolor Bear Big Dipper constellation illustration by Aja Ursa Major 9x12 inches",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187501700/watercolor-bear-big-dipper-constellation?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/5150206/il_570xN.594763713_rrta.jpg"
    }
  ],
  [
    {
      "title": "Those Large Blue Lots  - Acrylic painting Modern Art -  59.1&quot; x 23.6&quot; FREE SHIPPING - Ronald Hunter",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/175653902/those-large-blue-lots-acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/1/7442860/il_570xN.550505721_ijzw.jpg"
    },
    {
      "title": "Valley of the Sun - Original landscape painting -  acrylic painting - 12&quot;x9&quot;",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/174050006/valley-of-the-sun-original-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/6095674/il_570xN.593425398_kr0z.jpg"
    }
  ],
  [
    {
      "title": "Abstract original painting with bright complementary color heavy textured, Acrylic and mixed medium 24x24",
      "price": "288.00",
      "url": "https://www.etsy.com/listing/187401001/abstract-original-painting-with-bright?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/8199379/il_570xN.594272638_82f3.jpg"
    },
    {
      "title": "English Bulldog Puppy Drawing - Framed Giclee Print",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/118079652/english-bulldog-puppy-drawing-framed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/005/0/6577408/il_570xN.407065374_p0fc.jpg"
    }
  ],
  [
    {
      "title": "Bob Marley Portrait",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/187749979/bob-marley-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/9398529/il_570xN.595672203_j4h4.jpg"
    },
    {
      "title": "Original Oil Painting on linen, &quot;Restart the Memory&quot;",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/115211581/original-oil-painting-on-linen-restart?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/007/0/5219001/il_570xN.396083013_tr7d.jpg"
    }
  ],
  [
    {
      "title": "Watercolor of Red Poppies by Colorado Artist Martha Kisling",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/89299325/watercolor-of-red-poppies-by-colorado?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6002802/il_570xN.298439356.jpg"
    },
    {
      "title": "Large Painting Art Original Abstract 36X24 Colorful Teal Turquoise Black Hot Pink Emerald Green Happy Playful Coral Tangerine &quot;JUKE JOINTS&quot;",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/182699225/large-painting-art-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6487396/il_570xN.576647041_3d1v.jpg"
    }
  ],
  [
    {
      "title": "Space house",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/187757769/space-house?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/8904292/il_570xN.595700173_cuka.jpg"
    },
    {
      "title": "Whimsical, Vintage-inspired Original Mixed Media Fiber art Painting",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/169604912/whimsical-vintage-inspired-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/1/5184439/il_570xN.527174659_hzev.jpg"
    }
  ],
  [
    {
      "title": "Blue Woman # 4",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/187752550/blue-woman-4?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/1/8913640/il_570xN.595701489_5rfm.jpg"
    },
    {
      "title": "Derby Lane Cottage ORIGINAL Folk Art Painting FREE Shipping",
      "price": "79.95",
      "url": "https://www.etsy.com/listing/186439181/derby-lane-cottage-original-folk-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/5538191/il_570xN.590410319_r7pv.jpg"
    }
  ],
  [
    {
      "title": "X Large Commission Original oil  Painting modern  contemporary knife impasto impressionistic- Sunny Trees and lovebirds",
      "price": "278.85",
      "url": "https://www.etsy.com/listing/102534859/x-large-commission-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/5198223/il_570xN.594755541_gmyj.jpg"
    },
    {
      "title": "Original Abstract Painting- In The Harbour- Palette Knife 24x24",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/176647445/original-abstract-painting-in-the?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/5743379/il_570xN.561704399_ryts.jpg"
    }
  ],
  [
    {
      "title": "High Mountain, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172905574/high-mountain-landscape-paintings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/8912045/il_570xN.540077353_4syp.jpg"
    },
    {
      "title": "Wave Art Beach Painting Original Acrylic Painting Colored sky sunrise sea landscape painting by tim Lam 48x24",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/179286370/wave-art-beach-painting-original-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/5179610/il_570xN.564027835_bqf2.jpg"
    }
  ],
  [
    {
      "title": "Harmony 13 Panel",
      "price": "115.00",
      "url": "https://www.etsy.com/listing/106963981/harmony-13-panel?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/005/0/6547738/il_570xN.366046665_ssnx.jpg"
    },
    {
      "title": "ORIGINAL Contemporary Abstract Painting Modern Blue Abstract Acrylic Painting  by Osnat 40&quot; x 30&quot; Light Blue",
      "price": "760.00",
      "url": "https://www.etsy.com/listing/187413251/original-contemporary-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/6571804/il_570xN.594467447_9l5n.jpg"
    }
  ],
  [
    {
      "title": "Large Modern Art Abstract Painting Red Black on 9 6x6 Canvases Liquid Poured Art Vivid Color 24x24x1.5 JMichael",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/182920878/large-modern-art-abstract-painting-red?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/6490472/il_570xN.577415108_fy1u.jpg"
    },
    {
      "title": "Modern Large Original Abstract Art Painting by CGUEDEZ. Contemporary Textured Art. Red, Orange, Yellow, Brown. Beautiful. FREE SHIPPING",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/100283702/modern-large-original-abstract-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6921897/il_570xN.562939989_pdva.jpg"
    }
  ],
  [
    {
      "title": "Original Acrylic Landscape Painting 11x15,forest painting,moonlight landscape,tree art,woodland art,contemporary textured art,moonlight",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/187739916/original-acrylic-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/6151456/il_570xN.595543524_too4.jpg"
    },
    {
      "title": "Oil Landscape painting Abstract Original Modern 36&quot; palette knife Birch Trees oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/179365779/oil-landscape-painting-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/6316483/il_570xN.564173894_s6p9.jpg"
    }
  ],
  [
    {
      "title": "hand painted with oils of detailed elephant eye",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187736653/hand-painted-with-oils-of-detailed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/9436767/il_570xN.595518392_3skw.jpg"
    },
    {
      "title": "Birch Tree Forest Seasons Autumn Landscape Painting Oil on Canvas Textured Palette Knife Original Modern Art 18X36 by Willson Lau",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/176653466/birch-tree-forest-seasons-autumn?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/5979267/il_570xN.567240134_76qd.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Painting - Gold Metallic, Palette Knife Abstract Bronze Modern Textured Art by Lafferty - 24 x 36 - 22% Off Sale",
      "price": "154.83",
      "url": "https://www.etsy.com/listing/88888231/original-abstract-painting-gold-metallic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/5407450/il_570xN.588415802_l6zf.jpg"
    },
    {
      "title": "Oil Portrait on canvas 8x8&quot; custom",
      "price": "500.00",
      "url": "https://www.etsy.com/listing/84987130/oil-portrait-on-canvas-8x8-custom?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/1/5202724/il_570xN.282170977.jpg"
    }
  ],
  [
    {
      "title": "Original painting landscape lake evening sunset reflections on water giclee print on canvas clouds acrylic sailing silhouette marina",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/172931062/original-painting-landscape-lake-evening?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/8021039/il_570xN.540172529_g8kt.jpg"
    },
    {
      "title": "Large Original Modern Abstract Painting by CGUEDEZ. Contemporary Heavy Texture Art. Astratto FREE SHIPPING.",
      "price": "445.00",
      "url": "https://www.etsy.com/listing/159018665/large-original-modern-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/6921897/il_570xN.570799451_qirz.jpg"
    }
  ],
  [
    {
      "title": "Modern Yellow Flowers Original Abstract Art Painting by CGUEDEZ. Contemporary Floral Art.Fresh Picked Flowers. FREE SHIPPING.",
      "price": "345.00",
      "url": "https://www.etsy.com/listing/183771364/modern-yellow-flowers-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/6921897/il_570xN.580548002_3lmt.jpg"
    },
    {
      "title": "Black/White and Silver/Gray Series - Original Painting Abstract Expressionism - Modern Home Decor - 2382.042414 - Abstract Painting Wall Art",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187752776/blackwhite-and-silvergray-series?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/7506038/il_570xN.595599864_r0y2.jpg"
    }
  ],
  [
    {
      "title": "Custom Converse Shoes- Charmander, Charmeleon, Charizard Pokemon",
      "price": "160.00",
      "url": "https://www.etsy.com/listing/187741825/custom-converse-shoes-charmander?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/1/5614686/il_570xN.595642377_bb1i.jpg"
    },
    {
      "title": "Abstract Painting Impasto landscape Painting four seasons Canvas Tree Painting &quot;365 Days of Happiness&quot; by qiqigallery free shipping",
      "price": "365.00",
      "url": "https://www.etsy.com/listing/158024267/abstract-painting-impasto-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/5305356/il_570xN.576420947_ksdl.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Contemporary Turquoise Teal Acrylic Painting on Canvas by Osnat - MADE-TO-ORDER - 48&quot;x24&quot;",
      "price": "549.00",
      "url": "https://www.etsy.com/listing/158475493/original-abstract-contemporary-turquoise?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/6571804/il_570xN.487287038_azx7.jpg"
    },
    {
      "title": "Original Oil Painting- Golden Beauty- Modern, Contemporary 18x24",
      "price": "179.00",
      "url": "https://www.etsy.com/listing/186659958/original-oil-painting-golden-beauty?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/5743379/il_570xN.594458488_o09l.jpg"
    }
  ],
  [
    {
      "title": "Oil Landscape painting Abstract Original Modern 48&quot; palette knife Pink Cherry Tree oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/166819165/oil-landscape-painting-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/009/0/6316483/il_570xN.461495889_5x7b.jpg"
    },
    {
      "title": "Highly textured leaves with rich thick impasto and metallic paint in gold, silver and brown 36x12",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/127246109/highly-textured-leaves-with-rich-thick?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/5496422/il_570xN.440985532_papx.jpg"
    }
  ],
  [
    {
      "title": "18x24 Custom, Commission, Home, Church, Painting, Mixed Media, Map, Wedding Invitation, Gift, Marriage, Anniversary, Wedding Present",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/150486576/18x24-custom-commission-home-church?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/1/5883441/il_570xN.471150610_g03w.jpg"
    },
    {
      "title": "Original Impasto Acrylic Modern Abstract Art  Painting on  Gallery wrapped Canvas 36&quot; x 24&quot;, Home Decor, -White Blossoms- by Tomoko Koyama",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/152370750/original-impasto-acrylic-modern-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/011/0/7006002/il_570xN.463496788_d11t.jpg"
    }
  ],
  [
    {
      "title": "Glare at Night- original abstract painting - ocean - seascape - abstract landscape painting -  Rothko -large canvas",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/177299650/glare-at-night-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/1/6095674/il_570xN.557838046_dhxj.jpg"
    },
    {
      "title": "Yea, Though I Walk - Original Oil Painting Landscape Painting by Seminary Road Artists",
      "price": "105.00",
      "url": "https://www.etsy.com/listing/155499842/yea-though-i-walk-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/6254348/il_570xN.520417637_m7uk.jpg"
    }
  ],
  [
    {
      "title": "Cardinal - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187748572/cardinal-hand-painted-glass-ornament-2?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/9088156/il_570xN.595688719_3jv4.jpg"
    },
    {
      "title": "Spring SALE Art Painting Original Jmjartstudio Original Painting 24 X 48 Inches -------",
      "price": "313.80",
      "url": "https://www.etsy.com/listing/183354768/spring-sale-art-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/5693606/il_570xN.579107609_jd14.jpg"
    }
  ],
  [
    {
      "title": "custom order for Aida",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/187749598/custom-order-for-aida?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/5562213/il_570xN.595587832_jubu.jpg"
    },
    {
      "title": "customized heart -- rustic contemporary faux wood fence original PAINTING art-- personalized with your names or initials",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/184779150/customized-heart-rustic-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/5515066/il_570xN.584233312_k1dq.jpg"
    }
  ],
  [
    {
      "title": "Lilac Floral Canvas Modern Flower Oil Painting Textured Palette Knife Original Art Lilac Blossoms 16X20 by Willson Lau",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/182529592/lilac-floral-canvas-modern-flower-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/5979267/il_570xN.576051599_5nrf.jpg"
    },
    {
      "title": "Spring SALE art  original painting   Jmjartstudio Original Painting 48 X 24 Inches  -yellow------grey---Ready to Hang --Textured----",
      "price": "327.10",
      "url": "https://www.etsy.com/listing/179888830/spring-sale-art-original-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5693606/il_570xN.566324681_n0tp.jpg"
    }
  ],
  [
    {
      "title": "Art Painting Signature Birds on a Wire Romantic , Wedding  Art",
      "price": "82.00",
      "url": "https://www.etsy.com/listing/79432079/art-painting-signature-birds-on-a-wire?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6197222/il_570xN.262734772.jpg"
    },
    {
      "title": "Art Abstract Painting Original Modern Painting Impasto Painting Tree Painting Acrylic Painting Canvas Painting &quot;Seventh Heaven&quot; QIQIGallery",
      "price": "385.00",
      "url": "https://www.etsy.com/listing/186236502/art-abstract-painting-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/5305356/il_570xN.589590326_i96q.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Acrylic Painting -Textured, layered piece- Unique Original Modern Contemporary Art",
      "price": "79.00",
      "url": "https://www.etsy.com/listing/166412669/original-abstract-acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/5949689/il_570xN.515246966_qook.jpg"
    },
    {
      "title": "CUSTOM - Original Large abstract Modern Contemporary love birds tree branch painting by Shanna - HUGE 40 x 20 - Love Birds Sitting on Branch",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/61966239/custom-original-large-abstract-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5515066/il_570xN.193371348.jpg"
    }
  ],
  [
    {
      "title": "Star Field Resin Painting",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/187747151/star-field-resin-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/7028286/il_570xN.595558076_149c.jpg"
    },
    {
      "title": "By the quay 21x18in, Landscape Painting Original Art Impressionistic OIl on Canvas by Ivailo Nikolov",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/160191211/by-the-quay-21x18in-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/5993554/il_570xN.492437199_hwbg.jpg"
    }
  ],
  [
    {
      "title": "Abstract Art Painting Original Square Metallic Gold Navy Blue White 18 X 18 Extreme Textured Kaleidescope Palette Knife &quot;BLURRED BUZZ&quot;",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/167454657/abstract-art-painting-original-square?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/6487396/il_570xN.519119062_j7sq.jpg"
    },
    {
      "title": "colourful watchful owl - 40 x 20, original modern contemporary acrylic bird landscape abstract PAINTING canvas by Shanna",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/185287765/colourful-watchful-owl-40-x-20-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/5515066/il_570xN.586061092_ps4f.jpg"
    }
  ],
  [
    {
      "title": "Hazel, Reconnected - Canvas Original Matted 16x20 Hand Embellished Painting-Print by Fae Factory Fantasy Artist Dr Franky Dolan (Wall Art)",
      "price": "94.00",
      "url": "https://www.etsy.com/listing/177379225/hazel-reconnected-canvas-original-matted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/9/5896124/il_570xN.556833396_8w0r.jpg"
    },
    {
      "title": "Horse Painting 72&quot;  Huge  Abstract  Original Oil Painting of Horse  , surreal horse , certificate attached , by Koby Feldmos",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/186496705/horse-painting-72-huge-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/1/9019569/il_570xN.581913388_7c0r.jpg"
    }
  ],
  [
    {
      "title": "48&quot; Art Painting ORIGINAL Oil painting Flowers White Poppies Checkers - thick oil paint texture Decorative arts Wall Hangings FREE SHIPPING",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/166246402/48-art-painting-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/6718696/il_570xN.595427856_q6ah.jpg"
    },
    {
      "title": "Purple Abstract lanscape painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187760793/purple-abstract-lanscape-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/8598934/il_570xN.595608738_9gz4.jpg"
    }
  ],
  [
    {
      "title": "SOLD.  Wraith of mother in the skies.",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/172594902/sold-wraith-of-mother-in-the-skies?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/8904292/il_570xN.538866120_6zye.jpg"
    },
    {
      "title": "Blue Bird - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187751380/blue-bird-hand-painted-glass-ornament-2?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/9088156/il_570xN.595698477_cjog.jpg"
    }
  ],
  [
    {
      "title": "Doctor Who, David Tennant and Dalek, Acrylic Painting, 2 PAINTING SET (Hand Painted on Wood)",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/177621735/doctor-who-david-tennant-and-dalek?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6278593/il_570xN.595653205_egpw.jpg"
    },
    {
      "title": "Oil Landscape  Abstract Original Modern 36&quot; palette knife signature floral  impasto oil painting Circles Of Life by Nicolette Vaughan Horner",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/186201147/oil-landscape-abstract-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/6316483/il_570xN.589545733_av4l.jpg"
    }
  ],
  [
    {
      "title": "Custom  Wedding Dress  Artwork Illustration Portrait Painting 6&quot; x 9&quot;",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/72975545/custom-wedding-dress-artwork?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5991493/il_570xN.239380397.jpg"
    },
    {
      "title": "Rainy Day in the park  Oil Painting Heavy Palette Knife Texture by Paula Ready to Hang 48&quot; x 24&quot; Park Lights OOOOO",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/174849019/rainy-day-in-the-park-oil-painting-heavy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/6425267/il_570xN.590193860_buqp.jpg"
    }
  ],
  [
    {
      "title": "Textured Abstract Painting",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/178352196/textured-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/2/5587653/il_570xN.560434084_4orb.jpg"
    },
    {
      "title": "Gavin DeGraw Original painting",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/122216636/gavin-degraw-original-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/7713964/il_570xN.422307098_n1or.jpg"
    }
  ],
  [
    {
      "title": "SPECIAL Weekend FREE shipping Painting Abstract Acrylic Original Handmade by M.Schöneberg  Beautiful Wall Decor Set 8 Piece Size 48x24x0,75",
      "price": "339.00",
      "url": "https://www.etsy.com/listing/175848822/special-weekend-free-shipping-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/7063305/il_570xN.551215827_eel3.jpg"
    },
    {
      "title": "THRIVE Canvas Art",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/187752381/thrive-canvas-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/1/8402395/il_570xN.595676857_h5op.jpg"
    }
  ],
  [
    {
      "title": "Observación.",
      "price": "224.00",
      "url": "https://www.etsy.com/listing/172705024/observacion?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/1/8904292/il_570xN.539349635_14y3.jpg"
    },
    {
      "title": "XXLarge Original abstract oil painting on canvas &#39;Abstract #19&#39;, 60x24&quot; impasto ready to hang gallery fine art, blue, turquise, ultramarine",
      "price": "689.00",
      "url": "https://www.etsy.com/listing/161077855/xxlarge-original-abstract-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/1/5637146/il_570xN.495677963_q0g5.jpg"
    }
  ],
  [
    {
      "title": "Modern Abstract Painting Oil Painting Palette Knife Modern Oil Cherry Blossom Tree Landscape by Paula",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/174394557/modern-abstract-painting-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/6425267/il_570xN.590286679_caim.jpg"
    },
    {
      "title": "Custom Oil Portrait - Kid/Baby -  Hand Painted Oil Portrait from your Photo on Canvas 20x24",
      "price": "215.00",
      "url": "https://www.etsy.com/listing/176613514/custom-oil-portrait-kidbaby-hand-painted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/9034210/il_570xN.577063597_sifm.jpg"
    }
  ],
  [
    {
      "title": "Original Large Modern Abstract Painting by CGUEDEZ. Contemporary 100% Hand-Made Art. Orange, Red, Brown, Black. Vinna. FREE SHIPPING",
      "price": "345.00",
      "url": "https://www.etsy.com/listing/109983694/original-large-modern-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/6921897/il_570xN.562827912_g0is.jpg"
    },
    {
      "title": "Original Acrylic Painting 32&quot; Blooming Cherry Tree Landscape Painting, Modern Abstract Tree Painting Cherry Blossom  2 Canvas Blue Wall Art",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/130619706/original-acrylic-painting-32-blooming?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/7994975/il_570xN.591844944_iefj.jpg"
    }
  ],
  [
    {
      "title": "Modern Wall Art for Home Kitchen Decor Restaurant Still Life with Fruits Set of any 9 Prints from Original Watercolor Paintings Loft Decor",
      "price": "144.00",
      "url": "https://www.etsy.com/listing/95608304/modern-wall-art-for-home-kitchen-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/6236659/il_570xN.547096947_h4sz.jpg"
    },
    {
      "title": "CUSTOM Original Art Abstract Painting Red Tree of Life Modern Textured Palette Knife Autumn Fall Home Decor Blue Brown Gold 36x24 -Christine",
      "price": "360.00",
      "url": "https://www.etsy.com/listing/163570823/custom-original-art-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/007/0/6249353/il_570xN.387958364_5maf.jpg"
    }
  ],
  [
    {
      "title": "STUCCO-------Original Abstract Painting by Justin Strom Large 48 x 24 Deep Gallery Canvas Made To Order",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/63301968/stucco-original-abstract-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5793563/il_570xN.198044871.jpg"
    },
    {
      "title": "HALF PRICE SALE  24 X 16 Turquoise Fresh Orange Blue Fun Track Black Sporty Art Abstract Original  Black Track Original Painting &quot;Fate&quot;",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/97958602/half-price-sale-24-x-16-turquoise-fresh?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/1/6487396/il_570xN.488651000_b81y.jpg"
    }
  ],
  [
    {
      "title": "Original Oil Portrait: Girl with Orange Stripes",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/153278324/original-oil-portrait-girl-with-orange?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/1/5219001/il_570xN.594074381_irg6.jpg"
    },
    {
      "title": "Art Original abstract Painting modern landscape painting  blue art painting large landscape painting 24 X 48",
      "price": "346.72",
      "url": "https://www.etsy.com/listing/187039525/art-original-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5693606/il_570xN.592713265_fijp.jpg"
    }
  ],
  [
    {
      "title": "Original landscape Painting abstract sunset wave art Acrylic Painting by tim Lam 48x36",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/187362118/original-landscape-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/5179610/il_570xN.594158902_7e66.jpg"
    },
    {
      "title": "FREE SHIPPING ...Original Abstract Metallic Flower Painting.Palette Knife.Modern Textured Silver,Gold Painting...12&quot; x 12&quot;     - by  Nata S.",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/185438746/free-shipping-original-abstract-metallic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/6410880/il_570xN.586645138_9upn.jpg"
    }
  ],
  [
    {
      "title": "Original abstract painting Tree art Looking Up forest on gallery wrap canvas Ready to hang by tim Lam 48x24",
      "price": "369.00",
      "url": "https://www.etsy.com/listing/187359014/original-abstract-painting-tree-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/5179610/il_570xN.594245863_ksho.jpg"
    },
    {
      "title": "Original Abstract Painting, Metallic Art, Modern Palette Knife Painting, 36x24, Lafferty Save 22% Off",
      "price": "153.66",
      "url": "https://www.etsy.com/listing/74970999/original-abstract-painting-metallic-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/5407450/il_570xN.586405249_tdb3.jpg"
    }
  ],
  [
    {
      "title": "Birch Tree ORIGINAL Painting Landscape Contemporary Painting.Impasto,Palette Knife.Leaves,Birch,Looking up  Painting 36&quot;x 30&quot; - by Nata S.",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/179891899/birch-tree-original-painting-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/6410880/il_570xN.566180878_m6xk.jpg"
    },
    {
      "title": "The Spirit Dances - Canvas Original Matted 16x20 Hand Embellished Painting-Print by Fae Factory Fantasy Artist Dr Franky Dolan (Wall Art)",
      "price": "94.00",
      "url": "https://www.etsy.com/listing/74002671/the-spirit-dances-canvas-original-matted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/001/0/5896124/il_570xN.352629400_7i36.jpg"
    }
  ],
  [
    {
      "title": "Original Acrylic Neurons Painting",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/165661052/original-acrylic-neurons-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/4/6767891/il_570xN.513110359_a9to.jpg"
    },
    {
      "title": "TURQUOISE Abstract Painting Contemporary Art - ORIGINAL Large Oil Painting Abstract Landscape HORIZON 40x28 by BenWill",
      "price": "310.00",
      "url": "https://www.etsy.com/listing/113965913/turquoise-abstract-painting-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/013/0/5138986/il_570xN.417675288_o9c3.jpg"
    }
  ],
  [
    {
      "title": "Stetched Canvas Giclee from my original abstract painting Gentle Persuasion, colorful large wall art",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/164623558/stetched-canvas-giclee-from-my-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5177427/il_570xN.508744741_ii8t.jpg"
    },
    {
      "title": "72&quot;xxl large abstract creme,turquoise,,white painting original  free shipping, from jolina anthony signet  express shipping",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/95503743/72xxl-large-abstract-cremeturquoisewhite?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6149157/il_570xN.321117231.jpg"
    }
  ],
  [
    {
      "title": "Custom portrait painting in oil 3x3&quot; miniature",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/158405616/custom-portrait-painting-in-oil-3x3?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/5202724/il_570xN.485949951_quam.jpg"
    },
    {
      "title": "Breathe It In - 40&quot; x 30&quot; abstract mixed media - original painting",
      "price": "800.00",
      "url": "https://www.etsy.com/listing/105436733/breathe-it-in-40-x-30-abstract-mixed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/004/3/7115389/il_570xN.360384047_98ja.jpg"
    }
  ],
  [
    {
      "title": "Original Apple Blossom Botanical Watercolour",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/152346831/original-apple-blossom-botanical?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/010/1/6808656/il_570xN.463386578_8llc.jpg"
    },
    {
      "title": "Art Abstract Painting Original Expressionist Bold Bright Acrylic Painting on Canvas by Linda Monfort",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/154678764/art-abstract-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/007/0/5132283/il_570xN.472016803_sgdm.jpg"
    }
  ],
  [
    {
      "title": "Abstract Original Art Painting Red Hot Pink Turquoise Lime Green Expressive 18 x 24 Fun Black Colorful Bold Vivid Playful &quot;In It To Win It&quot;",
      "price": "140.00",
      "url": "https://www.etsy.com/listing/164733151/abstract-original-art-painting-red-hot?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/1/6487396/il_570xN.519113662_hg4u.jpg"
    },
    {
      "title": "Green Metallic Painting, Original Gold Textured Media Painting by Dan Lafferty - 24 X 30",
      "price": "211.93",
      "url": "https://www.etsy.com/listing/60361992/green-metallic-painting-original-gold?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/5407450/il_570xN.586294862_6s3t.jpg"
    }
  ],
  [
    {
      "title": "Poppy Fields Red Poppies Floral Canvas Modern Flower Oil Painting Textured Palette Knife Original Art 15X40 by Willson Lau",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/180633476/poppy-fields-red-poppies-floral-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/5979267/il_570xN.568953788_77ar.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/173925950/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/0/6483189/il_570xN.543942168_n2i4.jpg"
    }
  ],
  [
    {
      "title": "Custom Oil Portrait from your Photo -  Hand Painted Oil Portrait on Canvas 24x24",
      "price": "219.00",
      "url": "https://www.etsy.com/listing/176624523/custom-oil-portrait-from-your-photo-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/9034210/il_570xN.577076273_5va4.jpg"
    },
    {
      "title": "Original Abstract Mixed Media Painting By K.A.Davis",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/165107779/original-abstract-mixed-media-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/8529793/il_570xN.591890252_diu6.jpg"
    }
  ],
  [
    {
      "title": "Morning dream - figure nude art original painting wall decor home decor wall hanging wall art blue canvas original painting girl impasto oil",
      "price": "449.00",
      "url": "https://www.etsy.com/listing/169757813/morning-dream-figure-nude-art-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/5937615/il_570xN.570994832_p1rr.jpg"
    },
    {
      "title": "Metallic Painting, ORIGINAL Art, Gold Abstract Paintings, Palette Knife Textured Art by Lafferty - 48x24 Sale 22% Off",
      "price": "170.35",
      "url": "https://www.etsy.com/listing/84794145/metallic-painting-original-art-gold?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/5407450/il_570xN.586404931_o9bz.jpg"
    }
  ],
  [
    {
      "title": "Original Black and White Art Painting Wall Decor - Something Washes Over Me -  Betty Refour",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/78782232/original-black-and-white-art-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5134892/il_570xN.261441157.jpg"
    },
    {
      "title": "ORIGINAL Downtown Painting Modern Acrylic Palette Knife Abstract Painting The City by Osnat 40&quot; x 30&quot; Large",
      "price": "800.00",
      "url": "https://www.etsy.com/listing/185465154/original-downtown-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/6571804/il_570xN.586741250_il7z.jpg"
    }
  ],
  [
    {
      "title": "Huge Art painting original Modern abstract painting Impasto Texture Acrylic Painting on gallery wrap canvas by Tim Lam 48&quot; x 48&quot;",
      "price": "488.00",
      "url": "https://www.etsy.com/listing/182728596/huge-art-painting-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/5905408/il_570xN.576799361_elei.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging tree",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/81200577/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6483189/il_570xN.268912965.jpg"
    }
  ],
  [
    {
      "title": "Original Contemporary Large Abstract Painting by CGUEDEZ. Modern Wall Art. Red, Yellow, Orange, Blue,Gray,White. Decora. FREE SHIPPING.",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/159009604/original-contemporary-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/6921897/il_570xN.570789793_n1ng.jpg"
    },
    {
      "title": "Custom Portrait For Jen F.",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187746216/custom-portrait-for-jen-f?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/6841588/il_570xN.595681649_4kpm.jpg"
    }
  ],
  [
    {
      "title": "18 x 24 Abstract acrylic painting &quot;Ice Storm&quot;",
      "price": "149.99",
      "url": "https://www.etsy.com/listing/173821353/18-x-24-abstract-acrylic-painting-ice?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/8662523/il_570xN.543464494_icuj.jpg"
    },
    {
      "title": "Wrapped in Morning Blooms Oil Painting 48&quot; x 24&quot; ORIGINAL  Painting Heavy Palette Knife Texture by Paula Nizamas",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/179857027/wrapped-in-morning-blooms-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/6425267/il_570xN.590192268_1ssq.jpg"
    }
  ],
  [
    {
      "title": "Two panel, abstract, acrylic, mountain and cherry blossoms, blue and white painting by Kevin Batcher",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/187746757/two-panel-abstract-acrylic-mountain-and?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/7566932/il_570xN.595553042_sjwu.jpg"
    },
    {
      "title": "Abstract # 11",
      "price": "500.00",
      "url": "https://www.etsy.com/listing/187759495/abstract-11?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/1/8913640/il_570xN.595706001_5wm9.jpg"
    }
  ],
  [
    {
      "title": "Landscape Red and Blue Fields - Acrylic Modern Art - 59.1&quot; x 23.6&quot;  Panorama Paintings",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/178575116/landscape-red-and-blue-fields-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/1/7941234/il_570xN.561280824_91dd.jpg"
    },
    {
      "title": "PAINTING abstract painting shabby chic white  wall art from jolina anthony fast and free shipping",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/184874790/painting-abstract-painting-shabby-chic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/6149157/il_570xN.584825032_6919.jpg"
    }
  ],
  [
    {
      "title": "Seamores bubbles- seal in aquarium- 16/21",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/187747258/seamores-bubbles-seal-in-aquarium-1621?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/9430710/il_570xN.595681919_3k4w.jpg"
    },
    {
      "title": "Painting nude figure oil by Aja 24x36 We Can Get To Heaven",
      "price": "575.00",
      "url": "https://www.etsy.com/listing/180658192/painting-nude-figure-oil-by-aja-24x36-we?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/1/5150206/il_570xN.569044818_6hx2.jpg"
    }
  ],
  [
    {
      "title": "Snowfall--- Large 48 X 30 Landscape Ready To Hang Giclee On Canvas Free Shipping Continental US",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/115146083/snowfall-large-48-x-30-landscape-ready?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/001/0/5793563/il_570xN.395840304_17il.jpg"
    },
    {
      "title": "OIL PAINTING Original Orchids flowers Chic Landscape Contemporary abstract Art by The Artist Carol Lee",
      "price": "425.00",
      "url": "https://www.etsy.com/listing/183177244/oil-painting-original-orchids-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/9225448/il_570xN.578369642_mlqt.jpg"
    }
  ],
  [
    {
      "title": "Figure painting abstract nude oil on canvas by Aja 24x36 inches Star Light",
      "price": "575.00",
      "url": "https://www.etsy.com/listing/175101664/figure-painting-abstract-nude-oil-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/1/5150206/il_570xN.548360046_9jlf.jpg"
    },
    {
      "title": "Rooster 645 12x12 inch animal portrait original oil painting by Roz",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/177508014/rooster-645-12x12-inch-animal-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5227653/il_570xN.557404441_2x18.jpg"
    }
  ],
  [
    {
      "title": "Wil Shepherd Portrait Painting &quot;Next&quot; / Male Portrait / Fine Art / Male Portrait Painting - Wil Shepherd Studio",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/181006099/wil-shepherd-portrait-painting-next-male?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/5725730/il_570xN.570267316_inf9.jpg"
    },
    {
      "title": "Abstract  Oil HUGE 68&quot;x30&quot; Original Textured  Oil  Wall Art on Canvas Palette Knife by Nicolette Vaughan Horner",
      "price": "269.00",
      "url": "https://www.etsy.com/listing/186208370/abstract-oil-huge-68x30-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/6316483/il_570xN.589489300_9jsf.jpg"
    }
  ],
  [
    {
      "title": "Custom Oil Portrait from your Photo -  Hand Painted Oil Portrait on Canvas 30x30",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/176942752/custom-oil-portrait-from-your-photo-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/9034210/il_570xN.576943264_9ri0.jpg"
    },
    {
      "title": "Pink Rose Still Life Original Oil Painting by Nina R.Aide Fine Art 6x4 linen Floral Small Painting Home Wall Decor",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/187752534/pink-rose-still-life-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/6563089/il_570xN.595702123_p62w.jpg"
    }
  ],
  [
    {
      "title": "Phoenix Series In Black And White - 3 Original Abstract Painting Modern Abstract Painting - 1831.1832.1833.022714 - Home Decor",
      "price": "155.00",
      "url": "https://www.etsy.com/listing/175341722/phoenix-series-in-black-and-white-3?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/7506038/il_570xN.572226427_hi42.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Yellow Blue Orange TULIPS Flowers  36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/186716638/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/6516260/il_570xN.591396026_bsak.jpg"
    }
  ],
  [
    {
      "title": "Blue Jay - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187753255/blue-jay-hand-painted-glass-ornament-2?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/9088156/il_570xN.595683953_ocna.jpg"
    },
    {
      "title": "The Test of Time 12x16 (framed)",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/62800809/the-test-of-time-12x16-framed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5373387/il_570xN.196167159.jpg"
    }
  ],
  [
    {
      "title": "24x36&quot; print of Girl on a Beach oil figurative narrative figurative portrait painting  by Kimberly Dow",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/107156915/24x36-print-of-girl-on-a-beach-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/002/0/5238694/il_570xN.366732098_cp90.jpg"
    },
    {
      "title": "Wonderhorse 2 - hand painted vintage bouncy horse toy",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/187751843/wonderhorse-2-hand-painted-vintage?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5144628/il_570xN.595679923_smdn.jpg"
    }
  ],
  [
    {
      "title": "ABSTRACT wall decor - Wall Art Decor - Living room art - bedroom wall decor - Modern colors - 20x24 Original Yellow Painting - Housewares",
      "price": "155.00",
      "url": "https://www.etsy.com/listing/167851245/abstract-wall-decor-wall-art-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/2/6321590/il_570xN.520637636_2ug4.jpg"
    },
    {
      "title": "Sir Hummingbird and his musical castle",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/187755441/sir-hummingbird-and-his-musical-castle?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/8904292/il_570xN.595690077_6jnw.jpg"
    }
  ],
  [
    {
      "title": "Black Bear Original Oil Painting",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/183974794/black-bear-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/6568019/il_570xN.581396121_3lqf.jpg"
    },
    {
      "title": "Huge original Brush art Abstract Painting Modern Impasto Texture canvas by Tim Lam 48&quot; x 24&quot;",
      "price": "368.00",
      "url": "https://www.etsy.com/listing/187358492/huge-original-brush-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/5905408/il_570xN.594244487_10sg.jpg"
    }
  ],
  [
    {
      "title": "Fisherman&#39;s Beach 23 x 36 Original Oil Painting Knife Colorful Sky Bright Sunny Abstract Orange Green Sand Boat  ART by Marchella",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/114320816/fishermans-beach-23-x-36-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/004/0/5977111/il_570xN.392826278_9q6m.jpg"
    },
    {
      "title": "Winter Retreat, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "79.95",
      "url": "https://www.etsy.com/listing/172908808/winter-retreat-landscape-paintings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/8912045/il_570xN.540088635_pqv0.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract Schilderij - Green Digital Forrest - Acrylic painting - 31,5&quot; x 47,2&quot; - Free Shipping",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/156166370/large-abstract-schilderij-green-digital?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/1/7442860/il_570xN.590110846_kdoi.jpg"
    },
    {
      "title": "Hand painted on canvas Paul McCartney ",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/187749814/hand-painted-on-canvas-paul-mccartney?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/9291475/il_570xN.595594778_eu8v.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Landscape Painting white gray yellow aspen tree blue sky Modern art by tim lam 48x24x1.3",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/120666935/original-abstract-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/5179610/il_570xN.483859749_i3wd.jpg"
    },
    {
      "title": "8 x 10 Hand Painted Custom Pet Portrait Pet Painting Of Your Pet any Animal Dog Cat or Horse Sharon Lamb",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/165332060/8-x-10-hand-painted-custom-pet-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/002/0/5151925/il_570xN.375717362_5gqu.jpg"
    }
  ],
  [
    {
      "title": "Red Torch Ginger",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/117778331/red-torch-ginger?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/0/6910263/il_570xN.405985842_lrn9.jpg"
    },
    {
      "title": "XL48 x 30 deep gallery canvas Abstract painting,Original comtemporary Art,lots of texture Ready to hang  by Nicolette Vaughan Horner",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/186645198/xl48-x-30-deep-gallery-canvas-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/6316483/il_570xN.591135462_atbz.jpg"
    }
  ],
  [
    {
      "title": "Contemporary Abstract Painting 48&quot; Large art painting, Original  Art Painting Large  modern Purple and Blue abstract painting, free shipping",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/166327451/contemporary-abstract-painting-48-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/8128111/il_570xN.514927926_edl5.jpg"
    },
    {
      "title": "Custom Pet Portrait Pet Painting 12x12 Your Pet Hand Painted Great Gift",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/16193247/custom-pet-portrait-pet-painting-12x12?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.344969483.jpg"
    }
  ],
  [
    {
      "title": "14x41&quot; FREE SHIPPING Large Original Acrylic Impasto Texture Metallic Painting on Canvas - Ever Changing City II",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/186304912/14x41-free-shipping-large-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/6844053/il_570xN.589925764_qy05.jpg"
    },
    {
      "title": "Two Brothers Fishing Original Oil Painting, two boys fishing painting on canvas, mountain lake wilderness",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/163539956/two-brothers-fishing-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/0/5701942/il_570xN.504827412_7sov.jpg"
    }
  ],
  [
    {
      "title": "Custom House Portraits - Framed 22&quot; x 30&quot; - Acrylic on Canvas",
      "price": "89.00",
      "url": "https://www.etsy.com/listing/112821243/custom-house-portraits-framed-22-x-30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/004/0/6410760/il_570xN.387345218_tre8.jpg"
    },
    {
      "title": "SOLD My sister and the birds.",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/187758603/sold-my-sister-and-the-birds?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/8904292/il_570xN.595599888_b6ve.jpg"
    }
  ],
  [
    {
      "title": "OIL PAINTING Original flowers Chic Calla Lilies Landscape beauty Contemporary Art by the artist Carol Lee",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/182975943/oil-painting-original-flowers-chic-calla?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/1/9225448/il_570xN.578212377_epjq.jpg"
    },
    {
      "title": "Original watercolor -  Wheatgrass in a blue vase - 9x12 - original drawing",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/81675067/original-watercolor-wheatgrass-in-a-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6440133/il_570xN.270560113.jpg"
    }
  ],
  [
    {
      "title": "Eternal - Large size original abstract painting with bold bright deep blue red and black color heavyly textured created strong deep emotion",
      "price": "859.00",
      "url": "https://www.etsy.com/listing/187714673/eternal-large-size-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/8199379/il_570xN.595532747_rrfc.jpg"
    },
    {
      "title": "Large oil painting modern impasto knife landscape Summer Sunny trees and stream teal,violet,blue,yellow, and light lime Vadal 48 x 24",
      "price": "193.05",
      "url": "https://www.etsy.com/listing/185093756/large-oil-painting-modern-impasto-knife?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5198223/il_570xN.594754877_yptp.jpg"
    }
  ],
  [
    {
      "title": "Cow painting 794 20x20 inch animal original oil painting by Roz",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/181911300/cow-painting-794-20x20-inch-animal?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/5227653/il_570xN.573745489_2ejk.jpg"
    },
    {
      "title": "art abstract painting wall decor home decor wall hanging wall art lollipop tree canvas original painting 18 x 24",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/167062277/art-abstract-painting-wall-decor-home?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/5442890/il_570xN.595484018_1eee.jpg"
    }
  ],
  [
    {
      "title": "FREE SHIPPING Original Oil Painting - Boats - by Tatjana Ruzin - palette knife art on stretched canvas -Made to Order",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/165263857/free-shipping-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6718696/il_570xN.561741733_b78z.jpg"
    },
    {
      "title": "Hot Air Balloon 47&quot;   Calming Oil Painting of Beautiful Balloon in the Sky , Warm & Cold  Colors , Original Handmade  , By Koby Feldmos",
      "price": "290.00",
      "url": "https://www.etsy.com/listing/183484441/hot-air-balloon-47-calming-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/1/9019569/il_570xN.583186856_jmz2.jpg"
    }
  ],
  [
    {
      "title": "Wisconsin",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/187751265/wisconsin?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/1/5902090/il_570xN.595574532_506e.jpg"
    },
    {
      "title": "Original Abstract painting Acrylic painting Modern abstract art Size 30 x 30&quot; Ready to hang. Made by Asiya. Blue Turquoise Grey with gift.",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/167740146/original-abstract-painting-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/1/7414544/il_570xN.595327306_smfq.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Landscape Asian Tree Blossom Textured Painting Art by Gabriela 48x24",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/181507390/original-modern-landscape-asian-tree?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/5564037/il_570xN.572285171_32oo.jpg"
    },
    {
      "title": "Original Modern Impressionist Fall Trees Landscape Romance Palette Impasto Oil Painting by Luiza Vizoli",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/95378214/original-modern-impressionist-fall-trees?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/5440875/il_570xN.487962301_8imj.jpg"
    }
  ],
  [
    {
      "title": "Snowy Love in the Moonlight",
      "price": "189.00",
      "url": "https://www.etsy.com/listing/187749556/snowy-love-in-the-moonlight?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/8913640/il_570xN.595586762_p8dt.jpg"
    },
    {
      "title": "Contemporary Abstract Painting by Kim Bosco",
      "price": "475.00",
      "url": "https://www.etsy.com/listing/172534653/contemporary-abstract-painting-by-kim?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/5587653/il_570xN.538598002_5bg0.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL painting watercolor painting original Watercolor painting watercolor animal painting Elephant painting art 11x14 CUSTOM COMMISSION",
      "price": "700.00",
      "url": "https://www.etsy.com/listing/186759263/original-painting-watercolor-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5419318/il_570xN.519731629_mvun.jpg"
    },
    {
      "title": "Large 36&quot;x24&quot;x1.5&quot; Original Palette Knife Painting - Teal - Turquoise -  Blossom Tree - Impasto Textured on Gallery Canvas - FREE SHIPPING!!",
      "price": "169.99",
      "url": "https://www.etsy.com/listing/186775290/large-36x24x15-original-palette-knife?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/6149803/il_570xN.591625244_6qk2.jpg"
    }
  ],
  [
    {
      "title": "Hawaiian Island",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/187756703/hawaiian-island?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/2/8913640/il_570xN.595695715_pn20.jpg"
    },
    {
      "title": "ORIGINAL PALETTE Knife Impasto Thick Textured  Abstract Painting Contemporary  FLOWERS Modern Poppies Art by Tanja Bell",
      "price": "99.99",
      "url": "https://www.etsy.com/listing/163920770/original-palette-knife-impasto-thick?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/7104512/il_570xN.506086462_bmxp.jpg"
    }
  ],
  [
    {
      "title": "Abstract Acrylic Original Art LAVENDER FIELDS 30x40x1.5&quot; by Ora Birenbaum  Original Fine Art Abstract Acrylic Large Painting.",
      "price": "385.00",
      "url": "https://www.etsy.com/listing/101873914/abstract-acrylic-original-art-lavender?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6552479/il_570xN.344613062.jpg"
    },
    {
      "title": "PEACOCK Painting ORIGINAL Colorful Peacock Feathers - Yellow Green Blue Peacock Art - 30x24 by BenWill",
      "price": "180.00",
      "url": "https://www.etsy.com/listing/120237408/peacock-painting-original-colorful?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/012/0/5138986/il_570xN.415071399_k8tz.jpg"
    }
  ],
  [
    {
      "title": "Koi - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187754935/koi-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/9088156/il_570xN.595690063_co61.jpg"
    },
    {
      "title": "OIL PAINTING  red flowers lilies green landscape modern abstract contemporary art by the artist Carol Lee",
      "price": "235.00",
      "url": "https://www.etsy.com/listing/182614244/oil-painting-red-flowers-lilies-green?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/1/9225448/il_570xN.576359419_tjbv.jpg"
    }
  ],
  [
    {
      "title": "Blue Abstract underwater sea life lanscape painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187761007/blue-abstract-underwater-sea-life?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/8598934/il_570xN.595609526_fzbg.jpg"
    },
    {
      "title": "Abstract Painting, Large Abstract Painting, Textured Original Painting, Orange Red Painting by Andrada - 24x48",
      "price": "560.00",
      "url": "https://www.etsy.com/listing/160804832/abstract-painting-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/022/0/5313299/il_570xN.494954138_o3fc.jpg"
    }
  ],
  [
    {
      "title": "Acrylic and Ink House Drawings on Wooden Blocks",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/125403245/acrylic-and-ink-house-drawings-on-wooden?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/012/0/6614361/il_570xN.434167063_k0xg.jpg"
    },
    {
      "title": "XLarge Abstract painting,Original comtemporary Art,lots of texture Ready to hang  by Nicolette Vaughan Horner 48x24",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/186581017/xlarge-abstract-paintingoriginal?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6316483/il_570xN.590970149_5d7z.jpg"
    }
  ],
  [
    {
      "title": "Impressionist painting, OOAK, FREE SHIPPING Surreal oil, Original art, Impressionist painting, Large oil, Canvas, Wall Art. Young in Spring",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/126982481/impressionist-painting-ooak-free?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/6079771/il_570xN.570602438_lyp6.jpg"
    },
    {
      "title": "Blue Painting Indigo Royal Navy Blue - Healing Sapphire Creation - 11x14 High Quality Original Textural Sculptural Impasto Modern Fine Art",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/185186120/blue-painting-indigo-royal-navy-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/1/6369903/il_570xN.585709832_cxsg.jpg"
    }
  ],
  [
    {
      "title": "Abstract CITYSCAPE Painting LARGE Original City Acrylic Painting Blue Gray Red - URBAN Landscape Art 36x28 by BenWill",
      "price": "280.00",
      "url": "https://www.etsy.com/listing/162258306/abstract-cityscape-painting-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/022/0/5138986/il_570xN.500013354_p4nj.jpg"
    },
    {
      "title": "Textured Impasto Moutain Red Poppy Landscape Scene, Flowers, Floral by MyImaginationIsYours",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/115774594/textured-impasto-moutain-red-poppy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/6148933/il_570xN.440425964_ssam.jpg"
    }
  ],
  [
    {
      "title": "Original Oil Sunset and boat 22in x 18in,Landscape Painting Original Art Impressionistic OIl on Canvas by Ivailo Nikolov",
      "price": "260.00",
      "url": "https://www.etsy.com/listing/183656322/original-oil-sunset-and-boat-22in-x?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/5993554/il_570xN.580118398_ov4n.jpg"
    },
    {
      "title": "All My Love Original Lyric Painting on Wood, 24&quot; x 24&quot;",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/187751047/all-my-love-original-lyric-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/9373164/il_570xN.595570800_eghj.jpg"
    }
  ],
  [
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Orange Blue Pink CANYON RAIN 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/168209817/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/6516260/il_570xN.521954120_di22.jpg"
    },
    {
      "title": "Original Modern Impressionit Oil Painting ROMANCE in the MOONLIGHT Trees Art by Luiza Vizoli Custom",
      "price": "190.00",
      "url": "https://www.etsy.com/listing/91355314/original-modern-impressionit-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5440875/il_570xN.306026300.jpg"
    }
  ],
  [
    {
      "title": "Duende Flamenco Dancer Art Oil Painting on Canvas Contemporary Home Decor 16x20",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/127883372/duende-flamenco-dancer-art-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/009/1/6754895/il_570xN.443346864_9hge.jpg"
    },
    {
      "title": "Original Custom Order Seascape Painting Designs Original Acrylic Large Canvas Seascapes",
      "price": "475.00",
      "url": "https://www.etsy.com/listing/110399050/original-custom-order-seascape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/1/6361905/il_570xN.594053910_9m9t.jpg"
    }
  ],
  [
    {
      "title": "Book Wings - Original Painting, Wearable Art, Book Lover, Flying Wings, Illustration",
      "price": "270.00",
      "url": "https://www.etsy.com/listing/184741725/book-wings-original-painting-wearable?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/9283988/il_570xN.595304042_j238.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging tree",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/156502282/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/6483189/il_570xN.478919465_4j8z.jpg"
    }
  ],
  [
    {
      "title": "Iron Man mk 2 Painting",
      "price": "220.00",
      "url": "https://www.etsy.com/listing/160661054/iron-man-mk-2-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/1/5890224/il_570xN.494126320_5yg1.jpg"
    },
    {
      "title": "Turquoise Coral Art 24 X 24 Square Abstract Painting Green Teal Periwinkle Flame Ikat Aqua Soothing Calm Serene Modern Fluid &quot;HIDDEN AGENDA&quot;",
      "price": "190.00",
      "url": "https://www.etsy.com/listing/157736807/turquoise-coral-art-24-x-24-square?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/0/6487396/il_570xN.483760632_gj2d.jpg"
    }
  ],
  [
    {
      "title": "The Beach",
      "price": "800.00",
      "url": "https://www.etsy.com/listing/49281506/the-beach?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5778632/il_570xN.150912213.jpg"
    },
    {
      "title": "Raven&#39;s Acrylic Painting three panel, wall hanging, home decor wall decor housewares.",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/172109037/ravens-acrylic-painting-three-panel-wall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/6979509/il_570xN.537140805_rwq8.jpg"
    }
  ],
  [
    {
      "title": "Acrylic Painting Abstract Art Original on Canvas Titled: Aqua Dancing Lovers 48x20 by Orit Baron, triptych original painting on canvas ART",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/167845907/acrylic-painting-abstract-art-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/6321590/il_570xN.520618108_fd16.jpg"
    },
    {
      "title": "Original Oil Painting, Red Flowers Poppies Floral Landscape, Impasto Textured Poppy Large Wall Decor 20&quot;x48&quot;",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/172301597/original-oil-painting-red-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/7994975/il_570xN.537867897_dchi.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Mixed Media Painting By K.A.Davis",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/167957485/original-abstract-mixed-media-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/8529793/il_570xN.522308571_hv6r.jpg"
    },
    {
      "title": "CUSTOM Art Abstract Painting Trees Couple Red Umbrella Rain Landscape Textured Modern Palette Knife Spring 24x36&quot; -Christine",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/125859973/custom-art-abstract-painting-trees?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/011/0/6249353/il_570xN.435832901_mfj1.jpg"
    }
  ],
  [
    {
      "title": "Large Acrylic abstract painting,canvas,modern,fine art,wall art,original artwork,large painting,wall art,tkafka,kafka, Untitled 2 2014",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/177683231/large-acrylic-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/5774375/il_570xN.557959544_4030.jpg"
    },
    {
      "title": "ABSTRACT painting, Giclee, Fine Art Print, white painting, blue, modern painting,",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/187620809/abstract-painting-giclee-fine-art-print?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/1/6406241/il_570xN.595177003_4o1r.jpg"
    }
  ],
  [
    {
      "title": "B. Sasik Original Oil Painting  Garden ART ROSES Painting",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/186845959/b-sasik-original-oil-painting-garden-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5175267/il_570xN.591871158_99t0.jpg"
    },
    {
      "title": "ORIGINAL art  Painting Modern Acrylic  Impasto Textured Palette Knife Abstract Landscape Painting 003",
      "price": "328.00",
      "url": "https://www.etsy.com/listing/187736205/original-art-painting-modern-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/9435203/il_570xN.595620201_ryst.jpg"
    }
  ],
  [
    {
      "title": "Made2Order. Original Modern  Handpainted Abstract  Heavy  Impasto Palette Knife Red  Poppies  Acrylic Oil   Painting. Size 24 x 24 x1,5",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/182793673/made2order-original-modern-handpainted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/6808201/il_570xN.449107260_9w5f.jpg"
    },
    {
      "title": "the world belonged to them- original oil painting on wood",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/178917114/the-world-belonged-to-them-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/1/5144512/il_570xN.562684009_581b.jpg"
    }
  ],
  [
    {
      "title": "Original Silver Maple Botanical Watercolour",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/152337940/original-silver-maple-botanical?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/010/1/6808656/il_570xN.463361042_mowr.jpg"
    },
    {
      "title": "Abstract.",
      "price": "148.00",
      "url": "https://www.etsy.com/listing/172593778/abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/1/8904292/il_570xN.538954007_77qn.jpg"
    }
  ],
  [
    {
      "title": "PRAIRIE SUNSET, large abstract painting of a sunset, panoramic landscape, abstract sunset painting (20x40) Prairie Sun",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/178415267/prairie-sunset-large-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/6404470/il_570xN.560751903_leuz.jpg"
    },
    {
      "title": "Your Pet&#39;s Portrait  in Pastels  9&quot;x 12&quot;",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/157265277/your-pets-portrait-in-pastels-9x-12?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6691682/il_570xN.321912724.jpg"
    }
  ],
  [
    {
      "title": "Triptych. Original Modern Art Abstract Painting on Paper. Title &quot;Spring Garden&quot; by R Schoeffel",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187167072/triptych-original-modern-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/5846229/il_570xN.593300224_rpij.jpg"
    },
    {
      "title": "HUGE 4x3 Deep gallery canvas Abstract Pop Contemporary painting oil/mixed media   Color Me Happy Tree Of Life by Nicolette Vaughan Horner",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/185992724/huge-4x3-deep-gallery-canvas-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/6316483/il_570xN.588806375_ode2.jpg"
    }
  ],
  [
    {
      "title": "Palette Knife Heavy Texture Gold Tree Painting  Abstract Landscape 20&quot; Round Canvas ORIGINAL Contemporary Floral  Art   Textured Wall Art",
      "price": "215.00",
      "url": "https://www.etsy.com/listing/183038465/palette-knife-heavy-texture-gold-tree?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/7053533/il_570xN.595709979_dvmb.jpg"
    },
    {
      "title": "Rivers Edge Birch Trees Maine Spring",
      "price": "79.00",
      "url": "https://www.etsy.com/listing/187744829/rivers-edge-birch-trees-maine-spring?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/5221270/il_570xN.595548736_lqi0.jpg"
    }
  ],
  [
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art  Purple Pink White SUNSET BEACH 48x24 Palette Knife Texture Oil J.LEIGH",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/182489028/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/6516260/il_570xN.575907857_fbbi.jpg"
    },
    {
      "title": "ABSTRACT painting, Giclee, Fine Art Print, white painting, pink, modern painting,",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/125979820/abstract-painting-giclee-fine-art-print?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/1/6406241/il_570xN.587161831_t556.jpg"
    }
  ],
  [
    {
      "title": "Custom watercolor portrait painting",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/81475346/custom-watercolor-portrait-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/1/5202724/il_570xN.269867583.jpg"
    },
    {
      "title": "canvas Art Painting, abstract paintings, contemporary paintings, color paintings, abstract canvas Couple Painting - Dancing Couple Fine Art",
      "price": "118.00",
      "url": "https://www.etsy.com/listing/104624425/canvas-art-painting-abstract-paintings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/002/0/6321590/il_570xN.357358582_kg4t.jpg"
    }
  ],
  [
    {
      "title": "Original FASHION Art Red FEMALE Figure Painting Abstract Figurative Art on Canvas - Ready to Hang - 30x20 by BenWill",
      "price": "190.00",
      "url": "https://www.etsy.com/listing/165583853/original-fashion-art-red-female-figure?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/5138986/il_570xN.512196658_7tmp.jpg"
    },
    {
      "title": "Rolling Fields - Landscape Painting, Large, 10x30- Oil Painting, Fine Art, Barn",
      "price": "550.00",
      "url": "https://www.etsy.com/listing/187533583/rolling-fields-landscape-painting-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/1/5824181/il_570xN.594855331_hsle.jpg"
    }
  ],
  [
    {
      "title": "Field Romance 23 x 30 Original Oil Painting Palette Knife White Green Flowers Daisies Textured Field Romantic Love Fresh ART by Marchella",
      "price": "305.00",
      "url": "https://www.etsy.com/listing/82741786/field-romance-23-x-30-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/5977111/il_570xN.510204223_lz65.jpg"
    },
    {
      "title": "Yellow Abstract painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187761483/yellow-abstract-painting-on-paper?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/8598934/il_570xN.595611470_8qik.jpg"
    }
  ],
  [
    {
      "title": "Watercolor Home Portrait 16x20",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/187667555/watercolor-home-portrait-16x20?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/8341084/il_570xN.595250018_5aqc.jpg"
    },
    {
      "title": "Le Chaleur de la Magie 40&quot;  Made-to-Order Oil Landscape Abstract Contemporary Oil Painting Heavy Palette Knife",
      "price": "330.00",
      "url": "https://www.etsy.com/listing/185370040/le-chaleur-de-la-magie-40-made-to-order?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/7889171/il_570xN.567193486_nqka.jpg"
    }
  ],
  [
    {
      "title": "Original Mixed Media Collage Painting, Whimsical Painting, Vintage-Inspired Painting, Abstract Painting, Fiber Art",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/169613221/original-mixed-media-collage-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/5184439/il_570xN.527150913_e1vn.jpg"
    },
    {
      "title": "Mixed-Media Painting with drawing of hand, &quot;Grasping Reality&quot;",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/115447754/mixed-media-painting-with-drawing-of?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/003/1/6614361/il_570xN.396973649_eke0.jpg"
    }
  ],
  [
    {
      "title": "Free Shipping Pop Art Audrey Hepburn 60x55cm (23.6&quot;x21.7&quot;) Acrylic painture - Carlos Pun Art",
      "price": "439.00",
      "url": "https://www.etsy.com/listing/157696809/free-shipping-pop-art-audrey-hepburn?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/2/7936092/il_570xN.483297791_3rpw.jpg"
    },
    {
      "title": "Dusk II, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172905228/dusk-ii-landscape-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/8912045/il_570xN.539982956_2h6t.jpg"
    }
  ],
  [
    {
      "title": "Oct. 2, 2013 - Original Abstract Oil Painting - 9x9 painting (9 x 9 cm - app. 4 x 4 inch) with 8 x 10 inch mat",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/164490795/oct-2-2013-original-abstract-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/5508400/il_570xN.508172630_5nl0.jpg"
    },
    {
      "title": "Wild flowers 24in x 20in, Original landscape impressionistic oil painting by Nikolov",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/168113718/wild-flowers-24in-x-20in-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/5993554/il_570xN.521651856_bt0p.jpg"
    }
  ],
  [
    {
      "title": "Wall Art Home Decor Large Abstract Landscape painting  22 x 56",
      "price": "475.00",
      "url": "https://www.etsy.com/listing/159319370/wall-art-home-decor-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/5442890/il_570xN.595664195_hyfk.jpg"
    },
    {
      "title": "Contemporary art abstract giclee canvas print with gallery wrap, 24x24 to 36x36 in blue, green and aqua, from abstract painting &quot;Sea Side&quot;",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/110012425/contemporary-art-abstract-giclee-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/014/0/5327242/il_570xN.453030539_ee7i.jpg"
    }
  ],
  [
    {
      "title": "9&quot;x12&quot; ORIGINAL Watercolor Painting on paper by Tatjana Ruzin - Cityscape - CN Tower",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/182337821/9x12-original-watercolor-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/0/6718696/il_570xN.575187268_b2tx.jpg"
    },
    {
      "title": "Pointillist Painting by Guido Horvath - Master Hungarian Artist",
      "price": "650.00",
      "url": "https://www.etsy.com/listing/187748569/pointillist-painting-by-guido-horvath?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/7511808/il_570xN.595563622_qzcb.jpg"
    }
  ],
  [
    {
      "title": "Extra Large Framed Original Mid Century Abstract Painting",
      "price": "110.00",
      "url": "https://www.etsy.com/listing/187750190/extra-large-framed-original-mid-century?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/5660723/il_570xN.595589344_3ycq.jpg"
    },
    {
      "title": "Vibe",
      "price": "380.00",
      "url": "https://www.etsy.com/listing/87270031/vibe?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6547738/il_570xN.290615247.jpg"
    }
  ],
  [
    {
      "title": "Blue Abstract underwater sea life lanscape painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187760877/blue-abstract-underwater-sea-life?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/8598934/il_570xN.595712747_2lcc.jpg"
    },
    {
      "title": "Art original Abstract painting 20 inches X 48 inches  ----- Tighter-------Textured---3 pc Custom Huge Jmjartstudio",
      "price": "317.50",
      "url": "https://www.etsy.com/listing/184149714/art-original-abstract-painting-20-inches?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5693606/il_570xN.320289047.jpg"
    }
  ],
  [
    {
      "title": "Large Contemporary Abstract Mixed Media Painting by Kim Bosco",
      "price": "575.00",
      "url": "https://www.etsy.com/listing/172775186/large-contemporary-abstract-mixed-media?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/5587653/il_570xN.539505706_ori7.jpg"
    },
    {
      "title": "Custom Pet Portrait Pet Painting Hand Painted 8x10 2 Pets Your Horse Sharon Lamb",
      "price": "109.00",
      "url": "https://www.etsy.com/listing/49818249/custom-pet-portrait-pet-painting-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.152702443.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Contemporary Art VIENNA Austria HUNDERTWASSER Modern Painting Colorful Blue White Yellow Architecture Art 36x28 by BenWill",
      "price": "320.00",
      "url": "https://www.etsy.com/listing/62248069/original-contemporary-art-vienna-austria?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/008/0/5138986/il_570xN.403496867_k4b6.jpg"
    },
    {
      "title": "Under One Umbrella  — PALETTE KNIFE Abstract Figures Oil Painting On Canvas By Leonid Afremov - Size: 30&quot; x 36&quot;(75cm x 90cm)",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/128446396/under-one-umbrella-palette-knife?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/013/0/7902640/il_570xN.445444552_hpxg.jpg"
    }
  ],
  [
    {
      "title": "Blue Peahen in Pearls - original whimsical painting by Kellie Marian Hill",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187753932/blue-peahen-in-pearls-original-whimsical?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/5600421/il_570xN.595603010_q9fd.jpg"
    },
    {
      "title": "Blue accent 18 x 22 in, Landscape Painting Original Art Impressionistic OIl on Canvas by Ivailo Nikolov",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/128867974/blue-accent-18-x-22-in-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/009/0/5993554/il_570xN.452776513_g3e3.jpg"
    }
  ],
  [
    {
      "title": "Original Birch Landscape Painting Oil on Canvas Textured Palette Knife Contemporary Modern Tree Art Seasons 15X40 by Willson Lau",
      "price": "215.00",
      "url": "https://www.etsy.com/listing/173330562/original-birch-landscape-painting-oil-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5979267/il_570xN.541539758_nsax.jpg"
    },
    {
      "title": "Acrylic on canvas. Title : Winterscape painted by Mexican born artist now residing in Canada -Chatdimuse",
      "price": "224.00",
      "url": "https://www.etsy.com/listing/172535787/acrylic-on-canvas-title-winterscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/8904292/il_570xN.538699403_r4ub.jpg"
    }
  ],
  [
    {
      "title": "Original Oil Painting Abstract Landscape by Faith Patterson",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/184957934/original-oil-painting-abstract-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/8990945/il_570xN.584986371_10t9.jpg"
    },
    {
      "title": "20x24 deer with gold antlers jumping on vintage Bambi book illustrations and poems",
      "price": "285.00",
      "url": "https://www.etsy.com/listing/178529647/20x24-deer-with-gold-antlers-jumping-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/5883441/il_570xN.585290827_c3vn.jpg"
    }
  ],
  [
    {
      "title": "Original acrylic scenic beach painting whimsical colorful figurative 24&quot;x24&quot;x1.5&quot;",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/180497090/original-acrylic-scenic-beach-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/6110412/il_570xN.568443092_szqu.jpg"
    },
    {
      "title": "Original XL Abstract Painting 47,2&quot; x 31,5&quot; Large Painting &quot;no worries&quot; , Abstracts by Castano Artworks",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/175060802/original-xl-abstract-painting-472-x-315?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/8015033/il_570xN.549434964_9h37.jpg"
    }
  ],
  [
    {
      "title": "36&quot; Large Abstract Painting Red Rose Acrylic Painting FRAMED Ready to Hang by Osnat Ready to hang",
      "price": "890.00",
      "url": "https://www.etsy.com/listing/185429248/36-large-abstract-painting-red-rose?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/6571804/il_570xN.586608260_gasq.jpg"
    },
    {
      "title": "Abstract Art Original Textured 18 X 24 Lilac Lavender Magenta Fuschia Light Blue Yellow Landscape Green Purple Airy Stacked Thick &quot;HONEYBUN&quot;",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/166091955/abstract-art-original-textured-18-x-24?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/1/6487396/il_570xN.514051772_k9lq.jpg"
    }
  ],
  [
    {
      "title": "Lilacs in Vase Still Life Flowers TEXTURED Oil Painting on Canvas Traditional Art Home Decor",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/105389671/lilacs-in-vase-still-life-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/6754895/il_570xN.531761999_r83o.jpg"
    },
    {
      "title": "Spring SALE Original Abstract Contemporary Fine Art Abstract Textured Painting modern24 X 48 Inches -------  large abstract",
      "price": "329.56",
      "url": "https://www.etsy.com/listing/187033876/spring-sale-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/5693606/il_570xN.592611714_2hqj.jpg"
    }
  ],
  [
    {
      "title": "Wheat painting 36 12x36 inch oil painting by Roz",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/160471056/wheat-painting-36-12x36-inch-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/5227653/il_570xN.493426388_f1hb.jpg"
    },
    {
      "title": "Custom Oil Painting, Made to Order, Commission Home Oil Painting, Original House Portrait Painting,  Barn Painting,  8&quot;X10&quot; incl. frame",
      "price": "160.00",
      "url": "https://www.etsy.com/listing/187753978/custom-oil-painting-made-to-order?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5945857/il_570xN.274174844.jpg"
    }
  ],
  [
    {
      "title": "OIL PAINTING hand painted red flowers triptych 36&quot; three calla lilies gold landscape beauty contemporary art by the artist Carol Lee",
      "price": "474.00",
      "url": "https://www.etsy.com/listing/183009442/oil-painting-hand-painted-red-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/9225448/il_570xN.577766594_bzp0.jpg"
    },
    {
      "title": "Batman 66 TV Series, original pastel drawing,11&quot;x14&quot;",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187741842/batman-66-tv-series-original-pastel?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/7480896/il_570xN.595561704_a08n.jpg"
    }
  ],
  [
    {
      "title": "Original Painting Love Bird Wall Art Deep Blue Purple Cherry Tree Branch with Blossoms Unique Multiple Canvases Large Ships Quickly 47x41",
      "price": "285.00",
      "url": "https://www.etsy.com/listing/127607307/original-painting-love-bird-wall-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/010/0/5341227/il_570xN.442339571_lrs2.jpg"
    },
    {
      "title": "Custom Painting  24x24- Kid/Baby -  Hand Painted Oil Portrait from your Photo on Canvas",
      "price": "219.00",
      "url": "https://www.etsy.com/listing/176697877/custom-painting-24x24-kidbaby-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/9034210/il_570xN.577050613_qh3z.jpg"
    }
  ],
  [
    {
      "title": "Modern Purple Silver Abstract Painting 40&quot; x 40&quot; Original contemporary acrylic art Ready to Hang by Osnat",
      "price": "540.00",
      "url": "https://www.etsy.com/listing/186967592/modern-purple-silver-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/6571804/il_570xN.592503225_l5vb.jpg"
    },
    {
      "title": "Custom House Portrait (Watercolor Illustration)",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/126455746/custom-house-portrait-watercolor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/016/1/6808656/il_570xN.438031070_7ak7.jpg"
    }
  ],
  [
    {
      "title": "Huge original Spiral art Abstract Painting Modern Impasto Texture canvas by Tim Lam 48&quot; x 24&quot;",
      "price": "368.00",
      "url": "https://www.etsy.com/listing/156633259/huge-original-spiral-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/5905408/il_570xN.487533473_qn41.jpg"
    },
    {
      "title": "Set of 3 Beautiful &quot;live laugh love&quot; Gold and White Mirrored Letters Canvas Pictures Polka Dot Stripes Glitter",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/187758685/set-of-3-beautiful-live-laugh-love-gold?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/9092865/il_570xN.595598946_cyr1.jpg"
    }
  ],
  [
    {
      "title": "Art, Flower Painting, Abstract painting, Geranium flower painting, home decor, garden painting, 24x24, colorful wall decor,mosaic art",
      "price": "115.00",
      "url": "https://www.etsy.com/listing/129076179/art-flower-painting-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/7385633/il_570xN.500935684_87ft.jpg"
    },
    {
      "title": "Wave Art landscape Painting Original Acrylic Painting blue sky n sea by tim Lam 48x24",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/179403427/wave-art-landscape-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/5179610/il_570xN.564328480_2jms.jpg"
    }
  ],
  [
    {
      "title": "60&quot; Modern Large Abstract Pallete Knife art, STRETCHED art painting large  painting abstract painting modern abstract hallway art",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/184889888/60-modern-large-abstract-pallete-knife?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/8128111/il_570xN.584738845_ione.jpg"
    },
    {
      "title": "Metestasis.",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/172606069/metestasis?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/8904292/il_570xN.538951449_tmuq.jpg"
    }
  ],
  [
    {
      "title": "9 ART PRINT COLLECTION of the Solar System  /  Art Prints of Original Paintings by Teresa Haag / 8x10 / Solar System Series",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/114270501/9-art-print-collection-of-the-solar?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/008/0/6838876/il_570xN.392643874_n9u8.jpg"
    },
    {
      "title": "Huge Guitar Oil Painting 79&quot;  AMAZING Composition and Colors  , Original & Handmade , One of a kind Piece of Art ,  by Koby Feldmos",
      "price": "530.00",
      "url": "https://www.etsy.com/listing/186621538/huge-guitar-oil-painting-79-amazing?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/1/9019569/il_570xN.591051718_i6b7.jpg"
    }
  ],
  [
    {
      "title": "Favorite View, 14x11 acrylic on canvas",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/129948241/favorite-view-14x11-acrylic-on-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/5778632/il_570xN.450987754_8vrh.jpg"
    },
    {
      "title": "Purple Lilacs",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/187741418/purple-lilacs?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5430461/il_570xN.595663745_a01a.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Abstract PAINTING Textured Contemporary Fine Art with lava colors wall decor for your home",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/113075155/original-modern-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/7178636/il_570xN.585452535_bfof.jpg"
    },
    {
      "title": "Turquoise 11 X 14 Small Abstract Art Original Yellow Black Red Pink White Metallic Gold Textured Palette Knife Lime Small Bold &quot;DO HICKEY&quot;",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/166831677/turquoise-11-x-14-small-abstract-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/6487396/il_570xN.516839521_9w7x.jpg"
    }
  ],
  [
    {
      "title": "10 ART PRINTS of the Solar System  /  Art Prints of Original Paintings by Teresa Haag / 8x10 / Solar System Series",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/113784705/10-art-prints-of-the-solar-system-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/004/0/6838876/il_570xN.392638455_sk58.jpg"
    },
    {
      "title": "KOI Fish Painting LARGE Colorful Painting - Koi Art 40x28 - Ready to Hang - ORIGINAL Art by BenWill",
      "price": "320.00",
      "url": "https://www.etsy.com/listing/110387602/koi-fish-painting-large-colorful?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/5138986/il_570xN.549669448_f99l.jpg"
    }
  ],
  [
    {
      "title": "READY TO SHIP Meet Me Bye The Sea My Love Wooden Beach Sign",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/122685747/ready-to-ship-meet-me-bye-the-sea-my?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6959317/il_570xN.520504397_s3zd.jpg"
    },
    {
      "title": "Easter SALE 32x40&quot; FREE SHIPPING Large Original Abstract Oil and Acrylic Painting On Stretched Canvas / Ready To Hang",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/180625857/easter-sale-32x40-free-shipping-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/6844053/il_570xN.589926606_j469.jpg"
    }
  ],
  [
    {
      "title": "Winter&#39;s Edge, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172906344/winters-edge-landscape-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/8912045/il_570xN.539988882_b2oi.jpg"
    },
    {
      "title": "Denny Chimes Original Watercolor by Michael Joe Moore",
      "price": "395.00",
      "url": "https://www.etsy.com/listing/90933635/denny-chimes-original-watercolor-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5550857/il_570xN.304479416.jpg"
    }
  ],
  [
    {
      "title": "Running Horse Original Animal Oil Painting Textured Palette Knife Modern Art Black Horse 20X40 by Willson Lau",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/183447037/running-horse-original-animal-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/5979267/il_570xN.579411301_f6rb.jpg"
    },
    {
      "title": "Turtle - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187759025/turtle-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/9088156/il_570xN.595704831_8j1q.jpg"
    }
  ],
  [
    {
      "title": "CUSTOM All Seasons - HUGE 48 x 12, Acrylic painting canvas, gallery wrapped, ORIGINAL, One of a Kind - Please see close ups",
      "price": "189.00",
      "url": "https://www.etsy.com/listing/56892297/custom-all-seasons-huge-48-x-12-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5515066/il_570xN.176367399.jpg"
    },
    {
      "title": "Art painting Huge original modern Abstract Painting Silver Impasto Texture flower on canvas by Tim Lam 48&quot; x 24&quot;",
      "price": "358.00",
      "url": "https://www.etsy.com/listing/155615223/art-painting-huge-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/0/5905408/il_570xN.482301856_1cun.jpg"
    }
  ],
  [
    {
      "title": "Bela Lugosi",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187716237/bela-lugosi?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/9439792/il_570xN.595540537_ey27.jpg"
    },
    {
      "title": "Clashing Elements - 11 x 14 Inch Original Oil Painting of a Crashing Wave - Little Corona Beach California Painting - Living Room Art",
      "price": "850.00",
      "url": "https://www.etsy.com/listing/161198197/clashing-elements-11-x-14-inch-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/5140979/il_570xN.496129791_3yb9.jpg"
    }
  ],
  [
    {
      "title": "LANDSCAPE PAINTINGS red ABSTRACT Modern Artwork Original Paintings Acrylic Textured Multicolor canvas large artwork Ready to Hang",
      "price": "649.00",
      "url": "https://www.etsy.com/listing/183540399/landscape-paintings-red-abstract-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/0/9100501/il_570xN.579650020_fqs0.jpg"
    },
    {
      "title": "Togetherness",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/95322465/togetherness?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6789054/il_570xN.320443489.jpg"
    }
  ],
  [
    {
      "title": "Original Modern painting Unique Whimsical Signature Painting Romance,Landscape,Trees,Colorful Circles SEASONS of LOVE by Luiza Vizoli",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/119899687/original-modern-painting-unique?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/5440875/il_570xN.413814956_3hy5.jpg"
    },
    {
      "title": "Original Oil Painting modern impasto texture palette knife impressionism oil on canvas fine art.  Bring you wealth , tree.  d004",
      "price": "108.00",
      "url": "https://www.etsy.com/listing/157418295/original-oil-painting-modern-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/8184068/il_570xN.527497523_1tx6.jpg"
    }
  ],
  [
    {
      "title": "Dance with Me",
      "price": "1000.00",
      "url": "https://www.etsy.com/listing/105790588/dance-with-me?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/007/0/5778632/il_570xN.361747613_kg7p.jpg"
    },
    {
      "title": "12x16 Custom Painting of Your House on Canvas Hand Painted by Sharon Lamb",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/54284347/12x16-custom-painting-of-your-house-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.341583773.jpg"
    }
  ],
  [
    {
      "title": "ABSTRACT PAINTING Brown ABSTRACT Art Modern Artwork Original Paintings Deco Textured Landscape canvas large artwork",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/184564369/abstract-painting-brown-abstract-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/9100501/il_570xN.583523131_95zu.jpg"
    },
    {
      "title": "Canvas print - 12x16 - You are not alone - Paris illustration,Ready to hang,Paris decor,Love,blue,turquoise,wall decor,Home decor",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/119781316/canvas-print-12x16-you-are-not-alone?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/015/0/6651094/il_570xN.413388541_5kc6.jpg"
    }
  ],
  [
    {
      "title": "Silver painting, Wedding Gift, Large Love Birds Painting, 36 x 12, Acrylic Art canvas,  anniversary gift, ORIGINAL red flowers tree pif",
      "price": "139.00",
      "url": "https://www.etsy.com/listing/101796458/silver-painting-wedding-gift-large-love?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6321590/il_570xN.344323506.jpg"
    },
    {
      "title": "Spring SALE Art Original abstract Painting modern landscape painting  blue art painting large landscape painting 24 X 48",
      "price": "337.12",
      "url": "https://www.etsy.com/listing/187039503/spring-sale-art-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/5693606/il_570xN.592710991_hcq0.jpg"
    }
  ],
  [
    {
      "title": "Red Roses Floral Art Original Oil Painting Miniature on Canvas Flowers Decor",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/162989977/red-roses-floral-art-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/6754895/il_570xN.502690951_ms2y.jpg"
    },
    {
      "title": "ORIGINAL  Birch Trees Painting Landscape Painting.Impasto,Palette Knife. Birch Forest Painting.Wall Art Decor.FREE SHIPPING.... - by Nata S.",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/183498104/original-birch-trees-painting-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/6410880/il_570xN.579516362_39jr.jpg"
    }
  ],
  [
    {
      "title": "Original Fine Art Mixed Media Huge Textured Contemporary",
      "price": "975.00",
      "url": "https://www.etsy.com/listing/121174783/original-fine-art-mixed-media-huge?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/1/5587653/il_570xN.434591642_48w3.jpg"
    },
    {
      "title": "Bewitched Park — PALETTE KNIFE Landscape Oil Painting On Canvas By Leonid Afremov - Size: 40&quot; x 24&quot; (100cm x 60cm)",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/126202540/bewitched-park-palette-knife-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/7902640/il_570xN.437104489_9cv9.jpg"
    }
  ],
  [
    {
      "title": "Lilly Pulitzer Inspired Monogram Beach Chair",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/183609276/lilly-pulitzer-inspired-monogram-beach?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/9308106/il_570xN.594084353_i2xs.jpg"
    },
    {
      "title": "Original Abstract Painting-Acrylic Painting-19.7&quot; (50cm) x 27.6 (70cm)",
      "price": "270.00",
      "url": "https://www.etsy.com/listing/187013202/original-abstract-painting-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/8729687/il_570xN.592536600_8o6u.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Acrylic Flower & Sun Painting...Palette Knife Art...30 x 30...Kelly Hutchinson",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/87780312/original-acrylic-flower-sun?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/1/6090016/il_570xN.504845217_os7k.jpg"
    },
    {
      "title": "48&quot;  Original Abstract Painting Modern Textured Palette Knife by Lana Guise Made-to-Order",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/185384523/48-original-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/7889171/il_570xN.511866574_6s71.jpg"
    }
  ],
  [
    {
      "title": "Fly away with this Fleur De Lis glistening on wispy sky of blues, pink/red and purples",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/159973681/fly-away-with-this-fleur-de-lis?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/1/8473190/il_570xN.491586808_ehgg.jpg"
    },
    {
      "title": "Silver Birch tree painting Abstract Modern Acrylic Painting Wall Art Textured White Silver Metallic Modern 48x24 Ready to Hang Made to Order",
      "price": "339.00",
      "url": "https://www.etsy.com/listing/151534726/silver-birch-tree-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/006/0/6627321/il_570xN.370911131_f0u2.jpg"
    }
  ],
  [
    {
      "title": "Seascape LARGE ARTWORK ABSTRACT paintings Blue abstract Modern Art Original Art Deco Palette Knife Oversize canvas large artwork",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/179499053/seascape-large-artwork-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/9100501/il_570xN.564814427_2pnp.jpg"
    },
    {
      "title": "Without Air - Woman underwater",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/187447459/without-air-woman-underwater?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/9430710/il_570xN.594440446_mxns.jpg"
    }
  ],
  [
    {
      "title": "Vintage Psychadelic Retro Hippie Original Painting Bird Art on Leather in Hand Carved Frame",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/121421957/vintage-psychadelic-retro-hippie?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/7744461/il_570xN.419399130_gajp.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art  Blue White Pink EXOTIC BIRCH Tree 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/185375299/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/6516260/il_570xN.586494995_n4s7.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Large Abstract Painting by CGUEDEZ. Hand-Made Wall Art. Red, Yellow, Orange, Brown. Luminescence. FREE SHIPPING.",
      "price": "445.00",
      "url": "https://www.etsy.com/listing/122127525/original-modern-large-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/6921897/il_570xN.562819584_pnpm.jpg"
    },
    {
      "title": "original oil painting modern impasto knife Sunny stream and trees lime,  teal ,violet ,blue, yellow Vadal 16 x 20",
      "price": "98.55",
      "url": "https://www.etsy.com/listing/185100593/original-oil-painting-modern-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/5198223/il_570xN.594754937_dmnn.jpg"
    }
  ],
  [
    {
      "title": "Large Original Abstract Susan Skelley 36 X 36 Teal Green Pink Coral Art White Woodsy Airy Luminescent Organic Shimmery Lush  &quot;EYE CANDY&quot;",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/180438644/large-original-abstract-susan-skelley-36?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/1/6487396/il_570xN.568360415_hr2p.jpg"
    },
    {
      "title": "ORIGINAL Large Palette Knife Texture Flowering Tree Painting 36x24 Ready to Hang",
      "price": "119.00",
      "url": "https://www.etsy.com/listing/160675288/original-large-palette-knife-texture?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/5496422/il_570xN.494179102_4jgt.jpg"
    }
  ],
  [
    {
      "title": "Large Sunflower Wall Decor Watercolor Painting by Artist Martha Kisling",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/90875129/large-sunflower-wall-decor-watercolor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6002802/il_570xN.304135981.jpg"
    },
    {
      "title": "Oil Landscape painting Abstract Original Modern 36&quot; palette knife Birch Trees oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/183262371/oil-landscape-painting-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/6316483/il_570xN.578500858_ptg4.jpg"
    }
  ],
  [
    {
      "title": "20x20 Giclee Print of oil painting narrative figurative portrait men &#39;Hometown Heroes&#39; by Kim Dow",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/99791469/20x20-giclee-print-of-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5238694/il_570xN.23224114.jpg"
    },
    {
      "title": "PAINTING mixed media 40&quot; xxl large  abstract painting painting  wall art from jolina anthony fast and free shipping",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/182073593/painting-mixed-media-40-xxl-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/6149157/il_570xN.574345708_h7ya.jpg"
    }
  ],
  [
    {
      "title": "Jewel Tones Huge Contemperary Art 48 X 48 Gold Pink Fuschis Magenta Plum Blue Lavender Textured Gleams Warm Bright Glowing &quot;KOOL AIDE  KID&quot;",
      "price": "390.00",
      "url": "https://www.etsy.com/listing/154680434/jewel-tones-huge-contemperary-art-48-x?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/1/6487396/il_570xN.483792679_jnkd.jpg"
    },
    {
      "title": "Nautilus Shell Art Print from Painting Colorful PInk Beach Ocean Sea Shells CANVAS Ready To Hang Large Orange Natural Green Aqua Elegant Art",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/174381242/nautilus-shell-art-print-from-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/1/5164626/il_570xN.545729514_h6kx.jpg"
    }
  ],
  [
    {
      "title": "Custom Painting - Wedding/Couple -  Hand Painted Oil Portrait from your Photo on Canvas 16x20",
      "price": "209.00",
      "url": "https://www.etsy.com/listing/176613106/custom-painting-weddingcouple-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/9034210/il_570xN.560640012_1xbj.jpg"
    },
    {
      "title": "Original Modern  Handpainted   Acrylic Impasto Palette Knife  Blue Gray  Birch  Painting.  Ready to ship. .",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/183588358/original-modern-handpainted-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/6808201/il_570xN.579865150_rhte.jpg"
    }
  ],
  [
    {
      "title": "Romantic Art SOULMATES Love Painting ORIGINAL Abstract Art TURQUOISE Red - Ready to Hang - 30x24 by BenWill",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/184357287/romantic-art-soulmates-love-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5138986/il_570xN.582747557_d2a2.jpg"
    },
    {
      "title": "Silence, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172906610/silence-landscape-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/8912045/il_570xN.540081119_ju38.jpg"
    }
  ],
  [
    {
      "title": "SPECIAL - Purple Painting Light Lavender Abstract Acrylic Sculptural - Healing Amethyst Creation - 20x24 High Quality Original Modern Art",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/90685331/special-purple-painting-light-lavender?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/2/6369903/il_570xN.314381444.jpg"
    },
    {
      "title": "Blue Abstract Landscape Painting, Contemporary Raw Art, 12 x 36 Purple Painting, Fine Art by Will Wieber",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/111178620/blue-abstract-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/004/0/5526529/il_570xN.385100031_2ywq.jpg"
    }
  ],
  [
    {
      "title": "16x24inch Print of oil painting female classical nude  &#39;Sacrament&#39; by Kim Dow",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/73819073/16x24inch-print-of-oil-painting-female?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5238694/il_570xN.242881442.jpg"
    },
    {
      "title": "Horse Painting 72&quot;  Huge Abstract  Original Oil Painting of Powerfull Winner Horse , certificate attached , by Koby Feldmos",
      "price": "590.00",
      "url": "https://www.etsy.com/listing/185525308/horse-painting-72-huge-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/1/9019569/il_570xN.586983478_a5hg.jpg"
    }
  ],
  [
    {
      "title": "Art Modern Abstract Kiss Female Original 40 X 30 Hot Sexy Sensual Sultry Touch Cozy Red Teal Black White Dress Leopard  Back &quot;KISS SLOWLY&quot;",
      "price": "336.00",
      "url": "https://www.etsy.com/listing/116014781/art-modern-abstract-kiss-female-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/003/0/6487396/il_570xN.399427385_andz.jpg"
    },
    {
      "title": "Not so little Dmitri Shostakovich.",
      "price": "148.00",
      "url": "https://www.etsy.com/listing/172594360/not-so-little-dmitri-shostakovich?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/1/8904292/il_570xN.538864258_1xqp.jpg"
    }
  ],
  [
    {
      "title": "FREE SHIPPING 24x12 Original Still Life painting - Flowers - palette knife texture ready for shipping - gift",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/95798378/free-shipping-24x12-original-still-life?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/6718696/il_570xN.528837591_rco2.jpg"
    },
    {
      "title": "OOAK Wall Hangings Decorative Arts Textiles Tapestry Embroidery Fiber art Wall Tapestry  Handmade Landscape Modern Art Tuscany White Street",
      "price": "790.00",
      "url": "https://www.etsy.com/listing/51453754/ooak-wall-hangings-decorative-arts?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/003/0/5889830/il_570xN.397886477_gpx0.jpg"
    }
  ],
  [
    {
      "title": "Birch Trees Oil Landscape painting Abstract Original Modern 48&quot; palette knife oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/186008682/birch-trees-oil-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/6316483/il_570xN.588750330_miq9.jpg"
    },
    {
      "title": "Large 36&quot;x24&quot;x1.5&quot; Original Blossom Tree Painting Palette Knife Textured Impasto on Gallery Canvas - Wired Ready to Hang FAST FREE SHIPPING!",
      "price": "169.99",
      "url": "https://www.etsy.com/listing/184647976/large-36x24x15-original-blossom-tree?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/6149803/il_570xN.583860477_gj6i.jpg"
    }
  ],
  [
    {
      "title": "The Rooster&#39;s Daydream by Shanna Trumbly- Canvas Giclee Print 13 X 26",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/63984106/the-roosters-daydream-by-shanna-trumbly?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5675154/il_570xN.200614167.jpg"
    },
    {
      "title": "Original 48&quot; x 24&quot;  Abstract  Modern  Blooming Cherry Tree  Painting Heavy Palette Knife Extra Thick texture by Paula",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/179195824/original-48-x-24-abstract-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/6425267/il_570xN.594212642_k9jx.jpg"
    }
  ],
  [
    {
      "title": "Plum Blossom Painting Deep Rich Gold, Reds Chinese Zen Style Original Art Custom Version 24x36",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/46018499/plum-blossom-painting-deep-rich-gold?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5341227/il_570xN.141429630.jpg"
    },
    {
      "title": "SALE, 48x20 Inches, Original 3 piece Canvas set, Large Tan Painting beige Cream color, Trees, Triptych, Wall art, Original decor Tree art",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/187627838/sale-48x20-inches-original-3-piece?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/1/6934340/il_570xN.595122528_iwdq.jpg"
    }
  ],
  [
    {
      "title": "ART Painting Abstract Painting Contemporary Art Teal and Peach Painting Large Original Abstract Painting on Canvas Geometric Wall Decor Day",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/112329021/art-painting-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/006/0/6216479/il_570xN.385526190_ew35.jpg"
    },
    {
      "title": "Original Oil Painting Fine Art Impasto Texture Landscape by Rebecca Croft",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/92993507/original-oil-painting-fine-art-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5722381/il_570xN.311953605.jpg"
    }
  ],
  [
    {
      "title": "B. Sasik Original Oil Painting  Garden ART ROSES Painting",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/186837501/b-sasik-original-oil-painting-garden-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/5175267/il_570xN.591838760_sbfm.jpg"
    },
    {
      "title": "Triptych Painting Large Gold Tan Brown with White Cherry Blossoms Tree Branch Art 48x20 Ready to Ship",
      "price": "215.00",
      "url": "https://www.etsy.com/listing/113461520/triptych-painting-large-gold-tan-brown?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/012/0/5341227/il_570xN.442970695_8frd.jpg"
    }
  ],
  [
    {
      "title": "Original watercolor -  Tree Branch through Window - 9x12 - original drawing - Great gift for mothers, wifes or any art lover",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/81678009/original-watercolor-tree-branch-through?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6440133/il_570xN.270607360.jpg"
    },
    {
      "title": "Original beach painting modern landscape painting bright blue abstract painting large fine art Rolling Wave 48 X 24",
      "price": "359.00",
      "url": "https://www.etsy.com/listing/155300853/original-beach-painting-modern-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/0/5179610/il_570xN.487521880_1c77.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Abstract gallery wrap canvas-Contemporary Landscape multicolor Oil painting by Nicolette Vaughan Horner 36&quot;x24&quot;",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/124215627/original-abstract-gallery-wrap-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/016/0/6316483/il_570xN.429682063_9hzv.jpg"
    },
    {
      "title": "Peach Pink Art Abstract Small Original Fuschia 12 X 16 Coral Green Black Candy Sweet Lavender Drips Cottage Chic &quot;CONFECTION AFFECTION&quot;",
      "price": "110.00",
      "url": "https://www.etsy.com/listing/160524454/peach-pink-art-abstract-small-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/6487396/il_570xN.493611270_4o23.jpg"
    }
  ],
  [
    {
      "title": "18 x 24   Large Abstract  Acrylic Painting",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/51089469/18-x-24-large-abstract-acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5729213/il_570xN.338126114.jpg"
    },
    {
      "title": "Baseball one-of-a-kind professionally framed oil painting",
      "price": "700.00",
      "url": "https://www.etsy.com/listing/181169741/baseball-one-of-a-kind-professionally?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/2/9225056/il_570xN.570893356_qpg2.jpg"
    }
  ],
  [
    {
      "title": "Wheelbarrow one-of-a-kind professionally framed oil painting",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/181801923/wheelbarrow-one-of-a-kind-professionally?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/022/1/9225056/il_570xN.573183978_diq4.jpg"
    },
    {
      "title": "Flower Textured Palette Knife Oil Painting Contemporary Modern Original Floral Art 16X20 by Willson Lau",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/181671670/flower-textured-palette-knife-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/5979267/il_570xN.572755724_m4s1.jpg"
    }
  ],
  [
    {
      "title": "Floral Painting Original Art Abstract Still Life Yellow Red Blue Landscape Acrylic Painting on Canvas by Linda Monfort",
      "price": "220.00",
      "url": "https://www.etsy.com/listing/113139247/floral-painting-original-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/005/0/5132283/il_570xN.388488797_pv9p.jpg"
    },
    {
      "title": "custom original modern textured acrylic earthy nature animal contemporary PAINTING by Shanna - 36 x 12 - elephants walking with birds",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/75393372/custom-original-modern-textured-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5515066/il_570xN.249009115.jpg"
    }
  ],
  [
    {
      "title": "Majestic Cherry Tree painting 48&quot; Original abstract canvas Oil Acrylic pop palette knife oil, textured ,gallery art, large painting",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/168420817/majestic-cherry-tree-painting-48?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/6425267/il_570xN.590837792_bhnx.jpg"
    },
    {
      "title": "Modern Abstract painting - Obscure - 15.7&quot; (40cm) x 21.3&quot; (54cm) - Acrylic painting - Carlos Pun",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/150290893/modern-abstract-painting-obscure-157?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/7936092/il_570xN.455855961_3t1j.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract 12 X 16 Colorful Playful Happy Sage Green Energetic Teal Coral Textured Hot Pink Royal Blue Black &quot;Talk To The Hand&quot;",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/130175235/original-abstract-12-x-16-colorful?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/6487396/il_570xN.451831162_7onv.jpg"
    },
    {
      "title": "XLarge Birch Trees Oil Landscape Abstract Original Modern 48&quot; palette knife oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/181279748/xlarge-birch-trees-oil-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/6316483/il_570xN.539576785_igfy.jpg"
    }
  ],
  [
    {
      "title": "Oil Landscape painting Abstract Original Modern 36&quot; palette knife signature floral oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/186449928/oil-landscape-painting-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/6316483/il_570xN.590369912_tnwn.jpg"
    },
    {
      "title": "12x18 inch Print of Soft on Soft oil figurative classical female nude painting by Kim Dow",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/51405416/12x18-inch-print-of-soft-on-soft-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5238694/il_570xN.158008061.jpg"
    }
  ],
  [
    {
      "title": "Original Art Abstract Painting Red Poppy Flowers Textured Modern Landscape Palette Knife Floral Poppies Large Wall Decor 24x48&quot; -Christine",
      "price": "315.00",
      "url": "https://www.etsy.com/listing/186695947/original-art-abstract-painting-red-poppy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/6249353/il_570xN.591305218_6wsk.jpg"
    },
    {
      "title": "Fall Colors, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172907872/fall-colors-landscape-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/8912045/il_570xN.539994780_jelx.jpg"
    }
  ],
  [
    {
      "title": "Whimsical, Vintage-inspired Original Mixed Media Fiber Painting",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/169616623/whimsical-vintage-inspired-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/3/5184439/il_570xN.527177261_oz1k.jpg"
    },
    {
      "title": "Original Abstract Painting: &quot;View From the Window&quot;(Fragile)",
      "price": "280.00",
      "url": "https://www.etsy.com/listing/187426231/original-abstract-painting-view-from-the?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/5219001/il_570xN.594367426_a1lh.jpg"
    }
  ],
  [
    {
      "title": "30% Off SALE - Watercolor Painting - Peacock Painting - Feather - Bird Wall Decor Watercolor - Large Print 20x30 - Poster",
      "price": "94.50",
      "url": "https://www.etsy.com/listing/127731791/30-off-sale-watercolor-painting-peacock?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/011/0/5631970/il_570xN.442793029_8n9y.jpg"
    },
    {
      "title": "Original Contemporary Teal Turquoise Abstract Painting Large Acrylic Painting by Osnat - MADE-TO-ORDER - 72&quot;x24&quot;",
      "price": "899.00",
      "url": "https://www.etsy.com/listing/176415868/original-contemporary-teal-turquoise?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/6571804/il_570xN.553275288_gza7.jpg"
    }
  ],
  [
    {
      "title": "Custom Baby Portrait  30x40 - Hand Painted Oil Portrait from your Photo on Canvas",
      "price": "269.00",
      "url": "https://www.etsy.com/listing/176943156/custom-baby-portrait-30x40-hand-painted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/0/9034210/il_570xN.576942812_kimi.jpg"
    },
    {
      "title": "Inspired by &quot;l(a&quot; poem by E.E Cummings",
      "price": "178.00",
      "url": "https://www.etsy.com/listing/172605403/inspired-by-la-poem-by-ee-cummings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/2/8904292/il_570xN.538947817_o5mu.jpg"
    }
  ],
  [
    {
      "title": "Art Original abstract Painting modern landscape painting   art painting large landscape painting 24 X 48",
      "price": "341.72",
      "url": "https://www.etsy.com/listing/186516566/art-original-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/5693606/il_570xN.590615912_t3zn.jpg"
    },
    {
      "title": "Original Abstract Art Painting Expressionist Contemporary Bold Bright Modern Acrylic Painting on Canvas by Linda Monfort",
      "price": "110.00",
      "url": "https://www.etsy.com/listing/184196653/original-abstract-art-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5132283/il_570xN.582159277_62p5.jpg"
    }
  ],
  [
    {
      "title": "Original watercolor -  Beautiful red apples - 9x12 - original drawing - Great gift for mothers, wife",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/81676126/original-watercolor-beautiful-red-apples?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6440133/il_570xN.270600284.jpg"
    },
    {
      "title": "Abstract painting -  Those red blocks - Modern Acrylic Art - 19.7&quot; x 59&quot; Ronald Hunter paintings",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/150974799/abstract-painting-those-red-blocks?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/010/1/7442860/il_570xN.458348851_863n.jpg"
    }
  ],
  [
    {
      "title": "At the Beach, 12x12 gallery wrap canvas",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/129947390/at-the-beach-12x12-gallery-wrap-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/5778632/il_570xN.450983420_rhuv.jpg"
    },
    {
      "title": "Give &#39;Em Hell",
      "price": "160.00",
      "url": "https://www.etsy.com/listing/160660572/give-em-hell?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/1/5890224/il_570xN.494176889_kkzx.jpg"
    }
  ],
  [
    {
      "title": "40x40 large abstract pink painting contemporary art Elena Petrova FREE shiping to Ca/US",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/184039125/40x40-large-abstract-pink-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/5802270/il_570xN.581588835_2v6n.jpg"
    },
    {
      "title": "Red Tulips. original watercolor painting, 24 X 18 in, bright red flowers, red floral art, minimalist painting",
      "price": "92.00",
      "url": "https://www.etsy.com/listing/181672738/red-tulips-original-watercolor-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/7093079/il_570xN.572757904_2r0u.jpg"
    }
  ],
  [
    {
      "title": "Enormous 6ft by 3ft (3 panels) original Tree Of Life  painting abstract oils/acrylic on  gallery canvas by Nicolette Vaughan Horner",
      "price": "599.00",
      "url": "https://www.etsy.com/listing/184233215/enormous-6ft-by-3ft-3-panels-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6316483/il_570xN.295108686.jpg"
    },
    {
      "title": "Original painting semi-abstract &#39;Roses I&#39; - 18 x 18&quot;. Flowers, bouquet, red, pink, purple, green",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/161539919/original-painting-semi-abstract-roses-i?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/0/5637146/il_570xN.497374626_a50s.jpg"
    }
  ],
  [
    {
      "title": "El caballo caballero de St. Basil, The gentlehorse man of St. Basil",
      "price": "279.00",
      "url": "https://www.etsy.com/listing/172549689/el-caballo-caballero-de-st-basil-the?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/8904292/il_570xN.538663098_rgyx.jpg"
    },
    {
      "title": "LARGE - The word &quot;LOVE&quot; one upcycled pallet boards with a red heart.",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/120192012/large-the-word-love-one-upcycled-pallet?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/012/0/7705416/il_570xN.417559958_7m1a.jpg"
    }
  ],
  [
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Gold Red Pink DESERT REQUIEM Sunset 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "339.00",
      "url": "https://www.etsy.com/listing/185721708/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6516260/il_570xN.587765577_52q6.jpg"
    },
    {
      "title": "Hummingbird and Flower - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187756401/hummingbird-and-flower-hand-painted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/9088156/il_570xN.595691921_b9ut.jpg"
    }
  ],
  [
    {
      "title": "Custom Pet Portrait -  Hand Painted Oil Portrait from your Photo on Canvas 12x12",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/176620665/custom-pet-portrait-hand-painted-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/9034210/il_570xN.553991944_5v26.jpg"
    },
    {
      "title": "OIL PAINTING red flowers 48&quot; Modern Original chic Calla Lilies Contemporary art Made To Order by the artist Carol Lee",
      "price": "680.00",
      "url": "https://www.etsy.com/listing/184483378/oil-painting-red-flowers-48-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/9225448/il_570xN.583251975_d8w1.jpg"
    }
  ],
  [
    {
      "title": "MOTHERS DAY hand-painted portrait",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/171105948/mothers-day-hand-painted-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/7864087/il_570xN.533164214_ei6w.jpg"
    },
    {
      "title": "Acrylic on canva by Eveline Des Rosiers - Birds and the lighthouse - St. Lawrence River Inspiration, Quebec -  36 X 36 inches",
      "price": "720.00",
      "url": "https://www.etsy.com/listing/187755688/acrylic-on-canva-by-eveline-des-rosiers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/6155261/il_570xN.595599846_6t9n.jpg"
    }
  ],
  [
    {
      "title": "Custom Painted Wedding Portrait -  Hand Painted Oil Portrait from your Photo on Canvas 11x14",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/176604664/custom-painted-wedding-portrait-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/9034210/il_570xN.576927572_3ag2.jpg"
    },
    {
      "title": "Original Abstract painting, Yellow Brown Green Vine landscape Contemporary, Modern Abstract Fine art By Henry Parsinia Large 48x24",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/106070146/original-abstract-painting-yellow-brown?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5686682/il_570xN.367547893.jpg"
    }
  ],
  [
    {
      "title": "Red Abstract Smoke. Triptych. Original Modern Art Abstract Painting on Paper. Title &quot;Chemical Romance&quot; by R Schoeffel",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/186943823/red-abstract-smoke-triptych-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/5846229/il_570xN.592247892_o7iw.jpg"
    },
    {
      "title": "Art Original Abstract 24 X 36 Turquoise Aqua Green Lime Fuchsia Bright Colorful Yellow Summery Periwinkle Lavender Teal Sweet &quot;TIPPY TOES&quot;",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/182250941/art-original-abstract-24-x-36-turquoise?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/6487396/il_570xN.574985731_qd6a.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Mixed Media Painting By K.A.Davis",
      "price": "255.00",
      "url": "https://www.etsy.com/listing/164375081/original-abstract-mixed-media-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/0/8529793/il_570xN.507734864_kmj9.jpg"
    },
    {
      "title": "white colorful Abstract painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187761109/white-colorful-abstract-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/8598934/il_570xN.595610016_79b3.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Large Impasto Landscape Cream White Flowers  Painting Contemporary Palette Knife Painting. size 48 x 24.",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/185926897/original-large-impasto-landscape-cream?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/6808201/il_570xN.581122812_hexz.jpg"
    },
    {
      "title": "Wil Shepherd Portrait Painting &quot;Polar Dive&quot; / Male Portrait / Fine Art / Male Portrait Painting - Wil Shepherd Studio",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/181964908/wil-shepherd-portrait-painting-polar?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/5725730/il_570xN.573948303_rgzh.jpg"
    }
  ],
  [
    {
      "title": "Spring SALE Art Painting Original MIX and MATCH Jmjartstudio Original Painting 20 X 20 Inches ------Yellow -- Grey -- Softly Spoken",
      "price": "89.00",
      "url": "https://www.etsy.com/listing/177574632/spring-sale-art-painting-original-mix?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/5693606/il_570xN.557655461_sg1x.jpg"
    },
    {
      "title": "Only in Dreams 48&quot; Made-to-Order Large Abstract Oil Painting Contemporary Modern Textured Palette Knife  by Lana Guise",
      "price": "320.00",
      "url": "https://www.etsy.com/listing/187406257/only-in-dreams-48-made-to-order-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/7889171/il_570xN.572743537_onhb.jpg"
    }
  ],
  [
    {
      "title": "Landscape Painting, Abstract Painting, HUGE Original DEEP Artist Canvas Palette Knife Painting,  Textured   Ready to Hang",
      "price": "359.00",
      "url": "https://www.etsy.com/listing/169782946/landscape-painting-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/6208048/il_570xN.538105731_6d9b.jpg"
    },
    {
      "title": "Corona Star Painting",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187747673/corona-star-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/7028286/il_570xN.595664791_6ip3.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL ABSTRACT Painting - Tatjana Ruzin - acrylic painting - purple beige brown landscape Made to order",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/185574753/original-abstract-painting-tatjana-ruzin?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/6718696/il_570xN.587201959_gkim.jpg"
    },
    {
      "title": "Chimney Rock, Watercolor Painting, Landscape, Originally Painting,",
      "price": "285.00",
      "url": "https://www.etsy.com/listing/187755610/chimney-rock-watercolor-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/9203111/il_570xN.595607694_cb51.jpg"
    }
  ],
  [
    {
      "title": "Magical Original Oil on Canvas : Sheralee Paulsen",
      "price": "500.00",
      "url": "https://www.etsy.com/listing/187760827/magical-original-oil-on-canvas-sheralee?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/9240816/il_570xN.595712353_3qu8.jpg"
    },
    {
      "title": "Lighthouse, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172919953/lighthouse-landscape-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/8912045/il_570xN.539991468_i1k0.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Mixed Media Painting By K.A.Davis",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/187662106/original-abstract-mixed-media-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/8529793/il_570xN.595256014_bm2l.jpg"
    },
    {
      "title": "Spreading In The Wind 16 X 20 Original Oil on Canvas Sheralee Paulsen",
      "price": "500.00",
      "url": "https://www.etsy.com/listing/187760653/spreading-in-the-wind-16-x-20-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/9240816/il_570xN.595607746_eq6l.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Large Abstract Contemporary Fine Art Acrylic Red Yellow Tree Landscape Painting By Dan Lafferty - 30x48 - Get It FREE",
      "price": "210.91",
      "url": "https://www.etsy.com/listing/83052342/original-modern-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/5407450/il_570xN.586296652_ftxq.jpg"
    },
    {
      "title": "Violet Purple Painting - Abstract Acrylic Vibrant Pearlescent Paint - Beautiful Purple Creation - 12x12 High Quality Original Modern Art",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/130133931/violet-purple-painting-abstract-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/6369903/il_570xN.451686188_onh1.jpg"
    }
  ],
  [
    {
      "title": "Colorful Abstract Painting Ready to hang, Large Abstract, Orange Red Green Blue Painting, Original Rainbow Painting by Andrada, Oil Painting",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/165357132/colorful-abstract-painting-ready-to-hang?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/5313299/il_570xN.511452071_8am5.jpg"
    },
    {
      "title": "Three Dogs",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/173430332/three-dogs?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/5800256/il_570xN.542016081_hls2.jpg"
    }
  ],
  [
    {
      "title": "Wild Flowers. Countless Red Flowers, Nature Painting Original Oil Painting, Wild Nature, Impasto style, Stretch Canvas, Home Art",
      "price": "116.25",
      "url": "https://www.etsy.com/listing/151517360/wild-flowers-countless-red-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/8098869/il_570xN.591517902_36e4.jpg"
    },
    {
      "title": "Abstract Painting 40&quot; Gazelle Oil Painting ,  Deer painting , modern art , Original & Hand Made, Certificate Attached , By Koby Feldmos",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/186627195/abstract-painting-40-gazelle-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/1/9019569/il_570xN.591051410_iyfd.jpg"
    }
  ],
  [
    {
      "title": "Beach Decor Painting for coastal decor. Encaustic Shell Art",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/187761249/beach-decor-painting-for-coastal-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5387389/il_570xN.595708093_g3yq.jpg"
    },
    {
      "title": "Messin Around With Mickey - Original Oil Painting",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/173629093/messin-around-with-mickey-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/7636805/il_570xN.542720819_c72u.jpg"
    }
  ],
  [
    {
      "title": "Spring SALE Art Original 3 piece Painting 16 inches X 60 inches  --------- Textured---",
      "price": "287.30",
      "url": "https://www.etsy.com/listing/181591968/spring-sale-art-original-3-piece?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5693606/il_570xN.572581853_nmid.jpg"
    },
    {
      "title": "ABSTRACT painting, Giclee, Fine Art Print, black, beige, navy, modern painting,",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/187723073/abstract-painting-giclee-fine-art-print?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/1/6406241/il_570xN.595568287_nk6l.jpg"
    }
  ],
  [
    {
      "title": "Abstract Palette Knife  Modern Painting  Landscape Birch Trees Art by Gabriela 48x24 Large",
      "price": "229.00",
      "url": "https://www.etsy.com/listing/175069999/abstract-palette-knife-modern-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/5564037/il_570xN.548304843_hu7a.jpg"
    },
    {
      "title": "SALE Original Modern Abstract  Art  Painting on  Gallery wrapped Canvas 20&quot; x 20&quot;, Home Decor, Wall Art ---Shine--- by Tomoko Koyama",
      "price": "119.00",
      "url": "https://www.etsy.com/listing/102619034/sale-original-modern-abstract-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/7006002/il_570xN.350198978.jpg"
    }
  ],
  [
    {
      "title": "Black, White, Silver And Grey Classic Series - Original Abstract Painting Modern Abstract Painting - 2369.042314 - Home Decor Wall Art",
      "price": "650.00",
      "url": "https://www.etsy.com/listing/187752084/black-white-silver-and-grey-classic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/7506038/il_570xN.595597036_79rq.jpg"
    },
    {
      "title": "Morning Mist, Original Painting",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/174701918/morning-mist-original-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/5195699/il_570xN.546902090_9y9l.jpg"
    }
  ],
  [
    {
      "title": "Love Bird Painting Original Bamboo Art Monochrome Black and White Textured Palette Knife 48x20",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/76552882/love-bird-painting-original-bamboo-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5341227/il_570xN.252906508.jpg"
    },
    {
      "title": "Original Abstract Landscape Romance Oil Painting Park Autumn Trees on Large Canvas by Luiza Vizoli 36x24",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/58884618/original-abstract-landscape-romance-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/5440875/il_570xN.526073705_nfii.jpg"
    }
  ],
  [
    {
      "title": "72x30  large abstract seascape painting  xxl FREE shipping to CA/US palette knife by Elena Petrova",
      "price": "369.00",
      "url": "https://www.etsy.com/listing/184040883/72x30-large-abstract-seascape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/5802270/il_570xN.581485348_2wep.jpg"
    },
    {
      "title": "Red Maples.",
      "price": "148.00",
      "url": "https://www.etsy.com/listing/172593510/red-maples?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/8904292/il_570xN.538952893_an0w.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting. 5 Piece Asian Painting Modern Art Original Contemporary Painting Huge 24 x 40 Art Artwork Blue green White blossoms vines",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/169159823/abstract-painting-5-piece-asian-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5440733/il_570xN.525491889_nm1o.jpg"
    },
    {
      "title": "Japnese Bride",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/114246407/japnese-bride?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/005/0/6910263/il_570xN.392556880_cp1n.jpg"
    }
  ],
  [
    {
      "title": "Martini Night",
      "price": "500.00",
      "url": "https://www.etsy.com/listing/116963999/martini-night?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/008/0/5778632/il_570xN.403026370_q4wc.jpg"
    },
    {
      "title": "Panda - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187756801/panda-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/9088156/il_570xN.595593516_o586.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Painting: Untitled",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/187487207/original-abstract-painting-untitled?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/5219001/il_570xN.594587160_gu8m.jpg"
    },
    {
      "title": "Abstract Art 24 X 24 Textured Colorful Boho Cheerful Square Bright Bold Vivid Turqoise Coral Lime Yellow White Navy Green Seafoam &quot;PLAYLIST&quot;",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/159076535/abstract-art-24-x-24-textured-colorful?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/6487396/il_570xN.488336699_5fqr.jpg"
    }
  ],
  [
    {
      "title": "Contemporary abstract art, 24x24 to 36x36 canvas print with gallery wrap, in blue, green and aqua, from abstract painting &quot;Sea Breeze&quot;",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/118349447/contemporary-abstract-art-24x24-to-36x36?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/5327242/il_570xN.452922522_mec4.jpg"
    },
    {
      "title": "No More Snow 48&quot;  LARGE ABSTRACT ORIGINAL Painting Contemporary Modern Textured Palette Knife  by Lana Guise",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/180914467/no-more-snow-48-large-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/7889171/il_570xN.579401147_ezhb.jpg"
    }
  ],
  [
    {
      "title": "Original  Modern Purple Lilac Flowers  Acrylic Impasto Thick  Texture Painting . size 36 x24.",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/186457373/original-modern-purple-lilac-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/6808201/il_570xN.590376036_i9sj.jpg"
    },
    {
      "title": "CUSTOM PAINTING Abstract Modern Landscape Tree Textured Art by Gabriela 50x30 Metallic Large",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/41179385/custom-painting-abstract-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5266961/il_570xN.125046643.jpg"
    }
  ],
  [
    {
      "title": "Large Original Abstract Painting Black and White Art by Andrada, Huge 60&quot; painting Contemporary Painting",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/158858802/large-original-abstract-painting-black?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/5313299/il_570xN.487596387_hy6f.jpg"
    },
    {
      "title": "Reserved Listing Special Commission Just for Kate",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/184095095/reserved-listing-special-commission-just?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/5609371/il_570xN.581792179_lz2l.jpg"
    }
  ],
  [
    {
      "title": "CUSTOM Abstract Love Bird Painting Silver Purple Elegant Wall Art Home Decor Original Art by Nathalie Van 48x20",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/96701322/custom-abstract-love-bird-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5341227/il_570xN.274787386.jpg"
    },
    {
      "title": "Original  Handpainted Modern Acrylic Impasto Thick  Texture Flowers Painting . Made2Order.size 36 x24.",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/178740605/original-handpainted-modern-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/6808201/il_570xN.579266741_mtmh.jpg"
    }
  ],
  [
    {
      "title": "Hand Painted Old World Map -Antique Globe Map Matted 16X20 Painting-Print by Fae Factory Fantasy Artist Dr Franky Dolan (Map Wall Art Print)",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/172006315/hand-painted-old-world-map-antique-globe?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/1/5896124/il_570xN.537724590_imjj.jpg"
    },
    {
      "title": "Original Peacock Painting 24x30&quot; canvas wall art",
      "price": "605.00",
      "url": "https://www.etsy.com/listing/106376309/original-peacock-painting-24x30-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/008/0/5151455/il_570xN.363903966_s0sh.jpg"
    }
  ],
  [
    {
      "title": "Original Palette Knife Modern  Landscape Painting Art by Catalin 48&quot;x24&quot; Large",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/177420548/original-palette-knife-modern-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/5564037/il_570xN.557090845_1qvo.jpg"
    },
    {
      "title": "Painting 40&quot; Fish Oil Painting , Calming Abstract painting on canvas, Amazing Warm colors, Original & Hand made painting, By Koby Feldmos",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/187591597/painting-40-fish-oil-painting-calming?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/1/9019569/il_570xN.586985814_5jvh.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract Schilderij - Red and orange on white - Acrylic painting - 31,5&quot; x 47,2&quot; - Free Worldwide Shipping",
      "price": "339.00",
      "url": "https://www.etsy.com/listing/158983861/large-abstract-schilderij-red-and-orange?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/7442860/il_570xN.559440230_mfu1.jpg"
    },
    {
      "title": "Abstract Blue Original Painting by LaffertyArt Sale 22% Off",
      "price": "138.92",
      "url": "https://www.etsy.com/listing/25286172/abstract-blue-original-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/5407450/il_570xN.586404989_hv28.jpg"
    }
  ],
  [
    {
      "title": "Original Oil Blue boat , Modern Impressionism Style 16x20 inch, Landscape Painting Impressionistic OIl on Canvas by Ivailo Nikolov",
      "price": "180.00",
      "url": "https://www.etsy.com/listing/179929126/original-oil-blue-boat-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/5993554/il_570xN.566352804_3gyb.jpg"
    },
    {
      "title": "Original Contemporary modern Abstract Painting On Canvas Colorful Blue, Reds, Oranges, Yellow, Green, Turquoise by Osnat",
      "price": "550.00",
      "url": "https://www.etsy.com/listing/185563603/original-contemporary-modern-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/6571804/il_570xN.587161797_cmaa.jpg"
    }
  ],
  [
    {
      "title": "Original Acrylic Abstract painting ABSTRACT PAINTINGS Modern Art for sale LARGE modern art abstract fine art Nandita",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/162815722/original-acrylic-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/8187066/il_570xN.518225441_t5g0.jpg"
    },
    {
      "title": "Abstract Painting. Art. Large 24x36. Original Abstract Art. Kris Gould. Modern Art. Free Shipping. Acrylic Painting. Home Decor. Blue Art",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/180584931/abstract-painting-art-large-24x36?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/5836665/il_570xN.591105481_ajwj.jpg"
    }
  ],
  [
    {
      "title": "Edgy Modern Original Art Abstract Painting 36 X 24 Contemporary Dramatic Indigo Navy Metallic Gold Pink Red Magenta Blue &quot;LEATHER AND LACE&quot;",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/182864432/edgy-modern-original-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/6487396/il_570xN.577326219_6nd3.jpg"
    },
    {
      "title": "Red Tree Summer Wall Decor Original Painting on Canvas Acrylic Artwork",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/186199056/red-tree-summer-wall-decor-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/6655404/il_570xN.589562273_l8xp.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Painting. Fine Art Seascape.  Sailboat Painting. Large Modern Painting. Title &quot;Destination Tomorrow&quot; by R Schoeffel",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/187284132/original-abstract-painting-fine-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/5846229/il_570xN.593981817_jwys.jpg"
    },
    {
      "title": "Key West Sunset Original Painting with Painted Wooden Frame",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/159711585/key-west-sunset-original-painting-with?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/0/6197186/il_570xN.490617880_580m.jpg"
    }
  ],
  [
    {
      "title": "abstract painting, flower painting, abstract floral painting, pink, spring flowers (16x16) Spring Lovelies",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/184213411/abstract-painting-flower-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/6404470/il_570xN.582111394_f271.jpg"
    },
    {
      "title": "40&quot;  Original Large Abstract  Landscape Painting  Acrylic Painting Modern Art  Handmade by Carola, 40&quot;x32&quot; FREE SHIPPING",
      "price": "269.00",
      "url": "https://www.etsy.com/listing/179500980/40-original-large-abstract-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/6508330/il_570xN.564754470_ohwm.jpg"
    }
  ],
  [
    {
      "title": "Herb print Set of 4 - 8x10 Watercolor painting - Kitchen art - Botanical print set - kitchen print set - Apartment decor - Green artwork",
      "price": "66.00",
      "url": "https://www.etsy.com/listing/171463571/herb-print-set-of-4-8x10-watercolor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/8202623/il_570xN.550593782_oqzj.jpg"
    },
    {
      "title": "April Ocean 3 - Original Oil Painting",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/187413798/april-ocean-3-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/6725061/il_570xN.594347306_i6f8.jpg"
    }
  ],
  [
    {
      "title": "Ready to ship 48&quot; x 24&quot; ORIGINAL Wrapped in Morning Blooms Oil Heavy Palette Knife Texture painting by Paula Nizamas",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/178933124/ready-to-ship-48-x-24-original-wrapped?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/6425267/il_570xN.590308355_8otw.jpg"
    },
    {
      "title": "New Original One of a kind Abstract Acrylic Fluid Painting &quot;Atmospheric&quot; 20&quot; X 20&quot; - Painted by Dawn",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/173631461/new-original-one-of-a-kind-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/8179205/il_570xN.542728779_5o9f.jpg"
    }
  ],
  [
    {
      "title": "Hummingbird - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187753701/hummingbird-hand-painted-glass-ornament?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/9088156/il_570xN.595582678_qxny.jpg"
    },
    {
      "title": "54 x 24 Modern Abstract Cherry Blossom Landscape  BlueTree Painting Ready to Hang",
      "price": "229.00",
      "url": "https://www.etsy.com/listing/151534799/54-x-24-modern-abstract-cherry-blossom?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/011/0/8128111/il_570xN.460369621_esj1.jpg"
    }
  ],
  [
    {
      "title": "Rasta Bob Marley",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/187749339/rasta-bob-marley?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/9398529/il_570xN.595577616_qexc.jpg"
    },
    {
      "title": "Passionate Flamenco — PALETTE KNIFE Figure Oil Painting On Canvas By Leonid Afremov - Size: 20&quot; x 36&quot; (50cm x 90cm)",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/128519835/passionate-flamenco-palette-knife-figure?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/7902640/il_570xN.445717353_ir1r.jpg"
    }
  ],
  [
    {
      "title": "Large 36&quot;x24&quot;x 1-3/8&quot; Original Red Tree Impasto Painting - Palette Knife Abstract Textured on Gallery Canvas - Wired Ready to Hang  FREE S&H",
      "price": "169.99",
      "url": "https://www.etsy.com/listing/187314084/large-36x24x-1-38-original-red-tree?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6149803/il_570xN.594094909_3jo0.jpg"
    },
    {
      "title": "Landscape Abstract painting -  Colored Landscape - Acrylic Modern Art - 55.1&quot; x 27.6&quot;  Panorama Paintings",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/171731088/landscape-abstract-painting-colored?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/1/7941234/il_570xN.554290567_ta03.jpg"
    }
  ],
  [
    {
      "title": "Landscape  Painting Spring Oil on Canvas Original Painting in Handmade One of a Kind Fine Art  27 x 21 in Realism  Nature Gallery Quality",
      "price": "220.00",
      "url": "https://www.etsy.com/listing/187742764/landscape-painting-spring-oil-on-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/8178563/il_570xN.595666739_6emk.jpg"
    },
    {
      "title": "Art Original Painting Abstract Summer Colors Warm Textured Palette Knife Summer Colorful 18 X 18 Coral Orange Teal Square Pink &quot;SWEET SPOT&quot;",
      "price": "115.00",
      "url": "https://www.etsy.com/listing/130224411/art-original-painting-abstract-summer?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/6487396/il_570xN.488696531_b9ot.jpg"
    }
  ],
  [
    {
      "title": "Abstract Pastel Painting 24x24 Gold Abstract Cream Purple",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/175683848/abstract-pastel-painting-24x24-gold?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/6442420/il_570xN.594071775_g155.jpg"
    },
    {
      "title": "Large Bright Orange Pink Abstract Peace Sign Original Painting for Girls Tween Teen Bedroom Austin ArT Bedding",
      "price": "205.00",
      "url": "https://www.etsy.com/listing/92317571/large-bright-orange-pink-abstract-peace?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6491008/il_570xN.309618440.jpg"
    }
  ],
  [
    {
      "title": "Painting 48&quot; Silver Birch, Abstract Painting - Oil Painting , Original and Handmade Art , Certificate Attached , By Paula Nizamas",
      "price": "480.00",
      "url": "https://www.etsy.com/listing/156257870/painting-48-silver-birch-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/022/0/6425267/il_570xN.477939274_ha5s.jpg"
    },
    {
      "title": "ABSTRACT painting, giclee print, acrylic painting, pink, white, modern painting",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/151090447/abstract-painting-giclee-print-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/009/1/6406241/il_570xN.429038384_kb0a.jpg"
    }
  ],
  [
    {
      "title": "Canvas giclee print from my original abstract painting The Beauty in Contrast by Sally Trace, large wall art",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/176710975/canvas-giclee-print-from-my-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/5177427/il_570xN.554329426_51z3.jpg"
    },
    {
      "title": "72x30 large abstract painting landscape xxl FREE shipping to CA/US by Elena Petrova",
      "price": "399.00",
      "url": "https://www.etsy.com/listing/185646211/72x30-large-abstract-painting-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/5802270/il_570xN.587353716_mqbr.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract Tree Painting Modern Whimsical Landscape Contemporary Canvas Surreal Silhouette Fantasy Lavender Purple Art 24x48 JMichael",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/169603279/large-abstract-tree-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/6490472/il_570xN.546182417_ollh.jpg"
    },
    {
      "title": "Huge original modern art Abstract Painting Modern Impasto Texture canvas by Tim Lam 48&quot; x 24&quot;",
      "price": "378.00",
      "url": "https://www.etsy.com/listing/169667431/huge-original-modern-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/5905408/il_570xN.547335978_5xi9.jpg"
    }
  ],
  [
    {
      "title": "Spine Spray",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187760849/spine-spray?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/9409426/il_570xN.595710045_glqi.jpg"
    },
    {
      "title": "Blue water white sky - Landscape Abstract painting - Acrylic Modern Art - 55.1&quot; x 27.6&quot;  Panorama Paintings - Ronald Hunter",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/187572100/blue-water-white-sky-landscape-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/1/7941234/il_570xN.594911268_i70t.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Contemporary Abstract Blue Painting Figurative Art on Canvas - 40x28 by BenWill",
      "price": "370.00",
      "url": "https://www.etsy.com/listing/187627137/original-contemporary-abstract-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/5138986/il_570xN.595097816_tpog.jpg"
    },
    {
      "title": "CUSTOM PAINTING Abstract Modern Painting Original Landscape Asian Tree Art by Gabriela 36x24 LARGE",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/169516245/custom-painting-abstract-modern-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/5266961/il_570xN.526804387_5lgc.jpg"
    }
  ],
  [
    {
      "title": "Nursery Art, Kids Room Wall Art, Baby Boy Nursery Art, Baby Girl Nursery Art Moon Stars Inspirational &quot;My Love for You is over the Moon.&quot;",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/84705361/nursery-art-kids-room-wall-art-baby-boy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/6481328/il_570xN.500148820_dqz0.jpg"
    },
    {
      "title": "Original Contemporary Landscape Painting.Abstract Heavy Textured.Palette Knife.Thick Red Poppies Painting 36&quot; Ready to Hang... -.by Nata S.",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/130935449/original-contemporary-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/6410880/il_570xN.454699020_bi1t.jpg"
    }
  ],
  [
    {
      "title": "16x24&quot; print of Linger oil figurative narrative figurative portrait painting  by Kimberly Dow",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/99796443/16x24-print-of-linger-oil-figurative?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5238694/il_570xN.321676370.jpg"
    },
    {
      "title": "Art Original abstract Painting modern landscape painting  blue art painting large landscape painting 24 X 48",
      "price": "341.72",
      "url": "https://www.etsy.com/listing/187033892/art-original-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/5693606/il_570xN.592615616_2kju.jpg"
    }
  ],
  [
    {
      "title": "HALF PRICE SALE Abstract Original Art Canvas Swirl Painting 30 X 24 Lavender Pink Whimsical Hearts &quot;Keeping Up With The Toads&quot;&#39;",
      "price": "112.50",
      "url": "https://www.etsy.com/listing/98213641/half-price-sale-abstract-original-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/004/1/6487396/il_570xN.382590254_je0b.jpg"
    },
    {
      "title": "Large 40&quot; by 20&quot; Abstract acrylic Painting Landscape Seascape painting Textured Painting Wall Art Ready To Hang  Free Shipping",
      "price": "251.00",
      "url": "https://www.etsy.com/listing/187365390/large-40-by-20-abstract-acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/1/7625066/il_570xN.594172332_q6cm.jpg"
    }
  ],
  [
    {
      "title": "Abstract Modern Fantasy Tree PRINT on Canvas WARMING SUN by Luiza Vizoli Giclee ready to hang",
      "price": "111.75",
      "url": "https://www.etsy.com/listing/91226319/abstract-modern-fantasy-tree-print-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/6655404/il_570xN.594786467_1zyz.jpg"
    },
    {
      "title": "Peninsula Disco.",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/172550647/peninsula-disco?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/8904292/il_570xN.538758147_klvs.jpg"
    }
  ],
  [
    {
      "title": "Floral Painting, european school.Red Poppy flowers.",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/187741169/floral-painting-european-schoolred-poppy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/9444863/il_570xN.595635975_ny0e.jpg"
    },
    {
      "title": "ANNA WINTOUR PORTRAIT Fashion Vogue Graffiti Pop Art Portrait on Canvas 16x20 Spray Painting Versace Prada Chanel Louis Vuitton Burberry",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/118124032/anna-wintour-portrait-fashion-vogue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/1/6150967/il_570xN.595292356_bzrt.jpg"
    }
  ],
  [
    {
      "title": "Landscape ORIGINAL Painting Textured Flowers Painting.Palette Knife.Impasto.Modern Irises Painting.Wall Art Decor 36&quot;..... by Nata S.",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/174872325/landscape-original-painting-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/6410880/il_570xN.547574457_md2m.jpg"
    },
    {
      "title": "Original  abstract contemporary  gallery canvas  impasto  palette knife floral painting Flowers Of Love  by Nicolette Vaughan Horner",
      "price": "199.99",
      "url": "https://www.etsy.com/listing/187079630/original-abstract-contemporary-gallery?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6316483/il_570xN.592952565_j141.jpg"
    }
  ],
  [
    {
      "title": "Vintage John James Audubon. The Original Watercolor Paintings for the Birds of America. 1966. First edition. Slipcase, Color plates, 2 vols.",
      "price": "173.00",
      "url": "https://www.etsy.com/listing/160644566/vintage-john-james-audubon-the-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/7630529/il_570xN.494116441_le58.jpg"
    },
    {
      "title": "Stunning Large Abstract in Blues and Teal. 36 x 18. Ready to Hang. Title Waterfall. by ArtbyMaryKay",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/185320892/stunning-large-abstract-in-blues-and?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/6174005/il_570xN.586312741_dqit.jpg"
    }
  ],
  [
    {
      "title": "Golden Cherry Blossom Painting Deep Red Flowers Asian Zen Tree Art customize size CUSTOM 48x20",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/104476880/golden-cherry-blossom-painting-deep-red?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5341227/il_570xN.180683504.jpg"
    },
    {
      "title": "Hand Painted Seashell Pendant – Fused Glass Jewelry  - Pendant Necklace – Copper Dichroic Glass Border – Leather Cord with Adjustable Chain",
      "price": "89.00",
      "url": "https://www.etsy.com/listing/167173247/hand-painted-seashell-pendant-fused?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/8558999/il_570xN.518136973_bjne.jpg"
    }
  ],
  [
    {
      "title": "Captain America, Acrylic Painting (Hand Painted on Canvas)",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/184633855/captain-america-acrylic-painting-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/1/6278593/il_570xN.595550464_9u7t.jpg"
    },
    {
      "title": "Original Art Abstract Painting XL Tree of Life White Flowers Cherry Tree Blossoms LARGE Home Decor Palette Knife Blue Brown 36x36 -Christine",
      "price": "470.00",
      "url": "https://www.etsy.com/listing/175063508/original-art-abstract-painting-xl-tree?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/1/6249353/il_570xN.548313183_4cmq.jpg"
    }
  ],
  [
    {
      "title": "Art Painting Abstract Original Modern Small Pink Coral Lime 12 X 12 Turquoise Square Soft Contemporary Soft Girly &quot;BLESS YOUR HEART&quot;",
      "price": "72.00",
      "url": "https://www.etsy.com/listing/119610762/art-painting-abstract-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/6487396/il_570xN.482504707_h67h.jpg"
    },
    {
      "title": "Painting  40&quot;  of Uranus Star , Calming Abstract Oil Painting , Cold and Warm Color tones , Original & Handmade , Painted By Koby Feldmos",
      "price": "290.00",
      "url": "https://www.etsy.com/listing/182251290/painting-40-of-uranus-star-calming?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/3/9019569/il_570xN.583209088_nl4s.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract Fantasy Tree Painting Contemporary Diptych Vivid Rainbow Colors Surreal  24x36 JMichael",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/155006901/large-abstract-fantasy-tree-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/6490472/il_570xN.555807878_j00z.jpg"
    },
    {
      "title": "Original Modern Impasto Art  Painting on Gallery wrapped Canvas 48&quot; x 24&quot;, Home Decor, Wall Art --- Red Blossoms---",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/155242827/original-modern-impasto-art-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/7006002/il_570xN.589304017_qfhb.jpg"
    }
  ],
  [
    {
      "title": "Large Green Yellow Abstract Painting HUGE Impasto Painting Modern Abstract Art White Color Sunshine Office decor Large Art 48x24",
      "price": "269.00",
      "url": "https://www.etsy.com/listing/106823509/large-green-yellow-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/005/0/6321590/il_570xN.365539513_rbn1.jpg"
    },
    {
      "title": "White Lotus2 14x10 (inches) Original painting by Nikolov",
      "price": "180.00",
      "url": "https://www.etsy.com/listing/60002613/white-lotus2-14x10-inches-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5993554/il_570xN.308310146.jpg"
    }
  ],
  [
    {
      "title": "ON SALE, 48x20 inches Original Artwork 3 Piece Wall art, set Large Canvas Brown light brown Trees set of 3 tree Painting Wall Decor Triptych",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/184838152/on-sale-48x20-inches-original-artwork-3?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/1/6934340/il_570xN.584554373_5j15.jpg"
    },
    {
      "title": "Original Art Abstract Painting Lilac Flowers Landscape Palette Knife Textured Poppy Floral Purple Lavender Gold Wall Decor 24x36&quot; -Christine",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/184836549/original-art-abstract-painting-lilac?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/1/6249353/il_570xN.584435755_gnbn.jpg"
    }
  ],
  [
    {
      "title": "Original Oil Painting on linen, &quot;The Only Constant is&quot;",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/115211747/original-oil-painting-on-linen-the-only?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/0/5219001/il_570xN.396090436_obr9.jpg"
    },
    {
      "title": "Aloha Reclaimed Wood Sign",
      "price": "155.00",
      "url": "https://www.etsy.com/listing/130499649/aloha-reclaimed-wood-sign?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/016/0/6752680/il_570xN.453019967_jtpe.jpg"
    }
  ],
  [
    {
      "title": "Small Abstract Art Original Turquoise 12 X 16 Hot Pink Yellow Black White Textured Drips Bold Playful Fun Vivid Lightweight &quot;THE FUN ONE&quot;",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/163066564/small-abstract-art-original-turquoise-12?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/6487396/il_570xN.503027101_bxrq.jpg"
    },
    {
      "title": "Original Large Abstract Painting Gold Bronze Texture Modern Palette Knife Art Thick Textured Painting by Lafferty - 72x30",
      "price": "250.46",
      "url": "https://www.etsy.com/listing/83032395/original-large-abstract-painting-gold?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/5407450/il_570xN.586299700_ibxn.jpg"
    }
  ],
  [
    {
      "title": "City of Lights",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187759767/city-of-lights?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/9427569/il_570xN.595604204_a8wr.jpg"
    },
    {
      "title": "Oil Landscape  Abstract Original Modern 36&quot; palette knife signature floral  impasto oil painting Red Blossoms by Nicolette Vaughan Horner",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/186180176/oil-landscape-abstract-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/6316483/il_570xN.589389820_syjg.jpg"
    }
  ],
  [
    {
      "title": "Original Acrylic Painting 11 x 14",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/43303135/original-acrylic-painting-11-x-14?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5729213/il_570xN.132310844.jpg"
    },
    {
      "title": "ORIGINAL Oil Painting &quot;Fall&quot;   40&quot;x20&quot;x2&quot;  ready to hang",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/154996399/original-oil-painting-fall-40x20x2-ready?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/7180917/il_570xN.473168251_9poz.jpg"
    }
  ],
  [
    {
      "title": "Whimsical Swirl",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187755668/whimsical-swirl?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/7444364/il_570xN.595610296_rv4z.jpg"
    },
    {
      "title": "Original abstract painting Tree art Looking Up forest on gallery wrap canvas Ready to hang by tim Lam 48x24",
      "price": "369.00",
      "url": "https://www.etsy.com/listing/187359266/original-abstract-painting-tree-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/5179610/il_570xN.594246501_tsma.jpg"
    }
  ],
  [
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/160948913/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/0/6483189/il_570xN.495150418_gnqr.jpg"
    },
    {
      "title": "Ghost Phoenix - Original Abstract Acrylic Painting",
      "price": "240.00",
      "url": "https://www.etsy.com/listing/168400540/ghost-phoenix-original-abstract-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/1/6767891/il_570xN.543558873_ea0h.jpg"
    }
  ],
  [
    {
      "title": "Hibiscus in Morocco",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/99671623/hibiscus-in-morocco?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/0/6910263/il_570xN.352742884_gcqj.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Turquoise Purple LOTUS Flower 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/173939415/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/6516260/il_570xN.543933358_fgzp.jpg"
    }
  ],
  [
    {
      "title": "Between Seas - Original Abstract Acrylic Painting",
      "price": "140.00",
      "url": "https://www.etsy.com/listing/176861419/between-seas-original-abstract-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/1/6767891/il_570xN.558887168_64rk.jpg"
    },
    {
      "title": "Rêve de Pájara cuerda. Dream of the wind-up bird",
      "price": "279.00",
      "url": "https://www.etsy.com/listing/172545269/reve-de-pajara-cuerda-dream-of-the-wind?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/8904292/il_570xN.538738617_kye1.jpg"
    }
  ],
  [
    {
      "title": "Windy bay  - art painting wall decor home wall hanging small canvas original impasto oil town city sea sityscape water 16x16 textured blue",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/125122703/windy-bay-art-painting-wall-decor-home?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/013/0/5937615/il_570xN.455936552_7wne.jpg"
    },
    {
      "title": "ORIGINAL City Lights Oil Painting Modern 48&quot; x 24&quot;  Signed Modern Palette Knife Oil Abstract   by Paula Nizamas ooooooo",
      "price": "480.00",
      "url": "https://www.etsy.com/listing/174158278/original-city-lights-oil-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/6425267/il_570xN.590188490_oor7.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting Original Large Multicolored Abstract Painting, Large Blue Modern Wall Art 30x30, Yellow Blue Wall Decor",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/174754241/abstract-painting-original-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/1/7994975/il_570xN.547148705_msxy.jpg"
    },
    {
      "title": "ORIGINAL art  Painting Modern Acrylic  Impasto Textured Palette Knife Abstract Landscape Painting 001",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/187665803/original-art-painting-modern-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/9435203/il_570xN.595651515_9tz0.jpg"
    }
  ],
  [
    {
      "title": "custom original modern textured acrylic earthy nature contemporary elephant love PAINTING by Shanna - 36 x 12 - side by side",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/130873859/custom-original-modern-textured-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/5515066/il_570xN.454396490_is6x.jpg"
    },
    {
      "title": "Diptych No.21 New England Landscape, original Japanese watercolor and sumi-ink",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/106811128/diptych-no21-new-england-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/004/0/5949766/il_570xN.365487910_rf4c.jpg"
    }
  ],
  [
    {
      "title": "COMMISSION Purple Pink Aqua Blue metallic Gold Flower Tree painting on canvas thick impasto texture ready to hang wall decor By OTO",
      "price": "285.00",
      "url": "https://www.etsy.com/listing/168486859/commission-purple-pink-aqua-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/012/0/5941978/il_570xN.433682759_pkhn.jpg"
    },
    {
      "title": "Harmony 14 Panel",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/106965063/harmony-14-panel?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/006/0/6547738/il_570xN.366050347_3g6s.jpg"
    }
  ],
  [
    {
      "title": "Halloween Owl painting, original art, Witch painting, OOAK Halloween art, Halloween Wall art",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/55723529/halloween-owl-painting-original-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/3/5397924/il_570xN.172454386.jpg"
    },
    {
      "title": "Spring Sale Huge 48x36 Made To Order - Ready to Hang - Original Gallery Wrapped Canvas Painting - Abstract Expressionism Art - 1510",
      "price": "520.00",
      "url": "https://www.etsy.com/listing/167707800/spring-sale-huge-48x36-made-to-order?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/7506038/il_570xN.590900388_tr0n.jpg"
    }
  ],
  [
    {
      "title": "Abstract Textured Sculpted Original Painting by Andrada - Heavy Textured - Mixed media painting",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/108692651/abstract-textured-sculpted-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/008/0/5313299/il_570xN.381527369_7pmq.jpg"
    },
    {
      "title": "SALE, 48x20 inches, Original Artwork 3 piece Wall art set, Yellow Large wall Paintings Canvas Trees, set of 3, art, painting, tree, decor",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/184171047/sale-48x20-inches-original-artwork-3?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/1/6934340/il_570xN.581953154_og3c.jpg"
    }
  ],
  [
    {
      "title": "yellow canvas art, gray and yellow art, yellow art, yellow Original LARGE Painting 60 Abstract silver gray heavy texture canvas Yellow wall",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/106197560/yellow-canvas-art-gray-and-yellow-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/002/0/6321590/il_570xN.363255987_omtm.jpg"
    },
    {
      "title": "The Head Hunter, Original Acrylic Painting ",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/187749669/the-head-hunter-original-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5222360/il_570xN.595565958_bicp.jpg"
    }
  ],
  [
    {
      "title": "Purple Tulips Roses Blossoms Impasto Original Abstract White Blue Flowers Landscape Painting Modern Palette Knife Art by Lafferty 20x16",
      "price": "136.27",
      "url": "https://www.etsy.com/listing/155242354/purple-tulips-roses-blossoms-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5407450/il_570xN.586410003_k7m2.jpg"
    },
    {
      "title": "Abstract Figure Landscape Painting- Twist-2  24 x 48",
      "price": "695.00",
      "url": "https://www.etsy.com/listing/179430334/abstract-figure-landscape-painting-twist?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/1/5851455/il_570xN.569111284_rj2i.jpg"
    }
  ],
  [
    {
      "title": "Spring Beauty ABSTRACT PAINTING Red Blue ABSTRACT Art Modern Artwork Original Paintings Oil Landscape canvas large artwork Ready to Hang",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/186114186/spring-beauty-abstract-painting-red-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/9100501/il_570xN.584826853_2r6u.jpg"
    },
    {
      "title": "Black and Silver Painting Modern Abstract Asian Chinese Character Kanji Art Original Art Zen Calming Style Custom 30x30",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/44430121/black-and-silver-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5341227/il_570xN.136138538.jpg"
    }
  ],
  [
    {
      "title": "Original  abstract contemporary  gallery canvas  impasto  palette knife floral painting In The Pink  by Nicolette Vaughan Horner",
      "price": "99.99",
      "url": "https://www.etsy.com/listing/187637129/original-abstract-contemporary-gallery?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/6316483/il_570xN.595238799_nprk.jpg"
    },
    {
      "title": "Landacape Art 40&quot; Abstract LANDSCAPE PAINTING Abstract Art Large Paintings Artwork Red Sunset Art canvas Fine Art Ready to Hang",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/184348258/landacape-art-40-abstract-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/9100501/il_570xN.582631838_8rs8.jpg"
    }
  ],
  [
    {
      "title": "Oil Landscape  deep gallery  canvas Abstract Original Modern 48&quot; palette knife signature floral impasto painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/185624060/oil-landscape-deep-gallery-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/6316483/il_570xN.587141373_e8tq.jpg"
    },
    {
      "title": "Original Painting  - &quot;Fly By&quot; - Blue  - Textured Painting - Aviation - Ice Landscape - Aeroplane Plane Art - Water Landscape",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/100745047/original-painting-fly-by-blue-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6402233/il_570xN.360479498.jpg"
    }
  ],
  [
    {
      "title": "Art Abstract 30 X 24 Original Modern Spring Colors Turquoise Blue Yellow Orange Red Green Lively Happy Energetic Bright &quot;WHAT&#39;S UP DOC?&quot;",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/178555195/art-abstract-30-x-24-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6487396/il_570xN.561268433_fds5.jpg"
    },
    {
      "title": "METAL WALL SCULPTURE",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/80172623/metal-wall-sculpture?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6483189/il_570xN.265287325.jpg"
    }
  ],
  [
    {
      "title": "Custom Illustrated Recipe of Your Favorite Dish - Original Watercolor Painting",
      "price": "195.00",
      "url": "https://www.etsy.com/listing/120236427/custom-illustrated-recipe-of-your?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/1/6991060/il_570xN.538043629_qec4.jpg"
    },
    {
      "title": "Pink Bloom White Oil Painting Oiginal Abstract    Heavy Palette Knife Texture by Paula Nizamas Ready to Hang 48&quot;",
      "price": "335.00",
      "url": "https://www.etsy.com/listing/172627961/pink-bloom-white-oil-painting-oiginal?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/6425267/il_570xN.590288407_5lpz.jpg"
    }
  ],
  [
    {
      "title": "Color Me Happy",
      "price": "237.95",
      "url": "https://www.etsy.com/listing/187757859/color-me-happy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/9434920/il_570xN.595595810_nlpq.jpg"
    },
    {
      "title": "Her words are Flowers.",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/172547823/her-words-are-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/8904292/il_570xN.538654968_bk8y.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Art Abstract Painting Modern Blue Textured Urban Contemporary Navy Blue Teal Brown Rust Green City Home Wall Decor 24x36 -Christine",
      "price": "385.00",
      "url": "https://www.etsy.com/listing/186966185/original-art-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/1/6249353/il_570xN.592453489_curc.jpg"
    },
    {
      "title": "Little girl original oil painting with palette knife by Judy Mackey",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187742470/little-girl-original-oil-painting-with?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/5413951/il_570xN.595666259_3pzd.jpg"
    }
  ],
  [
    {
      "title": "Metal Wall Art Sculpture Contemporary Abstract Painting metal abstract wall art Decor Fine Art by Nider - Large 64&quot;W x 24&quot;H - Jagged in Blue",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/75109733/metal-wall-art-sculpture-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6354771/il_570xN.248054145.jpg"
    },
    {
      "title": "Large Abstract paintings, Heavy Textured, LARGE Painting, wall hanging, anniversary canvas gift Purple Impasto Lovers contemporary fine art",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/101826067/large-abstract-paintings-heavy-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6321590/il_570xN.344421754.jpg"
    }
  ],
  [
    {
      "title": "OCEAN painting, large abstract painting, abstract ocean, aqua seascape, ocean landscape (30x36) Sweet Ocean Song",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/182192984/ocean-painting-large-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/6404470/il_570xN.574694200_rvmv.jpg"
    },
    {
      "title": "Original Nubian Goat Oil Painting 10x10 portrait",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187755673/original-nubian-goat-oil-painting-10x10?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5172746/il_570xN.595693003_8v0v.jpg"
    }
  ],
  [
    {
      "title": "Moon over NYC",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/187754830/moon-over-nyc?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/9427569/il_570xN.595606738_psr8.jpg"
    },
    {
      "title": "XL Oil Landscape Red Blossoms  Abstract Original Modern 48&quot; palette knife oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/187696812/xl-oil-landscape-red-blossoms-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/6316483/il_570xN.595487639_8ehf.jpg"
    }
  ],
  [
    {
      "title": "72&quot; abstract  art painting large painting  abstract painting , from jolina anthony signet  express shipping",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/184196227/72-abstract-art-painting-large-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/6149157/il_570xN.582159887_19mg.jpg"
    },
    {
      "title": "Canvas Giclee from my original abstract landscape painting, SUMMER DAY, floral, geometric, coral, orange, teal, aqua, turquoise",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/163739662/canvas-giclee-from-my-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/0/5177427/il_570xN.480846636_itmm.jpg"
    }
  ],
  [
    {
      "title": "Blue 27x20 in, Landscape Painting Original Art Impressionistic OIl on Canvas by Ivailo Nikolov",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/97587620/blue-27x20-in-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5993554/il_570xN.328815981.jpg"
    },
    {
      "title": "16 X 40 Large Original Textural Abstract Art Palette Knife Metallic Bronze Gold Etchings Magenta Hot Pink Gray Taupe Fuschia &quot;PLUFF MUD&quot;",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/174320081/16-x-40-large-original-textural-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6487396/il_570xN.545531033_tcz9.jpg"
    }
  ],
  [
    {
      "title": "SOLD Mad rooster.",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/187753514/sold-mad-rooster?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/8904292/il_570xN.595705759_fq19.jpg"
    },
    {
      "title": "Your  Pet Custom Art Portrait Painting  8&quot;x8&quot;",
      "price": "105.00",
      "url": "https://www.etsy.com/listing/80624425/your-pet-custom-art-portrait-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5991493/il_570xN.266899240.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Oil Painting",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/169054602/original-abstract-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/6866267/il_570xN.525102398_7jmk.jpg"
    },
    {
      "title": "Coral Pink Colorful  Bold Drips Large Art Abstract Floral Original Turquoise Magenta Orange Yellow Green Blue 36 X 24 &quot;EXCESSIVE INDULGENCE&quot;",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/186848412/coral-pink-colorful-bold-drips-large-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/6487396/il_570xN.591896618_7def.jpg"
    }
  ],
  [
    {
      "title": "PAINTING Art Large Abstract Painting Original Abstract Painting on Canvas Unique Painting Pink & Purple Wall Decor Fluid Art 36&quot; Heather Day",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/112671488/painting-art-large-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/008/0/6216479/il_570xN.386787358_kram.jpg"
    },
    {
      "title": "Custom Home Watercolor Portrait 12x18",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/187667653/custom-home-watercolor-portrait-12x18?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/8341084/il_570xN.595353571_f5tk.jpg"
    }
  ],
  [
    {
      "title": "Sunny Pair - 14 x 11 Inch Original Still Life Oil Painting of Sunflowers - Flower Painting - Living Room Art - Summer Decor",
      "price": "850.00",
      "url": "https://www.etsy.com/listing/100565808/sunny-pair-14-x-11-inch-original-still?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/006/0/5140979/il_570xN.393204523_ilul.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/187750860/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6483189/il_570xN.595696829_p9q4.jpg"
    }
  ],
  [
    {
      "title": "Abstract Landscape Painting Original Multicolored Impasto Acrylic Painting Seascape Beach Sunset Canvas art &quot;The New Beginning&quot;",
      "price": "255.00",
      "url": "https://www.etsy.com/listing/187166537/abstract-landscape-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5305356/il_570xN.593357133_rewr.jpg"
    },
    {
      "title": "Romantic Painting Original Abstract Painting Heavy Texture Impasto Painting Love Birds on Wire Canvas art &quot;Colours of the Rain&quot;",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/187171425/romantic-painting-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/5305356/il_570xN.593542729_o6kl.jpg"
    }
  ],
  [
    {
      "title": "HandPainted  SOOOOOO Baltimore Old Bay Sign",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/160910743/handpainted-soooooo-baltimore-old-bay?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/1/5790922/il_570xN.495065477_hnhg.jpg"
    },
    {
      "title": "Abstract  Painting Large 60&quot; by 40&quot; Huge acrylic Painting Landscape painting Textured Wall Art Blue Gold Ready To Hang",
      "price": "535.00",
      "url": "https://www.etsy.com/listing/182977514/abstract-painting-large-60-by-40-huge?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/0/7625066/il_570xN.577617040_i2mg.jpg"
    }
  ],
  [
    {
      "title": "original landscape painting, cape cod beach, sea, sky, ocean landscape, FREE SHIPPING",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/72365526/original-landscape-painting-cape-cod?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5832442/il_570xN.236843762.jpg"
    },
    {
      "title": "SOLD Mad cow",
      "price": "255.00",
      "url": "https://www.etsy.com/listing/187754317/sold-mad-cow?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/8904292/il_570xN.595584028_olmq.jpg"
    }
  ],
  [
    {
      "title": "Abstract Art Original Painting on Canvas Titled: Seaside Escape 2 30x48x1.5&quot; by Ora Birenbaum",
      "price": "425.00",
      "url": "https://www.etsy.com/listing/187632345/abstract-art-original-painting-on-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/6552479/il_570xN.595220659_shjw.jpg"
    },
    {
      "title": "Spring SALE ORIGINAL Contemporary Fine Art Abstract Textured Painting modern 18 X 36 Inches  ------- Purple",
      "price": "206.50",
      "url": "https://www.etsy.com/listing/176810463/spring-sale-original-contemporary-fine?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/5693606/il_570xN.554799777_bt86.jpg"
    }
  ],
  [
    {
      "title": "LARGE Abstract Painting - Multi Colored Fine Art - Contemporary Painting - Modern Art - by Marie Bretz - 36x18",
      "price": "395.00",
      "url": "https://www.etsy.com/listing/166963720/large-abstract-painting-multi-colored?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5367316/il_570xN.585148083_b9ix.jpg"
    },
    {
      "title": "Couple Abstract",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187746474/couple-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/1/8913640/il_570xN.595576592_5twm.jpg"
    }
  ],
  [
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/164252146/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/6483189/il_570xN.507316236_7stk.jpg"
    },
    {
      "title": "Original Abstract Painting Birds Romance Flowers Tree Oil Art SPRING WEDDING Gift",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/172130340/original-abstract-painting-birds-romance?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/5440875/il_570xN.537275955_2til.jpg"
    }
  ],
  [
    {
      "title": "ANGELS stretched canvas modern fine art painting print  30&quot; metallic gold teal brown figures - Art by Carol Lee",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/99258411/angels-stretched-canvas-modern-fine-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/1/5383721/il_570xN.559251609_q3u1.jpg"
    },
    {
      "title": "Blue VW Bug Painting",
      "price": "160.00",
      "url": "https://www.etsy.com/listing/187743662/blue-vw-bug-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/5234113/il_570xN.595567394_e1x2.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract Acrylic Painting on Canvas,modern art,original art,art,home decor,fine art,tkafka,tracey kafka,Untitled 11",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/184744616/large-abstract-acrylic-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/5774375/il_570xN.584215567_pch0.jpg"
    },
    {
      "title": "Custom Pet Portrait Pet Painting 8x10 Any Animal Artist Sharon Lamb",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/165341793/custom-pet-portrait-pet-painting-8x10?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5151925/il_570xN.511360805_hvvp.jpg"
    }
  ],
  [
    {
      "title": "Valentine, Original Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel, Flowers",
      "price": "129.95",
      "url": "https://www.etsy.com/listing/172922677/valentine-original-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/8912045/il_570xN.540001034_i2s4.jpg"
    },
    {
      "title": "Original Acrylic portrait - Spaghetti Head Betty",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/94634758/original-acrylic-portrait-spaghetti-head?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5857059/il_570xN.318101544.jpg"
    }
  ],
  [
    {
      "title": "Peeking Moon - 10 x 8 Inch Original Impressionist Style Oil Painting of the California Sierra Mountains - Living Room Art - Wall Decor",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/165186926/peeking-moon-10-x-8-inch-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/5140979/il_570xN.510827589_dcav.jpg"
    },
    {
      "title": "When I Grow Up I Want To Be...A Drummer (Original Acrylic on Canvas)",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/110954176/when-i-grow-up-i-want-to-bea-drummer?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/1/5421855/il_570xN.380571830_o0q0.jpg"
    }
  ],
  [
    {
      "title": "Mineral Mountains",
      "price": "224.00",
      "url": "https://www.etsy.com/listing/172542639/mineral-mountains?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/8904292/il_570xN.538729673_tsz0.jpg"
    },
    {
      "title": "My Eyes with Mask #1",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/187754972/my-eyes-with-mask-1?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/1/8913640/il_570xN.595710413_7y5f.jpg"
    }
  ],
  [
    {
      "title": "church that Jesus built Book art mixed media church on vintage gospel book history of scripture Jesus god",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/183191351/church-that-jesus-built-book-art-mixed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/5883441/il_570xN.578363102_btyj.jpg"
    },
    {
      "title": "CUSTOM PAINTING Abstract Modern Asian Zen Blossom Tree Landscape Painting Original Art by Gabriela 50x30 black white red",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/108617788/custom-painting-abstract-modern-asian?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/005/0/5266961/il_570xN.372164936_hhfu.jpg"
    }
  ],
  [
    {
      "title": "Lake Rules Vintage Style Typography Word Art Sign",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/76900322/lake-rules-vintage-style-typography-word?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/5747617/il_570xN.582670279_ei0j.jpg"
    },
    {
      "title": "Huge original Brush art Oil Painting Modern Impasto Texture canvas by Tim Lam 48&quot; x 24&quot;",
      "price": "388.00",
      "url": "https://www.etsy.com/listing/179402113/huge-original-brush-art-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/5905408/il_570xN.564323830_loda.jpg"
    }
  ],
  [
    {
      "title": "Custom Pet Portrait Pet Painting 11x14 TWO Pets Any Animal Mix Dogs Cats Horses",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/22569193/custom-pet-portrait-pet-painting-11x14?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.62416211.jpg"
    },
    {
      "title": "Original X Large Abstract Painting Multicolors  Ready to Hang Gallery Canvas Contemporary Fine Art Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/164967739/original-x-large-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/6316483/il_570xN.509757766_r4xi.jpg"
    }
  ],
  [
    {
      "title": "Sale - 48&quot; Original Abstract Landscape Painting Heavy Texture Impasto Acrylic &quot;Wild Poppy Field&quot; by QIQIGALLERY",
      "price": "145.00",
      "url": "https://www.etsy.com/listing/85229776/sale-48-original-abstract-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/006/0/5305356/il_570xN.375879962_bxb3.jpg"
    },
    {
      "title": "Cow and Barn painting 9 30x30 inch original animal farm portrait oil painting by Roz",
      "price": "425.00",
      "url": "https://www.etsy.com/listing/152386610/cow-and-barn-painting-9-30x30-inch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/5227653/il_570xN.463569065_k0z2.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract SEASCAPE Oil Painting ORIGINAL White SAILBOAT Impressionist Fine Art on Gallery Canvas 48x36 by BenWill",
      "price": "650.00",
      "url": "https://www.etsy.com/listing/187617654/large-abstract-seascape-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/5138986/il_570xN.595084368_hysj.jpg"
    },
    {
      "title": "ORIGINAL  Abstract Painting Contemporary Art  Modern  Landscape  LARGE  TREES Palette Knife Textured Path in the Forest by Tanja Bell",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/105006234/original-abstract-painting-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/0/7104512/il_570xN.368372372_gli2.jpg"
    }
  ],
  [
    {
      "title": "Commission order large original  tree oil painting - rust red, blue , green, yellow 4 canvas set 48 x 24 by Vadal",
      "price": "259.35",
      "url": "https://www.etsy.com/listing/122184620/commission-order-large-original-tree-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5198223/il_570xN.594653078_norw.jpg"
    },
    {
      "title": "Abstract # 11",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187753952/abstract-11?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/1/8913640/il_570xN.595706001_5wm9.jpg"
    }
  ],
  [
    {
      "title": "Cooling Waters&#39; 20x16inch Print of oil painting narrative figurative female portrait  by Kim Dow",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/9058658/cooling-waters-20x16inch-print-of-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5238694/il_570xN.17897776.jpg"
    },
    {
      "title": "Panorama Painting - Fine Blue on Blue - Acrylic Modern Art - 59.1&quot; x 23.6&quot;  Panorama Paintings",
      "price": "429.00",
      "url": "https://www.etsy.com/listing/182633147/panorama-painting-fine-blue-on-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/1/7941234/il_570xN.576396263_324b.jpg"
    }
  ],
  [
    {
      "title": "Sold - Full Cry Original Huntsman Hunter Rider Fox hunting foxhound painting",
      "price": "750.00",
      "url": "https://www.etsy.com/listing/187759055/sold-full-cry-original-huntsman-hunter?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/8169335/il_570xN.595705391_am89.jpg"
    },
    {
      "title": "The Chinese Garden By Maggie Keswick",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/187749365/the-chinese-garden-by-maggie-keswick?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/5592698/il_570xN.595558366_sgj2.jpg"
    }
  ],
  [
    {
      "title": "Large OIL PAINTING custom made to order original figurative art  female figure bird fine art Title: The DAYDREAM by the artist Carol Lee",
      "price": "890.00",
      "url": "https://www.etsy.com/listing/186252720/large-oil-painting-custom-made-to-order?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/9225448/il_570xN.589647722_etdq.jpg"
    },
    {
      "title": "PAINTING ORIGINAL Acrylic on Canvas Summer Cottages Ocean Beach Tree Modern Abstract Ready to Hang Folk Art Landscape Artwork Horvath 12x16",
      "price": "195.00",
      "url": "https://www.etsy.com/listing/186112489/painting-original-acrylic-on-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/5984149/il_570xN.589114528_o6hq.jpg"
    }
  ],
  [
    {
      "title": "Tiger Lily by Shanna Trumbly- Canvas Giclee Print 17 X 23",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/63984775/tiger-lily-by-shanna-trumbly-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5675154/il_570xN.200616616.jpg"
    },
    {
      "title": "Art painting Jmjartstudio Original Painting 24 X 36 Inches ---serenity",
      "price": "233.50",
      "url": "https://www.etsy.com/listing/158859671/art-painting-jmjartstudio-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/5693606/il_570xN.487567571_kff8.jpg"
    }
  ],
  [
    {
      "title": "4-Piece Painted Personalized Hospital Door Sign, Baby&#39;s Room Sign with Name and Birth Stats, Polka Dots and Stripes",
      "price": "62.00",
      "url": "https://www.etsy.com/listing/121753040/4-piece-painted-personalized-hospital?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/009/0/7156110/il_570xN.420613808_o48b.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Rust White ORCHID BOUQUET Flowers 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/185151664/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/6516260/il_570xN.585582782_hwas.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Abstract Art Contemporary Fine Art Abstract Painting modern 18 X 36 Inches -------Butter yellow",
      "price": "206.50",
      "url": "https://www.etsy.com/listing/158889332/original-abstract-art-contemporary-fine?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/5693606/il_570xN.487705823_e24d.jpg"
    },
    {
      "title": "Landscape Painting, Abstract Painting, Original Palette Knife Painting, , Textured Painting Ready to Hang",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/110107801/landscape-painting-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/008/0/6208048/il_570xN.384323579_4n25.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Abstract Modern Painting Palette Knife on canvas Ready to Hang A Night in Town from Paula Nizamas",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/88800517/original-abstract-modern-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6425267/il_570xN.296500740.jpg"
    },
    {
      "title": "Sun Flowers",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/99820396/sun-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/001/0/6910263/il_570xN.352744961_a2cs.jpg"
    }
  ],
  [
    {
      "title": "Original Large Abstract Fine Art on Canvas Textured Metallic Modern Palette Knife Painting Ready to Hang 36x12x.75",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/85723561/original-large-abstract-fine-art-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/007/0/5496422/il_570xN.372068444_900v.jpg"
    },
    {
      "title": "Spring SALE Art Original abstract Painting modern landscape painting  blue art painting large landscape painting 24 X 48",
      "price": "307.50",
      "url": "https://www.etsy.com/listing/184960607/spring-sale-art-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5693606/il_570xN.584865110_mgqq.jpg"
    }
  ],
  [
    {
      "title": "3 D.A.Y. S.A.L.E 30 OFF Modern Large Abstract Art, 60&quot;x20&quot; art painting large painting abstract painting modern abstract painting sofa art",
      "price": "184.80",
      "url": "https://www.etsy.com/listing/172941342/3-day-sale-30-off-modern-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/8128111/il_570xN.540127542_snx8.jpg"
    },
    {
      "title": "San Francisco Skyline 48&quot; Large LANDSCAPE ABSTRACT ORIGINAL Oil  Painting Contemporary Modern Textured Palette Knife  by Lana Guise",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/169418057/san-francisco-skyline-48-large-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/7889171/il_570xN.526434311_8vkg.jpg"
    }
  ],
  [
    {
      "title": "triptych 3 panel wall art colorful images &quot;Colour flats&quot; 3 panel canvas wall art orange leaf canvas pop abstraction 48 x 20 &quot;",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/162216833/triptych-3-panel-wall-art-colorful?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5770030/il_570xN.261692840.jpg"
    },
    {
      "title": "CUSTOM Abstract Painting Peacock Textured Contemporary Impasto Gallery Fine Art Palette Knife Blue Green Gold MADE to ORDER 36x24 -Christine",
      "price": "595.00",
      "url": "https://www.etsy.com/listing/181848067/custom-abstract-painting-peacock?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/2/6249353/il_570xN.573351616_m2mo.jpg"
    }
  ],
  [
    {
      "title": "LARGE Contemporary Abstract Painting TURQUOISE Blue & RUST Abstract Art by Marie - 60x20",
      "price": "595.00",
      "url": "https://www.etsy.com/listing/165624259/large-contemporary-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/5367316/il_570xN.576159117_r8jp.jpg"
    },
    {
      "title": "Swing painting 127 12x24 inch portrait original oil painting by Roz",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/181790682/swing-painting-127-12x24-inch-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/5227653/il_570xN.573293987_lhlk.jpg"
    }
  ],
  [
    {
      "title": "Greenfield and Blue water - Acrylic painting - 31,5&quot; x 47,2&quot; - Free Worldwide Shipping- Ronald Hunter",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/183459712/greenfield-and-blue-water-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/7442860/il_570xN.579375010_diui.jpg"
    },
    {
      "title": "yellow summer - 24 x 24, original modern contemporary acrylic PAINTING canvas, abstract art by shanna",
      "price": "162.00",
      "url": "https://www.etsy.com/listing/185867504/yellow-summer-24-x-24-original-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/5515066/il_570xN.588203434_5at8.jpg"
    }
  ],
  [
    {
      "title": "SOLD Decoradora.",
      "price": "148.00",
      "url": "https://www.etsy.com/listing/173395060/sold-decoradora?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/8904292/il_570xN.541874937_b0bb.jpg"
    },
    {
      "title": "Large original painting Abstract modern contemporary made to order commission 72 x 24 x 3/4in - Cherry Blossom Tree by Vadal",
      "price": "343.85",
      "url": "https://www.etsy.com/listing/81872506/large-original-painting-abstract-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5198223/il_570xN.594653030_a2no.jpg"
    }
  ],
  [
    {
      "title": "SOLD Una tarde con los Girasoles. / An afternoon with the Sunflowers.",
      "price": "224.00",
      "url": "https://www.etsy.com/listing/172532556/sold-una-tarde-con-los-girasoles-an?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/8904292/il_570xN.538744575_9dzp.jpg"
    },
    {
      "title": "Turquoise Modern Abstract Painting Original Contemporary Teal Fine Art on Canvas Federations by Osnat - MADE-TO-ORDER - 48&quot;x24&quot;",
      "price": "529.00",
      "url": "https://www.etsy.com/listing/161625406/turquoise-modern-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/6571804/il_570xN.497781951_kst1.jpg"
    }
  ],
  [
    {
      "title": "Notorious BIG Portrait",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/187744992/notorious-big-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/9398529/il_570xN.595675827_2p0e.jpg"
    },
    {
      "title": "Custom Oil Portrait - Wedding/Couple -  Hand Painted Oil Portrait from your Photo on Canvas 24x30",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/176614626/custom-oil-portrait-weddingcouple-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/9034210/il_570xN.577063055_cfje.jpg"
    }
  ],
  [
    {
      "title": "Beach painting 132 12x12 inch original oil figure portrait painting by Roz",
      "price": "110.00",
      "url": "https://www.etsy.com/listing/187704444/beach-painting-132-12x12-inch-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/5227653/il_570xN.595416394_6mv9.jpg"
    },
    {
      "title": "Custom Pet Portrait 24x30  -  Hand Painted Oil Portrait from your Photo on Canvas",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/176689380/custom-pet-portrait-24x30-hand-painted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/9034210/il_570xN.553991944_5v26.jpg"
    }
  ],
  [
    {
      "title": "American Gold Finch - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187759587/american-gold-finch-hand-painted-glass?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/9088156/il_570xN.595602776_iiuo.jpg"
    },
    {
      "title": "Original Acrylic LANDSCAPE Painting Huge ABSTRACT Painting Modern Art for sale LARGE modern art abstract fine art by Nandita.",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/165478962/original-acrylic-landscape-painting-huge?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/8187066/il_570xN.572714106_b8yu.jpg"
    }
  ],
  [
    {
      "title": "SPECIAL Weekend FREE shipping Painting Original Abstract XXL Painting Acrylic Painting by M.Schöneberg &quot;Blue Twins&quot; Large Painting 64x32x1,5",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/187487396/special-weekend-free-shipping-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/7063305/il_570xN.594601272_2y4h.jpg"
    },
    {
      "title": "Original Seasons Tree Landscape Painting Oil on Canvas Textured Palette Knife Contemporary Modern Art 15X30 by Willson Lau",
      "price": "115.00",
      "url": "https://www.etsy.com/listing/153456519/original-seasons-tree-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/5979267/il_570xN.467442170_dmtk.jpg"
    }
  ],
  [
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art White Blue Orange DANUBE VILLAGE  36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "495.00",
      "url": "https://www.etsy.com/listing/185604468/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/6516260/il_570xN.587335951_7b04.jpg"
    },
    {
      "title": "Cereal painting 14 12x12 inch original still life oil painting cupcakes by Roz",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/186999201/cereal-painting-14-12x12-inch-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5227653/il_570xN.592470350_s502.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting. THREE FEET Wall Art. Modern Art. Original. Contemporary Painting. Huge. 36 x 30 Blue Brown cream olive white",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/184679215/abstract-painting-three-feet-wall-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5440733/il_570xN.583943733_bla7.jpg"
    },
    {
      "title": "Wet",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/187752086/wet?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/8883808/il_570xN.595704673_1zg6.jpg"
    }
  ],
  [
    {
      "title": "Spring SALE Art original Abstract painting JMJARTSTUDIO Original Painting 18 x 36  Inches-------grey  ----------",
      "price": "206.70",
      "url": "https://www.etsy.com/listing/179172463/spring-sale-art-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/5693606/il_570xN.563572513_40n4.jpg"
    },
    {
      "title": "The Swan Queen- Acrylic on Canvas 16x20",
      "price": "720.00",
      "url": "https://www.etsy.com/listing/187749768/the-swan-queen-acrylic-on-canvas-16x20?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/8487323/il_570xN.595589250_qnu6.jpg"
    }
  ],
  [
    {
      "title": "Custom Pet Portrait Pet Painting 9 x 12 your Pet any animal Art by Sharon Lamb",
      "price": "119.00",
      "url": "https://www.etsy.com/listing/29452726/custom-pet-portrait-pet-painting-9-x-12?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.85490189.jpg"
    },
    {
      "title": "WINTER  Landscape Painting Original Painting in Handmade Nature Spring Snow Fine  Art One of a Kind 27 x 35 in Large Size Unique Style",
      "price": "500.00",
      "url": "https://www.etsy.com/listing/187743826/winter-landscape-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/8178563/il_570xN.595566144_qc8v.jpg"
    }
  ],
  [
    {
      "title": "Flamenco Dancer in Red TEXTURED Art Oil Painting Original Unique Brushwork",
      "price": "195.00",
      "url": "https://www.etsy.com/listing/179141200/flamenco-dancer-in-red-textured-art-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/0/6754895/il_570xN.563384698_jcgo.jpg"
    },
    {
      "title": "Original Abstract painting - Orange Square - Acrylic painting - 31,5&quot; (80cm) x 31,5&quot; (80cm) Ronald Hunter",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/120967152/original-abstract-painting-orange-square?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/1/7442860/il_570xN.561348264_qlfp.jpg"
    }
  ],
  [
    {
      "title": "Contemporary Abstract Painting by Kim Bosco",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/172523377/contemporary-abstract-painting-by-kim?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/5587653/il_570xN.549049972_byj0.jpg"
    },
    {
      "title": "Blue Abstract underwater sea life lanscape painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187761043/blue-abstract-underwater-sea-life?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/8598934/il_570xN.595713325_gd0j.jpg"
    }
  ],
  [
    {
      "title": "ON SALE, 48x20 Inch, 3 piece set Large Canvas Art, Baby Blue, Trees, Light Blue, Wall Art, Original, painting, tree art, Large Paintings",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/187635375/on-sale-48x20-inch-3-piece-set-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/1/6934340/il_570xN.595129160_awai.jpg"
    },
    {
      "title": "Black and White Tree Painting Abstract Painting Modern Wall Art Deco Textured Art 48 x 24 Ready to Hang Free Shipping art by ilonka",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/178999157/black-and-white-tree-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/6627321/il_570xN.562830492_qk6e.jpg"
    }
  ],
  [
    {
      "title": "Spring SALE ORIGINAL Abstract Contemporary Fine Art Abstract  Painting modern 18 X 36 Inches  ------- Blue",
      "price": "185.80",
      "url": "https://www.etsy.com/listing/159053324/spring-sale-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/5693606/il_570xN.488290713_dl1e.jpg"
    },
    {
      "title": "40x40 green blue abstract painting large contemporary art palette knife Elena Petrova FREE shiping to Ca/US",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/183398582/40x40-green-blue-abstract-painting-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5802270/il_570xN.579267457_h19l.jpg"
    }
  ],
  [
    {
      "title": "LARGE ARTWORK Abstract painting Oversized Modern Art Original Contemporary Art Deco Palette KNIFE Oversize canvas large artwork Made2Order",
      "price": "298.00",
      "url": "https://www.etsy.com/listing/179568547/large-artwork-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/9100501/il_570xN.564969974_ee66.jpg"
    },
    {
      "title": "ORIGINAL Large Red Orange Flowers Painting 48&quot; x 24&quot; Modern Large, Flowers Painting, Flower Field, Modern Painting by Susie Tiborcz",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/180724011/original-large-red-orange-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/7885286/il_570xN.570704712_36sq.jpg"
    }
  ],
  [
    {
      "title": "Sudden blazes, swift fingers of the sea.",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/172594006/sudden-blazes-swift-fingers-of-the-sea?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/8904292/il_570xN.538954891_osth.jpg"
    },
    {
      "title": "36&quot; Art ORIGINAL painting oil Landscape painting on stretched canvas by Tatjana autumn trees oil palette knife texture painting FREE SHIPPIN",
      "price": "290.00",
      "url": "https://www.etsy.com/listing/186355147/36-art-original-painting-oil-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6718696/il_570xN.590098069_1904.jpg"
    }
  ],
  [
    {
      "title": "Modern Art Hand Painted Accent Wall Decor Exquisite Dream / by Jon Allen",
      "price": "155.00",
      "url": "https://www.etsy.com/listing/167222681/modern-art-hand-painted-accent-wall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/1/5133928/il_570xN.518262752_sgw4.jpg"
    },
    {
      "title": "Original Oil Painting on linen, &quot;There Was Nobody Else&quot;",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/115212310/original-oil-painting-on-linen-there-was?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/007/0/5219001/il_570xN.396085641_6swm.jpg"
    }
  ],
  [
    {
      "title": "CELESTIAL PAINTING  36&quot; Angelic mystical figures original limited edition giclee modern canvas print: The Celestial Beings by Carol Lee",
      "price": "475.00",
      "url": "https://www.etsy.com/listing/187557804/celestial-painting-36-angelic-mystical?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/1/5383721/il_570xN.594862474_7yd0.jpg"
    },
    {
      "title": "Coal Trees on a Hillock.",
      "price": "178.00",
      "url": "https://www.etsy.com/listing/172552307/coal-trees-on-a-hillock?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/8904292/il_570xN.538671350_g6ty.jpg"
    }
  ],
  [
    {
      "title": "XLarge Abstract painting,Original comtemporary Art,lots of texture Ready to hang  by Nicolette Vaughan Horner 48x24",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/186847725/xlarge-abstract-paintingoriginal?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/6316483/il_570xN.591877012_4a7e.jpg"
    },
    {
      "title": "Original Tree Painting Heavy Texture Impasto Palette Knife Landscape &quot;Red Leaves Tree&quot; By QIQIGALLERY",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/106108829/original-tree-painting-heavy-texture?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/001/0/5305356/il_570xN.362932560_4qcr.jpg"
    }
  ],
  [
    {
      "title": "Original large Abstract Painting 31,5&quot; x 31,5&quot; Large Painting &quot;Abstract worked structure&quot; , Abstract Paintings by Castano Artworks",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/170466184/original-large-abstract-painting-315-x?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/8015033/il_570xN.548139158_vq7a.jpg"
    },
    {
      "title": "Abstract Space Trip",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/187754397/abstract-space-trip?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/8913640/il_570xN.595685307_i8t7.jpg"
    }
  ],
  [
    {
      "title": "24x36&quot; FREE SHIPPING Large Original Acrylic Painting on Canvas - Abstract Woman",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/181769619/24x36-free-shipping-large-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/6844053/il_570xN.590036035_6a2d.jpg"
    },
    {
      "title": "GAIA  watercolor  ORIGINAL Earth Mother naturel - Free Shipping",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/187755078/gaia-watercolor-original-earth-mother?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/6069984/il_570xN.595711299_oifp.jpg"
    }
  ],
  [
    {
      "title": "Charr&#39;d",
      "price": "128.95",
      "url": "https://www.etsy.com/listing/187744556/charrd?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/9434920/il_570xN.595557310_hv1g.jpg"
    },
    {
      "title": "Abstract Painting Large Original Painting on Canvas Fluid Art Contemporary Wall Art Green & Brown Painting 36x24 by Heather Day",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/119615268/abstract-painting-large-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/0/6216479/il_570xN.412801740_cr6i.jpg"
    }
  ],
  [
    {
      "title": "Whort",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187742914/whort?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/9081172/il_570xN.595561918_3fgs.jpg"
    },
    {
      "title": "ORIGINAL Oil Painting Poppies Abstract Contemporary Oil Palette Knife Floral Texture  by Paula Nizamas 36&quot; x 24&quot;",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/78774352/original-oil-painting-poppies-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6425267/il_570xN.272243426.jpg"
    }
  ],
  [
    {
      "title": "48x48 abstract painting huge contemporary palette knife painting  xxl extra large Elena Petrova FREE shiping to Ca/US",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/181661829/48x48-abstract-painting-huge?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/5802270/il_570xN.572792433_b3dc.jpg"
    },
    {
      "title": "customized heart -- rustic contemporary faux wood fence original PAINTING art-- personalized with your names or initials",
      "price": "89.00",
      "url": "https://www.etsy.com/listing/184844582/customized-heart-rustic-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5515066/il_570xN.584579105_qve1.jpg"
    }
  ],
  [
    {
      "title": "Mid Century Modern Painting by Listed Oregon Artist Rick Norwood",
      "price": "235.00",
      "url": "https://www.etsy.com/listing/156970241/mid-century-modern-painting-by-listed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/6739871/il_570xN.480869131_a13f.jpg"
    },
    {
      "title": "11 x 14 Original Oil Painting Fine Art Impasto Texture Abstract Impressionist Landscape by Rebecca Croft",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/93442093/11-x-14-original-oil-painting-fine-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5722381/il_570xN.329047744.jpg"
    }
  ],
  [
    {
      "title": "Modern Abstract Art Bird Nature Bright Beak Coral Peach Turquoise Taupe 24 X 18 Brown Vibrant Original Happy Bold  &quot;A Little Birdie Told Me&quot;",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/119609604/modern-abstract-art-bird-nature-bright?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/011/1/6487396/il_570xN.412776421_b6ov.jpg"
    },
    {
      "title": "32x40&quot; FREE SHIPPING Extra Large Original Abstract Oil Painting On Stretched Canvas / Ready To Hang",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/129552727/32x40-free-shipping-extra-large-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/6844053/il_570xN.590306311_sbjj.jpg"
    }
  ],
  [
    {
      "title": "Susan Skelley Large Abstract Spring Colors Happy Pink Fuchsia Hot Pink Tangerine Lime Lavender Sweet Energetic Turquoise &quot;DOUBLE DIPPING&quot;",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/186773194/susan-skelley-large-abstract-spring?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/6487396/il_570xN.591613554_d2in.jpg"
    },
    {
      "title": "Custom Oil Portrait  16x16 - Wedding/Couple -  Hand Painted Oil Portrait from your Photo on Canvas",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/176834137/custom-oil-portrait-16x16-weddingcouple?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/9034210/il_570xN.577048285_74zi.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting. Original by Kerry Arndt. Free Shipping. Modern Art. Home Decor. Acrylic Painting. Art. 23 3/4 x 48 .Modern Painting.",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/186061216/abstract-painting-original-by-kerry?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/1/6226502/il_570xN.588951908_bxbz.jpg"
    },
    {
      "title": "RED BLUE ABSTRACT Art Contemporary Abstract Painting White Drip Art Huge Painting Acrylic Palette Knife Oversize canvas",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/179357112/red-blue-abstract-art-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/9100501/il_570xN.564300611_ervj.jpg"
    }
  ],
  [
    {
      "title": "Vintage Cerused  Frame with an Original Watercolor",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/184723699/vintage-cerused-frame-with-an-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/7300480/il_570xN.584038361_ad1l.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/155264929/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/6483189/il_570xN.474124086_l85h.jpg"
    }
  ],
  [
    {
      "title": "Beautiful VINTAGE Pastel PAINTING depicting a bouquet of roses signed baerchof 1946",
      "price": "210.00",
      "url": "https://www.etsy.com/listing/184172258/beautiful-vintage-pastel-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/8105239/il_570xN.581982576_oqfm.jpg"
    },
    {
      "title": "16/20 oil painting on canvas of a child in morning",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/187748562/1620-oil-painting-on-canvas-of-a-child?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/9441118/il_570xN.595584346_lhay.jpg"
    }
  ],
  [
    {
      "title": "Seascape Painting 50&quot; x 30&quot; Textured Original Contemporary Sailboats Abstract Acrylic Art by Osnat - MADE-TO-ORDER",
      "price": "630.00",
      "url": "https://www.etsy.com/listing/162255447/seascape-painting-50-x-30-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/0/6571804/il_570xN.499968450_rshm.jpg"
    },
    {
      "title": "Abstract Painting Original Art Brown Burgundy Earthtones Abstract Art Contemporary Art Modern Acrylic Painting on Canvas",
      "price": "160.00",
      "url": "https://www.etsy.com/listing/69896586/abstract-painting-original-art-brown?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5132283/il_570xN.226553864.jpg"
    }
  ],
  [
    {
      "title": "Private Listing For Mike",
      "price": "258.57",
      "url": "https://www.etsy.com/listing/127889416/private-listing-for-mike?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/5407450/il_570xN.586300408_5wh8.jpg"
    },
    {
      "title": "original oil painting Violet Pond  modern impasto knife moon landscape  blue,  violet,  yellow , green and white  Vadal 20 x 16",
      "price": "101.25",
      "url": "https://www.etsy.com/listing/186708214/original-oil-painting-violet-pond-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/5198223/il_570xN.594754717_ph2v.jpg"
    }
  ],
  [
    {
      "title": "Lithosphere 86 - Commission - LARGE 48x60 Inches -  Original Abstract Painting, Acrylic on Canvas",
      "price": "995.00",
      "url": "https://www.etsy.com/listing/130320560/lithosphere-86-commission-large-48x60?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/013/0/5221720/il_570xN.452354024_rrh1.jpg"
    },
    {
      "title": "Cheetah - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187750415/cheetah-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/9088156/il_570xN.595673617_qguf.jpg"
    }
  ],
  [
    {
      "title": "48x34 abstract original painting palette knife floral large contemporary art Elena Petrova FREE shiping to Ca/US",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/185445742/48x34-abstract-original-painting-palette?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/5802270/il_570xN.586670672_ncju.jpg"
    },
    {
      "title": "16 x12 inch, Original Watercolor Painting, Series &quot;Magenta&quot; 8, Abstract Painting,  Magenta , White",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/163703872/16-x12-inch-original-watercolor-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/7609502/il_570xN.565581805_1dft.jpg"
    }
  ],
  [
    {
      "title": "Spaniel art cocker and naughty springer spaniel watercolour,acrylic and ink, original signed unique art. Colourful,. Signed by the artist.",
      "price": "48.00",
      "url": "https://www.etsy.com/listing/187758409/spaniel-art-cocker-and-naughty-springer?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/9418039/il_570xN.595596352_oc5e.jpg"
    },
    {
      "title": "Floral painting 183 Gladiola 24x36 inch original still life oil painting by Roz",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/127855148/floral-painting-183-gladiola-24x36-inch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/009/0/5227653/il_570xN.445177153_qnw8.jpg"
    }
  ],
  [
    {
      "title": "SOLD Bob Dylan.",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/173317353/sold-bob-dylan?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/8904292/il_570xN.541541705_lssv.jpg"
    },
    {
      "title": "Two Little Boys Going Fishing Original Oil Painting boys room fishing paintings two brothers two boys",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/164523464/two-little-boys-going-fishing-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5701942/il_570xN.508366115_1rkz.jpg"
    }
  ],
  [
    {
      "title": "Birch Trees Original  Gallery Canvas Painting Landscape Palette Knife,Fall Colors by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/162731103/birch-trees-original-gallery-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/6316483/il_570xN.501686151_cn9c.jpg"
    },
    {
      "title": "Batik Watercolor Old Window and Flowers by Colorado Artist Martha Kisling",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/75760684/batik-watercolor-old-window-and-flowers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6002802/il_570xN.250257661.jpg"
    }
  ],
  [
    {
      "title": "Art Abstract Painting Original Expressionist Bright Bold Large Contemporary Acrylic Painting on Canvas by Linda Monfort",
      "price": "240.00",
      "url": "https://www.etsy.com/listing/179415720/art-abstract-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/0/5132283/il_570xN.564424000_qzob.jpg"
    },
    {
      "title": "Modern Painting Peacock Oil Painting Textured Palette Knife Contemporary Original Animal Art 16X20 by Willson Lau",
      "price": "205.00",
      "url": "https://www.etsy.com/listing/129646499/modern-painting-peacock-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/5979267/il_570xN.583671325_1e7n.jpg"
    }
  ],
  [
    {
      "title": "Playful Deception",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/187715485/playful-deception?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/9439792/il_570xN.595435486_spj6.jpg"
    },
    {
      "title": "Motor Cross Pastel on Paper signed",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/107693854/motor-cross-pastel-on-paper-signed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/007/0/5830089/il_570xN.368675149_ntzd.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Abstract Painting Heavy Texture Impasto Acrylic Painting gold, bronze, copper, by Carola, 9 piece 12&quot;x12&quot; FREE SHIPPING",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/178507643/original-modern-abstract-painting-heavy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/018/0/6508330/il_570xN.561044571_56iv.jpg"
    },
    {
      "title": "Personalized St. Louis Cardinals Baseball Chalkboard Scoreboard",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/165093161/personalized-st-louis-cardinals-baseball?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/6774580/il_570xN.510392258_5end.jpg"
    }
  ],
  [
    {
      "title": "Original TEXTURED Painting Modern Art Abstract Painting in White Amber Gold Deep Turquoise Red and Violet Purple - by Marie - 12x12",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/165621847/original-textured-painting-modern-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5367316/il_570xN.582029958_ifsb.jpg"
    },
    {
      "title": "Cow painting animals 808  30x30 inch original portrait oil painting by Roz",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/187322646/cow-painting-animals-808-30x30-inch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/5227653/il_570xN.594026824_nbim.jpg"
    }
  ],
  [
    {
      "title": "Large Contemporary Turquoise Brown Abstract Painting, Modern Art on Canvas by Osnat - MADE-TO-ORDER - 60&quot;x36&quot;",
      "price": "699.00",
      "url": "https://www.etsy.com/listing/162577349/large-contemporary-turquoise-brown?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/6571804/il_570xN.501179873_k145.jpg"
    },
    {
      "title": "Red Green Yellow Textured Original Abstract Art Painting Modern Colorful Bright Black 11X14 Pink Witty Lively Vivid Bold &quot;WHAT IN TARNATION&quot;",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/164774026/red-green-yellow-textured-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/6487396/il_570xN.509305793_ebfh.jpg"
    }
  ],
  [
    {
      "title": "Custom Painting 30x30 - Kid/Baby -  Hand Painted Oil Portrait from your Photo on Canvas",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/176615274/custom-painting-30x30-kidbaby-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/9034210/il_570xN.577074919_l9kd.jpg"
    },
    {
      "title": "Paris Doodle Original Wall Art Painting for Girls Room Bedding 48 x 24 Large French Theme Eiffel Tower Pink Nursery",
      "price": "190.00",
      "url": "https://www.etsy.com/listing/168887078/paris-doodle-original-wall-art-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/6491008/il_570xN.524572145_pb0c.jpg"
    }
  ],
  [
    {
      "title": "Heart of Color Large 30 x 36 Original Purple Pink Painting for Girl Teen or Tween Room",
      "price": "190.00",
      "url": "https://www.etsy.com/listing/116382653/heart-of-color-large-30-x-36-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/005/0/6491008/il_570xN.400900627_oapi.jpg"
    },
    {
      "title": "ORIGINAL Painting &quot;Resting&quot; Oil on Stretched Canvas Still Life",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/187749526/original-painting-resting-oil-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/025/0/9275697/il_570xN.595587600_l1bc.jpg"
    }
  ],
  [
    {
      "title": "LARGE Painting LAVA Red LARGE Modern Artwork Abstract paintings Oil Original Art Original Oversize canvas Ready to Hang by Maitreyii",
      "price": "750.00",
      "url": "https://www.etsy.com/listing/185825115/large-painting-lava-red-large-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/9100501/il_570xN.587282241_rq8p.jpg"
    },
    {
      "title": "He Wears It 001 - Darth Vader wears BAND OF OUTSIDERS",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/61499304/he-wears-it-001-darth-vader-wears-band?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5928260/il_570xN.191797658.jpg"
    }
  ],
  [
    {
      "title": "Original art  Surreal painting, large palette knife Impasto texture abstract oil painting by Tim Lam 48x24",
      "price": "358.00",
      "url": "https://www.etsy.com/listing/158730237/original-art-surreal-painting-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/5905408/il_570xN.487104417_sij7.jpg"
    },
    {
      "title": "Mother&#39;s Day gift,Custom Tree Canvas Print -- Personalized Family Tree with love birds and babies -- 14x14  -- Heart -- Gallery Wrapped",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/178632933/mothers-day-giftcustom-tree-canvas-print?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/1/6012891/il_570xN.561473726_37gd.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Fine Modern Textured Art Blossom Tree Painting Lavender Landscape Home Decor 20&quot; Abstract Palette Knife Artwork, unique gift",
      "price": "215.00",
      "url": "https://www.etsy.com/listing/150339749/original-fine-modern-textured-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/0/7053533/il_570xN.504317808_1ju5.jpg"
    },
    {
      "title": "Red Roses, Original Oil Painting Portrait,  Tuscany Scene, Italy Scene,  small Painting, framed,  Gift item, Impressionist Style, Romantic",
      "price": "110.00",
      "url": "https://www.etsy.com/listing/160725619/red-roses-original-oil-painting-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/5945857/il_570xN.494399527_ilwl.jpg"
    }
  ],
  [
    {
      "title": "Original XL 48&quot; Abstract Painting Multi Shades,textured,Ready to Hang Gallery Canvas Contemporary Absract Fine Art Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/181887416/original-xl-48-abstract-painting-multi?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/6316483/il_570xN.573659103_2nim.jpg"
    },
    {
      "title": "Tiger - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187745730/tiger-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/9088156/il_570xN.595678561_950f.jpg"
    }
  ],
  [
    {
      "title": "HUGE Tree Branch Painting Modern Abstract Original Art Large Chocolate Espresso Brown and Black Custom Six Canvases 60x36",
      "price": "465.00",
      "url": "https://www.etsy.com/listing/75713521/huge-tree-branch-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5341227/il_570xN.250098567.jpg"
    },
    {
      "title": "About To Leap - Canvas Original Matted 16x20 Hand Embellished Painting-Print by Fae Factory Fantasy Artist Dr Franky Dolan (Wall Art Print)",
      "price": "94.00",
      "url": "https://www.etsy.com/listing/72518546/about-to-leap-canvas-original-matted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/003/0/5896124/il_570xN.352631765_zq7r.jpg"
    }
  ],
  [
    {
      "title": "RAIN PASSES, oil landscape painting original 100% charity donation, 9X12 canvas  panel, clouds, beach, shore",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/184654240/rain-passes-oil-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/5264470/il_570xN.583768462_4v6h.jpg"
    },
    {
      "title": "FREE SHIPPING- Original Oil Painting- Happiness- Abstract- Modern, Contemporary 24x36",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/168055046/free-shipping-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/5743379/il_570xN.521436492_8pqq.jpg"
    }
  ],
  [
    {
      "title": "wave painting original art japanese wave painting original landscape painting, wave, acrylic on canvas, framed,  titled Wave Series II",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/64809618/wave-painting-original-art-japanese-wave?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5832442/il_570xN.203831233.jpg"
    },
    {
      "title": "The Mouth of the Columbia River in Astoria Oregon",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/104715915/the-mouth-of-the-columbia-river-in?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/0/6226737/il_570xN.357701264_t01p.jpg"
    }
  ],
  [
    {
      "title": "folk art painting landscape abstract red yellow blue sky landscape tree painting 56 X 22 Mattsart",
      "price": "449.00",
      "url": "https://www.etsy.com/listing/178757487/folk-art-painting-landscape-abstract-red?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/5442890/il_570xN.595633329_o50k.jpg"
    },
    {
      "title": "Original Modern Impressionist Trees Landscape Romance OIL Painting ROMANTIC EVENING by Luiza Vizoli custom",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/105576349/original-modern-impressionist-trees?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5440875/il_570xN.365186662.jpg"
    }
  ],
  [
    {
      "title": "Reserved for Kelli Payment 2 of 4",
      "price": "86.00",
      "url": "https://www.etsy.com/listing/187754278/reserved-for-kelli-payment-2-of-4?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5554021/il_570xN.585438265_pid5.jpg"
    },
    {
      "title": "Original Large Abstract Art Painting by CGUEDEZ. Contemporary Heavy Texture Landscape Trees. The Greatest Day. FREE SHIPPING!",
      "price": "399.00",
      "url": "https://www.etsy.com/listing/100168211/original-large-abstract-art-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/6921897/il_570xN.585847772_ic4y.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting Original Multicolored Impasto Acrylic Painting Canvas art &quot;Rainbow color Abstract&quot; by qiqigallery",
      "price": "275.00",
      "url": "https://www.etsy.com/listing/186862891/abstract-painting-original-multicolored?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/5305356/il_570xN.592036353_e9a9.jpg"
    },
    {
      "title": "Landscape Abstract Art Small Original Yellow 11 X 14 Cobalt Blue Moss Green Red Olive Green Rocky Intriguing Western &quot;MUSCLE AND HORSEPOWER&quot;",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/162942455/landscape-abstract-art-small-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/6487396/il_570xN.502454788_q0cq.jpg"
    }
  ],
  [
    {
      "title": "24x48&quot; FREE SHIPPING Extra Large Original Unique Abstract Modern Oil Portrait Painting Ready to Hang - Identity VI",
      "price": "399.00",
      "url": "https://www.etsy.com/listing/114072730/24x48-free-shipping-extra-large-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/017/0/6844053/il_570xN.493181248_mb5c.jpg"
    },
    {
      "title": "Gold Love Birds Painting, Original LARGE Canvas 36x12, Loving, Romantic, Wedding Gift, Flowers Tree Landscape, ready to hung, Metal Fine Art",
      "price": "139.00",
      "url": "https://www.etsy.com/listing/98989615/gold-love-birds-painting-original-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6321590/il_570xN.334046544.jpg"
    }
  ],
  [
    {
      "title": "Custom Oil Portrait",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/66620135/custom-oil-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/1/5202724/il_570xN.211083624.jpg"
    },
    {
      "title": "Yellow Rose",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/99819899/yellow-rose?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/002/0/6910263/il_570xN.352744402_2eza.jpg"
    }
  ],
  [
    {
      "title": "Star Wars PRINCESS LEIA Acrylic Painting (Hand Painted on Canvas)",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/184666066/star-wars-princess-leia-acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/6278593/il_570xN.595549912_qoew.jpg"
    },
    {
      "title": "custom  original PAINTING large abstract modern contemporary textured fine art by Shanna - row of elephants",
      "price": "355.00",
      "url": "https://www.etsy.com/listing/61179032/custom-original-painting-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5515066/il_570xN.203095912.jpg"
    }
  ],
  [
    {
      "title": "Original  abstract contemporary  gallery canvas  impasto  palette knife floral painting RED POPPIES  by Nicolette Vaughan Horner",
      "price": "199.99",
      "url": "https://www.etsy.com/listing/187112450/original-abstract-contemporary-gallery?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6316483/il_570xN.593118497_kg16.jpg"
    },
    {
      "title": "Art Original abstract Painting modern landscape painting  blue art painting large landscape painting 24 X 36",
      "price": "249.13",
      "url": "https://www.etsy.com/listing/187236477/art-original-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5693606/il_570xN.593550638_5ul0.jpg"
    }
  ],
  [
    {
      "title": "18 x 24 Abstract acrylic painting &quot;Fall Rain&quot;",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/173882923/18-x-24-abstract-acrylic-painting-fall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/8662523/il_570xN.543808845_f6j1.jpg"
    },
    {
      "title": "Mississippi state map cotton boll land of cotton painting",
      "price": "395.00",
      "url": "https://www.etsy.com/listing/182054553/mississippi-state-map-cotton-boll-land?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/5883441/il_570xN.574132500_8sic.jpg"
    }
  ],
  [
    {
      "title": "Huge 36x48 Canvas. Original Abstract Painting. Modern Art.  Title&quot;Orion&#39;s Belt&quot; by R Schoeffel",
      "price": "625.00",
      "url": "https://www.etsy.com/listing/183912060/huge-36x48-canvas-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/5846229/il_570xN.581061322_j8f5.jpg"
    },
    {
      "title": "Custom Pet Portrait 10x10 - Hand Painted Oil Portrait from your Photo on Canvas",
      "price": "104.00",
      "url": "https://www.etsy.com/listing/176944312/custom-pet-portrait-10x10-hand-painted?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/9034210/il_570xN.560639620_g0wq.jpg"
    }
  ],
  [
    {
      "title": "European school floral peony oil painting.",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/187738186/european-school-floral-peony-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/9444863/il_570xN.595545500_1m1a.jpg"
    },
    {
      "title": "White Lilacs",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/187747603/white-lilacs?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/033/0/5430461/il_570xN.595560816_9e5b.jpg"
    }
  ],
  [
    {
      "title": "We Can Do Hard Things Distressed Sign in Black with White Vintage Style",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/62336793/we-can-do-hard-things-distressed-sign-in?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/5747617/il_570xN.563682186_k8i6.jpg"
    },
    {
      "title": "Wonderhorse 1 - hand painted vintage bouncy horse toy",
      "price": "700.00",
      "url": "https://www.etsy.com/listing/187751327/wonderhorse-1-hand-painted-vintage?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/5144628/il_570xN.595672159_mmpl.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Abstract Contemporary  Red Umbrella Oil Painting Heavy Palette Knife Texture by Paula Ready to Hang 48&quot;",
      "price": "420.00",
      "url": "https://www.etsy.com/listing/162184049/original-abstract-contemporary-red?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/6425267/il_570xN.499779205_1xfj.jpg"
    },
    {
      "title": "ABSTRACT painting, Giclee, Fine Art Print, white painting, black, navy, modern painting,",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/187679728/abstract-painting-giclee-fine-art-print?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/1/6406241/il_570xN.595420677_bvig.jpg"
    }
  ],
  [
    {
      "title": "RISING-------Original Abstract Painting by Justin Strom Large 36 x 24 Deep Gallery Canvas",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/65307871/rising-original-abstract-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5793563/il_570xN.205779154.jpg"
    },
    {
      "title": "Acrylic Painting - ABSTRACT Paintings on canvas Fuchsia Gold 64 Inch HUGE Modern Original Wall Art By Orit Baron",
      "price": "285.00",
      "url": "https://www.etsy.com/listing/113066985/acrylic-painting-abstract-paintings-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/001/0/6321590/il_570xN.388221997_hdzw.jpg"
    }
  ],
  [
    {
      "title": "CUSTOM Antique Days - HUGE 36 x 24, Heavy Textured Acrylic Painting Art on canvas, Wall Art Decor, ORIGINAL",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/69752605/custom-antique-days-huge-36-x-24-heavy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5515066/il_570xN.225950633.jpg"
    },
    {
      "title": "Modern Handpainted Acrylic  Impasto textured Red  Tree Painting size 36 x24. MADE2ORDER.",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/179204832/modern-handpainted-acrylic-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/6808201/il_570xN.563744759_hcua.jpg"
    }
  ],
  [
    {
      "title": "Still Life Painting, Original Impasto Grapes Painting, Set of 2 Canvas, Multiple Panels Miniature Paintings, Kitchen Wall Decor",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/164742703/still-life-painting-original-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/7994975/il_570xN.509089188_e9vz.jpg"
    },
    {
      "title": "FREE SHIPPING....Original Painting.Palette Knife.Impasto.Modern Blooming Daisies.Flower Painting.Sculptured Frame  36&quot; .. - by Nata S",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/129136039/free-shippingoriginal-paintingpalette?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/6410880/il_570xN.551894685_t1lt.jpg"
    }
  ],
  [
    {
      "title": "Original abstract Oil  contemporary  gallery canvas  palette knife floral impasto Purple Floral painting by Nicolette Vaughan Horner 20 x 20",
      "price": "179.99",
      "url": "https://www.etsy.com/listing/187425003/original-abstract-oil-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/6316483/il_570xN.562004183_7vqt.jpg"
    },
    {
      "title": "Color Garden 2 by Hilary Winfield - 30x30 Inch Original Modern Art Painting, Acrylic on Canvas, Contemporary Art",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/176731946/color-garden-2-by-hilary-winfield-30x30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/5221720/il_570xN.554457872_cnrk.jpg"
    }
  ],
  [
    {
      "title": "Abstract  Acrylic Very Large  22 X 28 Painting",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/51088253/abstract-acrylic-very-large-22-x-28?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5729213/il_570xN.157059520.jpg"
    },
    {
      "title": "Spring SALE Art original Abstract painting TODAY show  JMJARTSTUDIO Original Braille Painting 18 X 24 inches Hope",
      "price": "97.20",
      "url": "https://www.etsy.com/listing/109406793/spring-sale-art-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5693606/il_570xN.326041423.jpg"
    }
  ],
  [
    {
      "title": "white colorful Abstract painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187755498/white-colorful-abstract-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/8598934/il_570xN.595610174_2rnu.jpg"
    },
    {
      "title": "Come Into My World Original Oil on Canvas : Sheralee Paulsen",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/187761045/come-into-my-world-original-oil-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/9240816/il_570xN.595713167_ks5a.jpg"
    }
  ],
  [
    {
      "title": "Black and White Abstract Painting 22x30",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/186175236/black-and-white-abstract-painting-22x30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6442420/il_570xN.589478045_s3ji.jpg"
    },
    {
      "title": "Pastel Shabby Chic Original Painting on Canvas Titled: Sweet Breeze 24x48x1.5&quot; by Ora Birenbaum",
      "price": "385.00",
      "url": "https://www.etsy.com/listing/187522181/pastel-shabby-chic-original-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/6552479/il_570xN.594811425_j71j.jpg"
    }
  ],
  [
    {
      "title": "Contessa with Squid (extra large print) fantasy art octopus woman",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/115109028/contessa-with-squid-extra-large-print?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5633647/il_570xN.263158482.jpg"
    },
    {
      "title": "Sazio&#39;s",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/39924353/sazios?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5778632/il_570xN.120771596.jpg"
    }
  ],
  [
    {
      "title": "31.49&quot;x 31.49&quot; inches Includes Free Shipping (80x80cm) acrylic painting ready to hang - Abstract painting from Carlos Pun",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/173126915/3149x-3149-inches-includes-free-shipping?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/7936092/il_570xN.540768284_s5r5.jpg"
    },
    {
      "title": "Playful Springtime 2nd Set - 4 Original Abstract Expressionism Painting - Wall Art Original Abstract Painting 1996.1997.1998.1999.03311414",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/185405950/playful-springtime-2nd-set-4-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/7506038/il_570xN.586514744_pvw5.jpg"
    }
  ],
  [
    {
      "title": "Light Pink Flower Painting - Abstract Acrylic - Sculptural Impasto, Pearlescent Pink, White -20&quot; Round High Quality Original Modern Fine Art",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/164407676/light-pink-flower-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/1/6369903/il_570xN.507898452_sxm3.jpg"
    },
    {
      "title": "Huge Original Contemporary Modern Abstract Fine Art Textured Painting of  The Four Seasons 48&quot;x24&quot; 3/4&quot;deep",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/50640718/huge-original-contemporary-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5496422/il_570xN.155447277.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract painting - Red and Grey Blocked - Acrylic painting - 35,4&quot; x 35,4&quot; - Free shipping",
      "price": "339.00",
      "url": "https://www.etsy.com/listing/172945084/original-abstract-painting-red-and-grey?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/1/7442860/il_570xN.540233385_95in.jpg"
    },
    {
      "title": "Charge In My Line, Personalized Firefighter Subway Art",
      "price": "120.00",
      "url": "https://www.etsy.com/listing/155365625/charge-in-my-line-personalized?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/1/5782891/il_570xN.481679910_qsur.jpg"
    }
  ],
  [
    {
      "title": "Floral painting 201 Thistle 18x24 inch original still life oil painting by Roz",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/182357056/floral-painting-201-thistle-18x24-inch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5227653/il_570xN.575418005_nbk6.jpg"
    },
    {
      "title": "Absolut Bolero",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/94386153/absolut-bolero?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5778632/il_570xN.317069967.jpg"
    }
  ],
  [
    {
      "title": "Abstract Leo Goddess, Original Painting",
      "price": "170.00",
      "url": "https://www.etsy.com/listing/187742718/abstract-leo-goddess-original-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/1/8913640/il_570xN.595667191_m0xt.jpg"
    },
    {
      "title": "BIRCH Tree Painting ORIGINAL Birch Forest Red Yellow Brown White - 48x24 - Original Paintings by BenWill",
      "price": "320.00",
      "url": "https://www.etsy.com/listing/98803566/birch-tree-painting-original-birch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/5138986/il_570xN.455955529_f29b.jpg"
    }
  ],
  [
    {
      "title": "Large 39&quot; Abstract Painting on paper. Original Art 39x26 acrylic. Colorful red teal red yellow pink. Contemporary art. Landscape painting.",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/180866974/large-39-abstract-painting-on-paper?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/1/6385631/il_570xN.569795692_ph2v.jpg"
    },
    {
      "title": "conch",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/187745846/conch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/9400949/il_570xN.595575568_es8v.jpg"
    }
  ],
  [
    {
      "title": "Red Cello",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/49282528/red-cello?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5778632/il_570xN.150915433.jpg"
    },
    {
      "title": "Custom Pet Painting Two Pets 9x12 Gift Certificates Available",
      "price": "139.00",
      "url": "https://www.etsy.com/listing/167805337/custom-pet-painting-two-pets-9x12-gift?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/5151925/il_570xN.520535163_779o.jpg"
    }
  ],
  [
    {
      "title": "Dusk Arriving, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172907254/dusk-arriving-landscape-paintings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/8912045/il_570xN.540083665_k3iy.jpg"
    },
    {
      "title": "Swing painting 125 18x24 inch portrait original oil painting by Roz",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/171706362/swing-painting-125-18x24-inch-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/5227653/il_570xN.535734583_gfoa.jpg"
    }
  ],
  [
    {
      "title": "Red colorful Abstract painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187761405/red-colorful-abstract-painting-on-paper?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/8598934/il_570xN.595714743_bo3e.jpg"
    },
    {
      "title": "Original Large 36x72 Inch Triptych Painting, Contemporary Landscape, Title: Sunrise 10",
      "price": "575.00",
      "url": "https://www.etsy.com/listing/123830770/original-large-36x72-inch-triptych?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/5221720/il_570xN.478507822_r2vt.jpg"
    }
  ],
  [
    {
      "title": "You are my sunshine collaged words",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/185604067/you-are-my-sunshine-collaged-words?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/5242076/il_570xN.587201660_68jw.jpg"
    },
    {
      "title": "Wave Art Landscape Painting Original Acrylic Painting blue sky n sea beach by tim Lam 48x24",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/179390946/wave-art-landscape-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/5179610/il_570xN.564327966_s7ku.jpg"
    }
  ],
  [
    {
      "title": "Blue Abstract underwater sea life lanscape painting on paper",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187760935/blue-abstract-underwater-sea-life?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/8598934/il_570xN.595712917_gxab.jpg"
    },
    {
      "title": "Silver Modern Painting Triptych Cherry Blossom Art Pink and White FLowers Asian Zen Tree Art Custom 48x20",
      "price": "215.00",
      "url": "https://www.etsy.com/listing/58956681/silver-modern-painting-triptych-cherry?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5341227/il_570xN.183275760.jpg"
    }
  ],
  [
    {
      "title": "Girl With a Straw Hat: Original Oil Painting",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/111563276/girl-with-a-straw-hat-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/1/5219001/il_570xN.594107635_mdcs.jpg"
    },
    {
      "title": "Art 24 X 36 Original Abstract Black Blue Extreme Texture Tan Gold Gray Drips White Water Spiritual Captivating Sea Moving &quot;FROM THE TOP&quot;",
      "price": "240.00",
      "url": "https://www.etsy.com/listing/153315281/art-24-x-36-original-abstract-black-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/6487396/il_570xN.483792309_f5cp.jpg"
    }
  ],
  [
    {
      "title": "Original Surreal art tree painting, large palette knife Impasto texture abstract oil painting by Tim Lam 48x24",
      "price": "368.00",
      "url": "https://www.etsy.com/listing/169557962/original-surreal-art-tree-painting-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5905408/il_570xN.527000405_jj0s.jpg"
    },
    {
      "title": "Dum Vivimus, Vivamus - 8x10 Woman with a Skull and Bowl of Berries in front of a Painting of the Virgin Mary an a Curtain of Lilies",
      "price": "130.00",
      "url": "https://www.etsy.com/listing/187754361/dum-vivimus-vivamus-8x10-woman-with-a?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/7933594/il_570xN.595581740_7r0k.jpg"
    }
  ],
  [
    {
      "title": "72x30 large abstract painting large wall art  xxl FREE shipping to CA/US  palette knife by Elena Petrova",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/185791733/72x30-large-abstract-painting-large-wall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/5802270/il_570xN.587891666_hobp.jpg"
    },
    {
      "title": "triptych huge wall art  wall hanging &quot;Big Blue&quot; 48 x 20 &quot; huge canvas art 3 panel wall art three panel wall decor home decor",
      "price": "139.00",
      "url": "https://www.etsy.com/listing/78998369/triptych-huge-wall-art-wall-hanging-big?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/5770030/il_570xN.593319581_gs7k.jpg"
    }
  ],
  [
    {
      "title": "SOLD Cityscape",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/172547281/sold-cityscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/8904292/il_570xN.538652962_g9h4.jpg"
    },
    {
      "title": "Fine Art Oil Painting on Canvas TEXTURED Original Painting Hand Painted Wall Decor",
      "price": "195.00",
      "url": "https://www.etsy.com/listing/158382483/fine-art-oil-painting-on-canvas-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/1/6754895/il_570xN.592522672_na1h.jpg"
    }
  ],
  [
    {
      "title": "El cantor de la Luna.",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/187761261/el-cantor-de-la-luna?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/8904292/il_570xN.595713309_1ml8.jpg"
    },
    {
      "title": "Large 39&quot; Abstract Painting on paper Original Art 39x26 acrylic blue turquoise grey ocean neon nautical sea contemporary art",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/161270160/large-39-abstract-painting-on-paper?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/1/6385631/il_570xN.496396958_ghap.jpg"
    }
  ],
  [
    {
      "title": "Original Floral Painting Abstract Art Fauve Impressionist Still Life Roses Landscape Acrylic Painting on Canvas Linda Monfort",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/154396321/original-floral-painting-abstract-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/004/0/5132283/il_570xN.471346242_59l7.jpg"
    },
    {
      "title": "Alley Oil Painting, Palette Knife Fall Landscape, Landscape, Impressionist Autumn Alley Oil Painting, Fall Painting, Wall Decor",
      "price": "185.00",
      "url": "https://www.etsy.com/listing/170600957/alley-oil-painting-palette-knife-fall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/1/7994975/il_570xN.530796545_ipha.jpg"
    }
  ],
  [
    {
      "title": "MODERN LANDSCAPE PAINTING, Modern art, Original modern wall art, from Nandita Albright",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/163927557/modern-landscape-painting-modern-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/8187066/il_570xN.506130583_taa8.jpg"
    },
    {
      "title": "PARIS LETTERS: 12 month subscription",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/90769379/paris-letters-12-month-subscription?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/1/5807359/il_570xN.582362546_7lno.jpg"
    }
  ],
  [
    {
      "title": "Green Blue Seascape Painting Original Art -Lakeview Soft Green 16 x 16",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/152651852/green-blue-seascape-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/009/0/5851455/il_570xN.464525441_5qlf.jpg"
    },
    {
      "title": "Night Lamps.",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/185574029/night-lamps?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/9239049/il_570xN.587094530_3u9z.jpg"
    }
  ],
  [
    {
      "title": "Made2order ORIGINAL HUGE Landscape Abstract  Pink Cherry Blossoms Oil Painting Thick Texture Gallery Fine Art -Nicolette Vaughan Horner",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/130677454/made2order-original-huge-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/6316483/il_570xN.424816810_r8l3.jpg"
    },
    {
      "title": "Print of figurative classical female nude Smokin oil painting by Kim Dow 16x24",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/34572106/print-of-figurative-classical-female?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/023/0/5238694/il_570xN.502802620_i7ln.jpg"
    }
  ],
  [
    {
      "title": "Flower Floral Painting Garden Abstract Painting Pink, Red, Green, Purple, Blue Impressionistic 5 x 7 inches Acrylic on Canvas Board",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/186189346/flower-floral-painting-garden-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/5695716/il_570xN.589560919_pvgr.jpg"
    },
    {
      "title": "ORIGINAL Trees Painting, 48&quot;x24&quot; Rainforest, Trees, Spring, Summer Absract Landscape, Green Forest painting by Susie Tiborcz",
      "price": "225.00",
      "url": "https://www.etsy.com/listing/186338078/original-trees-painting-48x24-rainforest?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/7885286/il_570xN.590342833_9wg0.jpg"
    }
  ],
  [
    {
      "title": "Weathered, Landscape Paintings, Acrylic Paintings, Paintings in Acrylics, Canvas Panel",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/172920443/weathered-landscape-paintings-acrylic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/8912045/il_570xN.540084457_efb8.jpg"
    },
    {
      "title": "Abstract Acrylic painting on canvas,acrylic,modern,Large Painting,fine art,modern,art,paintings,wall art,,canvas,tkafka,kafka, Spring 1014",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/182431257/abstract-acrylic-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/0/5774375/il_570xN.575544428_6cst.jpg"
    }
  ],
  [
    {
      "title": "Custom Portrait Oil Painting from your Photo - Perfect Gift  - 8x10",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/153674960/custom-portrait-oil-painting-from-your?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/012/0/6449293/il_570xN.468276406_sowy.jpg"
    },
    {
      "title": "abstract painting Contemporary oil painting Violet Blooming Tree landscape painting Heavy Palette Knife Texture.",
      "price": "485.00",
      "url": "https://www.etsy.com/listing/187751606/abstract-painting-contemporary-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/6606878/il_570xN.595697715_9ah0.jpg"
    }
  ],
  [
    {
      "title": "Hazardous",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/160668127/hazardous?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/1/5890224/il_570xN.494172265_jigq.jpg"
    },
    {
      "title": "Abstract Painting 32&quot; Rain Cloud  , Original oil painitng , Modern painting , wall decor , Canvas painitng  , by Koby Feldmos",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/186936234/abstract-painting-32-rain-cloud-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/1/9019569/il_570xN.592432539_5wc1.jpg"
    }
  ],
  [
    {
      "title": "LANDSCAPE PAINTINGS 48&quot; Large Painting ABSTRACT Spring Season Original Paintings Acrylic Landscape Art canvas large artwork Ready to Hang",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/187750605/landscape-paintings-48-large-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/9100501/il_570xN.595572060_k0cj.jpg"
    },
    {
      "title": "The Man in the Bottle",
      "price": "180.00",
      "url": "https://www.etsy.com/listing/167261528/the-man-in-the-bottle?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/5507241/il_570xN.518446472_7hkv.jpg"
    }
  ],
  [
    {
      "title": "Orange Blossom Tree / Textured Painting / Impasto / Canvas Art 16x20 / Home or Office Decor",
      "price": "70.00",
      "url": "https://www.etsy.com/listing/187744374/orange-blossom-tree-textured-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/2/7593312/il_570xN.595566898_ip5k.jpg"
    },
    {
      "title": "Painting abstract, nu, original, signed, New York artist Irenna Souverain,",
      "price": "289.00",
      "url": "https://www.etsy.com/listing/187755571/painting-abstract-nu-original-signed-new?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/9439700/il_570xN.595690339_p0nl.jpg"
    }
  ],
  [
    {
      "title": "Spring SALE art  original painting   Jmjartstudio Original Painting 48 X 24 Inches  -yellow------grey---Ready to Hang --Textured----",
      "price": "309.10",
      "url": "https://www.etsy.com/listing/179899601/spring-sale-art-original-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/028/0/5693606/il_570xN.566209414_axcg.jpg"
    },
    {
      "title": "30&quot; Modern Wall art,  Large, Modern, Abstract , Earth tone art, Modern Abstract Contemporary  Large Pallete Knife Art Painting",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/162892299/30-modern-wall-art-large-modern-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/8128111/il_570xN.502340309_izfy.jpg"
    }
  ],
  [
    {
      "title": "CUSTOM Art Abstract Painting White Cherry Tree Blossoms Flowers Textured Palette Knife Decor Blue Brown Gold MADE to ORDER 48x24&quot; -Christine",
      "price": "345.00",
      "url": "https://www.etsy.com/listing/186231646/custom-art-abstract-painting-white?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/6249353/il_570xN.584841051_3syi.jpg"
    },
    {
      "title": "Custom Oil Portrait from your Photo -  Hand Painted Oil Portrait on Canvas 16x20",
      "price": "209.00",
      "url": "https://www.etsy.com/listing/176621445/custom-oil-portrait-from-your-photo-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/9034210/il_570xN.577045845_l1js.jpg"
    }
  ],
  [
    {
      "title": "custom order 72&quot;xxl large painting  abstract painting landscape painting from  jolina anthony absolutely unique painting technique",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/129818566/custom-order-72xxl-large-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6149157/il_570xN.268493869.jpg"
    },
    {
      "title": "Autumn Hills 2",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/50598853/autumn-hills-2?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5305356/il_570xN.155303668.jpg"
    }
  ],
  [
    {
      "title": "Scarlet Dress - Original Fine Art",
      "price": "210.00",
      "url": "https://www.etsy.com/listing/173113951/scarlet-dress-original-fine-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/6639286/il_570xN.540807637_s13r.jpg"
    },
    {
      "title": "Large original oil painting  impasto modern contemporary Copper orange  gold and blue Birch Trees  Vadal - 36&#39;",
      "price": "157.05",
      "url": "https://www.etsy.com/listing/174885542/large-original-oil-painting-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/5198223/il_570xN.594652398_eze5.jpg"
    }
  ],
  [
    {
      "title": "Hand Painted Vintage Window Paintings",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/187746846/hand-painted-vintage-window-paintings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/9386100/il_570xN.595579042_l6me.jpg"
    },
    {
      "title": "Musicians with Bleu Cat",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/49283041/musicians-with-bleu-cat?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5778632/il_570xN.150917179.jpg"
    }
  ],
  [
    {
      "title": "Original Acrylic Painting,39.4 x 27.5 inch, &quot;May In Rome&quot;, Abstract Painting, Fine Art, Stripes, Yellow, Green, Pink, Black",
      "price": "270.00",
      "url": "https://www.etsy.com/listing/150621482/original-acrylic-painting394-x-275-inch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/015/1/7609502/il_570xN.457421532_m2a5.jpg"
    },
    {
      "title": "Being A Family - coral 25 x 34 wooden sign wall art",
      "price": "140.00",
      "url": "https://www.etsy.com/listing/187752813/being-a-family-coral-25-x-34-wooden-sign?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/6176633/il_570xN.571656633_7hqd.jpg"
    }
  ],
  [
    {
      "title": "Venusita en un remoto Crepúsculo. / Little Venus in a remote crepuscule",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/172534248/venusita-en-un-remoto-crepusculo-little?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/044/0/8904292/il_570xN.538741895_qgt8.jpg"
    },
    {
      "title": "Couple In Love, Couple Kissing, Couples,Couple,Romantic Original LARGE Painting 48 purple silver gray heavy texture canvas Purple abstract",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/90752697/couple-in-love-couple-kissing?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6321590/il_570xN.303695145.jpg"
    }
  ],
  [
    {
      "title": "Original Acrylic Beach Scene Painting of Swimmers on the Beach 18&quot;x14&quot;",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/180544796/original-acrylic-beach-scene-painting-of?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/019/1/6110412/il_570xN.568626188_1vgc.jpg"
    },
    {
      "title": "Black and Bleu",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/40675197/black-and-bleu?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5778632/il_570xN.123324671.jpg"
    }
  ],
  [
    {
      "title": "Poppies Painting Abstract Flower Painting Red White & Black Painting Textured Painting Floral Painting Original Painting on Canvas 60x24 Day",
      "price": "550.00",
      "url": "https://www.etsy.com/listing/164903842/poppies-painting-abstract-flower?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/6216479/il_570xN.509888038_mqph.jpg"
    },
    {
      "title": "Beautiful original watercolor painting of pansies.",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/187743709/beautiful-original-watercolor-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/042/0/9440844/il_570xN.595542834_g2qu.jpg"
    }
  ],
  [
    {
      "title": "Landscape Painting Textured Modern Palette Knife Blooming Tree Painting Forest Original Abstract Landscape Acrylic by Osnat",
      "price": "420.00",
      "url": "https://www.etsy.com/listing/184988777/landscape-painting-textured-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/6571804/il_570xN.593895067_56dy.jpg"
    },
    {
      "title": "Original White Blossom Tree Acrilic Impasto  Palette Knife Abstract Painting. SIze 24 x 24.",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/183087411/original-white-blossom-tree-acrilic?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/0/6808201/il_570xN.478824888_6ss1.jpg"
    }
  ],
  [
    {
      "title": "Drunken Fireflies-------Original Abstract Painting by Justin Strom Large 54  x  24 3 Panel Painting Made To Order",
      "price": "179.00",
      "url": "https://www.etsy.com/listing/117999748/drunken-fireflies-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5793563/il_570xN.241727564.jpg"
    },
    {
      "title": "Tuxedo Cat Painting: Original Cat Portrait, Handsome Cat Art",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/187758981/tuxedo-cat-painting-original-cat?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/5650237/il_570xN.595702521_bxkv.jpg"
    }
  ],
  [
    {
      "title": "Birch Trees Oil Landscape painting Abstract Original Modern 48&quot; palette knife oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/183010995/birch-trees-oil-landscape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6316483/il_570xN.577819065_3v5a.jpg"
    },
    {
      "title": "Phoenix Is Rising Series - Smoldering Ashes -  2 Original Abstract Painting Home Decor 1857.1858A.030114 Burnt Orange And Gray",
      "price": "115.00",
      "url": "https://www.etsy.com/listing/183659512/phoenix-is-rising-series-smoldering?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/7506038/il_570xN.580243973_hhns.jpg"
    }
  ],
  [
    {
      "title": "Available For Sale - Dog Puppy oil painting - Wait Till The Clouds Roll In Cross Stitch Pattern - after William Henry Hamilton Trood",
      "price": "230.00",
      "url": "https://www.etsy.com/listing/187755220/available-for-sale-dog-puppy-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/8169335/il_570xN.595708647_as9f.jpg"
    },
    {
      "title": "16 x 20        Abstract Acrylic Painting",
      "price": "155.00",
      "url": "https://www.etsy.com/listing/51090520/16-x-20-abstract-acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5729213/il_570xN.156953110.jpg"
    }
  ],
  [
    {
      "title": "Blue Flower Painting Flowers Floral Light Blue, Light Gold - Abstract Acrylic - HUGE 54x24 High Quality Original Sculptural Modern Fine Art",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/150450728/blue-flower-painting-flowers-floral?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/010/0/6369903/il_570xN.456452019_78px.jpg"
    },
    {
      "title": "Black/White and Silver/Gray Series - Original Painting Abstract Expressionism - Modern Home Decor - 2398.042514 - Abstract Painting Wall Art",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187755454/blackwhite-and-silvergray-series?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/7506038/il_570xN.595712595_anid.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Acrylic Landscape Painting...Whimsical Flowers & Sun Art... LARGE Square Wall Decor",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/61605723/original-acrylic-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/1/6090016/il_570xN.500835400_k3b8.jpg"
    },
    {
      "title": "Original oil painting on canvas, yellow and gray impressionist, professionally framed, 21.5&quot; x 27&quot;",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/187744552/original-oil-painting-on-canvas-yellow?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/9441046/il_570xN.595674767_fwb8.jpg"
    }
  ],
  [
    {
      "title": "Original illustration, flower beetle (scarab)",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/101248122/original-illustration-flower-beetle?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5938376/il_570xN.342223699.jpg"
    },
    {
      "title": "72x30 large abstract seascape painting wall art  xxl FREE shipping to CA/US palette knife by Elena Petrova",
      "price": "369.00",
      "url": "https://www.etsy.com/listing/185345100/72x30-large-abstract-seascape-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5802270/il_570xN.586412523_hcnh.jpg"
    }
  ],
  [
    {
      "title": "pines . original watercolor painting illustration . romantic woodland portrait of girl in forest of pine trees . 8 x 10 . elizabeth becker",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187748717/pines-original-watercolor-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/1/7460126/il_570xN.595572844_gn57.jpg"
    },
    {
      "title": "Painting 47&quot; Mountain & Sky  Abstract Oil Painting , Original painting Handmade , With Certificate of Authenticity , by Koby Feldmost",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/180223815/painting-47-mountain-sky-abstract-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/2/9019569/il_570xN.583203052_jzus.jpg"
    }
  ],
  [
    {
      "title": "Marine - Abstract Acrylic with mixed medium 24&quot; x 24&quot; textured original painting",
      "price": "288.00",
      "url": "https://www.etsy.com/listing/186932598/marine-abstract-acrylic-with-mixed?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/8199379/il_570xN.592208452_2h07.jpg"
    },
    {
      "title": "Abstract Original Gray Yellow Art 20 X 16 Magenta Green Taupe Aqua Pink Cottage Chic Bright Happy Playful Boho FunTurquoise &quot;TEXT TEASER&quot;",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/176497672/abstract-original-gray-yellow-art-20-x?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/1/6487396/il_570xN.553569988_pv5u.jpg"
    }
  ],
  [
    {
      "title": "Gold-bearing creek - FREE SHIPPING - Large 39&quot;x28&quot; Original Oil Painting - abstract landscape ready to hang palette knife impasto SOLOMOON",
      "price": "445.00",
      "url": "https://www.etsy.com/listing/150010213/gold-bearing-creek-free-shipping-large?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/014/0/5937615/il_570xN.454839754_f1pm.jpg"
    },
    {
      "title": "Vivid Green and Blue Abstract. 10 x 30. Framed. Title Grounded. by ArtbyMaryKay",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/186738523/vivid-green-and-blue-abstract-10-x-30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/6174005/il_570xN.591558401_qt0f.jpg"
    }
  ],
  [
    {
      "title": "New Original One of a kind Abstract Fluid Acrylic Fluid Painting &quot;Foregoings&quot; 20&quot; X 20&quot;",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/173626097/new-original-one-of-a-kind-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/8179205/il_570xN.542708117_m0q6.jpg"
    },
    {
      "title": "Oil Landscape painting Abstract Original Modern 48&quot; palette knife Birch Trees oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "345.00",
      "url": "https://www.etsy.com/listing/184121968/oil-landscape-painting-abstract-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/6316483/il_570xN.555652810_dbt4.jpg"
    }
  ],
  [
    {
      "title": "Round Here 23 X 30 ORIGINAL Oil Painting Flowers Abstract Sky Field Colorful Modern Palette Knife Textured Red Green Orange ART by MArchella",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/160232706/round-here-23-x-30-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/5977111/il_570xN.492616365_eg3c.jpg"
    },
    {
      "title": "Spring Dream Original Handmade Oil Painting on Canvas Impressionism Style Classic Artwork  Nature One of a Kind Gallery Quality",
      "price": "179.00",
      "url": "https://www.etsy.com/listing/187740968/spring-dream-original-handmade-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/8178563/il_570xN.595554562_jg8j.jpg"
    }
  ],
  [
    {
      "title": "The Voluptuous Cello",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/40674722/the-voluptuous-cello?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5778632/il_570xN.123323306.jpg"
    },
    {
      "title": "Birch Trees",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/109287553/birch-trees?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/005/0/5800256/il_570xN.374602601_ik29.jpg"
    }
  ],
  [
    {
      "title": "Oct. 9, 2013 - Original Abstract Oil Painting - 9x9 painting (9 x 9 cm - app. 4 x 4 inch) with 8 x 10 inch mat",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/165219010/oct-9-2013-original-abstract-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/5508400/il_570xN.510941443_jrhk.jpg"
    },
    {
      "title": "XL Oil Landscape painting Abstract Original Modern 48&quot; palette knife oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/186452995/xl-oil-landscape-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/6316483/il_570xN.590465745_4x0n.jpg"
    }
  ],
  [
    {
      "title": "autumn sweater . original watercolor painting illustration . romantic portrait of girl wearing autumn sweater . 8 x 10 . elizabeth becker",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187745945/autumn-sweater-original-watercolor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/7460126/il_570xN.595567388_hq7l.jpg"
    },
    {
      "title": "A Star Is Born 48&quot;  Original Abstract Painting Modern Textured Palette Knife by Lana Guise",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/178711603/a-star-is-born-48-original-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/7889171/il_570xN.579322768_qixh.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Oil Painting Flowers For Me  23 x 30 Flowers Colorful Red Orange Pink Purple Abstract Brush ART By MARCHELLA",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/161209876/original-oil-painting-flowers-for-me-23?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/024/0/5977111/il_570xN.496214959_ejvn.jpg"
    },
    {
      "title": "Wedding Guest Book .wedding tree--  To Be Personalized With Guest&#39;s Signatures - 17x22 - 50-60 Signature Guestbook",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/182353071/wedding-guest-book-wedding-tree-to-be?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/023/0/6012891/il_570xN.575363669_1xvt.jpg"
    }
  ],
  [
    {
      "title": "Nice Shell, 14x11 acrylic on canvas",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/129952099/nice-shell-14x11-acrylic-on-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/5778632/il_570xN.451006185_f8ez.jpg"
    },
    {
      "title": "Extra Large 39&quot; Abstract Painting on paper. Original Art 39x26. Acrylic black light green aqua pink. Abstract expressionist modern painting",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/183849870/extra-large-39-abstract-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/1/6385631/il_570xN.580832300_gn3k.jpg"
    }
  ],
  [
    {
      "title": "48x36 abstract floral painting palette knife white pink green large painting Elena Petrova FREE shiping to Ca/US",
      "price": "379.00",
      "url": "https://www.etsy.com/listing/184277263/48x36-abstract-floral-painting-palette?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/5802270/il_570xN.582455459_grgp.jpg"
    },
    {
      "title": "Fiona Apples",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187740794/fiona-apples?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/8114264/il_570xN.595659651_8qr6.jpg"
    }
  ],
  [
    {
      "title": "Oil Landscape Tree painting Abstract Original Modern 48&quot; palette knife  Purple Night  oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/179578209/oil-landscape-tree-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/6316483/il_570xN.480388359_p436.jpg"
    },
    {
      "title": "Gull",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/129952403/gull?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/012/0/5778632/il_570xN.451009783_3ul3.jpg"
    }
  ],
  [
    {
      "title": "Fire Dance — PALETTE KNIFE Figure Oil Painting On Canvas By Leonid Afremov - Size: 20&quot; x 36&quot;",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/130241357/fire-dance-palette-knife-figure-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/013/0/7902640/il_570xN.452079401_gwd7.jpg"
    },
    {
      "title": "Embers-------Original Abstract Painting by Justin Strom Large 60  x  24 5 Panel Painting Made To Order Can Be Made In Other Colors And Sizes",
      "price": "189.99",
      "url": "https://www.etsy.com/listing/57124525/embers-original-abstract-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5793563/il_570xN.177165102.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Impasto Painting on Gallery wrapped Canvas 52&quot; x20&quot; Home Decor, Wall Art --- Cherry  Blossoms---- by Tomoko---",
      "price": "235.00",
      "url": "https://www.etsy.com/listing/160665712/original-modern-impasto-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/7006002/il_570xN.587010555_7a9q.jpg"
    },
    {
      "title": "Landscape Birch Trees Painting. Aspen Trees.Red.Abstract Art 12x24 Mix & Match MADE-TO-ORDER Julia Bars",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/182828515/landscape-birch-trees-painting-aspen?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/0/7575375/il_570xN.577016722_trd2.jpg"
    }
  ],
  [
    {
      "title": "ORIGINAL Abstract Modern Heavy Texture Impasto Acrylic Painting with red Poppies flower Field by Orit 36x24 large fine art of love",
      "price": "235.00",
      "url": "https://www.etsy.com/listing/74641095/original-abstract-modern-heavy-texture?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6321590/il_570xN.246339847.jpg"
    },
    {
      "title": "Original Oil Painting, &quot;Orange Cream Donut&quot;",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187752070/original-oil-painting-orange-cream-donut?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/5286562/il_570xN.595716549_pyiv.jpg"
    }
  ],
  [
    {
      "title": "CUSTOM ORDER - Textured Wood Block Art - Large Modern Art - Unique Multi Panel Art -  Abstract Paintings - Large Wood Wall Sculpture",
      "price": "650.00",
      "url": "https://www.etsy.com/listing/187748583/custom-order-textured-wood-block-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/0/8613057/il_570xN.595562178_fwt4.jpg"
    },
    {
      "title": "Painting Violet Burgundy Purple Plum - Abstract Acrylic Sculpture - Healing Violet Creation - 12x12 High Quality Original Fine Art",
      "price": "85.00",
      "url": "https://www.etsy.com/listing/182753466/painting-violet-burgundy-purple-plum?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/1/6369903/il_570xN.576892183_gwk0.jpg"
    }
  ],
  [
    {
      "title": "Rail Road.",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/185574499/rail-road?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/9239049/il_570xN.587095054_k433.jpg"
    },
    {
      "title": "Original Modern Painting, Red And Blue Abstract painting, Contemporary Fine Art by Henry Parsinia Large 48x24",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/90821281/original-modern-painting-red-and-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/5686682/il_570xN.366245024.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting -Highly Textured Acrylic- Unique Original Modern Contemporary Art",
      "price": "89.00",
      "url": "https://www.etsy.com/listing/177047987/abstract-painting-highly-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5949689/il_570xN.555581646_4rvd.jpg"
    },
    {
      "title": "CUSTOM PAINTING Abstract Painting Birds, Tree, Landscape Modern Art by Gabriela 44x32 Rich Texture",
      "price": "249.00",
      "url": "https://www.etsy.com/listing/52919556/custom-painting-abstract-painting-birds?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5266961/il_570xN.163077455.jpg"
    }
  ],
  [
    {
      "title": "Poppies Field Original Oil Painting on Canvas TEXTURED Wall Decor Art Floral Painting",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/186599489/poppies-field-original-oil-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/6754895/il_570xN.594089266_k9ze.jpg"
    },
    {
      "title": "Ride in the burnt clouds- closeup of horse face",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/187439346/ride-in-the-burnt-clouds-closeup-of?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/9430710/il_570xN.594534989_olzs.jpg"
    }
  ],
  [
    {
      "title": "Original MADE TO ORDER Abstract Painting Textured 48x24 Canvas Ocean Sea Shore Water Acrylic Aqua Teal Brown Fine Art by Federico Farias",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/74243159/original-made-to-order-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/1/6005571/il_570xN.244657564.jpg"
    },
    {
      "title": "Isis Melodies.",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/172592916/isis-melodies?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/1/8904292/il_570xN.538857954_ciij.jpg"
    }
  ],
  [
    {
      "title": "Right on Little Sandy Rd - Original Acrylic Encaustic Landscape Structure Painting - 20&quot;x 16&quot;",
      "price": "290.00",
      "url": "https://www.etsy.com/listing/187745664/right-on-little-sandy-rd-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/1/5473086/il_570xN.595671445_c7my.jpg"
    },
    {
      "title": "Oct. 26, 2013 - Original Abstract Oil Painting - 9x9 painting (9 x 9 cm - app. 4 x 4 inch) with 8 x 10 inch mat",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/167036281/oct-26-2013-original-abstract-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/0/5508400/il_570xN.517619969_q80m.jpg"
    }
  ],
  [
    {
      "title": "Red Bushes.",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/185573863/red-bushes?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/1/9239049/il_570xN.587093698_ni2w.jpg"
    },
    {
      "title": "Large Original Textured Abstract Painting on Canvas  Contemporary Modern Art Blue Brown shabby painting  Wall Hanging wall decor home decor",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/171639733/large-original-textured-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/7178636/il_570xN.567807771_e80m.jpg"
    }
  ],
  [
    {
      "title": "OLIVE TREE Whimsical Tree Fantasy Colorful Wall Art GLOSSY Giclee on Gallery canvas ready to hang by Luiza Vizoli",
      "price": "74.25",
      "url": "https://www.etsy.com/listing/153619232/olive-tree-whimsical-tree-fantasy?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6655404/il_570xN.590582605_gisb.jpg"
    },
    {
      "title": "Original Large modern impasto textured art abstract 48 x 24 canvas Autumn landscape painting Ready to Hangby tim lam",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/179297013/original-large-modern-impasto-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/5179610/il_570xN.563914774_esv9.jpg"
    }
  ],
  [
    {
      "title": "LARGE ARTWORK Original paintings red Blue abstract Modern Art Original Contemporary Art Deco Palette KNIFE Oversize canvas large artwork",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/183244507/large-artwork-original-paintings-red?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/042/0/9100501/il_570xN.578675323_6r3j.jpg"
    },
    {
      "title": "Turkish Crescent 15x21&quot; Original painting",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/187719209/turkish-crescent-15x21-original-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/6004394/il_570xN.595551539_juzo.jpg"
    }
  ],
  [
    {
      "title": "Art Small Square Susan Skelley 12 X 12 Soft Sweet Lavender Coral Tangerine Metallic Gold Bronze Silver Periwinkle &quot;LIKE NOBODY&#39;S BUSINESS&quot;",
      "price": "90.00",
      "url": "https://www.etsy.com/listing/186819764/art-small-square-susan-skelley-12-x-12?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/6487396/il_570xN.591783260_9h69.jpg"
    },
    {
      "title": "Orange wrapped in Blue - Large Abstract Painting - Acrylic painting - 31,5&quot; x 47,2&quot; - Free Worldwide Shipping",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/175543316/orange-wrapped-in-blue-large-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/1/7442860/il_570xN.550013192_q6zt.jpg"
    }
  ],
  [
    {
      "title": "Painting dreamland 72&quot;xxl large  landscape painting from  jolina anthony absolutely unique painting technique",
      "price": "339.00",
      "url": "https://www.etsy.com/listing/173878795/painting-dreamland-72xxl-large-landscape?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6149157/il_570xN.268492411.jpg"
    },
    {
      "title": "Life Like Custom Pet Portrait Pet Painting 9 x 12 Your Pet Any Animal",
      "price": "119.00",
      "url": "https://www.etsy.com/listing/101386413/life-like-custom-pet-portrait-pet?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.85489863.jpg"
    }
  ],
  [
    {
      "title": "Oil Landscape Abstract Original palette knife signature Purple Gold Blossoms Blossom oil impasto oil painting by Nicolette Vaughan Horner",
      "price": "295.00",
      "url": "https://www.etsy.com/listing/182279702/oil-landscape-abstract-original-palette?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6316483/il_570xN.575132029_ewwl.jpg"
    },
    {
      "title": "Original 24&quot; Abstract Painting Shades of green,Ready to Hang Gallery Canvas Contemporary Absract Fine Art Nicolette Vaughan Horner",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/185873576/original-24-abstract-painting-shades-of?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/6316483/il_570xN.588333857_1vz8.jpg"
    }
  ],
  [
    {
      "title": "Large Abstract Acrylic Painting on Canvas,modern art,original art,landscapet,home decor,fine art,tkafka,tracey kafka,Field 9",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/186641415/large-abstract-acrylic-painting-on?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/5774375/il_570xN.591210791_tk7k.jpg"
    },
    {
      "title": "Original  abstract contemporary  gallery canvas  impasto  palette knife floral painting RED POPPIES  by Nicolette Vaughan Horner",
      "price": "149.99",
      "url": "https://www.etsy.com/listing/187414710/original-abstract-contemporary-gallery?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/039/0/6316483/il_570xN.594451309_iuqz.jpg"
    }
  ],
  [
    {
      "title": "Blue Coastal Abstract Painting Original Art -Grey Blue Sea 22 x 28",
      "price": "375.00",
      "url": "https://www.etsy.com/listing/185780101/blue-coastal-abstract-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/031/0/5851455/il_570xN.587958733_e6ow.jpg"
    },
    {
      "title": "Sleepy Bear! TeddyBear. Nursery Art. Kids Wall Art.Personalized Name.Teddy Bear for Baby Shower.Custom Made.Original Painting.",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/186628955/sleepy-bear-teddybear-nursery-art-kids?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/038/0/9407404/il_570xN.594633067_xrzp.jpg"
    }
  ],
  [
    {
      "title": "Art  painting abstract  pop art painting new york  acrylic painting from jolina anthony fast and free shipping",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/172414408/art-painting-abstract-pop-art-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/6149157/il_570xN.538341467_f9jm.jpg"
    },
    {
      "title": "Bright and Colorful PEACE N LOVE Painting with Neon Pink Painted Wood Frame - Original Artwork",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/179918924/bright-and-colorful-peace-n-love?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/030/0/8022637/il_570xN.566431739_47vi.jpg"
    }
  ],
  [
    {
      "title": "Sold - The end of the day - Huntsman Fox hunting Hunt horse riding oil painting",
      "price": "380.00",
      "url": "https://www.etsy.com/listing/187758591/sold-the-end-of-the-day-huntsman-fox?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/8169335/il_570xN.595703123_366n.jpg"
    },
    {
      "title": "Goddess of Fall",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/117024989/goddess-of-fall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/001/0/6910263/il_570xN.403260565_mhn8.jpg"
    }
  ],
  [
    {
      "title": "Custom Pet Portrait Pet Painting Hand Painted 11x14 Any Animal Dog Cat Horse by Sharon Lamb",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/14774901/custom-pet-portrait-pet-painting-hand?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.36521321.jpg"
    },
    {
      "title": "GOLDEN PEARS oil painting modern fine art  modern contemporary art by The artist Carol Lee",
      "price": "279.00",
      "url": "https://www.etsy.com/listing/185913146/golden-pears-oil-painting-modern-fine?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/9225448/il_570xN.588502175_5148.jpg"
    }
  ],
  [
    {
      "title": "Hand painted world map of the world- Black and Bronze",
      "price": "105.00",
      "url": "https://www.etsy.com/listing/88509242/hand-painted-world-map-of-the-world?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/041/0/5671281/il_570xN.595610872_6oqa.jpg"
    },
    {
      "title": "Abstract Original Brown Painting by Andrada, Mixed media painting on wood, Abstract Brown Painting on Wood, Large 40x40 painting",
      "price": "800.00",
      "url": "https://www.etsy.com/listing/167975630/abstract-original-brown-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/022/0/5313299/il_570xN.521142450_58i3.jpg"
    }
  ],
  [
    {
      "title": "Giraffe - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187748134/giraffe-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/9088156/il_570xN.595583888_2zxn.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Blue Purple SPRING SYMPHONY Flowers 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "329.00",
      "url": "https://www.etsy.com/listing/186496561/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/027/0/6516260/il_570xN.590621485_gx4q.jpg"
    }
  ],
  [
    {
      "title": "landscape oil painting.",
      "price": "170.00",
      "url": "https://www.etsy.com/listing/187739344/landscape-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/028/0/9444863/il_570xN.595655527_cbn2.jpg"
    },
    {
      "title": "Red Poppies Oil Painting 48&quot;x 24&quot; ORIGINAL Large Abstract Very Thick Impasto Landscape Oil Painting by Nizamas",
      "price": "365.00",
      "url": "https://www.etsy.com/listing/176719228/red-poppies-oil-painting-48x-24-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/029/0/6425267/il_570xN.590311489_2lk3.jpg"
    }
  ],
  [
    {
      "title": "We Can Do Hard Things Distressed Sign in Weather Worn White with Robins Egg Blue Vintage Style",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/85717473/we-can-do-hard-things-distressed-sign-in?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5747617/il_570xN.284764269.jpg"
    },
    {
      "title": "Flower art oil painting Original abstract muti-clolors vase on gallery wrap canvas Ready to hang by tim Lam 48x24",
      "price": "369.00",
      "url": "https://www.etsy.com/listing/159251159/flower-art-oil-painting-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/5179610/il_570xN.488991041_6a7m.jpg"
    }
  ],
  [
    {
      "title": "Knights Pond Maine Nature Painting Art",
      "price": "79.00",
      "url": "https://www.etsy.com/listing/187740110/knights-pond-maine-nature-painting-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/5221270/il_570xN.595551164_dh4d.jpg"
    },
    {
      "title": "Original Art Abstract Painting Red Tree of Life Textured Modern Palette Knife Spring Home Wall Decor Blue Brown Gold Large 24x48 -Christine",
      "price": "345.00",
      "url": "https://www.etsy.com/listing/187727574/original-art-abstract-painting-red-tree?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/6249353/il_570xN.595505822_sqpu.jpg"
    }
  ],
  [
    {
      "title": "Original Modern Art  Painting on  Gallery wrapped Canvas 36&quot; x 24&quot;, Home Decor, Wall Art ---Japanese Cherry Blossoms--- by Tomoko Koyama",
      "price": "189.00",
      "url": "https://www.etsy.com/listing/102617657/original-modern-art-painting-on-gallery?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/7006002/il_570xN.474056470_t8jt.jpg"
    },
    {
      "title": "Original XL Abstract Painting 47,2&quot; x 31,5&quot; Large Painting &quot;\\lady in turquiose&quot; , Abstracts by Castano Artworks",
      "price": "289.00",
      "url": "https://www.etsy.com/listing/186539539/original-xl-abstract-painting-472-x-315?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/1/8015033/il_570xN.590783539_dbc6.jpg"
    }
  ],
  [
    {
      "title": "SALE, 48x20 Inches, Original 3 piece Canvas set, Large Tan Painting beige Cream color, Trees, Triptych, Wall art, Original decor Tree art",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/187634095/sale-48x20-inches-original-3-piece?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/034/1/6934340/il_570xN.595123938_pvx3.jpg"
    },
    {
      "title": "Abstract Painting Large 40&quot; by 30&quot; Colourful Wall Art Painting Landscape Painting Textured Painting Blue Green",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/182026674/abstract-painting-large-40-by-30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/7625066/il_570xN.574067744_1tix.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Painting- On The Hill- Modern, Contemporary 24x30",
      "price": "229.00",
      "url": "https://www.etsy.com/listing/186026580/original-abstract-painting-on-the-hill?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/040/0/5743379/il_570xN.588814470_59oh.jpg"
    },
    {
      "title": "The Eternal Love Series - LARGE 30x40 Original Painting Abstract Expressionism Art 1273 Eternal Red Abstract Painting Abstract Wall Decor",
      "price": "179.00",
      "url": "https://www.etsy.com/listing/163632054/the-eternal-love-series-large-30x40?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/7506038/il_570xN.561918174_n6bp.jpg"
    }
  ],
  [
    {
      "title": "Large oil painting modern impasto contemporary knife landscape 3 trees and  family of  lovebirds- aqua, red, gold , rose , green",
      "price": "193.05",
      "url": "https://www.etsy.com/listing/185711305/large-oil-painting-modern-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/5198223/il_570xN.594652214_kjuf.jpg"
    },
    {
      "title": "Abstract painting - Serie of Brown to Blue with yellow in the middle - Modern Acrylic Art - 19.7&quot; x 19.7&quot; Ronald Hunter paintings",
      "price": "389.00",
      "url": "https://www.etsy.com/listing/185684920/abstract-painting-serie-of-brown-to-blue?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/1/7442860/il_570xN.587522968_fyaj.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting. Large Painting. Wall Art. Modern Art. Original. Contemporary Painting. Huge. 24 x 30. Rust Brown cream olive green",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/168270420/abstract-painting-large-painting-wall?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/0/5440733/il_570xN.522219102_9f7l.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/88062296/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6483189/il_570xN.293881090.jpg"
    }
  ],
  [
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/89524200/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/000/0/6483189/il_570xN.299319460.jpg"
    },
    {
      "title": "ContemporaryTree Of Life painting Abstract Original Modern 48X36 palette knife Gray Tones  impasto oil painting by Nicolette Vaughan Horner",
      "price": "499.00",
      "url": "https://www.etsy.com/listing/187613436/contemporarytree-of-life-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/044/0/6316483/il_570xN.595068598_ke2h.jpg"
    }
  ],
  [
    {
      "title": "Large Original Contemporary Abstract Gold Painting by Lafferty - 20X48, Sale 22% Off",
      "price": "151.09",
      "url": "https://www.etsy.com/listing/61571112/large-original-contemporary-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/043/0/5407450/il_570xN.586305556_2t1a.jpg"
    },
    {
      "title": "Original Abstract Art Painting by CGUEDEZ. Modern Heavy Texture Trees. Red,  White, Blue, Brown. Aroma do Campo.",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/124656948/original-abstract-art-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/6921897/il_570xN.560238828_tt01.jpg"
    }
  ],
  [
    {
      "title": "Blue melody 24x20 in, Bird  Painting Original Art Impressionistic OIl on Canvas by Ivailo Nikolov",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/119799348/blue-melody-24x20-in-bird-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/010/0/5993554/il_570xN.413458451_suzw.jpg"
    },
    {
      "title": "Hand Painted 8 x 10 Custom Pet Portrait Painting any Animal from your photo",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/165668171/hand-painted-8-x-10-custom-pet-portrait?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5151925/il_570xN.242535771.jpg"
    }
  ],
  [
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/160949033/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/6483189/il_570xN.495209543_rhog.jpg"
    },
    {
      "title": "39,4&quot; Original Textured Abstract Painting on Canvas Landscape Seascape Blue Painting Modern Art Wall Hanging Best Price by Emerico",
      "price": "265.00",
      "url": "https://www.etsy.com/listing/182973829/394-original-textured-abstract-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/035/0/7178636/il_570xN.590704981_ktbq.jpg"
    }
  ],
  [
    {
      "title": "Pochoir Lithograph By Emile Gallois 1939 Valence Woman&#39;s Costume",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/128023821/pochoir-lithograph-by-emile-gallois-1939?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/012/0/5697567/il_570xN.443896775_kvbq.jpg"
    },
    {
      "title": "Original Painting - Modern Abstract Art by SLAZO - 30x40",
      "price": "550.00",
      "url": "https://www.etsy.com/listing/176784998/original-painting-modern-abstract-art-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/031/0/5313713/il_570xN.554646764_6gt7.jpg"
    }
  ],
  [
    {
      "title": "Original acrylic painting of swimmers snorkeling Sun on Their Backs 18&quot;x14&quot;",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/181603133/original-acrylic-painting-of-swimmers?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/018/0/6110412/il_570xN.572460506_4tw1.jpg"
    },
    {
      "title": "Abstract Art, IN THE FLOW, four gallery wrapped canvas giclees from my original abstract paintings",
      "price": "239.00",
      "url": "https://www.etsy.com/listing/155324274/abstract-art-in-the-flow-four-gallery?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/024/0/5177427/il_570xN.474363278_jk5p.jpg"
    }
  ],
  [
    {
      "title": "Large Original Abstract  Painting by Andrada - Black&White painting -Huge 48x48 - 4 Foot painting",
      "price": "599.00",
      "url": "https://www.etsy.com/listing/106196471/large-original-abstract-painting-by?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/001/0/5313299/il_570xN.363251984_apvn.jpg"
    },
    {
      "title": "Lion - Hand painted glass ornament (2 5/8&quot;)",
      "price": "80.00",
      "url": "https://www.etsy.com/listing/187752141/lion-hand-painted-glass-ornament-2-58?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/9088156/il_570xN.595680481_s2ub.jpg"
    }
  ],
  [
    {
      "title": "Xxl LARGE Artwork Sunset Red abstract art Modern Acrylic Painting Oversized canvas Wall Art artwork size 72&quot; x 54&quot;",
      "price": "749.00",
      "url": "https://www.etsy.com/listing/179660158/xxl-large-artwork-sunset-red-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/9100501/il_570xN.565366890_n9dr.jpg"
    },
    {
      "title": "Hooded Oriole Drawing - Framed Giclee Print",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/118067277/hooded-oriole-drawing-framed-giclee?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/008/0/6577408/il_570xN.407003998_o1ws.jpg"
    }
  ],
  [
    {
      "title": "Bolero in acrylic II",
      "price": "600.00",
      "url": "https://www.etsy.com/listing/66590176/bolero-in-acrylic-ii?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5778632/il_570xN.210959651.jpg"
    },
    {
      "title": "Grand Canyon Arizona Contemporary Original Oil painting Oil on Canvas Classic art Impressionism 20 x 27 in Handmade artwork Nature Landscape",
      "price": "199.00",
      "url": "https://www.etsy.com/listing/187747791/grand-canyon-arizona-contemporary?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/8178563/il_570xN.595663153_phvd.jpg"
    }
  ],
  [
    {
      "title": "Acrylic Portrait Painting, Collage, Poinsettias Made Her Nostalgic, Christmas, Pink, Red, Green, Polka Dots, Wistful 9x12 canvas panel",
      "price": "165.00",
      "url": "https://www.etsy.com/listing/171597111/acrylic-portrait-painting-collage?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/1/5310731/il_570xN.535268643_h7y1.jpg"
    },
    {
      "title": "Acrylic Painting",
      "price": "650.00",
      "url": "https://www.etsy.com/listing/187748457/acrylic-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/040/0/9440770/il_570xN.595667031_swqi.jpg"
    }
  ],
  [
    {
      "title": "Abstract Realism Peacock Original Painting  - Extra Large Wall Art Gallery canvas ready to hang",
      "price": "400.00",
      "url": "https://www.etsy.com/listing/187420069/abstract-realism-peacock-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/039/0/6197222/il_570xN.594346788_6qhm.jpg"
    },
    {
      "title": "Girl In A Red Dress: Original Oil Painting",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/29982665/girl-in-a-red-dress-original-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/5219001/il_570xN.594008980_gqtn.jpg"
    }
  ],
  [
    {
      "title": "Three Daffodils",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/187749916/three-daffodils?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/5324523/il_570xN.595586182_ry4j.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Turquoise White SPRING BLOSSOMS Tree 48x24 Palette Knife Texture Oil J.LEIGH",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/184259079/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/041/0/6516260/il_570xN.582388753_nei9.jpg"
    }
  ],
  [
    {
      "title": "pastel earth - large 64 x 20, textured acrylic urban art zen PAINTING on canvas - contemporary abstract",
      "price": "325.00",
      "url": "https://www.etsy.com/listing/180873060/pastel-earth-large-64-x-20-textured?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/030/0/5515066/il_570xN.569819458_5fcq.jpg"
    },
    {
      "title": "Take Me Out to The Ballgame Ball Game St Louis Cardinals RedBird  Baseball wooden Sign",
      "price": "65.00",
      "url": "https://www.etsy.com/listing/166017031/take-me-out-to-the-ballgame-ball-game-st?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/029/0/6786003/il_570xN.513788600_ft67.jpg"
    }
  ],
  [
    {
      "title": "Jazz band",
      "price": "425.00",
      "url": "https://www.etsy.com/listing/187753611/jazz-band?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/037/0/8904292/il_570xN.595582144_pith.jpg"
    },
    {
      "title": "Original collage Aluminum Red art painting sculpture modern yellow contemporary abstract home office wall decor original hand made by Lubo",
      "price": "62.00",
      "url": "https://www.etsy.com/listing/107834781/original-collage-aluminum-red-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/002/0/6178671/il_570xN.369195363_6bap.jpg"
    }
  ],
  [
    {
      "title": "Art  Abstract Painting Large 40&quot;by 30&quot; Original  Painting, Contemporary wall art Painting Textured Large Wall Decor Blue",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/186047935/art-abstract-painting-large-40by-30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/1/7625066/il_570xN.588976363_ae6d.jpg"
    },
    {
      "title": "Bruised and Beaten",
      "price": "200.00",
      "url": "https://www.etsy.com/listing/114248190/bruised-and-beaten?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/004/0/6910263/il_570xN.392562699_q1fz.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting ORIGINAL 48x24 Canvas Modern TEXTURED Acrylic Brown & Teal Fine Art by Federico Farias",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/55619561/abstract-painting-original-48x24-canvas?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6005571/il_570xN.172784511.jpg"
    },
    {
      "title": "Golden Girl",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/104099545/golden-girl?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/001/0/6910263/il_570xN.355410840_qvug.jpg"
    }
  ],
  [
    {
      "title": "Large original oil painting  impasto modern contemporary blue,  green , gold, violet  Summer Moonlight Trees by   Vadal - 36&#39;",
      "price": "175.05",
      "url": "https://www.etsy.com/listing/183008461/large-original-oil-painting-impasto?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/5198223/il_570xN.594651866_gnj6.jpg"
    },
    {
      "title": "Original Large Abstract Painting Modern Contemporary Canvas Art Gold Turquoise Orange JOY of POPPIES 36x24 Palette Knife Texture Oil J.LEIGH",
      "price": "349.00",
      "url": "https://www.etsy.com/listing/175841107/original-large-abstract-painting-modern?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/035/0/6516260/il_570xN.551061764_4npl.jpg"
    }
  ],
  [
    {
      "title": "Fleur De Lis bears witness.  Encaustic (wax) painting 11x14",
      "price": "250.00",
      "url": "https://www.etsy.com/listing/159976241/fleur-de-lis-bears-witness-encaustic-wax?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/020/2/8473190/il_570xN.491593414_542k.jpg"
    },
    {
      "title": "Large Vintage french  PAINT BOX couleurs sans danger Paris",
      "price": "135.00",
      "url": "https://www.etsy.com/listing/185068783/large-vintage-french-paint-box-couleurs?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/026/0/8105239/il_570xN.585366323_gyi3.jpg"
    }
  ],
  [
    {
      "title": "Rajasthani Dancing Girl",
      "price": "150.00",
      "url": "https://www.etsy.com/listing/117025965/rajasthani-dancing-girl?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/005/0/6910263/il_570xN.403268982_g3q9.jpg"
    },
    {
      "title": "Spring SALE Large Abstract paintings wall hanging oil / acrylic  4 Piece Braille Painting 20 X Inches LOVE",
      "price": "327.90",
      "url": "https://www.etsy.com/listing/182958694/spring-sale-large-abstract-paintings?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/020/0/5693606/il_570xN.577668623_j3a8.jpg"
    }
  ],
  [
    {
      "title": "Violet Umbrellas in Darkness",
      "price": "100.00",
      "url": "https://www.etsy.com/listing/114244545/violet-umbrellas-in-darkness?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/005/0/6910263/il_570xN.392548708_a5dp.jpg"
    },
    {
      "title": "Blizzard-------Large 23.5&quot;t  x 56&quot;w  5 Panel Ground Metal Wall Decor by Justin Strom",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/159473114/blizzard-large-235t-x-56w-5-panel-ground?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/022/0/5793563/il_570xN.489841227_3mkp.jpg"
    }
  ],
  [
    {
      "title": "Canvas Giclee Print from my original abstract landscape painting, MARKET DAY, 20x40, 24x48",
      "price": "169.00",
      "url": "https://www.etsy.com/listing/164958192/canvas-giclee-print-from-my-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/022/0/5177427/il_570xN.509943066_7mu1.jpg"
    },
    {
      "title": "Oil painting abstract landscape original forest by Aja The Light in the Woods 22x28 inches",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/163726277/oil-painting-abstract-landscape-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/033/0/5150206/il_570xN.505401097_ozdm.jpg"
    }
  ],
  [
    {
      "title": "Landscape Painting Original Art Abstract or Impressionist Surreal Huge Acrylic on Canvas by Linda Monfort",
      "price": "450.00",
      "url": "https://www.etsy.com/listing/174516638/landscape-painting-original-art-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/019/0/5132283/il_570xN.546308677_pkmq.jpg"
    },
    {
      "title": "Unique Painting",
      "price": "60.00",
      "url": "https://www.etsy.com/listing/187752826/unique-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/032/0/9063698/il_570xN.595597534_qk2i.jpg"
    }
  ],
  [
    {
      "title": "Colorful Abstract Dressage Horse- Colorful Piaffe16 x 20",
      "price": "245.00",
      "url": "https://www.etsy.com/listing/170687501/colorful-abstract-dressage-horse?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/021/0/5851455/il_570xN.531145337_bp0o.jpg"
    },
    {
      "title": "Sheep painting 12 12x12 inch original oil painting by Roz",
      "price": "95.00",
      "url": "https://www.etsy.com/listing/181922287/sheep-painting-12-12x12-inch-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/021/0/5227653/il_570xN.573630464_o727.jpg"
    }
  ],
  [
    {
      "title": "Rain&#39;s Rustle 2 — PALETTE KNIFE Oil Painting On Canvas By Leonid Afremov - Size: 40&quot; x 30&quot; (100cm x 75cm)",
      "price": "149.00",
      "url": "https://www.etsy.com/listing/168264945/rains-rustle-2-palette-knife-oil?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/038/0/7902640/il_570xN.522136314_sep6.jpg"
    },
    {
      "title": "XL Oil Landscape painting Abstract Original Modern 48&quot; palette knife oil  impasto oil painting by Nicolette Vaughan Horner",
      "price": "345.00",
      "url": "https://www.etsy.com/listing/186579623/xl-oil-landscape-painting-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/036/0/6316483/il_570xN.590864302_mat6.jpg"
    }
  ],
  [
    {
      "title": "Knights Pond Marsh Original Oil Painting Nature Art",
      "price": "125.00",
      "url": "https://www.etsy.com/listing/187740738/knights-pond-marsh-original-oil-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/034/0/5221270/il_570xN.595659819_7o7s.jpg"
    },
    {
      "title": "All bets point to yes",
      "price": "405.67",
      "url": "https://www.etsy.com/listing/187755002/all-bets-point-to-yes?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/027/0/9434920/il_570xN.595604284_c4m8.jpg"
    }
  ],
  [
    {
      "title": "Oil Cans With Stripes - 8 x 8 Inch Original Still Life Oil Painting of Small Oil Cans - Man Cave Decor - Western Decor",
      "price": "350.00",
      "url": "https://www.etsy.com/listing/153498903/oil-cans-with-stripes-8-x-8-inch?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/014/1/5140979/il_570xN.467626955_ax8m.jpg"
    },
    {
      "title": "Colorful Hand Crafted Metal Wall Art Wave Sculptures / by Artist Jon Allen",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/115130513/colorful-hand-crafted-metal-wall-art?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/008/1/5133928/il_570xN.395788367_9v0t.jpg"
    }
  ],
  [
    {
      "title": "Two miniature oil paintings - Smiggen and Process - Reserved listing for Gail",
      "price": "88.00",
      "url": "https://www.etsy.com/listing/187760575/two-miniature-oil-paintings-smiggen-and?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/025/0/5465286/il_570xN.595709681_n91j.jpg"
    },
    {
      "title": "48&quot; Original Abstract painting texture Landscape Painting - stretched canvas oil painting Cityscape by Tatjana Ruzin - texture palette knife",
      "price": "299.00",
      "url": "https://www.etsy.com/listing/181639049/48-original-abstract-painting-texture?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/043/0/6718696/il_570xN.595620557_new8.jpg"
    }
  ],
  [
    {
      "title": "Original Impasto Acrylic Modern Abstract Art  Painting on  Gallery wrapped Canvas 24&quot; x 18&quot;, Home Decor, -White  Blossoms- by Tomoko Koyama",
      "price": "129.00",
      "url": "https://www.etsy.com/listing/123769439/original-impasto-acrylic-modern-abstract?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/017/0/7006002/il_570xN.473437457_6lmy.jpg"
    },
    {
      "title": "ABSTRACT Art Artwork Multicolored Red abstract art Modern Acrylic Painting Oversized canvas Wall Art 72 x 36",
      "price": "300.00",
      "url": "https://www.etsy.com/listing/179672835/abstract-art-artwork-multicolored-red?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/026/0/9100501/il_570xN.565369354_l051.jpg"
    }
  ],
  [
    {
      "title": "Large original OIL PAINTING Made to Order golden abstract modern fine art angels figures canvas by Carol Lee",
      "price": "750.00",
      "url": "https://www.etsy.com/listing/166785980/large-original-oil-painting-made-to?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/032/0/5383721/il_570xN.555090903_jnzk.jpg"
    },
    {
      "title": "Custom Wedding Dress Art Illustration Portrait Painting 10&quot; x 20&quot;",
      "price": "175.00",
      "url": "https://www.etsy.com/listing/67145037/custom-wedding-dress-art-illustration?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/5991493/il_570xN.281841833.jpg"
    }
  ],
  [
    {
      "title": "Abstract Painting. Art. Large. 40x30. Original Abstract Art. Kris Gould. Modern Art. FREE SHIPPING. Modern Painting. Large wall art. Acrylic",
      "price": "315.00",
      "url": "https://www.etsy.com/listing/185839488/abstract-painting-art-large-40x30?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/036/0/5836665/il_570xN.588199223_s65h.jpg"
    },
    {
      "title": "Landscape from friend&#39;s home No.4, original watercolor",
      "price": "75.00",
      "url": "https://www.etsy.com/listing/118117357/landscape-from-friends-home-no4-original?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img0.etsystatic.com/003/0/5949766/il_570xN.407208642_nv2i.jpg"
    }
  ],
  [
    {
      "title": "Original Abstract Mixed Media Painting By K.A.Davis",
      "price": "235.00",
      "url": "https://www.etsy.com/listing/164169885/original-abstract-mixed-media-painting?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/037/2/8529793/il_570xN.507035129_ouoi.jpg"
    },
    {
      "title": "Metal Wall Art Abstract Decor Contemporary Modern Sculpture Hanging",
      "price": "99.00",
      "url": "https://www.etsy.com/listing/89563490/metal-wall-art-abstract-decor?utm_source=nichecategories&utm_medium=api&utm_campaign=api",
      "url_570xN": "https://img1.etsystatic.com/000/0/6483189/il_570xN.299328073.jpg"
    }
  ]
];

    window.currentIndex = 0;
    window.currentPriceLeft = 0;
    window.currentPriceRight = 0;

    window.newData = _.map(dummyData, function(currentDummyData) {
        return _.map(currentDummyData, function(el, i) {
            return new EtsyItem({
                title : el.title,
                price : el.price,
                url : el.url,
                url_570xN : el.url_570xN
            })
        });
    });

    function renderFirstPair() {
        $('#main').find('.etsyItems').html('');

        new LeftItemView({model: newData[currentIndex][0]});
        new RightItemView({model: newData[currentIndex][1]});

        currentIndex++;
    }

    renderFirstPair();
    setSmoothScroll();

});



