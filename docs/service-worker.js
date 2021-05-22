/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f1d4e6c391affb472fc30cc04ec47026"
  },
  {
    "url": "api/cli.html",
    "revision": "40ac1b7871339133d4eed2ff0d659834"
  },
  {
    "url": "api/node.html",
    "revision": "660a5731d251fed9e0c33084b2ceaf5f"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.d4e1207a.css",
    "revision": "1c59955557c38a44d394f2bb4289832b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b5b10f35.js",
    "revision": "d6fee4a552db14a2cd18b2076fdf6e9a"
  },
  {
    "url": "assets/js/100.36e6f13c.js",
    "revision": "c2f819456436f4f5e71b2b406d928912"
  },
  {
    "url": "assets/js/101.4490c8d4.js",
    "revision": "b4f8657e6602df1dad2b563ab9bb75fa"
  },
  {
    "url": "assets/js/102.0fda2c85.js",
    "revision": "b13f28913f24e6b7e84ac016f6aeaf13"
  },
  {
    "url": "assets/js/103.8768065a.js",
    "revision": "038a7cce77b248863dcf5c320e68c6c7"
  },
  {
    "url": "assets/js/104.30b011d7.js",
    "revision": "0c2f4a110ba553028a0ed490af945fd0"
  },
  {
    "url": "assets/js/105.8657277e.js",
    "revision": "bedbd0b2c74e726d5cb4608a0652b5f1"
  },
  {
    "url": "assets/js/106.e89a04d2.js",
    "revision": "3eb7b98a511cc9cf04d56715a5fa62a6"
  },
  {
    "url": "assets/js/107.5fcaa270.js",
    "revision": "a7cfeb1108e2c76daa8e64f7fd321bf5"
  },
  {
    "url": "assets/js/108.ddfe05e6.js",
    "revision": "5f34c0bad8527354303126eb14947273"
  },
  {
    "url": "assets/js/109.79d2ff3a.js",
    "revision": "283523a470e00c9d2c18f7ed02ac9d54"
  },
  {
    "url": "assets/js/11.4efaa226.js",
    "revision": "79b84521464ef7f08c89cfd97a1208ab"
  },
  {
    "url": "assets/js/12.c44a00ae.js",
    "revision": "cd08ea5288e9d657ca7f0a40c522cbe3"
  },
  {
    "url": "assets/js/13.56d3fd2c.js",
    "revision": "9794d01035c884843dfd9e5fee2a326e"
  },
  {
    "url": "assets/js/14.e632db99.js",
    "revision": "11a8b34ffe703b6b41c05379c16df214"
  },
  {
    "url": "assets/js/15.ba361651.js",
    "revision": "bdc5c79db6385f70f3d8da7aee94ab50"
  },
  {
    "url": "assets/js/16.e20bebc1.js",
    "revision": "70025d5b71fb66493bf6ef654769789f"
  },
  {
    "url": "assets/js/17.df7d4f54.js",
    "revision": "488304a444ae593bfe081370fc97c66e"
  },
  {
    "url": "assets/js/18.69f545ef.js",
    "revision": "0348bf9ef516d97bb49f56d47cd28070"
  },
  {
    "url": "assets/js/19.24f3a403.js",
    "revision": "698d3108a8f11abda5d2dbda7b4d259c"
  },
  {
    "url": "assets/js/20.d46e77ae.js",
    "revision": "dcef810f0848e25f95856476ce660e8c"
  },
  {
    "url": "assets/js/21.7ff97dd5.js",
    "revision": "1011b46b2f9cc36437cceca576563baa"
  },
  {
    "url": "assets/js/22.9afd39a7.js",
    "revision": "bef45708427673f529024b54fcf8fbc6"
  },
  {
    "url": "assets/js/23.3e3ec5ff.js",
    "revision": "1bd6ff89f399ee4107172f942ad3a297"
  },
  {
    "url": "assets/js/24.b75ff4cd.js",
    "revision": "e038fbcc33268f14cef36140831569f9"
  },
  {
    "url": "assets/js/25.eb8839d7.js",
    "revision": "9e118989094d7d9555ce4e605f24c241"
  },
  {
    "url": "assets/js/26.7c8d5835.js",
    "revision": "d87ca9534b3ca265dc7ab1cedcf06d0c"
  },
  {
    "url": "assets/js/27.2aa762ba.js",
    "revision": "c44ddb4e20d4e543af825ee1afdcb255"
  },
  {
    "url": "assets/js/28.e54e22be.js",
    "revision": "2de341e753d886268532732362658a5c"
  },
  {
    "url": "assets/js/29.94a9daec.js",
    "revision": "fc1fa5e86de6e97a86d9f7a00eb77fb0"
  },
  {
    "url": "assets/js/30.184b36a6.js",
    "revision": "94e6c82388551b02cc83341200c36e1f"
  },
  {
    "url": "assets/js/31.4add965d.js",
    "revision": "d873bdf1b0e7143576205c92c6a491ee"
  },
  {
    "url": "assets/js/32.903fdd27.js",
    "revision": "738a0f5858f5b3e488f8f3ec4d080380"
  },
  {
    "url": "assets/js/33.9720f0db.js",
    "revision": "55c682f5c87b7fa67cf8146046e30409"
  },
  {
    "url": "assets/js/34.0dbb0265.js",
    "revision": "f88f9333187fcb76cd19e4b3cc172cb6"
  },
  {
    "url": "assets/js/35.a352269a.js",
    "revision": "1469a39510c533ad7ea8b34a02fc715e"
  },
  {
    "url": "assets/js/36.c3f78a90.js",
    "revision": "333f2e2c03196177ae54e0a5e1ef6bcc"
  },
  {
    "url": "assets/js/37.ba12b407.js",
    "revision": "90159c92adc7de5471651a0e26b97940"
  },
  {
    "url": "assets/js/38.e6fce129.js",
    "revision": "2e49bd57a6b6c273318619f531690f61"
  },
  {
    "url": "assets/js/39.7b38be25.js",
    "revision": "850498bd5d9dca0e28aad903a18cfdbb"
  },
  {
    "url": "assets/js/40.da40799b.js",
    "revision": "d7047377629aa4ac94e5526582ea17ae"
  },
  {
    "url": "assets/js/41.5baa7a82.js",
    "revision": "73cefea893e0f4c22b51ffa255fa9be8"
  },
  {
    "url": "assets/js/42.23d81cea.js",
    "revision": "1864a79c1f7901d62095dc1680261f5b"
  },
  {
    "url": "assets/js/43.b4494bd5.js",
    "revision": "f52f90b9015aae8924421dcf04f59661"
  },
  {
    "url": "assets/js/44.625541be.js",
    "revision": "b3bbc208ecd97755139cd87cc74bca3d"
  },
  {
    "url": "assets/js/45.c74b1ce4.js",
    "revision": "b414f3e17202528af14ceaa3c548255e"
  },
  {
    "url": "assets/js/46.470047c2.js",
    "revision": "20e521fe6b9765404282d699a45fc1e4"
  },
  {
    "url": "assets/js/47.104d25e0.js",
    "revision": "dee8f02b8f4ce375c6d75647d11111f5"
  },
  {
    "url": "assets/js/48.70ce0681.js",
    "revision": "77c64515670e063ff23d01923a7b48e8"
  },
  {
    "url": "assets/js/49.5023f2e6.js",
    "revision": "5daecaac00e4c1436a25bd6894c55a3a"
  },
  {
    "url": "assets/js/5.77a2dbc2.js",
    "revision": "4fed6af347cf093d99b1ef36d7226f71"
  },
  {
    "url": "assets/js/50.93063c99.js",
    "revision": "ef447ea159d936fdeed4775755b7ddff"
  },
  {
    "url": "assets/js/51.b9a33305.js",
    "revision": "1f9a04983237aab53c2da0de2d999cfc"
  },
  {
    "url": "assets/js/52.f9d20021.js",
    "revision": "b17adefb4daadef80edb0c6db5458872"
  },
  {
    "url": "assets/js/53.8e0781d6.js",
    "revision": "713a3c1c39d3a9cf3cd686600a240e59"
  },
  {
    "url": "assets/js/54.9b68b555.js",
    "revision": "525da62f12e3ca32fe9c9110ccba76c0"
  },
  {
    "url": "assets/js/55.56e296a1.js",
    "revision": "c820c9b60e1be44a05d995f045799e12"
  },
  {
    "url": "assets/js/56.b3b24745.js",
    "revision": "c6922d8cd44c04c6b59da0ffdcc8adad"
  },
  {
    "url": "assets/js/57.c0465946.js",
    "revision": "a918fed03b05ed9934851e682be04c49"
  },
  {
    "url": "assets/js/58.ab5c5e78.js",
    "revision": "bd98eb425edb21f9341f46d62e334426"
  },
  {
    "url": "assets/js/59.507d999f.js",
    "revision": "bc573a3857d49ed5780eb7227ef17d99"
  },
  {
    "url": "assets/js/6.a209c748.js",
    "revision": "b5b0025b23d4ea360e93cc341c6f976f"
  },
  {
    "url": "assets/js/60.a057315f.js",
    "revision": "42df3bc5c424aa260bc7742238835cee"
  },
  {
    "url": "assets/js/61.e222c4fd.js",
    "revision": "b67f5cdb897fd9160cc6f3afb48a4bec"
  },
  {
    "url": "assets/js/62.7eb72ecd.js",
    "revision": "0d518c7f9d353e310b7b9e62ea5794d2"
  },
  {
    "url": "assets/js/63.82b76287.js",
    "revision": "27139629100bbd3c19f35478c1590159"
  },
  {
    "url": "assets/js/64.8ac2dfc6.js",
    "revision": "c1b480a6fff60c2f8debdc12a685f097"
  },
  {
    "url": "assets/js/65.e0886102.js",
    "revision": "b94ef34ab135773e9bb9802af874bff5"
  },
  {
    "url": "assets/js/66.333ab0ae.js",
    "revision": "ab54a126cb8097806898508e26c121de"
  },
  {
    "url": "assets/js/67.6b0e2b9d.js",
    "revision": "0e83718d0d2a53a50dc72aa3e4146743"
  },
  {
    "url": "assets/js/68.82a9afa9.js",
    "revision": "45884725edaed8e5e998263a05af6475"
  },
  {
    "url": "assets/js/69.36d38156.js",
    "revision": "71326fff1bea29253ce847b5e0a9d23f"
  },
  {
    "url": "assets/js/7.c2a75d6b.js",
    "revision": "895700601193c449510ee6debd4bd369"
  },
  {
    "url": "assets/js/70.f238b457.js",
    "revision": "b1f114f1243f8c557ded795e7fc9c17e"
  },
  {
    "url": "assets/js/71.a6a2500d.js",
    "revision": "46c686b0362c714c4ddbb5a3adf67268"
  },
  {
    "url": "assets/js/72.bc08dbe4.js",
    "revision": "32c92d8c1888c504b7f5d6f619f34176"
  },
  {
    "url": "assets/js/73.a435be48.js",
    "revision": "1089343188c9279efbad4c59119d96f5"
  },
  {
    "url": "assets/js/74.e703a976.js",
    "revision": "f6cbf019899b4c78677953ab6cfeb452"
  },
  {
    "url": "assets/js/75.632a9660.js",
    "revision": "5dd4e6407d5386672b95563c79d67013"
  },
  {
    "url": "assets/js/76.2e29768b.js",
    "revision": "7ceb433602a6ee226feabdf67fdb798e"
  },
  {
    "url": "assets/js/77.107a3ba9.js",
    "revision": "78cde57ca08d1841a674d76636c26674"
  },
  {
    "url": "assets/js/78.1e4c4fce.js",
    "revision": "737276e8361b8b317ebc6c741bb671e3"
  },
  {
    "url": "assets/js/79.564e21df.js",
    "revision": "04410aeba2ba1f9dd9071f9c58d0099a"
  },
  {
    "url": "assets/js/8.1e268e56.js",
    "revision": "b4481b24ececa060efdcbb4d4c16e06f"
  },
  {
    "url": "assets/js/80.eaf98f29.js",
    "revision": "241fcd108ffd7a561ba9fe5aa623542a"
  },
  {
    "url": "assets/js/81.630a5dac.js",
    "revision": "d523e6d1b7b04b62e78a39dc5a38bb90"
  },
  {
    "url": "assets/js/82.18f9665d.js",
    "revision": "fa329a26add475adcb0787a50201428c"
  },
  {
    "url": "assets/js/83.0ebc134e.js",
    "revision": "1bd3bd678d4dbaf9ad03ae7eb91e2c20"
  },
  {
    "url": "assets/js/84.258ae3a4.js",
    "revision": "b610901fd67643cc50dcf496019a4ed0"
  },
  {
    "url": "assets/js/85.442d70c9.js",
    "revision": "645815875d198a42ce1d1fcb06ecfc7b"
  },
  {
    "url": "assets/js/86.ff7aad40.js",
    "revision": "841f072e8e48c2159a388534cb6639ba"
  },
  {
    "url": "assets/js/87.8f1a34f7.js",
    "revision": "2be3c74bf03258cf5dbd77b39f6064e2"
  },
  {
    "url": "assets/js/88.2373979f.js",
    "revision": "fc2b567a0d0dd235cf5b996f7ff4bb28"
  },
  {
    "url": "assets/js/89.30892e6f.js",
    "revision": "56f32ab793ccf5a31892ef0c800b5712"
  },
  {
    "url": "assets/js/9.31e8ba3e.js",
    "revision": "72ee4f6394704723a66248bd982ad0ac"
  },
  {
    "url": "assets/js/90.0900889c.js",
    "revision": "3cdda39d5fa973f66de7f35479cc3bfc"
  },
  {
    "url": "assets/js/91.ab55480c.js",
    "revision": "83e10661d5693fd5b149e0d1125a6028"
  },
  {
    "url": "assets/js/92.9e120b41.js",
    "revision": "a9946c5d10682149b671a4b8cbbf6268"
  },
  {
    "url": "assets/js/93.599971e2.js",
    "revision": "0e9b2a0ee0c0c24bf09a04f3cdaa6da1"
  },
  {
    "url": "assets/js/94.ea882b04.js",
    "revision": "f99f520aae67edb13de4f2ab5c15d884"
  },
  {
    "url": "assets/js/95.11e6ce9c.js",
    "revision": "f0e4b969c0c058f17c9ba7dec6421593"
  },
  {
    "url": "assets/js/96.ec7ec3ab.js",
    "revision": "eaaba7b8d56e5cb7646e41fb2aa2ca2e"
  },
  {
    "url": "assets/js/97.00a8474c.js",
    "revision": "96d49798fcc6e28ceb0171db3fcf6e8b"
  },
  {
    "url": "assets/js/98.33d1d48e.js",
    "revision": "199e0f670f235256851e047e40fc77aa"
  },
  {
    "url": "assets/js/99.6ecf989a.js",
    "revision": "606049b16db300cfd79f18e2ad3bd7c7"
  },
  {
    "url": "assets/js/app.6e4e209b.js",
    "revision": "071e0ad392e27d2e5281c1f18b12629a"
  },
  {
    "url": "assets/js/vendors~docsearch.271cdf46.js",
    "revision": "d04c5014c7c9fde928f0d4430f604c0f"
  },
  {
    "url": "assets/js/vendors~flowchart.ecccf96e.js",
    "revision": "f21229303c3d541c45b26ba3228dee77"
  },
  {
    "url": "assets/js/vendors~notification.daa49b46.js",
    "revision": "8d8a269d5721ac98f5071696aea2ed1a"
  },
  {
    "url": "config/index.html",
    "revision": "e4c0edb372eec1a4ba2651d7c4465233"
  },
  {
    "url": "faq/index.html",
    "revision": "702a4d3761414b66060eb84ad8f96f4b"
  },
  {
    "url": "guide/assets.html",
    "revision": "e5e4354f9232aefce164771374d937c8"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "1c88baf8ff44d62f03fc4b66d0917829"
  },
  {
    "url": "guide/deploy.html",
    "revision": "457e01d06366dc60bb9ae9503349b14a"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2c80a887c646ca914552c0df82870168"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "a33f089648e1fae98ae447e7f5ae46c4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a93984a1870fd04cc1cc6fed8362c7fd"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "bf99899c98e52e99abc530d6cdd22015"
  },
  {
    "url": "guide/i18n.html",
    "revision": "232e8887e97c729ffb4049016b799889"
  },
  {
    "url": "guide/index.html",
    "revision": "b68311f5ddcf3279e7569593694356c6"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "103dc9c038c4bcd2b64d177007559256"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ed282dbfb546fb63f35209707601dc05"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "b67acbf3ee606f96c81fab92cba5a23a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "135f5587db12e8ea903a96ad951b005f"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "c7d3cf3705838dc5a9e3d75188682f5d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "275c2b57ad3d0e41d59a0eef41c81a2b"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "2ffffd237ab7dbd561e53c5df8261e09"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "5dc1a4d4ad8907d10a59216161fb3305"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "53367bae4d11b273ac6f4f170dfbd5f1"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "30c1064417233dd7c555a58832b172a0"
  },
  {
    "url": "plugin/index.html",
    "revision": "518c195b607173df3b37b712bfc91cb2"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "45fcf2e3f59dcbeee98594affd6ad9e5"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "7decf1db0609455d1f7124fce9d19bd5"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "79510343fcd6b3eb685de176089c7d99"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "808ff6eb83097ea429cab8238e59839b"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "280433880f3c63fb3fe7259d66f0eb5c"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "c764e8a77b2d11f1c21aa58c319ec244"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "b1bbadd2fa401d3145d0682fa1e53263"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "83d35deacfe2e2058b7f802fc6e2828b"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "6388cec199819f2234e913dc3dd08649"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "b337eea21768a7ef86223589f5b6977b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "b5984f9bb5f00793bd2b012d4d190dd6"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "ad72e76df961f4693f2e377f3a5fc46f"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "0fec2419c909049404bf89539882e70e"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "99303403d26958decf396953f0c5e8ff"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "8185780e8d64898ce07f320680e38fda"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "88f8c0dc366cc8abe49d41bca12de3b2"
  },
  {
    "url": "theme/index.html",
    "revision": "ad284908d54c58d54502e740d1a46234"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "5bfc0613ad8256a2ed0184c4d99fa0ee"
  },
  {
    "url": "theme/option-api.html",
    "revision": "107357fae492625bccdf0f40feb648cd"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "32ad75b4811e89f79d117eda62b16a9f"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "bec138c6ca1a30cff43a51d5f663b3f5"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "59eb856d89e4327c7221360678144bf2"
  },
  {
    "url": "zh/api/node.html",
    "revision": "a8044a56a20586b238686e2c56cebe6a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "8de8a5ed5d3bd4bcfa263000d9b16d2c"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "a191d563d219bafa1badcdccd9f7db48"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "0698c9d3198c053d0e47108a9368c7c3"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "fcaa6b2d59811036208af93cb661a3f5"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ae4af8f2d77d1b81f6437695961d9bd3"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "c189d29767d0b582a38abce1a13711a3"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "d4aa325539dcbb6d209c9df68445aab6"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f0b5699c4c50d428039c8de523ea11d6"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "a84c0aa133410f4e4c79ed76c537912b"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "288eb485880a30e97e1958a741557e82"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b4345ee19a5e8267fa1a61f4b6485504"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "5acffdc62b38193c31cb6bc7690ebb5f"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "5adb46ca833806304ce45b76be13b76f"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "963827b8d6cd9679e48010ef63e6b23d"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "99888adaf239d2115535327a836421a2"
  },
  {
    "url": "zh/index.html",
    "revision": "e4046b48a92092fc7c1d8efd3b4d6fbf"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "0a444d3b3ff9ee0ce9366046d6c8fad8"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "5dc7c8c5ebd864d42b4168f5aaaf1c81"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "f50ba2580f33b49e0d6d9d65162ee672"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "5d82fe4d3143c1f4afd051d022e4ad0a"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "7d0ae26e22659dfa99280b85faa7fd08"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "dea36fe3d7cb842f71d7732de5388bf3"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "dd131e54bc6306269c61f762e17f49b3"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "73d8ed711e4d424e892a9dddd27579cf"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "a5387f4920939f8b822cbda77823fb63"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "e29b4631058fdc0ff237962f69f0c7fc"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "9ca4f69cf2ab0173b12454db5b867e6e"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "70a52ea3ae1f3892b00419ab10a79e20"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "a58696c31a7608d53b6343bca2af1a65"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "931ab754fc784fa86765a5d8a8890d0b"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "3bd5cd1e61bfbe385f3d0cd6044622bd"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "76e675717fce189896d597736efa32c4"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "f2e6bebee8f7321afb2956c3be07c4e0"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "1f6035fc053aea76953be1d09a8ae09f"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "fb7485234530916e7132f84c4d2513eb"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "5cc26f91093a98ac847d92f60aa2577e"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "1bff979ff364077a3c27e5bbad5383ee"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "1f9c33eacc9c1907ba19735134289a67"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "871deb9eb6bf89865b23b1d1c990b543"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "8cf53ba6dfa0ef378e064ffd8a064b2d"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "1e7f9a14aa18b592912005cd631b63f9"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "8f9fa982de1deb55ece41322365967b9"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "83c8406b28763d0dbfc14203bfc60d24"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
