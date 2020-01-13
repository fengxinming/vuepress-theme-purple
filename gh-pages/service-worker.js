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
    "revision": "e6ae297a54f349fbf8629ab2aa3d3f00"
  },
  {
    "url": "api/cli.html",
    "revision": "b288f0791fc206e78df48198ee6ec87b"
  },
  {
    "url": "api/node.html",
    "revision": "3814da51eb93fb9737298b43e8148529"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.0e1accd2.css",
    "revision": "9ce317cd306ff14a53265232932c8557"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.67f0ed75.js",
    "revision": "ea4cf296006e718a46130dad610b30e6"
  },
  {
    "url": "assets/js/100.3365e02d.js",
    "revision": "d7357ef46f491461123d10d7d91f4c5b"
  },
  {
    "url": "assets/js/101.3ac23e9c.js",
    "revision": "2e868ba2fdbe95acc37b5c0831185e19"
  },
  {
    "url": "assets/js/102.1584041d.js",
    "revision": "7182cda4b298ec6229c7eb1d94e9e10a"
  },
  {
    "url": "assets/js/11.59178756.js",
    "revision": "a7ca39dcf305877a1354cad77a5da99e"
  },
  {
    "url": "assets/js/12.46248701.js",
    "revision": "cd280268df4db6edebb9f9c9608f697d"
  },
  {
    "url": "assets/js/13.a725d93f.js",
    "revision": "c2329583463bc664a54eba5f08504442"
  },
  {
    "url": "assets/js/14.2d856e31.js",
    "revision": "1e81482533501f56724a4c45b07f097d"
  },
  {
    "url": "assets/js/15.8e9556f8.js",
    "revision": "4ea956a455f485fe3a3867f329a8e8ba"
  },
  {
    "url": "assets/js/16.2ce11086.js",
    "revision": "ae4f163a6dbfc31c93a27ca8c194c01d"
  },
  {
    "url": "assets/js/17.7bbf8455.js",
    "revision": "9e4d58ca9757be58b0e38d01acc54958"
  },
  {
    "url": "assets/js/18.1d45c66b.js",
    "revision": "a615297071c090a30fe4a2c9b1cf64bb"
  },
  {
    "url": "assets/js/19.0ff815f1.js",
    "revision": "33bacdc78c14ce0638cc193a042a431f"
  },
  {
    "url": "assets/js/20.549ee716.js",
    "revision": "ac8ca441998e0a8873e9680a24181541"
  },
  {
    "url": "assets/js/21.c4e3c137.js",
    "revision": "7495d9cd46375b7a5f0d04d6fbd416c1"
  },
  {
    "url": "assets/js/22.f7a76b07.js",
    "revision": "14f4be8c470f8f7f1d6ecfbf59dbfca7"
  },
  {
    "url": "assets/js/23.e1288741.js",
    "revision": "456ebd2f89f063efea1d7c32dfc964f4"
  },
  {
    "url": "assets/js/24.19cd8818.js",
    "revision": "346265b50aa5206733a1e6d811f86a62"
  },
  {
    "url": "assets/js/25.42ac439c.js",
    "revision": "bd1bf89525421d013678e0560ba1c881"
  },
  {
    "url": "assets/js/26.d90958fe.js",
    "revision": "3ddf4fa2c1c2bcc5e21502c8ff34d75e"
  },
  {
    "url": "assets/js/27.9ca884d5.js",
    "revision": "5bf3f91ab8a8d479e22f567763ccd73d"
  },
  {
    "url": "assets/js/28.6a104fb1.js",
    "revision": "a74164c4db701d56e71119498f5f83a8"
  },
  {
    "url": "assets/js/29.7f4b0f7b.js",
    "revision": "24f84e74a3541047b3318cb5e2dfa79f"
  },
  {
    "url": "assets/js/30.505d2232.js",
    "revision": "225eedbe0c4529f85753e57856ddfd6a"
  },
  {
    "url": "assets/js/31.1647ac9a.js",
    "revision": "3cfbdb13167a08dd98626f508e235516"
  },
  {
    "url": "assets/js/32.d9e8edd1.js",
    "revision": "1394f8f240c32fe727801c8785f496c8"
  },
  {
    "url": "assets/js/33.5b97b2d7.js",
    "revision": "54590499f99f72a7b2071785bec1e09d"
  },
  {
    "url": "assets/js/34.dd81a74d.js",
    "revision": "8157ca1ea6b2cd5b4708fdaebdb35d37"
  },
  {
    "url": "assets/js/35.47fe3556.js",
    "revision": "707ea1605e40d7bf9b6b1ba3ae42e363"
  },
  {
    "url": "assets/js/36.3c551b3f.js",
    "revision": "b0d731859c984d385585a2840fe30019"
  },
  {
    "url": "assets/js/37.6701572e.js",
    "revision": "1f7da6dfe8df45556a3b72c4e0cecda1"
  },
  {
    "url": "assets/js/38.20290763.js",
    "revision": "4a1ba16c80d0670b8d0321c6cdea1ed1"
  },
  {
    "url": "assets/js/39.77e7d07d.js",
    "revision": "e1f25ac36bc33363d0accc94e0d36491"
  },
  {
    "url": "assets/js/4.8a919556.js",
    "revision": "6d0549f04e34e27db8dc46496bda9366"
  },
  {
    "url": "assets/js/40.188412d9.js",
    "revision": "f5b5b8483713b4dfb31da0394ea43f2b"
  },
  {
    "url": "assets/js/41.9d63a7cc.js",
    "revision": "62c4732626e6cedeed91ce0dfbbd8086"
  },
  {
    "url": "assets/js/42.ba6d9556.js",
    "revision": "d7c6fdf9b211b0894a2876aefbcab53e"
  },
  {
    "url": "assets/js/43.94367762.js",
    "revision": "e593278d8f3d609e53374c4277af2e44"
  },
  {
    "url": "assets/js/44.b339774e.js",
    "revision": "4e39715f4aa13a67b5c2b91ea25070b3"
  },
  {
    "url": "assets/js/45.c48fadc0.js",
    "revision": "e2e1f35d248449df3406b9fb9c1e06f5"
  },
  {
    "url": "assets/js/46.4d65c300.js",
    "revision": "d460d528bcd29068c0c3007754372148"
  },
  {
    "url": "assets/js/47.578a98da.js",
    "revision": "21b7435a9efe43867c2f64b9ab384d22"
  },
  {
    "url": "assets/js/48.69cf2aec.js",
    "revision": "1a381982c5844dd7f62953b2b58d44f2"
  },
  {
    "url": "assets/js/49.654db071.js",
    "revision": "df1ba7c71652f19c78511f24f8719806"
  },
  {
    "url": "assets/js/5.606b4f63.js",
    "revision": "9c008c0316ebd92fd8c37e7cdc6ff107"
  },
  {
    "url": "assets/js/50.928cde4c.js",
    "revision": "1a48e3a077b0d6cdbdb54aa946e1e1e7"
  },
  {
    "url": "assets/js/51.993757ac.js",
    "revision": "6d0b7745b8b8e96a18bab7bf1bf707b7"
  },
  {
    "url": "assets/js/52.de2a9315.js",
    "revision": "52564dc79a715e1469bf6aedd41cac20"
  },
  {
    "url": "assets/js/53.c9076d0a.js",
    "revision": "3fc4a6de58e75b76a32cc5ce0c873452"
  },
  {
    "url": "assets/js/54.18f8f04c.js",
    "revision": "d58b867a537376c74d0c519cddc49855"
  },
  {
    "url": "assets/js/55.eb4f1ebd.js",
    "revision": "216910fed3b2a77c03bb15c30d53fdd4"
  },
  {
    "url": "assets/js/56.24ea957f.js",
    "revision": "d53209bfd769837562ea7784d93f726f"
  },
  {
    "url": "assets/js/57.eeca3305.js",
    "revision": "b23a1adb7df4259f7292c593672da254"
  },
  {
    "url": "assets/js/58.b73726b7.js",
    "revision": "60830c26a4d863d9a6ff637c4096578b"
  },
  {
    "url": "assets/js/59.dd6fb6a9.js",
    "revision": "021c4e505891058e836aff32dc37281c"
  },
  {
    "url": "assets/js/6.16cf4554.js",
    "revision": "a5fdce1dbfa73cb1af0a34be374fd661"
  },
  {
    "url": "assets/js/60.b07ea1e8.js",
    "revision": "f5ade2f137dd0a92442744fd27301e1e"
  },
  {
    "url": "assets/js/61.3353e61a.js",
    "revision": "2dfbe52759bf305a5febbc141dfca55f"
  },
  {
    "url": "assets/js/62.f4effeca.js",
    "revision": "903b0297aa3779649409e1337de89314"
  },
  {
    "url": "assets/js/63.83593d24.js",
    "revision": "d8ff79eb6d8b3b0a6e75ba0efbf83fb9"
  },
  {
    "url": "assets/js/64.e652905a.js",
    "revision": "8761b142399d4973a1d78a7fcaf01952"
  },
  {
    "url": "assets/js/65.36b268a4.js",
    "revision": "8a36f6df3700b552e0a6d8a8b25c487d"
  },
  {
    "url": "assets/js/66.fd373193.js",
    "revision": "1f748d20cb9bb1b954b42a49655a3130"
  },
  {
    "url": "assets/js/67.6c9201cd.js",
    "revision": "177f4127e82c0e2c3f8ea97d6c4d6c82"
  },
  {
    "url": "assets/js/68.5ecac304.js",
    "revision": "583a359f44a060b610042bc3fbd2c2d5"
  },
  {
    "url": "assets/js/69.6a058292.js",
    "revision": "a028d92a76e21238cc16ca5d34352985"
  },
  {
    "url": "assets/js/7.a1192f70.js",
    "revision": "e2e4af2de0808e8a5ecd4960a3d2b471"
  },
  {
    "url": "assets/js/70.731da52a.js",
    "revision": "94e3eda52aff76204e73c5016dd1ddbd"
  },
  {
    "url": "assets/js/71.24bb765b.js",
    "revision": "d39d221583e241638739ebdc9d437e8a"
  },
  {
    "url": "assets/js/72.cfc26cb9.js",
    "revision": "979407a8354a03a144a4a8ed0304f88d"
  },
  {
    "url": "assets/js/73.818f03aa.js",
    "revision": "c52e72857007f1fc19316fb9022fc414"
  },
  {
    "url": "assets/js/74.12e821ef.js",
    "revision": "630994e4afb020c3b254affce509f13a"
  },
  {
    "url": "assets/js/75.785ce193.js",
    "revision": "f83253825a62783a51fb8e11f5fb0be8"
  },
  {
    "url": "assets/js/76.6521fb00.js",
    "revision": "741c481e87b9bef7c1a14c200c6ce6d1"
  },
  {
    "url": "assets/js/77.a8133ac0.js",
    "revision": "c316630efbcbf6be085775c5117c4273"
  },
  {
    "url": "assets/js/78.28623fe8.js",
    "revision": "e2636ecc1c637e27993b9072d83ff5d8"
  },
  {
    "url": "assets/js/79.31fedf8e.js",
    "revision": "20678c4f6374774fc8e3995343e12b2f"
  },
  {
    "url": "assets/js/8.ebb242f7.js",
    "revision": "1cd922253a739fa0fbded8e9348ca890"
  },
  {
    "url": "assets/js/80.cb4850bc.js",
    "revision": "a03be65945176c2894af665f23ee54d4"
  },
  {
    "url": "assets/js/81.c79c6ebd.js",
    "revision": "fff29d72272c99ca5cc1d2360df83126"
  },
  {
    "url": "assets/js/82.9cd39739.js",
    "revision": "81a45e1bc3ef0cbddc11dbe0212c4cfe"
  },
  {
    "url": "assets/js/83.0f3c7767.js",
    "revision": "d3e7b2312e8b1604aaeebf42f8933e1c"
  },
  {
    "url": "assets/js/84.86d70e47.js",
    "revision": "1cdb959bdf5525e3c6ce8ef344cf1640"
  },
  {
    "url": "assets/js/85.beafb4f4.js",
    "revision": "bec50fe71d827678113965969f990593"
  },
  {
    "url": "assets/js/86.5ecfb585.js",
    "revision": "c94e4627add37b0c4c60f6656a64af26"
  },
  {
    "url": "assets/js/87.d91720c5.js",
    "revision": "f0140a9bcbe2ab212c0a360b79cc0c4a"
  },
  {
    "url": "assets/js/88.82eff06e.js",
    "revision": "b5f94c8b7e1e65aa3e90722a5ead2ea2"
  },
  {
    "url": "assets/js/89.813fe979.js",
    "revision": "ed966e77e9d0985a47dda0776525c5b7"
  },
  {
    "url": "assets/js/9.2ce5eef0.js",
    "revision": "3e8180bed877106b6451621ff894c0c2"
  },
  {
    "url": "assets/js/90.bca5410e.js",
    "revision": "bd5e3b5e1e62335258aa1ce869f599e3"
  },
  {
    "url": "assets/js/91.a9b7f9e9.js",
    "revision": "44e9641320a36eb39b79a36dbd9352c2"
  },
  {
    "url": "assets/js/92.3f789f66.js",
    "revision": "e8b5ddb9f6a49da218532973e3609474"
  },
  {
    "url": "assets/js/93.52fd4af3.js",
    "revision": "4c562151d6c61e0c5e9f2c358ca16e00"
  },
  {
    "url": "assets/js/94.1ef7ca1e.js",
    "revision": "a1f6643e283fbbd87b1495c52c405db3"
  },
  {
    "url": "assets/js/95.8d756d90.js",
    "revision": "73390bac66307e8e7f5a1a7a9bd9cc9d"
  },
  {
    "url": "assets/js/96.263a20f3.js",
    "revision": "9a8fe8787bf4a53e83fdc53ca667e1b5"
  },
  {
    "url": "assets/js/97.506fd3ae.js",
    "revision": "a96526cda0de517b740ef30b474f28b1"
  },
  {
    "url": "assets/js/98.259f07e9.js",
    "revision": "25bb3149b66bc92b9c6f62e144e0844b"
  },
  {
    "url": "assets/js/99.7b3e7bc7.js",
    "revision": "957ee188a2a5b56a6f1fe6bfa411b583"
  },
  {
    "url": "assets/js/app.d597e8f3.js",
    "revision": "062329c344ed770ff2822ccdbd053dd1"
  },
  {
    "url": "assets/js/vendors~flowchart.e5e33a67.js",
    "revision": "7ed24f4da9e041b7da436b30136645ea"
  },
  {
    "url": "assets/js/vendors~notification.1cc30b22.js",
    "revision": "047d834dd1712f668fd7426ecd3bd956"
  },
  {
    "url": "config/index.html",
    "revision": "35f8b2d569e466c38add56d84800b9b3"
  },
  {
    "url": "faq/index.html",
    "revision": "2540149b283517ce308c732af07e38bd"
  },
  {
    "url": "guide/assets.html",
    "revision": "719828b2bbd27f7e48399d823bdc7087"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "f630cd45599af91b71342389e278a859"
  },
  {
    "url": "guide/deploy.html",
    "revision": "97d5886dfcf7e52a297b8142f11dc9fa"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "32c1f18d4e4111ca86a56cb29dd21375"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "172a19abbbee95d4cd5dc9939c87eddc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4b5a8d01772c6900906b0d4490b7d507"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "c4eed0e222b7aff0c1e5c8b1fcb3ed88"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f023f4fa60bf632768aec5ade86e4eb9"
  },
  {
    "url": "guide/index.html",
    "revision": "783dbae59d7d8bcb7c270a5e87f189ee"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "4f1923ef204f8cfe7eac9ad75b7f86c1"
  },
  {
    "url": "guide/markdown.html",
    "revision": "1c7ed45ef73141460d5e19b332a04825"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "ba0e16b5ddd5bda5f7b80e87633f95f3"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "c72265d903f6ed03063f2b397f868636"
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
    "revision": "ef6db82b31753652c12ccc1d7ecc91dc"
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
    "revision": "9b0cd151047c88daf1dd436d54b50de7"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "0569fc96428bfc1b29add50f6271cdc7"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "1e7538464296b0100d5d0d09e25ef27b"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "5559851eb32e525daf22077f74cee09f"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "a11c64f0c31935960fb9bd219aa9238e"
  },
  {
    "url": "plugin/index.html",
    "revision": "988b7faf61feefcad5a6f37ab48ad29a"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "6a34900ab0936e9bc9202c328b410039"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "ef1b8d9d0c4d9ce8b4a785160d71ded5"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "4b28d6d733ae1fd7f3432049db6a9ca1"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "704cff0f2cfa80d9c136a0c6c7ae34d4"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ab673a017930df64ac6aee333263e4d8"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "d284e6a53f4fa60dd8f7c9cae48ce156"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "5b9248e6b01d5ea199a48a54edd0e055"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "eec019bf7b0af9a9a43e4149fa074966"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "ce102048af5400af529e284ac6a790a7"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3c3d0e25d3be16db547db7fabd02dbe6"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f0f4341cddef436b39bfbc4bba0867a1"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "168dc71353b14019c8eb95759f2ac0b0"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "8892fc2f204ff157ad94df54d3c35c49"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "2df6213daaac13b411df0526cb78dc7f"
  },
  {
    "url": "theme/index.html",
    "revision": "a1a304f9e87067b2fd450730c3f2250f"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "5f29a2c0d7788020d1d5622a318d773e"
  },
  {
    "url": "theme/option-api.html",
    "revision": "d53c3e241bb1eef1d158805a42ac5896"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "55c015fe3b4e5a32c9f54227d4df8eff"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "7f83c5fdf0434ddaafc65fdb1647ecdd"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "f26949618e934df0504d3095dad27205"
  },
  {
    "url": "zh/api/node.html",
    "revision": "b616b84d74096c46094544cb5c259749"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d71d1680b6b8db980d3e29123022f398"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "1cedd8b5b4f0d2d2d2f8bdc894327a5d"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "43f64f927d825b4e074b13343eb73b84"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "5a36a1b1a83847fb9b6ddd4d844983b7"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "59b201f90ce92d3b280adb661ecaa6a0"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "71856979a5d0aa3c1e8603c3f3cc760a"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "82bf159923d5a2f804887a030156f30a"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "d1cafb2eb703fa115e8587fcf45cc0c8"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "6aafc6a7a58ba5639a2c35e65022cb0f"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "27c388eec64a71dd133ac201b49a9add"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "95bd2e05afc00201fc010737f00f991a"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "987d6fe297766d7fbb745aef25564472"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "c8460a270e84dd935bd79438235e9d2e"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "bf4b9387db96ad997d69657d80bb4430"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "ed1b9ef35fabedf324897ea05b96a17f"
  },
  {
    "url": "zh/index.html",
    "revision": "bd6a3f6938daeb719b3a9dc5dfc91de0"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "18cfb349220946024b0fb7cde4042b8d"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "388b78f09e61b3d1717b0d393a0856d4"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "78cfa189b112a1e5369e2093fc9cb581"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "002bbd031cb362b5b9643b7547ebc1eb"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "54a5d4f56aa8121e2d1f9c784bf3e241"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "3a84a12f5751b5c751226b99800af72b"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "b8871662693ed8d017b6251f048f3b48"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "4d38dd5b69a59423749fcfb15eaf19e3"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "4209aae032046542b9b45d67b95d32d1"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "81f2cf5738caed1c896b6d3a6fde33c8"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "01823c18da084d5763faf7c9206668b4"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "346d9f220388da1c018f65fc471cc905"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "dfabb3167e49cfa1f8d72a8612a97d86"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "9933ea6c2be39e75f24ce8c833f2e907"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "458995f2807041d7f3e06d468fa03e1a"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "17a1c021ebe8d34e2c518a371572d336"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "e919ed5c254106bfd0429c4938232b0e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "a06340f4c4554c6ca3751bb890e9d57c"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "67d8b53c76298f263554558d4ae378fb"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "13b706b6d6613db8853de5801d8cfc82"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "7280c323da0f04b84eff038fcb9a469d"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "686c43d31507cdb31bfbb12b86f76ae4"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "2cff16ea9b624501b574d5a0da31685e"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "4198b6778e014111a1dcfc16965fda7f"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "c68971b259de9e698b73b2aad09ab8f4"
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
