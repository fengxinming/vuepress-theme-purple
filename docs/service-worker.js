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
    "revision": "301b4638e0913ea3b8306c7d5d6fa0d3"
  },
  {
    "url": "api/cli.html",
    "revision": "9f8850b3ef425359c6a54f018b5b4721"
  },
  {
    "url": "api/node.html",
    "revision": "9e0cf67da1e7ab6c0a3bd8c513557173"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.2ad76ed4.css",
    "revision": "7a6c8b95c6749eeab435ddc06d01c0eb"
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
    "url": "assets/js/100.10cff276.js",
    "revision": "fee723729abc1055f7fca7fcf73a1551"
  },
  {
    "url": "assets/js/101.4490c8d4.js",
    "revision": "b4f8657e6602df1dad2b563ab9bb75fa"
  },
  {
    "url": "assets/js/102.6d1f2236.js",
    "revision": "2e78d61774698b2a31c5f6c4d0f06871"
  },
  {
    "url": "assets/js/103.49d8c689.js",
    "revision": "24e6891fe2ee172b4c3b7a3b2dfca172"
  },
  {
    "url": "assets/js/104.746759c5.js",
    "revision": "fff0a12a436f6a585c40b40093217593"
  },
  {
    "url": "assets/js/105.d7c16f04.js",
    "revision": "f69fca64ba7cb09878280d8749124b16"
  },
  {
    "url": "assets/js/106.cb20dfcb.js",
    "revision": "b3c983a1a694ef5e07fd0667dbfc0dca"
  },
  {
    "url": "assets/js/107.2dd91eff.js",
    "revision": "58a4c3388a2f4d0cd8f468dcbfd54de3"
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
    "url": "assets/js/11.4efaa226.js",
    "revision": "79b84521464ef7f08c89cfd97a1208ab"
  },
  {
    "url": "assets/js/12.f171eb62.js",
    "revision": "457c0e39f850c32ef1d474dba7650bb8"
  },
  {
    "url": "assets/js/13.17eed2f1.js",
    "revision": "8be1cbb69896fc80c365e5183f0e3cc4"
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
    "url": "assets/js/31.bd9d485d.js",
    "revision": "3e2572eb9b1ab29d160a438c1c027523"
  },
  {
    "url": "assets/js/32.997af9a4.js",
    "revision": "c46e9112e16c2580298be179d1387d24"
  },
  {
    "url": "assets/js/33.78eae83e.js",
    "revision": "1a8c9edcab628d68508702b2ee15a476"
  },
  {
    "url": "assets/js/34.603c854e.js",
    "revision": "062911cb4071218b3c47741a25c87e9f"
  },
  {
    "url": "assets/js/35.a352269a.js",
    "revision": "1469a39510c533ad7ea8b34a02fc715e"
  },
  {
    "url": "assets/js/36.99c982a5.js",
    "revision": "74148b8d0738a148817ecc8aff381800"
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
    "url": "assets/js/77.107a3ba9.js",
    "revision": "78cde57ca08d1841a674d76636c26674"
  },
  {
    "url": "assets/js/78.1e4c4fce.js",
    "revision": "737276e8361b8b317ebc6c741bb671e3"
  },
  {
    "url": "assets/js/79.9c6cc890.js",
    "revision": "fb652a029b5772df406c85a898916df6"
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
    "url": "assets/js/81.0f9b7bef.js",
    "revision": "d27798a77a3b9ebf3b4623bab9f68f0c"
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
    "url": "assets/js/84.f4bee1c1.js",
    "revision": "040ce92fdedd272dbacb43d7cfc64c97"
  },
  {
    "url": "assets/js/85.6efd167b.js",
    "revision": "bee648d0cf8a3777d89e48665e0e2488"
  },
  {
    "url": "assets/js/86.2be0f5d5.js",
    "revision": "6f6aef60b76e180cdada00362c129da6"
  },
  {
    "url": "assets/js/87.f6ee054e.js",
    "revision": "7ad41a0be5a09c0c35ea998e4f750513"
  },
  {
    "url": "assets/js/88.47a41b4b.js",
    "revision": "25a64184e82cd5899f1572277185f829"
  },
  {
    "url": "assets/js/89.89311ecd.js",
    "revision": "f74ba9096c64011d610ca6cd79e40ad6"
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
    "url": "assets/js/91.16095075.js",
    "revision": "647e049a2ee394b79b9df8c3ab4ae1e8"
  },
  {
    "url": "assets/js/92.9886df12.js",
    "revision": "758682de0e7a18b5e85d2e12bca2162a"
  },
  {
    "url": "assets/js/93.12ce0416.js",
    "revision": "578c05338f5ba8547ad2fb5171e913c5"
  },
  {
    "url": "assets/js/94.68b0b3f6.js",
    "revision": "78f3664e006f23408c8d5d922585ec66"
  },
  {
    "url": "assets/js/95.11e6ce9c.js",
    "revision": "f0e4b969c0c058f17c9ba7dec6421593"
  },
  {
    "url": "assets/js/96.680e84b0.js",
    "revision": "7b5e4714bf26ffcf94358faa5da4a00c"
  },
  {
    "url": "assets/js/97.dbd5ce54.js",
    "revision": "586297976f99a9929baf06b8e655ab7f"
  },
  {
    "url": "assets/js/98.f9b6ae1a.js",
    "revision": "02e44af9ab345491e27da74a1dcbde6f"
  },
  {
    "url": "assets/js/99.e8627910.js",
    "revision": "e33f7fbd4ae30464eb42bbb087c84e40"
  },
  {
    "url": "assets/js/app.dfe9194f.js",
    "revision": "762ae16244bb0b57068a87c9ef99f775"
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
    "revision": "52d664a8f24b303ada4b2bac728f401c"
  },
  {
    "url": "faq/index.html",
    "revision": "9bdf205148399c4ac55cf7345ccf9c34"
  },
  {
    "url": "guide/assets.html",
    "revision": "8d730dd08d17905208078b870c7ca628"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "904ccc1c0df3d618af3f0cce728372e5"
  },
  {
    "url": "guide/deploy.html",
    "revision": "03077988ff2cce29503611fa727a2d98"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "855b4161692418155dedfcb34a97b49c"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "c19e8e0fc18045643abc53b1f1a4c9d5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7910d335940a0cf50d13234dd9dfbb9f"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "10af92437a1236b17e5b5721d24dac12"
  },
  {
    "url": "guide/i18n.html",
    "revision": "bf497165ff45967f1f7a50b1f41412da"
  },
  {
    "url": "guide/index.html",
    "revision": "cadd53e7dbdf4037a7c04e511b9b3c2e"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "eea1db99c099434973537721097f30d7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "3ddc8af4ebb7112e6ceab1d4a1e0e36e"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "d120c80cd89d221ba46e0d8f72c6d197"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "c8bf87e88319c9c447b8faf9f9f6cfc2"
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
    "revision": "1fa24f442ce12a8b030aed22716a7055"
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
    "revision": "906f1621951cd3189a2bb7543efadc06"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "0e6e55936cc24deda9fff182ede50c05"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "d84ff19822144bcc5dc78a248cfa865d"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "49a00fc147d3b618181aaadbc86427cf"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "606e50ce8722577cb0c119b1badffd95"
  },
  {
    "url": "plugin/index.html",
    "revision": "a9695aeaf5eb3af1db6c8bc996cfc8f6"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "bf18423e0a217625c8572917351b43cd"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "d207c64fa55eca5ee7d5ed5c92d3cb65"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "477f5aa0c38618f6ae74b306ee5485a6"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "db951b63cf066add80f615c1d90b8a93"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "e9fa4fa1886dbb5c5dfd3b5a63f325b5"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "7d92a7a2e6dc360ba3b3a274f7e6dfde"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "6cecbb106f891c0e39820e5d74f153b6"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "21ea9c1377d1315bd0df2a7aadac6c48"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "9a0edfa1f57e3754cc9b7e9537a7ea33"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "960f37e610adc9075b4934621031f3cd"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "34af867386e92b4f72cef615b30456ac"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "09b9e42236c24ab9d33812a784536b16"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "c632c8323673d3d4649ffd25ec751627"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "6bc3c4946717a2ac382f96d0575dca5d"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "4777138ef50307174c0375cd15955cb4"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "3af1b44376dc58c416fc6ec79586915b"
  },
  {
    "url": "theme/index.html",
    "revision": "0efb8b319f7d52002b7c360f65313442"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d1910b4e5d554c360d9dc526e85f7c49"
  },
  {
    "url": "theme/option-api.html",
    "revision": "2f46475207a765461571509d0aae4ddc"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "098bb92eef954423c12aef9b3fa7e0c1"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "ce6eeb83674b03546404d284eac70829"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "6373ea56ba9164a3f488bdc1e655e74e"
  },
  {
    "url": "zh/api/node.html",
    "revision": "352cb05eecc96b14bbe55c0249e6f5c1"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d66d91ee6c5b71d8ada0d47031c4f22d"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "21c20b17e405caa69d55bf45a476d08c"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "166bd2157ef312ea868d4f1094e5753c"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "f74a16175644810cb2baabb85ff87990"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "0a7eeac755f51eae1c454844e77cd493"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "33a1193aa549f148577ed0067411eee9"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "5b6dd6b6a932eaf268f925545486b4a8"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "dc0a8ddd077607a75c4a551d912a74f2"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "c76704f61d5241b0ad4d971d7d38ca72"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "647743e851194c3c492f0838a9624ff1"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "82316f3bdf6054d9c2d932fd1d1b023e"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "238be788cb78cdb72b578e43138a8b82"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "fb2fbb6b455991767b8ab2b153a82928"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "a88b3e22dd80219900c9418a0f5304b8"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "2070ea254f44f12bce06255f64f61ead"
  },
  {
    "url": "zh/index.html",
    "revision": "80589d76f0079ec874a7991fc3704b39"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "0e601804b27b92746222cb53d90456bb"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "0b7f463a1e1631dc34da87aa84b95cbd"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "9093c99f049f8b97ba57c152c9b5eccc"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "3256ded77e5bc051b93f45a891717a3c"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "545c2ee82c2a37b9b033c104f5e8be9c"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "3330e3e95c70fa59a4047d7397d6a76e"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "98246baecbbd477c3d3336e5cee1824a"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "d69d0e80097500d982cf9a1c2aebf58c"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "d15131f04a1724e82922a17bbe0b009a"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "165599923b43765f3a862ab8febc3fb9"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "eb95be75dfcfeb26688409be9bdf2e63"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "f096eed76ca9f7a69bd3a9936ad9f98e"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "e9009053bb5cd4d8124b0ea2298b17b7"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "cb5c4e6cb9b0b27f464a3a008803c49c"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "01741b1190d328d7c48d3f19d61ceb25"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "5cdccf578595a0f645a1baa68574d51b"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "6200fac5dbbfc2c8f3d6265f0d273185"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "a5f21f3470c8aa918927da6ef3557789"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "ea232e8835e72bc2167b745832f0b311"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "2565db21e67e0e8f9c4da8ae1c173cae"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "dd39762f166cfab39b36a21a6712cda7"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "3c35043b5e7c226b212ea19d6fba5326"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "c0a6d12533a7725b50ffd4e7520a5416"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "76429db9327e4275d8f8b4020d604080"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "7c8707c3fb2a94dd0b74404f208df1e8"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "01851039bcec70d0717287d10cc0d7f0"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "7415155974b8e1474888f6e5b7b87b05"
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
