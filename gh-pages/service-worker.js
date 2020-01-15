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
    "revision": "aa01786c3b7d612c902bbe19d1534022"
  },
  {
    "url": "api/cli.html",
    "revision": "b4e1470515ca5e737d69bfdaab64f052"
  },
  {
    "url": "api/node.html",
    "revision": "78f1e51314dc0b74ae8a8e1015fc42cc"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.054c6c28.css",
    "revision": "93382b06a3afad532fcbbe6664264ef9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2862ac8a.js",
    "revision": "a6b8f0a33e7213a3eb3be1e9556f7202"
  },
  {
    "url": "assets/js/100.ec2ceaa9.js",
    "revision": "c5e4923a642bc5e74bb1a22870c6e4f5"
  },
  {
    "url": "assets/js/101.6dfa1a45.js",
    "revision": "7b6b88dd231c0f84ff2008c7d8fa1a38"
  },
  {
    "url": "assets/js/102.11915ae0.js",
    "revision": "32ecf627307240dd92c2b75f0be98583"
  },
  {
    "url": "assets/js/11.09e5fc00.js",
    "revision": "93685fee699102aa91e3139f53abbe90"
  },
  {
    "url": "assets/js/12.fb818216.js",
    "revision": "791513cb0a69f996601ad3dd37f303bb"
  },
  {
    "url": "assets/js/13.a900885c.js",
    "revision": "a38b1d5061f40a49bdac29f414be384c"
  },
  {
    "url": "assets/js/14.9d9396ac.js",
    "revision": "f32f32d6d79a6df2cf34670a4817d66e"
  },
  {
    "url": "assets/js/15.8e9556f8.js",
    "revision": "4ea956a455f485fe3a3867f329a8e8ba"
  },
  {
    "url": "assets/js/16.43223eba.js",
    "revision": "31971171a74661f0cbc052680493135d"
  },
  {
    "url": "assets/js/17.7bbf8455.js",
    "revision": "9e4d58ca9757be58b0e38d01acc54958"
  },
  {
    "url": "assets/js/18.fb485097.js",
    "revision": "ee1bb10cf6dd14b0554cf9366d053dd0"
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
    "url": "assets/js/26.5b70774e.js",
    "revision": "b8dfd69a4f3f6e3be03ca536675220f9"
  },
  {
    "url": "assets/js/27.bee4de87.js",
    "revision": "2e2b477794d944bcf80a10fb6ee525e7"
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
    "url": "assets/js/38.1e08806d.js",
    "revision": "bdbcea0eb4682221054b8fed728b6457"
  },
  {
    "url": "assets/js/39.0770e36e.js",
    "revision": "80b337abc337a4f280f1564355bd3821"
  },
  {
    "url": "assets/js/4.0adfbd1a.js",
    "revision": "6c412708e6e29a5c6191644267a88279"
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
    "url": "assets/js/48.a3ddc2b5.js",
    "revision": "1321487f1c65df0be439535b44532359"
  },
  {
    "url": "assets/js/49.a98388bc.js",
    "revision": "57074c4aa5a6e395ec76b0addc9171cf"
  },
  {
    "url": "assets/js/5.ceb67ac2.js",
    "revision": "57ca443afbd1d9b11e78c4ca2434ab65"
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
    "url": "assets/js/6.14f6ca82.js",
    "revision": "2635f412449813676d5df176d453dce7"
  },
  {
    "url": "assets/js/60.60e6b47d.js",
    "revision": "ac14e6c25b678476d3d0c3549f5bc925"
  },
  {
    "url": "assets/js/61.2777f097.js",
    "revision": "a17b1bfc2fae358dc40917d4ad0b1545"
  },
  {
    "url": "assets/js/62.ec6eba2c.js",
    "revision": "d041726e2aac4e7e5a37c9c647d5a092"
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
    "url": "assets/js/7.18012d7b.js",
    "revision": "7086cb12c8fbb678aa696f17e0063229"
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
    "url": "assets/js/79.69b69c51.js",
    "revision": "3cc6a7d9f3caaedba1c1b280a1066f8c"
  },
  {
    "url": "assets/js/8.7866d063.js",
    "revision": "584e14f0a38521df35f9f0a3538e6fd2"
  },
  {
    "url": "assets/js/80.e44f25c8.js",
    "revision": "07e5b5f7f89c63a2372ffa4f0e1999af"
  },
  {
    "url": "assets/js/81.d7b21525.js",
    "revision": "bcf04a36b20918c9df69d6af94bcdc02"
  },
  {
    "url": "assets/js/82.7daf65f4.js",
    "revision": "7e1cddda36f6bcdb15a5137379e8a5ac"
  },
  {
    "url": "assets/js/83.d506c84b.js",
    "revision": "bed137d5aeb733fa9ea23e4ae79189d2"
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
    "url": "assets/js/87.feabde67.js",
    "revision": "09370e7aaefd34e7f073fef78481b694"
  },
  {
    "url": "assets/js/88.a1ca4b6a.js",
    "revision": "6dd1d6ca5c3b7e64ff1b3140b081a202"
  },
  {
    "url": "assets/js/89.7c7de021.js",
    "revision": "5af4e17a2b38d64ccb91c22a6532c0e1"
  },
  {
    "url": "assets/js/9.f383c5a8.js",
    "revision": "5ecfc13da1cc51bff1d82ef11a447b73"
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
    "url": "assets/js/98.f7aa3ff2.js",
    "revision": "31ecd3c9e9ad466fc15554d8c51ee48c"
  },
  {
    "url": "assets/js/99.7b3e7bc7.js",
    "revision": "957ee188a2a5b56a6f1fe6bfa411b583"
  },
  {
    "url": "assets/js/app.27dff00e.js",
    "revision": "589b0c46a468c8ed47cdb2f319cce449"
  },
  {
    "url": "assets/js/vendors~flowchart.9a3d1af6.js",
    "revision": "ac2bddd252278e2efe86b696c4873b7f"
  },
  {
    "url": "assets/js/vendors~notification.1cc30b22.js",
    "revision": "047d834dd1712f668fd7426ecd3bd956"
  },
  {
    "url": "config/index.html",
    "revision": "85afee2027a73d6df86697bc6e55689c"
  },
  {
    "url": "faq/index.html",
    "revision": "39e07ed2d08ca94b565ca0e1deb62a46"
  },
  {
    "url": "guide/assets.html",
    "revision": "af582222c1679d44fee89ea8f1038a8e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "c68e61545a68cab3072fdd19b23c2de2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "932df1033d653fc1400559dd4c34f48f"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2d355f746255944ac133453277ea8577"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "dc4a2898c72e168458a31dc162406e95"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e93e053524ebd070ef033e60591745c6"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "729c3e624ca6996088c719eebd56611c"
  },
  {
    "url": "guide/i18n.html",
    "revision": "7fb16950e629b2ef7b2fdd68f372a2cd"
  },
  {
    "url": "guide/index.html",
    "revision": "9d62c908ba1990b730ecc1079b197eb7"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "007abb0e802644ffe1a71da1b10dcb02"
  },
  {
    "url": "guide/markdown.html",
    "revision": "73d155d051945c3f7d6e39ee8ad30b57"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "a51675402ba64fe5e41333a299029352"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3001fc85f806aa92338760316c1f1d2a"
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
    "revision": "07c3c60c440b6ac26199390c847b0ae8"
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
    "revision": "7b603e97a4cad965e315ee436871d0c4"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "033c80ff8fc3046df8d06994fcd54d20"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "c20aac950fba2d1ebcb11b54cf8c98fa"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "7491af497a781bac4a236fc0378c1579"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "5c34a13b4b3d9d89021c04bc93190c2f"
  },
  {
    "url": "plugin/index.html",
    "revision": "e47d77115f91050cfb87c704ca1281d8"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "969bda0855f435b1a7c3705de169b677"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "011481eaf3b3e3996330769fabe440e1"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "f8d1b31b2412e52dae9757a7032089c4"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "ea584b7e5e24dab50556befaac66978d"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "21693861acd9c01fe57525a21d73d6a6"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "491e40cab951ad0bed716232ce380133"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "493d36641feb879d735c665ce466cb90"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "93f7a49f34b4a0d332e0cfda52a8f77c"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "a57286d07510f8dfea9b392ddaed6d70"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "daecbdbaa96d20669fa33d6a7852557f"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "759f771d0feee79acd4e41d54df23fbc"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "26b1dbf2224ff9d800c45d441853e7ea"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "191c04a57fe85a5febb836810afd73ff"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "7e4acb93cc42ceff1c23a8e53dd21a11"
  },
  {
    "url": "theme/index.html",
    "revision": "248aa28fbcc14e60d79bd99c606be66c"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "64ad613923d55abf60575f8f00514887"
  },
  {
    "url": "theme/option-api.html",
    "revision": "b84fe42a695697a7ad6554d91c36c65d"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "e97b62d652b08f556055c58fee0987e7"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "95c1ed9e6ff92f7533d11411cdb0f56d"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "6a3d1bb40ac679045207d3c63a519c33"
  },
  {
    "url": "zh/api/node.html",
    "revision": "a3d70a05567d80639b21ed587222ea83"
  },
  {
    "url": "zh/config/index.html",
    "revision": "9e7ff3a1fda17fb3565b1e0a7dd62a7e"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "ac7e3ebc206e97fd9e84e85c7a4389ce"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "e8cf9d0cb14fd684f92daafcbce42b1d"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "91fe6ea1e08e4b54715807a1c79a268e"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "881e74ee892ec3cdb5c2b0cb17c0ffd0"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "ebdb7342e4c5c8149e489518f7b423d4"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2debc93188aed657093d29d375ca7915"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "890b9b21eadf0a7b735506545e952676"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "66b1ac469b54509ec5a5760c1c1be9f0"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "08650678bd09ef67d5b9a78196e0f55e"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "49b44c05eec487180fff3330614a2cd6"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "00eff94c621036afa82c6469e4e29238"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "445c46d7858a3cf4cd7c30fbff4953e5"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "b255c824bb2e5924a7ff7ae0b32f64c0"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "da5d6ef7a2ac1bf9ccf223295a09cfd7"
  },
  {
    "url": "zh/index.html",
    "revision": "ac3db84d62399a9e96137b54c0ed2807"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "e3faca8a2ae402fa7ae901fff3b9751b"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "f95b028eb78213e64b8b43e8ac6534e8"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "f5b806e126813d8ac3d9c345439b8548"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "b9ca84ef1d0bd8425b07e69260573617"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "121454143c60bd65ae4d5b903cdae69a"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "ae5f8b7f18f854f19075f74e728fc99a"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "c6af11bbee4fa6ac0109fdd2236c1530"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "ee355cc89acf7198e06baaf778ca8e30"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "7b0b1bdd6c497976f3b6292fe686981d"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "016068a5779f69b826f850675dcdbfa1"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "87154625d6964927790ac35ae8729622"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "4782d2ca9e45a3d327783f6a611f5b87"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "a725e467df67e70ff0250024737d25bf"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "6b458310d18e5fd272a7cfa17436b32f"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "966ce76a58942c2bba260ede7c68a894"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "b7ded04ca72a14a56f72180ab3a92e1d"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "3d3955afb7ca5a8048384fbe998cfa78"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "54aab86c02fd34d5656be400aadf02bf"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "699fbb1078f416519b5bcfab0f0d4186"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "50bdb9336465bf83cc82258a003f8f17"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "8e98e73b49715227ef23697ffb2077cd"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "2dd0f61071e68104125fd05c53182f9e"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "4a7ae6cd66d44441faae0524c6a028d1"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "5e9e92d6585904b66ead61256eaf12de"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "1d4a31462c799626296869f6f6ae2a7f"
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
