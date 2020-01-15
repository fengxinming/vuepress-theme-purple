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
    "revision": "c7e0d47d4559e5586e79cb187b8bacf7"
  },
  {
    "url": "api/cli.html",
    "revision": "fcbaabf928cc619b76bd737304b1faea"
  },
  {
    "url": "api/node.html",
    "revision": "240dc13d68def7781345c27a0eb89e22"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.4750dc60.css",
    "revision": "868a6960ca8f56334b2119b80cdea096"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a5a6ea3e.js",
    "revision": "540444a75de597db8e6a10cd2b82adf6"
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
    "url": "assets/js/11.2ec43fbc.js",
    "revision": "510381bd9f4bbc57d04868d8781b3ffa"
  },
  {
    "url": "assets/js/12.e5cec480.js",
    "revision": "d06e408e323739fc59cb5a8c8c4a6089"
  },
  {
    "url": "assets/js/13.30b10f5f.js",
    "revision": "822f96785efb492d39adabaf80093235"
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
    "url": "assets/js/20.a19a1201.js",
    "revision": "5d36bb5c00ffed36e2c7e03e22f7f9f4"
  },
  {
    "url": "assets/js/21.0367ba8f.js",
    "revision": "839c58bfe4baa52b73ef704e853bdb7b"
  },
  {
    "url": "assets/js/22.0b9a8718.js",
    "revision": "d7f4718f402bf65f92cfe68afa21907d"
  },
  {
    "url": "assets/js/23.78c12ede.js",
    "revision": "b8f31b003d9045d316a69e29bf49e25b"
  },
  {
    "url": "assets/js/24.19cd8818.js",
    "revision": "346265b50aa5206733a1e6d811f86a62"
  },
  {
    "url": "assets/js/25.5eaa46dc.js",
    "revision": "406fe9cea4a048b4b18635af9f141590"
  },
  {
    "url": "assets/js/26.f38b21a1.js",
    "revision": "fac5df6b5c9a53a5478bd8fe5226e958"
  },
  {
    "url": "assets/js/27.0785a519.js",
    "revision": "1709c7958d4dcfaceb2b0ce23e6d5d17"
  },
  {
    "url": "assets/js/28.d23df74d.js",
    "revision": "f2a8210926adecf82d852aba84083ad3"
  },
  {
    "url": "assets/js/29.2f2dd6ca.js",
    "revision": "a40594b53cfa4b18c4faf180242ef182"
  },
  {
    "url": "assets/js/30.a1bed37f.js",
    "revision": "3bd39500d1c58da532d3a70d8a5db737"
  },
  {
    "url": "assets/js/31.7a5b7b61.js",
    "revision": "1f231151f64d3818f0190c23533faea8"
  },
  {
    "url": "assets/js/32.2a38681f.js",
    "revision": "0d4ae299b4d358c143b903f2cadba57b"
  },
  {
    "url": "assets/js/33.29933d35.js",
    "revision": "fdab0e0d86b134672abe57cffea2ff6c"
  },
  {
    "url": "assets/js/34.df24a0ef.js",
    "revision": "7d7286b0d7675629840a47d535cbe9f5"
  },
  {
    "url": "assets/js/35.23d86e21.js",
    "revision": "a02013ed6d6120eb005b69857f353d4c"
  },
  {
    "url": "assets/js/36.3c551b3f.js",
    "revision": "b0d731859c984d385585a2840fe30019"
  },
  {
    "url": "assets/js/37.832cb8d4.js",
    "revision": "57cec2751e8a0d25310e64241b6aa867"
  },
  {
    "url": "assets/js/38.47f6c955.js",
    "revision": "3e6a2831ababf2e7a329867467456af7"
  },
  {
    "url": "assets/js/39.6f51d483.js",
    "revision": "3a809e20dafc141e39fce8e7c02da237"
  },
  {
    "url": "assets/js/4.0adfbd1a.js",
    "revision": "6c412708e6e29a5c6191644267a88279"
  },
  {
    "url": "assets/js/40.b69df168.js",
    "revision": "d500b6904d58e7c7c40d277cda43e0f2"
  },
  {
    "url": "assets/js/41.0f0c7aa2.js",
    "revision": "cd7f492bddd8f322ec7eba96b27f6e9b"
  },
  {
    "url": "assets/js/42.7b1d48b5.js",
    "revision": "aa87db791f9dc8030fe57fb98361856c"
  },
  {
    "url": "assets/js/43.2c5e9b01.js",
    "revision": "94fe72b97dee334509336509053376b5"
  },
  {
    "url": "assets/js/44.b339774e.js",
    "revision": "4e39715f4aa13a67b5c2b91ea25070b3"
  },
  {
    "url": "assets/js/45.6206eef7.js",
    "revision": "7c6ed32208d0049e7c83788a1baf4135"
  },
  {
    "url": "assets/js/46.119a0a86.js",
    "revision": "7efb984596e5a592422086f811cba29e"
  },
  {
    "url": "assets/js/47.eb84c6c2.js",
    "revision": "1247db43f24e73cf699def88147f84a6"
  },
  {
    "url": "assets/js/48.c31f8327.js",
    "revision": "efb41ec4bbc5f1f4167e8dbe9b29e932"
  },
  {
    "url": "assets/js/49.3e055789.js",
    "revision": "d97a228c67d26cbb1eb1ff9a52389f33"
  },
  {
    "url": "assets/js/5.ceb67ac2.js",
    "revision": "57ca443afbd1d9b11e78c4ca2434ab65"
  },
  {
    "url": "assets/js/50.6c78c9fc.js",
    "revision": "d94235065438a07e5a86424ab0f5c068"
  },
  {
    "url": "assets/js/51.343c71a0.js",
    "revision": "2d6f6d1d6455be40381beb9ba4bb719b"
  },
  {
    "url": "assets/js/52.76de97d9.js",
    "revision": "934a80c46cf5598d44d7c4ff4e6caeb0"
  },
  {
    "url": "assets/js/53.a377d1ca.js",
    "revision": "e02f7ea7640fc263bf57b16575d23def"
  },
  {
    "url": "assets/js/54.8b342bc9.js",
    "revision": "4e97a9fa2e4b8248483189816c274b45"
  },
  {
    "url": "assets/js/55.465812e1.js",
    "revision": "0d66cc3999ba76b7bcba278947053a92"
  },
  {
    "url": "assets/js/56.98edd7cd.js",
    "revision": "721f35a7de1eee2add828d1fce191560"
  },
  {
    "url": "assets/js/57.eeca3305.js",
    "revision": "b23a1adb7df4259f7292c593672da254"
  },
  {
    "url": "assets/js/58.a58b8904.js",
    "revision": "edd100e7e0048e7f557e4b070f5b7796"
  },
  {
    "url": "assets/js/59.f6d4b102.js",
    "revision": "d15f6f303167cbba54df7df818ffd578"
  },
  {
    "url": "assets/js/6.14f6ca82.js",
    "revision": "2635f412449813676d5df176d453dce7"
  },
  {
    "url": "assets/js/60.92072575.js",
    "revision": "c498d6b6e344bf26c3c45603ecdae704"
  },
  {
    "url": "assets/js/61.2777f097.js",
    "revision": "a17b1bfc2fae358dc40917d4ad0b1545"
  },
  {
    "url": "assets/js/62.f4effeca.js",
    "revision": "903b0297aa3779649409e1337de89314"
  },
  {
    "url": "assets/js/63.658ff6dc.js",
    "revision": "dcab442ee6f9a5f227d13f0227c9f3a3"
  },
  {
    "url": "assets/js/64.0987e73f.js",
    "revision": "35c8dce9ba9a3c8a58b772f3a298b5ac"
  },
  {
    "url": "assets/js/65.36b268a4.js",
    "revision": "8a36f6df3700b552e0a6d8a8b25c487d"
  },
  {
    "url": "assets/js/66.60412057.js",
    "revision": "8e7b52fc830457d0bb81a33089a13d97"
  },
  {
    "url": "assets/js/67.5b563239.js",
    "revision": "a0025a0f93e5a977ff9b12bbab91e529"
  },
  {
    "url": "assets/js/68.5ecac304.js",
    "revision": "583a359f44a060b610042bc3fbd2c2d5"
  },
  {
    "url": "assets/js/69.37c6e078.js",
    "revision": "f58e20fe0d3f6b8ae5902b499e67fbfb"
  },
  {
    "url": "assets/js/7.18012d7b.js",
    "revision": "7086cb12c8fbb678aa696f17e0063229"
  },
  {
    "url": "assets/js/70.f7a710e9.js",
    "revision": "85bf8fd702e1975d9b0e6bbed085694f"
  },
  {
    "url": "assets/js/71.24bb765b.js",
    "revision": "d39d221583e241638739ebdc9d437e8a"
  },
  {
    "url": "assets/js/72.f770f72d.js",
    "revision": "1baf9463fc8bff220b924566d1ab5f13"
  },
  {
    "url": "assets/js/73.28783a42.js",
    "revision": "853a0039a575df637f84e7510619da41"
  },
  {
    "url": "assets/js/74.67fcabaf.js",
    "revision": "10f7a0daabe4422c4b717bf9442e9fab"
  },
  {
    "url": "assets/js/75.785ce193.js",
    "revision": "f83253825a62783a51fb8e11f5fb0be8"
  },
  {
    "url": "assets/js/76.48a6ef71.js",
    "revision": "6c1b532a545ab6b86e5000f4b7c633a0"
  },
  {
    "url": "assets/js/77.a8133ac0.js",
    "revision": "c316630efbcbf6be085775c5117c4273"
  },
  {
    "url": "assets/js/78.b950bccd.js",
    "revision": "c5d5eb2e40c92fd1535e99ae0a3982fa"
  },
  {
    "url": "assets/js/79.846d11a1.js",
    "revision": "e2f4ce013214166d3e51bfcdb92e192c"
  },
  {
    "url": "assets/js/8.b4abe17a.js",
    "revision": "c5a869bb9fdeed532a1b980982fd7592"
  },
  {
    "url": "assets/js/80.e746a20b.js",
    "revision": "2dd12392772cec409c3c6546ddeec615"
  },
  {
    "url": "assets/js/81.9ad3a7b4.js",
    "revision": "4d53b9f3da9b82aed6a04261ed64c9e0"
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
    "url": "assets/js/85.45ae9504.js",
    "revision": "2e21a2a2a4a7f5217e43e674bdf11595"
  },
  {
    "url": "assets/js/86.5ecfb585.js",
    "revision": "c94e4627add37b0c4c60f6656a64af26"
  },
  {
    "url": "assets/js/87.a75e695f.js",
    "revision": "f3b474314c13c458e0c856d8e8fc4606"
  },
  {
    "url": "assets/js/88.39411bf5.js",
    "revision": "3aa98f1a4e6c0325e2ed9c053daa1aee"
  },
  {
    "url": "assets/js/89.a18a78c1.js",
    "revision": "97e16f739e5b64b14984317544865e7c"
  },
  {
    "url": "assets/js/9.c4d21b85.js",
    "revision": "0093bc5d5c9eae8459cbdc19631bce00"
  },
  {
    "url": "assets/js/90.45813435.js",
    "revision": "de1ca57ad7acdb9704413539c2c20823"
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
    "url": "assets/js/93.3420f93e.js",
    "revision": "8285bc9a07c3288ef918ffbbb1cf1456"
  },
  {
    "url": "assets/js/94.eac427a9.js",
    "revision": "99f06da7e9539a360f1f9cf3de10e433"
  },
  {
    "url": "assets/js/95.2b3fcbfb.js",
    "revision": "d003e7339e7e2bcbd4355d40aa5f49b1"
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
    "url": "assets/js/98.4d8c9524.js",
    "revision": "f1ccb8dff061812cbe9733ae3ee26cd6"
  },
  {
    "url": "assets/js/99.ee01147c.js",
    "revision": "d9591fd278923625f5bb7829bbe9ffd3"
  },
  {
    "url": "assets/js/app.a1c2f8fd.js",
    "revision": "39a798426f483153c3c9c3da11dc9f01"
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
    "revision": "4b2ca56de7537243f04d4955fb1ecefd"
  },
  {
    "url": "faq/index.html",
    "revision": "ccc186268e14e21a849ed9ff8b124e66"
  },
  {
    "url": "guide/assets.html",
    "revision": "f965b163e9541dfcfb0bde2c145d74ed"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "db5b36014c9cddb4d7119a5e00bc31b2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "7d810d67a00b3bf70ba269079d11f2ae"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "4e8a1d4164e653051be95728c7bef394"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "5be2521cfa0d135942a50fa441367196"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bb9f58f041e68344462cdeda05d24bd9"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "7ccd0ccf76eb4f6805453d3a80cad1c3"
  },
  {
    "url": "guide/i18n.html",
    "revision": "62804ed813a36c4e89a42a162bd276cc"
  },
  {
    "url": "guide/index.html",
    "revision": "9287766fc8f3e3ed9ccb84e68e5fc009"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "9712c951edd73673a1d38ec8c81b0cb5"
  },
  {
    "url": "guide/markdown.html",
    "revision": "5bbabd40420c867e10f724912d5e35dc"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "e3dee14b6428a593f2a6801c86d2d76f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "5fafba1ba1e28303e84c481a80124fc1"
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
    "revision": "d3de461f6d6ded2ec5a505682fa4740f"
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
    "revision": "fdf901e5e4bde156fdde6c161a1bcf2f"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "f5b234d49f70bfa1f059ccfafb7f95b6"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "dd6e243c7a20e92f9c1c7acc4a746ce9"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "6a1d84f1249bfb25e79663661ca9ab85"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "917f85ae1c0900b9dd70d4e3a2e44e65"
  },
  {
    "url": "plugin/index.html",
    "revision": "ec95e40df50e6e5121665010e257c90a"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "58b1446bdd4bbd03e344f96ae7a503a1"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "6ec46f7e4d5b150caac7a6633455051a"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "330ef5e15ac19420f450d71147a18f5d"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "9609c9ced692eb6887fc11643082f348"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ff0c2d24a532d07a252e83bffb1f1827"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "f3c5616d5bb2b9d358cc783a0f4fda41"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "7aa1570bf7e33b05d990deccb4011c9f"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "6e7f4bd5b0ef10d69eae63eaa256dbd2"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "30e0690a8dfb1ddbbe1d9cba68a82d05"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "b3f2b5f304bf7232751fad75f26b85fc"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "e6aff2653bf7f312c224dfdaafb0a91e"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "981a2de5efe8eef89f46ee76d9ac271c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "5bd1252a3e4d91b9e53fc6a8e4ddbe91"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "05015df4ebf974d83531495c99a88a5f"
  },
  {
    "url": "theme/index.html",
    "revision": "862e8f451ce83d484e45293e6eb8eed9"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "1123d385601d5e360977ab6d671566d4"
  },
  {
    "url": "theme/option-api.html",
    "revision": "6417df6ff3749bb710495a7e08b6f449"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "bb3c4f6cb8ef25954681fecbe976bc80"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "ad339ce093340ca6426bbecbc8e9c12c"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "109a107b7aa38002313e8a43f54899b9"
  },
  {
    "url": "zh/api/node.html",
    "revision": "8f973e743d8d03638c335fb77c00c3cc"
  },
  {
    "url": "zh/config/index.html",
    "revision": "216d49dc224d7322b86ea2e61fd12ed9"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "3391ac90e6d744d3178f8f75cfd6413e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "59dfcd7230877d4a229959bd172bd2f3"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "97d9c2af21d1b9ce082a23df4c62b941"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d08b42967ff9025838d8d94892ac77bf"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "21ef5752fa3e26c1ced3b524730f0142"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "ee8f95223099a900bc57c6f7c5d78579"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "cfbe19c97ab909c46cd034604d41ca17"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "06067fa9ae314a7146e52943146a6ef4"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "9cf12af9bbfae296df46423cc4611fc2"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "db5a9e214b3efddf4cbd68160032b743"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "395c140c861bf10ab1f18dd40c86c658"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "d8ed890f2adc050f75e97b1472829fb7"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "210e7b603fc0e3f6b0745795b9a2cc97"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "6650238776dbf94a59482c517a6ee0d0"
  },
  {
    "url": "zh/index.html",
    "revision": "05c8c36539f3cab5910a27826d1cbad7"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "9034ed603512005247e103c5f1be1790"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "5ee9fdfd980c2c49995e17af30e2f582"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "9947fda58cbf218e952a78aed82696b9"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "f96fd209ef7bc15808db2f5bce645dd5"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "8340b6af40b7f65829b99d48b1c4a08c"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "5f992f3208c54a313756945b815540bb"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "03c18f9a6017b984feb8088a51da16ef"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "43d53bff671705cb5534d35e9791a76e"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "b0be1a65a584271460d9be7456f0c75c"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "bfb90b8ad722e3e700fb52b88490eaf5"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "0f3edee69a1bf160d5bb6af6c604a4be"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "4ef4cacc216c95b97a6e35a5da63e224"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "c0fdc93be615396c069b4af4c140fa87"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "e71fdc30290d422cb30d7eec9b1cd8e5"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "3ae4ece90fb3c967a93ada11ff4da5d3"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "494a78a78ee83fb8d5f2357fc7d19391"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "9fcb89221ba9e84114ff833b3def4368"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "19be3e26aa475468ff778eea36b8f122"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "af04ba2a93ba70cb15a8e7ddd1d4c95c"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "2e4e843dea1d6bf6fbed01e04d859c6b"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "d3cfd7e2ebdc4e0b6355cc4fcc7465e7"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "01b11a028c0ccde3e3b1e05e6179b2e0"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "48b73da995faa69c78570d28f3ba4db7"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "93e849f2b3cd946fe972a379e31c8fef"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "f75c49bd1838ace18740ebb2d64f47ee"
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
