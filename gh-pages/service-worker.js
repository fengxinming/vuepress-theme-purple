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
    "revision": "1bb97a701326ddc032875e6387b5e42a"
  },
  {
    "url": "api/cli.html",
    "revision": "b5ebd9761712a9cc6c40fe4f35a16869"
  },
  {
    "url": "api/node.html",
    "revision": "ae78f9239c37c54f487f30981941dcdb"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.c70542ad.css",
    "revision": "27006bdab2d5dce858de84b83d0b7dd5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.123b9194.js",
    "revision": "505d06d90a653f855e7122a201302d77"
  },
  {
    "url": "assets/js/100.26875125.js",
    "revision": "fee723729abc1055f7fca7fcf73a1551"
  },
  {
    "url": "assets/js/101.381ae596.js",
    "revision": "b4f8657e6602df1dad2b563ab9bb75fa"
  },
  {
    "url": "assets/js/102.832e4022.js",
    "revision": "2e78d61774698b2a31c5f6c4d0f06871"
  },
  {
    "url": "assets/js/103.f0b13d14.js",
    "revision": "24e6891fe2ee172b4c3b7a3b2dfca172"
  },
  {
    "url": "assets/js/104.9dd31b0b.js",
    "revision": "cd5961524ee202e5c0205a467060588d"
  },
  {
    "url": "assets/js/105.25fcf98f.js",
    "revision": "fd7b6de824e10781dfced8cca855d834"
  },
  {
    "url": "assets/js/106.7982fb07.js",
    "revision": "5c340838b2bbf31b1ead451a62e3d756"
  },
  {
    "url": "assets/js/107.910cd418.js",
    "revision": "61d6ed9b22e38e9a88739ba85f6f5837"
  },
  {
    "url": "assets/js/108.9c2612cd.js",
    "revision": "292655bee9efabf72aaecf5b4c0d1639"
  },
  {
    "url": "assets/js/109.77dcbc67.js",
    "revision": "eb82ff786b8ffb510e3991171f249d8a"
  },
  {
    "url": "assets/js/11.4bc24b78.js",
    "revision": "626ec9d7ec98a3f5130e69374850b39e"
  },
  {
    "url": "assets/js/12.0d7cc0da.js",
    "revision": "457c0e39f850c32ef1d474dba7650bb8"
  },
  {
    "url": "assets/js/13.42873397.js",
    "revision": "6790fa68530c6104b83c10f11e5aee10"
  },
  {
    "url": "assets/js/14.4b5abe1d.js",
    "revision": "cf6ce0e9b6645a2d270d512a4803fdb9"
  },
  {
    "url": "assets/js/15.7f9a5a30.js",
    "revision": "7c50debf99c46e5554b9e767de1fce87"
  },
  {
    "url": "assets/js/16.efcbdfd4.js",
    "revision": "baf7f87f59a9e2e074914ed7b56f8fa6"
  },
  {
    "url": "assets/js/17.2b84f9be.js",
    "revision": "fe20c240331d0efb30e8aae5ab6b8d60"
  },
  {
    "url": "assets/js/18.7a499086.js",
    "revision": "a10f8329760f51e7eea2d74fe7bd3e7e"
  },
  {
    "url": "assets/js/19.cc564da1.js",
    "revision": "3ebcae7dfbd45c337db2f7ec9b9345be"
  },
  {
    "url": "assets/js/20.d31e6d89.js",
    "revision": "6671c8d01fe7b204d313b22019c596bc"
  },
  {
    "url": "assets/js/21.bc35fbcb.js",
    "revision": "2c1f58312aefa53d45e248eb7d4f6d63"
  },
  {
    "url": "assets/js/22.66be37a5.js",
    "revision": "b75820a8bd1fc404f3979d7b5e4b0b66"
  },
  {
    "url": "assets/js/23.64c89ce4.js",
    "revision": "d2c81c3f0390f67a75d7836ef8b60b04"
  },
  {
    "url": "assets/js/24.1fe2ebee.js",
    "revision": "c6f2da471d657998be2fd39c86ca767e"
  },
  {
    "url": "assets/js/25.88d14da2.js",
    "revision": "72d81f5f30588332e73e658ca77bdf63"
  },
  {
    "url": "assets/js/26.e8f3e47f.js",
    "revision": "580d1edffb2380de107cb882ad826197"
  },
  {
    "url": "assets/js/27.80c79dfc.js",
    "revision": "ecbb84867a4f4f26e55aa81f40ff72ec"
  },
  {
    "url": "assets/js/28.fa54ee82.js",
    "revision": "2de341e753d886268532732362658a5c"
  },
  {
    "url": "assets/js/29.aa6d846f.js",
    "revision": "954c5a13a867f77c2dc4c6c382b88c60"
  },
  {
    "url": "assets/js/30.9ae5a41f.js",
    "revision": "b0387b322de3650ed51306b6796c9bc1"
  },
  {
    "url": "assets/js/31.3739b46d.js",
    "revision": "1ece451b1438ec52c234e8eb4bf8ecc0"
  },
  {
    "url": "assets/js/32.51e6a1c8.js",
    "revision": "ade89484bc20c9fb5ffad4ad1c998c6a"
  },
  {
    "url": "assets/js/33.0eb0c21f.js",
    "revision": "be811dbf94054764df0ac50cfe96665a"
  },
  {
    "url": "assets/js/34.997ea196.js",
    "revision": "f88f9333187fcb76cd19e4b3cc172cb6"
  },
  {
    "url": "assets/js/35.4e28ecbe.js",
    "revision": "5724d4baa625a8cc66eaf18bbb628773"
  },
  {
    "url": "assets/js/36.f2b0a0ef.js",
    "revision": "f30998f257af59fdad9363ebcdd7be1b"
  },
  {
    "url": "assets/js/37.ddf12732.js",
    "revision": "f11c700d2663d64ef6b9fbb434fd887d"
  },
  {
    "url": "assets/js/38.3f7a304d.js",
    "revision": "ec92118ec7820c3e26d6af9060feff11"
  },
  {
    "url": "assets/js/39.4e41b3b3.js",
    "revision": "850498bd5d9dca0e28aad903a18cfdbb"
  },
  {
    "url": "assets/js/40.4a955ce4.js",
    "revision": "2d7194f7675fd418bf8fc12bed5f1fcd"
  },
  {
    "url": "assets/js/41.617da195.js",
    "revision": "29afcc3c24367ee2898c2e1c378e41d2"
  },
  {
    "url": "assets/js/42.21341eb1.js",
    "revision": "aa2ccba5518d9476565a6ee81653dd61"
  },
  {
    "url": "assets/js/43.29fd848d.js",
    "revision": "98f0fdec0bdeec93126bebca52e91971"
  },
  {
    "url": "assets/js/44.3762e2ea.js",
    "revision": "b22c4d623ada2eee7e95bc0643ad2435"
  },
  {
    "url": "assets/js/45.237f4754.js",
    "revision": "b414f3e17202528af14ceaa3c548255e"
  },
  {
    "url": "assets/js/46.70066f56.js",
    "revision": "8f48b37a3f4658f2c44c5951192e1a20"
  },
  {
    "url": "assets/js/47.a4c1d9e1.js",
    "revision": "e7dabae216cdb9c8aa0365da1695048f"
  },
  {
    "url": "assets/js/48.25ab4dc4.js",
    "revision": "45f561043cf9962edbb55333ce7ed7ac"
  },
  {
    "url": "assets/js/49.30989237.js",
    "revision": "0734d21c5c38a06331aa033aea1acd5c"
  },
  {
    "url": "assets/js/5.792972af.js",
    "revision": "971532afbaeb248a1702d04cc90dd44f"
  },
  {
    "url": "assets/js/50.ccf19158.js",
    "revision": "ae00209cd9d4d0d4b3146b8ef02b7b71"
  },
  {
    "url": "assets/js/51.0f47cbed.js",
    "revision": "47180589e591dca7695a8b12192257a9"
  },
  {
    "url": "assets/js/52.11a35ca4.js",
    "revision": "94166c4f691016aa056b466e9f140ed8"
  },
  {
    "url": "assets/js/53.8a14e5c8.js",
    "revision": "713a3c1c39d3a9cf3cd686600a240e59"
  },
  {
    "url": "assets/js/54.a89fbd91.js",
    "revision": "7bf48164a17ee764afb6c3e3f4fcaf0e"
  },
  {
    "url": "assets/js/55.6e97be73.js",
    "revision": "22d8bbe3d340852560b47066460c4b5d"
  },
  {
    "url": "assets/js/56.41d86f71.js",
    "revision": "8c55681256f734960f604109773a8539"
  },
  {
    "url": "assets/js/57.2cd5ffaf.js",
    "revision": "aa6c1eb61063595236acf1f697b0b5f6"
  },
  {
    "url": "assets/js/58.6ff63c54.js",
    "revision": "2bbd35465a5b8d524200a54ab9ce7999"
  },
  {
    "url": "assets/js/59.6f1f3b9f.js",
    "revision": "78fe5ed6b2f429c93de937a7ff996cdf"
  },
  {
    "url": "assets/js/6.6ffdc74f.js",
    "revision": "63fba8f281ad1e52a850dce7ba172a4a"
  },
  {
    "url": "assets/js/60.9591aa31.js",
    "revision": "6d063239b0be260b372fdf2c4fdd6a59"
  },
  {
    "url": "assets/js/61.d40eb5f1.js",
    "revision": "fddf05608fc9c8eaebd86c27ffc3d30f"
  },
  {
    "url": "assets/js/62.9fcda6ac.js",
    "revision": "0d518c7f9d353e310b7b9e62ea5794d2"
  },
  {
    "url": "assets/js/63.e4b76cf0.js",
    "revision": "207518cf3f76611eb51d22337caedc32"
  },
  {
    "url": "assets/js/64.95cba705.js",
    "revision": "a1c8e0259aa4783faab8c8e55e1ffab7"
  },
  {
    "url": "assets/js/65.c6028f0e.js",
    "revision": "b94ef34ab135773e9bb9802af874bff5"
  },
  {
    "url": "assets/js/66.28429b27.js",
    "revision": "e0604ca254847fd1ccf899ccc6753016"
  },
  {
    "url": "assets/js/67.79a625f7.js",
    "revision": "77295122c791d6675b9f9efb35ef5cf0"
  },
  {
    "url": "assets/js/68.903e0c6f.js",
    "revision": "94b7a9234ad82ef7b1788554838d1f8c"
  },
  {
    "url": "assets/js/69.cc3565e9.js",
    "revision": "579faeae87c61aff5c1c6c9d3b0fc04c"
  },
  {
    "url": "assets/js/7.c1304e31.js",
    "revision": "1fd2800833527b5c5d11865943e77842"
  },
  {
    "url": "assets/js/70.abe3dac0.js",
    "revision": "7b4488b035100f999af7342e253983c4"
  },
  {
    "url": "assets/js/71.2c459b46.js",
    "revision": "3b76bfffae9ddcd0dc98f2b7851acb62"
  },
  {
    "url": "assets/js/72.a7de8bce.js",
    "revision": "32c92d8c1888c504b7f5d6f619f34176"
  },
  {
    "url": "assets/js/73.1adf28ab.js",
    "revision": "1febca6043207906ccb303956ce428ae"
  },
  {
    "url": "assets/js/74.a5898fa2.js",
    "revision": "9024152acf483b591f076fb07d322320"
  },
  {
    "url": "assets/js/75.7769d2b0.js",
    "revision": "0637a5f0f7cb126a5ab1fcbf209f98ec"
  },
  {
    "url": "assets/js/76.52e840e2.js",
    "revision": "de9da767e9b291496bf02cde1282fd78"
  },
  {
    "url": "assets/js/77.705ed8ef.js",
    "revision": "609ecd480b6bc338b23165d98ff59da4"
  },
  {
    "url": "assets/js/78.cc867b78.js",
    "revision": "b1a963ad677da3d699989848eea59248"
  },
  {
    "url": "assets/js/79.2c79127a.js",
    "revision": "93a96390ec1da399b63ebc43b4cab24e"
  },
  {
    "url": "assets/js/8.3530ad8c.js",
    "revision": "f240a1c7fb4f5f52c771dd9822f892e9"
  },
  {
    "url": "assets/js/80.510d9319.js",
    "revision": "241fcd108ffd7a561ba9fe5aa623542a"
  },
  {
    "url": "assets/js/81.a23eb336.js",
    "revision": "cb16e52101571cde2bda30f76b835390"
  },
  {
    "url": "assets/js/82.1ae74ac1.js",
    "revision": "6745a9c14f73c72ca24cd4fe08dd7e7d"
  },
  {
    "url": "assets/js/83.52f9f9d6.js",
    "revision": "117225ca9e40b914dc10c360eb750147"
  },
  {
    "url": "assets/js/84.07e39836.js",
    "revision": "b610901fd67643cc50dcf496019a4ed0"
  },
  {
    "url": "assets/js/85.267b912d.js",
    "revision": "645815875d198a42ce1d1fcb06ecfc7b"
  },
  {
    "url": "assets/js/86.6f549449.js",
    "revision": "841f072e8e48c2159a388534cb6639ba"
  },
  {
    "url": "assets/js/87.46c7e8f7.js",
    "revision": "2be3c74bf03258cf5dbd77b39f6064e2"
  },
  {
    "url": "assets/js/88.55f6a56e.js",
    "revision": "8a98071ebef2b759f8826d61b323a715"
  },
  {
    "url": "assets/js/89.492a8e8e.js",
    "revision": "ad9cf16f812755e65974ea11daf2ecd4"
  },
  {
    "url": "assets/js/9.12d06476.js",
    "revision": "3687141f4b324ff9b461070066f06eb2"
  },
  {
    "url": "assets/js/90.6874d07d.js",
    "revision": "37c71ab272ce15eacd10c7aaf15580c1"
  },
  {
    "url": "assets/js/91.d3761339.js",
    "revision": "83e10661d5693fd5b149e0d1125a6028"
  },
  {
    "url": "assets/js/92.8d642df6.js",
    "revision": "ac05813341e1cdfc255813a215d0d823"
  },
  {
    "url": "assets/js/93.c03e5411.js",
    "revision": "0e9b2a0ee0c0c24bf09a04f3cdaa6da1"
  },
  {
    "url": "assets/js/94.a8addfdc.js",
    "revision": "f99f520aae67edb13de4f2ab5c15d884"
  },
  {
    "url": "assets/js/95.2d032d01.js",
    "revision": "b5514e8c66ba2e453941743cb348c729"
  },
  {
    "url": "assets/js/96.19091a00.js",
    "revision": "e14e55306eb4220f1a05d76c893a8856"
  },
  {
    "url": "assets/js/97.f477ffbf.js",
    "revision": "b62c1354b8e133984f43d257675edc23"
  },
  {
    "url": "assets/js/98.d9b07f2a.js",
    "revision": "199e0f670f235256851e047e40fc77aa"
  },
  {
    "url": "assets/js/99.73d8fadc.js",
    "revision": "606049b16db300cfd79f18e2ad3bd7c7"
  },
  {
    "url": "assets/js/app.a6a82665.js",
    "revision": "da126e3ef6cb2bcaad247063ab9b26ca"
  },
  {
    "url": "assets/js/vendors~docsearch.4c4a926c.js",
    "revision": "6e25d61c84af083359d6b2b472af23c8"
  },
  {
    "url": "assets/js/vendors~flowchart.ffd70139.js",
    "revision": "e363a0ca8248408d2198fc3caa83e43e"
  },
  {
    "url": "assets/js/vendors~notification.ee5dc9b9.js",
    "revision": "74210e9fe9b359bce1502662da15cbae"
  },
  {
    "url": "config/index.html",
    "revision": "701c58b071b4e730941cd1b652c28275"
  },
  {
    "url": "faq/index.html",
    "revision": "97c3a48fd0c4e4ee46c0334ca2735bd3"
  },
  {
    "url": "guide/assets.html",
    "revision": "da4d5718ed912b4d0fac6f833d3b1e29"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "dcf3c5c847d323d5b95e5e24fdca2bc2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "24f5bbdba48c575f3ee81d73a61c6581"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "7c11f6ef31b962fd64a0d7935e52c64c"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "51df183fac37118a608ccbb0d46f3ff4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a86388e9deff6434df233630dc722bfd"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "71d8bf095af53085bb487258ad1c4803"
  },
  {
    "url": "guide/i18n.html",
    "revision": "15096800ddc38e85dbad973c3f655efa"
  },
  {
    "url": "guide/index.html",
    "revision": "16bf883d321201c6a2f5731c02170d48"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "f789c4643e39353e2b3613fae7d3b1fa"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ed178ee24611989c21b9f7179df97733"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "8d2011d651e2c306c9e1e25dd03f315b"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7b7db0eaa7d42c00c1749d379b857533"
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
    "revision": "eba726b3568d1e70ffd4ae62f085b27d"
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
    "revision": "b5787b9d8b0e739aad3a3034484fb314"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "7b82fd9bc86b66911be85aecf9e563ad"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "3ddc440cfe1d9a824e030e252e7b26e8"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "998ffb3907a5e377b65136d434d8812f"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "a70862cf8f6cabb725373a0ae857388b"
  },
  {
    "url": "plugin/index.html",
    "revision": "f9159e29ff4a9bd2478da6f0c63c0851"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "3f89c428f1f82bd8f14ef16199c52f9f"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "b9226bfbc30920893065e9cb6e9ec413"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "5b8622b3c51b264bc3f6fe16c8a3aed0"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "d6e5d2d2f12d25d390bb4cadb308ff9c"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "711fb96cd6f19308f0430c0636f30834"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ae8605646a3e8d52b668d2242e017ad2"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "4ae9a71736455d6783b90172fcc6e697"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "3d8d28bbf38a8818ccfec8ed78a2f21f"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "5568f2fe440711b0609e3facc6b116d3"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "a8eb335a663128a16596c3ec763797a4"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "b8c93c86abeee59a780029106f723f4f"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "7cbf5e626c0576e53b13c9499cd6b6e7"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "264c3d7d11ae1a652c1e9e5e2cc6e06f"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "1e5e334af5c4882ef82e259ccb82bb35"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "8a911c061cefbaebf5e4faafebb67e4e"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "71b4c237f45fd711c221eafb10ed77b0"
  },
  {
    "url": "theme/index.html",
    "revision": "35726f93e63203d5636eae6fe1988769"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d8da80015c0e8bd95f18be1d73b2e14d"
  },
  {
    "url": "theme/option-api.html",
    "revision": "986145957a6fa09cd3de611ffb0bd276"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "0853e4a1bd68d66cb49913c375266632"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "3a0fdeb54325afcbc31840fa2c41712c"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "1840e7011bbe0cc7e4d13f869a05f62c"
  },
  {
    "url": "zh/api/node.html",
    "revision": "f5250390eae5408c5a15baf2435343c0"
  },
  {
    "url": "zh/config/index.html",
    "revision": "16c03563a0072277c59b75036a77c07a"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "7b1412beb89c00736fb9e3346814fcc3"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "cb7066a80f3ac1ebf401a80047cc2948"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "bedce032fd5c01c344f66a48e1ae78bd"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "cc30e61a4afcc9031d8d505f6bb6fb29"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "8c295509664b565ad93f3efc0ee795ec"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "771eda17cb80a8e639648e79a7f1f193"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "9cf692c04f6a5219ff5efe42f4074aa9"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "b14c62fcb283f498ea82034f6984754e"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "b8b6ef18e6c24882873b608708a63e0d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5137f6e4e4a1b166d55cd8411566d727"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "ace2575a16dcbc81744f4b4cfc7ea7b2"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "016e6a1c7cd2cdcaea60e5541011199b"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "a51fad98350ba249c7146a3aca12effd"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "eacbbffb69210e0d08306d8c233f85e1"
  },
  {
    "url": "zh/index.html",
    "revision": "feb601c883aeee5cdd2de37ccd15be69"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "7b359f40b3853c9c8055a73eaf8810b3"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "4ce95d1bf62f893e5356c9a6f1c94006"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "de7e72632f62e78c7170b34295b6a446"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "917d1b22917cb1a84c8ca2c18d5c1fae"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "411787c05948dfa43f3bf43bf8791ffb"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "41d91ca21be0b27bc5a3c1dd08f13f6c"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "193fdda57aa21ea41eae448c2713184c"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "7862af7eba7fc0ded2cc5096550a6de0"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "1e2b3bbea9bbe77202c255c98e8facfc"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "4695cc3227522ca5a0a4c527f158d0d5"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "a2c6860f42d715a3cbc0b71346e6b33a"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "c783b828153e738be086f8c0d00044d9"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "576411e27f4509f8fee2fa2b8a41a013"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "956bef8e3b8facd1cdd90c84fb22d6d0"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "23a9d339bc3bcb4c0c846a3a8441ca05"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "c5a48d83bdd70929b6e8482c1d27396d"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "45505245cc2b050c51bebe4b359b69ea"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "4bc93a174ce2ca8b022bd96354b7916c"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "506a9f237914bec2653b27c01dab8072"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "a89a7794a17743506f8c74b04b76173f"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "41a654f8ba5b5bc3f5b5bb7947c19c91"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "2c3da164662c66ba4068b1a775efa2c8"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "f7804d1c54bd63897e08c0db45f898ea"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "1de8ee683aa2d2209a6c67834cd90c48"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "52847f8d50488b66d1455eb5b6b964be"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "bbb6060ee74b10649f61ec0517f26cc3"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "c53f3b01f42911482e6d82abf918f990"
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
