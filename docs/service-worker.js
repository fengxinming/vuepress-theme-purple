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
    "revision": "4478af58722249d9d12893e3adf54826"
  },
  {
    "url": "api/cli.html",
    "revision": "eeea3ab5e4cd5b7787614ad39bdea436"
  },
  {
    "url": "api/node.html",
    "revision": "d77ec1d309d69da9f190081134ecc466"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.8e5bdfec.css",
    "revision": "fe0c74f22ba700c053ec1d1ea25f2bb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4fde347c.js",
    "revision": "499741e193b695e9028ede803672cce6"
  },
  {
    "url": "assets/js/100.10cff276.js",
    "revision": "fee723729abc1055f7fca7fcf73a1551"
  },
  {
    "url": "assets/js/101.4490c8d4.js",
    "revision": "b4f8657e6602df1dad2b563ab9bb75fa"
  },
  {
    "url": "assets/js/102.3d317cd2.js",
    "revision": "45e43bb1a9b86e80b2b9684e15303122"
  },
  {
    "url": "assets/js/103.38bc5c48.js",
    "revision": "17f8c530e07dc0ea40555d8acbda6533"
  },
  {
    "url": "assets/js/104.59d323ae.js",
    "revision": "cc320920c0d47edd7b9724c6f77bf0e0"
  },
  {
    "url": "assets/js/105.e10c54a4.js",
    "revision": "fd7b6de824e10781dfced8cca855d834"
  },
  {
    "url": "assets/js/106.f5bee1d9.js",
    "revision": "5c340838b2bbf31b1ead451a62e3d756"
  },
  {
    "url": "assets/js/107.94b3a694.js",
    "revision": "f68eab29088b80b612a24c4a7831d9c9"
  },
  {
    "url": "assets/js/108.f074025b.js",
    "revision": "292655bee9efabf72aaecf5b4c0d1639"
  },
  {
    "url": "assets/js/109.79d2ff3a.js",
    "revision": "283523a470e00c9d2c18f7ed02ac9d54"
  },
  {
    "url": "assets/js/11.986806c7.js",
    "revision": "baad761bd89efa1898755f972e8eadd9"
  },
  {
    "url": "assets/js/12.f171eb62.js",
    "revision": "457c0e39f850c32ef1d474dba7650bb8"
  },
  {
    "url": "assets/js/13.7720308d.js",
    "revision": "6790fa68530c6104b83c10f11e5aee10"
  },
  {
    "url": "assets/js/14.28eada11.js",
    "revision": "dea7a29af91f73c52970e740c908dacb"
  },
  {
    "url": "assets/js/15.300b9302.js",
    "revision": "ca55d6fb904c5ad9fb3bb3908c985f99"
  },
  {
    "url": "assets/js/16.7c57b900.js",
    "revision": "61345d32f4949d7f80427f30ef2765ac"
  },
  {
    "url": "assets/js/17.1d23b657.js",
    "revision": "27d58f98bd3adad0f2fb5cb24b4ee206"
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
    "url": "assets/js/20.a9f27915.js",
    "revision": "6671c8d01fe7b204d313b22019c596bc"
  },
  {
    "url": "assets/js/21.7ff97dd5.js",
    "revision": "1011b46b2f9cc36437cceca576563baa"
  },
  {
    "url": "assets/js/22.41431560.js",
    "revision": "b75820a8bd1fc404f3979d7b5e4b0b66"
  },
  {
    "url": "assets/js/23.08ec9b5e.js",
    "revision": "47ded0c8ca77ebfe174cf8a32b98327c"
  },
  {
    "url": "assets/js/24.3f25be45.js",
    "revision": "731d0981a39f8340092e5d7c77208a4e"
  },
  {
    "url": "assets/js/25.75b75e6a.js",
    "revision": "a162020ce770b09005351437ba64172b"
  },
  {
    "url": "assets/js/26.7c8d5835.js",
    "revision": "d87ca9534b3ca265dc7ab1cedcf06d0c"
  },
  {
    "url": "assets/js/27.159398b8.js",
    "revision": "8ec9bc7f2b3a4312d5fd478b8776ec55"
  },
  {
    "url": "assets/js/28.6627cb19.js",
    "revision": "eb44d7de831a9a9a030f2cedd4a6284e"
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
    "url": "assets/js/32.5bb99229.js",
    "revision": "ade89484bc20c9fb5ffad4ad1c998c6a"
  },
  {
    "url": "assets/js/33.78eae83e.js",
    "revision": "1a8c9edcab628d68508702b2ee15a476"
  },
  {
    "url": "assets/js/34.c9d68712.js",
    "revision": "429906569592e10a6d79d7e448dce0ef"
  },
  {
    "url": "assets/js/35.15cdddab.js",
    "revision": "5724d4baa625a8cc66eaf18bbb628773"
  },
  {
    "url": "assets/js/36.1715b7a6.js",
    "revision": "f30998f257af59fdad9363ebcdd7be1b"
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
    "url": "assets/js/39.1b3df917.js",
    "revision": "c6fc11dc2cbfdaa308417881b9d787cc"
  },
  {
    "url": "assets/js/40.3ecedeba.js",
    "revision": "6099cb2cd900829113fde4f45e0a9088"
  },
  {
    "url": "assets/js/41.5baa7a82.js",
    "revision": "73cefea893e0f4c22b51ffa255fa9be8"
  },
  {
    "url": "assets/js/42.b695e882.js",
    "revision": "ea81bee4077cdb823ca1e90f7496723d"
  },
  {
    "url": "assets/js/43.b4494bd5.js",
    "revision": "f52f90b9015aae8924421dcf04f59661"
  },
  {
    "url": "assets/js/44.40cf074d.js",
    "revision": "39c79a4485a5dea5255858d42afb674a"
  },
  {
    "url": "assets/js/45.3fd5ac3a.js",
    "revision": "e136a5253279a7a519cea0d812f911d6"
  },
  {
    "url": "assets/js/46.8c844a4d.js",
    "revision": "e1bdc4d199b552f49f3a4b83fb42b5bb"
  },
  {
    "url": "assets/js/47.b9ce0124.js",
    "revision": "55becfcf32ac27afc2bd8412484c9d9a"
  },
  {
    "url": "assets/js/48.70ce0681.js",
    "revision": "77c64515670e063ff23d01923a7b48e8"
  },
  {
    "url": "assets/js/49.9ac3e0a2.js",
    "revision": "3bfe1555256ba437282073db7bd07cbf"
  },
  {
    "url": "assets/js/5.77a2dbc2.js",
    "revision": "4fed6af347cf093d99b1ef36d7226f71"
  },
  {
    "url": "assets/js/50.0758b4b3.js",
    "revision": "ae00209cd9d4d0d4b3146b8ef02b7b71"
  },
  {
    "url": "assets/js/51.4f4a69aa.js",
    "revision": "aa52fb13d58c5535192b96aae8dae41d"
  },
  {
    "url": "assets/js/52.4224cb62.js",
    "revision": "ffd279ddcf348752be811ab3715accc1"
  },
  {
    "url": "assets/js/53.aa03f640.js",
    "revision": "052c3c92d581b7ca72eb2f111428d1a1"
  },
  {
    "url": "assets/js/54.9b68b555.js",
    "revision": "525da62f12e3ca32fe9c9110ccba76c0"
  },
  {
    "url": "assets/js/55.a0e086c4.js",
    "revision": "87a57a10e8a10a1552786c5e7c727702"
  },
  {
    "url": "assets/js/56.a12ea85c.js",
    "revision": "e22b3e3e010ef852c19a1d4ff0d9929c"
  },
  {
    "url": "assets/js/57.05250b08.js",
    "revision": "54ae095874269ebe768e12d78db03c4d"
  },
  {
    "url": "assets/js/58.cf60fa4a.js",
    "revision": "c52e83891cb3f037437a4837d2fdce42"
  },
  {
    "url": "assets/js/59.56aa7251.js",
    "revision": "877fa7f583b9b9f58fe77eb999c64d87"
  },
  {
    "url": "assets/js/6.a209c748.js",
    "revision": "b5b0025b23d4ea360e93cc341c6f976f"
  },
  {
    "url": "assets/js/60.765a99ba.js",
    "revision": "543cb6a17439b6551fdc503c5c0be6c6"
  },
  {
    "url": "assets/js/61.623accc4.js",
    "revision": "1358b2355131445d6b1cd4452a1730cc"
  },
  {
    "url": "assets/js/62.bd2821a6.js",
    "revision": "bed99750504012d7166bc31bea708175"
  },
  {
    "url": "assets/js/63.82b76287.js",
    "revision": "27139629100bbd3c19f35478c1590159"
  },
  {
    "url": "assets/js/64.b5bc7350.js",
    "revision": "bf1b1292d947f8b7bad5e5576ebfc374"
  },
  {
    "url": "assets/js/65.461a513d.js",
    "revision": "111ee8bd0883fddfbf499a6b2be0f66e"
  },
  {
    "url": "assets/js/66.f66625e2.js",
    "revision": "ef96ecb3a453546fcad25a09e98d1ec6"
  },
  {
    "url": "assets/js/67.5eaa4151.js",
    "revision": "77295122c791d6675b9f9efb35ef5cf0"
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
    "url": "assets/js/71.d850ef5c.js",
    "revision": "612c8d8de0481b35247f44d4b9a8d5cb"
  },
  {
    "url": "assets/js/72.04f500d9.js",
    "revision": "284ec7a0f5aad0f6bc696bddb2fdc4e0"
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
    "url": "assets/js/75.025cca31.js",
    "revision": "0637a5f0f7cb126a5ab1fcbf209f98ec"
  },
  {
    "url": "assets/js/76.653fa03a.js",
    "revision": "42194796d1a78ff4b9d9c5b15988272e"
  },
  {
    "url": "assets/js/77.09f13430.js",
    "revision": "3b2ff6448a1e39404e8b0237902f4b7c"
  },
  {
    "url": "assets/js/78.799f8750.js",
    "revision": "b1a963ad677da3d699989848eea59248"
  },
  {
    "url": "assets/js/79.7a072774.js",
    "revision": "93a96390ec1da399b63ebc43b4cab24e"
  },
  {
    "url": "assets/js/8.1e268e56.js",
    "revision": "b4481b24ececa060efdcbb4d4c16e06f"
  },
  {
    "url": "assets/js/80.e1f31e32.js",
    "revision": "334869728eca8c334c91f1d625c4169e"
  },
  {
    "url": "assets/js/81.692d2350.js",
    "revision": "cb16e52101571cde2bda30f76b835390"
  },
  {
    "url": "assets/js/82.18f9665d.js",
    "revision": "fa329a26add475adcb0787a50201428c"
  },
  {
    "url": "assets/js/83.c91a5bd5.js",
    "revision": "3e5e623e97794fb6ae5078d927858230"
  },
  {
    "url": "assets/js/84.7247b2b1.js",
    "revision": "63379d8257200f7ed34205f524d90739"
  },
  {
    "url": "assets/js/85.442d70c9.js",
    "revision": "645815875d198a42ce1d1fcb06ecfc7b"
  },
  {
    "url": "assets/js/86.2be0f5d5.js",
    "revision": "6f6aef60b76e180cdada00362c129da6"
  },
  {
    "url": "assets/js/87.ecf27922.js",
    "revision": "718124f5a543c96c6f3ceb9d6530b7f0"
  },
  {
    "url": "assets/js/88.6d0c26ea.js",
    "revision": "56e55834c3c80b51ec846b42a88e53c0"
  },
  {
    "url": "assets/js/89.30892e6f.js",
    "revision": "56f32ab793ccf5a31892ef0c800b5712"
  },
  {
    "url": "assets/js/9.bf3c6fda.js",
    "revision": "038ba4830364903a5ed9a10dab6b120d"
  },
  {
    "url": "assets/js/90.2fd67c97.js",
    "revision": "37c71ab272ce15eacd10c7aaf15580c1"
  },
  {
    "url": "assets/js/91.385b66c9.js",
    "revision": "bc3eb91a91509e2cd12dc477594d973f"
  },
  {
    "url": "assets/js/92.9886df12.js",
    "revision": "758682de0e7a18b5e85d2e12bca2162a"
  },
  {
    "url": "assets/js/93.96f67205.js",
    "revision": "1b3eb49260171aca9b5cca949e14b7ee"
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
    "url": "assets/js/96.b2850a68.js",
    "revision": "4ad59831586185ec560b15fc0fd58d8d"
  },
  {
    "url": "assets/js/97.53119e5a.js",
    "revision": "b62c1354b8e133984f43d257675edc23"
  },
  {
    "url": "assets/js/98.33d1d48e.js",
    "revision": "199e0f670f235256851e047e40fc77aa"
  },
  {
    "url": "assets/js/99.dea41a45.js",
    "revision": "9af0bd089b9a6d1140a3d4e1bddab4ba"
  },
  {
    "url": "assets/js/app.4e7ef826.js",
    "revision": "cdfda784ac12d7214eadc4691fc79ffc"
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
    "revision": "403bac1e03dc3f788ad76eed6ff94773"
  },
  {
    "url": "faq/index.html",
    "revision": "117aa881dd0663abf8f00bc113d0af37"
  },
  {
    "url": "guide/assets.html",
    "revision": "13a7689736767119c7187b7238d63806"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "b767aa3fe8816e1006d3a68242a29f15"
  },
  {
    "url": "guide/deploy.html",
    "revision": "76e7514385544666881040dd4361f423"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8803f410c1ddbfc117f2b1fe10726880"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "df2ab2b9b22e381c77f9197ff2fa904a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1fc4616dea86974df0e8bbbdc581b9b6"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "634e202dfc705e5d1f8cc493d8aad541"
  },
  {
    "url": "guide/i18n.html",
    "revision": "b2281df12282dd486fa086b069bdf128"
  },
  {
    "url": "guide/index.html",
    "revision": "e807d85041771ea08a4cf73f8fe22630"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "854307af27cad4b4195203fafb5d1a34"
  },
  {
    "url": "guide/markdown.html",
    "revision": "dc01caa2980dcb4881ea5139a3407f77"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "c1322ca82aeb77f839aacd434d99031e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "a385d45bff7882af5743d6093b726fb0"
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
    "revision": "be5c53e039346b40980a7204f85e8534"
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
    "revision": "e5603056b1376bbc09caa214e16b0143"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "9b843a0f98019f5da82bb6a6339c2565"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "ac89b2a28ba826ba39fe390d47cda6da"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "81642c7a35514ab87b8eac300958a3e0"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "1d92aebf4517f4733689d8dda40f7cf3"
  },
  {
    "url": "plugin/index.html",
    "revision": "efcbfd6494ba2905e4adf76d23f9892e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "c1b83ab559455c3c73e895023b87a13c"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "d114ae0f8d9543e3be09f49369cf2055"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "98eb150fe83aec17e79d4c46e4f1008d"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "6acc98af2b8cd90c6ff03b7c2c9d1476"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "671c9f079d5796a56adc8fc4dab2061d"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e78f8916357204d6c636201c7702d523"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "5637e4eeb752c9c4a579f084d40122ab"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "388c5a901e4b5d75e23b2ac294c54906"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "2741e727b7fa6b2746a84c4d32785f64"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "d2691e7ccd6faca079f30b091ebfce68"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "735f73a714e410e264dca94f676d213f"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "5ac54446612a6a9cfd65066f5866c05b"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "32eae4f27e73e7f31f62979ea1a7fe7c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "8abf84257bfbe613053852fa37f5912a"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "6b3b41fbc6ffa4d1abeb82f7c5263072"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "bf76747dbca3cebf7331a3e3dec10c04"
  },
  {
    "url": "theme/index.html",
    "revision": "fe92b3fd4a2720f8b99522b103b05252"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "25ed3e50f6224bc5cca3bc3c4bad37ef"
  },
  {
    "url": "theme/option-api.html",
    "revision": "d2961a5288c38c3ae0b9057abfdb1b93"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "aa8445b1db55a520f6f2cd6ca322d50a"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "95335d28e58ac8e89da1b8f7759979dc"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "bf3d2d6f04bfc44bda7d99e491c0f2f9"
  },
  {
    "url": "zh/api/node.html",
    "revision": "a381163faba8f8ef3376c55304db4ec1"
  },
  {
    "url": "zh/config/index.html",
    "revision": "36362853c9f9de0217e35ceaae8266d2"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "2586da71eb7756fcc335ee971d06a515"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "4ddb124a3a9938e68e17d38ec51aacae"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "38dd710dd48fe6bb81b448f6fa08a0a2"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "3eaefa76ea6663962e3abed143d2dce7"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "740104335a41962390c8559acd450c34"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "a7b5ed9e4b972bfe41292836c7d9d652"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ce65b5d31efef62c52abcec7727fde13"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "d5694eb7c989af6613982b19f0c9f005"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "9b9c02363fd393eec79e0df8aeab83f5"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "af8493e2c1ed0cff8a23cfbb88769c61"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "72ee8e6def57730142b774c345f9eea8"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "5f0f58f15dd76059b4aef927fbf06d45"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "64f72586bdafbdf8b870d48884ae7995"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "b981e8949cc6d00978e3fd39a639b3c4"
  },
  {
    "url": "zh/index.html",
    "revision": "79135e6a2ccde91c872edaaec40a1a84"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "1cb78f52b18a075ce5e608c5aeaba367"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "1fb89dc4dacf3e159958e3cdbf582f0a"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "2337fa010c6755b450e0e015b2d27ec9"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "2bb58c06fcc07d416b35c13e3c54e48f"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "1e8ae3a1d272ca18888a7d68eff82d64"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "09aaf34fd1851c4a739884e80bdb900f"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "9ce265999af3b496b9b0b6d919eeba3b"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "7a7103339279340257fd3f28f3efff32"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "581cd47ba9e7fd8b826a428a801920c5"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "6549290533546b8dc3c87eac3c735acd"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "2766150df9418b6341f8c5da079bd26a"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "98eabba0376fd94675e23ecb4ea366f4"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "d18f567a97e1cba445d4e1e79aeaeef4"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "ffcb786de507917edeacd6b69486b20d"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "7c71e9d880392b01b90b11945bf775a4"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "029320fb56aaa51bb455fc919eea832d"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "51423d09922b40de4581e1c5dd26def1"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "695dfa26df2247d32f032384e8e2fd2e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "c8316c21ff39d67cd834c483e8f533f1"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "9c77fb3bf56b058113a34e5b2f471cbb"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "4d5b25584811a4d86ce294d56b84a600"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "cad82ec6862eae13aba7fe79fbe8e4d0"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "a0499c010cb5de820faca95052d32635"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "69c26362d257c31daf8d6df99bdd58b6"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "2b04e34715ae9e82403ef8af3991b793"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "641d75fcb9fc593ef983d719b265c5d6"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "24fbd2807cf455aef1cb86152975d85a"
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
