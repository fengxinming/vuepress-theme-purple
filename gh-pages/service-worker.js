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
    "revision": "bdf242348f4415399e1af580308ff286"
  },
  {
    "url": "api/cli.html",
    "revision": "2775c9202794a9545f5f479aa41b3b9e"
  },
  {
    "url": "api/node.html",
    "revision": "73a910d5da67eaebb7df2d8d03eca3ce"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.1da5a6e9.css",
    "revision": "234b8d0a18fcce6593c5096779daa828"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ccf9fed9.js",
    "revision": "2867a107a2e97482e850a0d72c714bb2"
  },
  {
    "url": "assets/js/100.2d67ea9d.js",
    "revision": "7a08d31006631d23badc05ef121e9190"
  },
  {
    "url": "assets/js/101.a2b79d32.js",
    "revision": "ba1fce33755a34cdb142a62237d9008f"
  },
  {
    "url": "assets/js/102.60356673.js",
    "revision": "d57e7c1b963cc798091a603e2ac5fa3d"
  },
  {
    "url": "assets/js/103.bc64afdf.js",
    "revision": "60e0ff869e68aafdf3cf4ff0b9e45c85"
  },
  {
    "url": "assets/js/104.af3b7bfd.js",
    "revision": "c74e9691303620f999e5875023688767"
  },
  {
    "url": "assets/js/105.7f545b6d.js",
    "revision": "ec1c7ab02dd9e4f83ed82528dcf39336"
  },
  {
    "url": "assets/js/106.618311e0.js",
    "revision": "1189cc238404e2f1acb05250b65950a3"
  },
  {
    "url": "assets/js/107.d0f73001.js",
    "revision": "c3c2bbfebbc929dafa3737c127ec0a5e"
  },
  {
    "url": "assets/js/108.fe2ecb67.js",
    "revision": "4a7c20b7c532f8f2e6803c21c0c421a4"
  },
  {
    "url": "assets/js/109.16b8e485.js",
    "revision": "7fd36ebb1e2c62948569c54e8f3c7b96"
  },
  {
    "url": "assets/js/11.129d2fef.js",
    "revision": "55c3588fd1ee8234c0c9490bf5889b25"
  },
  {
    "url": "assets/js/12.bcd27a51.js",
    "revision": "11753b81e01115c062c6e8d32dc85837"
  },
  {
    "url": "assets/js/13.cdf5bd64.js",
    "revision": "27ab2120602e9b3384f3b9157daeabce"
  },
  {
    "url": "assets/js/14.edd00775.js",
    "revision": "4e3ec3f92a81a6553157c1510901b9a4"
  },
  {
    "url": "assets/js/15.9fa52818.js",
    "revision": "fcc228a6e7125fbfdaa51dec2a1f2d1c"
  },
  {
    "url": "assets/js/16.cf655440.js",
    "revision": "8c6836ee7e9986ae9115d5d59ff887eb"
  },
  {
    "url": "assets/js/17.a047c50a.js",
    "revision": "7950dc1de440fb22cb1f942c4a4a41ff"
  },
  {
    "url": "assets/js/18.71b35705.js",
    "revision": "77d8a9d65140a3e2540d6dbef8ed0b0d"
  },
  {
    "url": "assets/js/19.9961ebf9.js",
    "revision": "c04a67480a335b8cc9191dbadbb7e691"
  },
  {
    "url": "assets/js/20.f7973689.js",
    "revision": "6dbeaebc6760469ade2174e785c2efd7"
  },
  {
    "url": "assets/js/21.ff4c2666.js",
    "revision": "2cb28afdcf33098741c29927a6ca6f03"
  },
  {
    "url": "assets/js/22.d8136224.js",
    "revision": "40dd655eee5a1a47409ef350270e4773"
  },
  {
    "url": "assets/js/23.191d902a.js",
    "revision": "0b607ae16e92cc43f746436b1af3bee1"
  },
  {
    "url": "assets/js/24.2a0c98c3.js",
    "revision": "6c2e91458c95480e7e7b32b386800d9f"
  },
  {
    "url": "assets/js/25.24fa6c94.js",
    "revision": "3f6c311f42829fa83e09b6f6eff390e0"
  },
  {
    "url": "assets/js/26.c936a9f1.js",
    "revision": "eb53a1164e2dfd9dc0802a2c316fdb90"
  },
  {
    "url": "assets/js/27.a71f71c8.js",
    "revision": "ebe5c9e869fe39508979b2a14f82d4a0"
  },
  {
    "url": "assets/js/28.a59176ab.js",
    "revision": "e2c1b9ca15663a34d201888e7e3b9bfa"
  },
  {
    "url": "assets/js/29.64a90cc1.js",
    "revision": "2e5f8fd66c0b0e9136f4b65ed1f4b11e"
  },
  {
    "url": "assets/js/30.9b87cbbd.js",
    "revision": "317b2f98ec8d50a1848816159cd76e1f"
  },
  {
    "url": "assets/js/31.bfb1f2bc.js",
    "revision": "628c7989be7889ee0566ac1b88af7942"
  },
  {
    "url": "assets/js/32.db4ecd29.js",
    "revision": "c3b320877c04b4783e6dacdae59ad6ce"
  },
  {
    "url": "assets/js/33.9327df31.js",
    "revision": "0ee06a22134baa7d075b055b69842fff"
  },
  {
    "url": "assets/js/34.9d51446c.js",
    "revision": "ce91701489ec1241859b03769d616c55"
  },
  {
    "url": "assets/js/35.bc2d0f8d.js",
    "revision": "dfe1a1253870cff9922176d7623c078a"
  },
  {
    "url": "assets/js/36.b11693d8.js",
    "revision": "3f6410cb43c8f4a8078d4f3009898ac1"
  },
  {
    "url": "assets/js/37.12b55a08.js",
    "revision": "e51fa25ad44b6a486eaea12a42cd258e"
  },
  {
    "url": "assets/js/38.4a8a9140.js",
    "revision": "0e1623b1f7931dfe5819777dc7827f53"
  },
  {
    "url": "assets/js/39.058f6191.js",
    "revision": "5b824409661f04c7c04147df1e4e5c91"
  },
  {
    "url": "assets/js/40.d6f023b5.js",
    "revision": "cb06d6f8c16723cfd5a7976979b2452c"
  },
  {
    "url": "assets/js/41.2f1d5e23.js",
    "revision": "5347b1c5fb8a3823026139021c4b30eb"
  },
  {
    "url": "assets/js/42.7b098417.js",
    "revision": "f71ced6789dca9e8f078c16c52322499"
  },
  {
    "url": "assets/js/43.3ff976e0.js",
    "revision": "234d3eab6f005a5d00d0750d3d62eb97"
  },
  {
    "url": "assets/js/44.a8a86f65.js",
    "revision": "c94e17b58a1ff4333bcf216cfac9d447"
  },
  {
    "url": "assets/js/45.d987b668.js",
    "revision": "c680ff6f143b1513645e8df73c4de729"
  },
  {
    "url": "assets/js/46.bcf5dcb2.js",
    "revision": "36b721247fc54536d1d4e853f6a3e950"
  },
  {
    "url": "assets/js/47.7d52bc4d.js",
    "revision": "716d0c336e76237964c8de3e182a644d"
  },
  {
    "url": "assets/js/48.a933b9f4.js",
    "revision": "7006e8b78203d6848c713313ff6a2505"
  },
  {
    "url": "assets/js/49.a359b1da.js",
    "revision": "bf42de9c3560470a9a9d364ef962402d"
  },
  {
    "url": "assets/js/5.7c52604b.js",
    "revision": "bf0784eeed76703b9e8030872df1e2ae"
  },
  {
    "url": "assets/js/50.5fb59b8b.js",
    "revision": "b44d8c305306d3b9318aec803589fd55"
  },
  {
    "url": "assets/js/51.944f17e3.js",
    "revision": "fc79d2493bf83268916a839782d4410e"
  },
  {
    "url": "assets/js/52.e8eb61d2.js",
    "revision": "5b0e38ec61651dad9de43cd5544726a1"
  },
  {
    "url": "assets/js/53.5c316503.js",
    "revision": "2d6e51f20bf52488cf389f21085b94e5"
  },
  {
    "url": "assets/js/54.42f4ad43.js",
    "revision": "f12848ef9b94ffdb01774e8de915d4f9"
  },
  {
    "url": "assets/js/55.a59f64ae.js",
    "revision": "c0bf7ae626914bed14cb6724fb7c5880"
  },
  {
    "url": "assets/js/56.5b16ffa6.js",
    "revision": "1e2dfc1925d51567a4053d20fb988a7e"
  },
  {
    "url": "assets/js/57.afdc4bfd.js",
    "revision": "32f5c0c6a194f7febd255ee71ceb48d9"
  },
  {
    "url": "assets/js/58.7b819d75.js",
    "revision": "5bbd9965a9485ee8ffa2b748e0249f01"
  },
  {
    "url": "assets/js/59.ef2ba9b9.js",
    "revision": "bc573a3857d49ed5780eb7227ef17d99"
  },
  {
    "url": "assets/js/6.84ed2d1b.js",
    "revision": "9150940cb4d15845cbf72959eef02da8"
  },
  {
    "url": "assets/js/60.f8dfe74b.js",
    "revision": "04f5088b1052e6feb7b8ef0c3e7b71db"
  },
  {
    "url": "assets/js/61.8aa4ecb2.js",
    "revision": "89015cff9a0c197dda3641607b065a6d"
  },
  {
    "url": "assets/js/62.ed0b586a.js",
    "revision": "cc3bf8ab0d97cac54e0373d6e40dac2d"
  },
  {
    "url": "assets/js/63.54abdec0.js",
    "revision": "965cb93b99b769d451584432ea82f791"
  },
  {
    "url": "assets/js/64.f94258b5.js",
    "revision": "db3526420b621d98a0459cca4400c7a9"
  },
  {
    "url": "assets/js/65.090d3d76.js",
    "revision": "ac4d471c9edc0214edfdadb379537b5b"
  },
  {
    "url": "assets/js/66.6f1be7b1.js",
    "revision": "8277db0918dafe61fc13bea21b5804ff"
  },
  {
    "url": "assets/js/67.87c82366.js",
    "revision": "03903dfcf26d0b727e60634a6e1485b2"
  },
  {
    "url": "assets/js/68.1267c6ed.js",
    "revision": "ed2f6c73ca3a34fbbfc94a7bc204a717"
  },
  {
    "url": "assets/js/69.f86ed539.js",
    "revision": "12fe72dcca196653172dcb034d2b87e1"
  },
  {
    "url": "assets/js/7.fec07921.js",
    "revision": "1c7d3a4d4f233ffd6ebc4ce71b896d94"
  },
  {
    "url": "assets/js/70.421e2628.js",
    "revision": "76f0b61c57dd9dc4e1fe3c664f7bd2c4"
  },
  {
    "url": "assets/js/71.a535e429.js",
    "revision": "27a60969f61f7c7b9e6f542a83485e19"
  },
  {
    "url": "assets/js/72.37a6e7dc.js",
    "revision": "64576b3ca1c3e2faafb54333f0912a3f"
  },
  {
    "url": "assets/js/73.38f422a4.js",
    "revision": "1e6fb1e06197454fbd67ff886db1bd6a"
  },
  {
    "url": "assets/js/74.08804701.js",
    "revision": "c6a4a3d60631b0a0637420e340bcb2e9"
  },
  {
    "url": "assets/js/75.0c0db9cf.js",
    "revision": "993eefbc7d270ac593290dd08b2fc07a"
  },
  {
    "url": "assets/js/76.a3a2595b.js",
    "revision": "3d6a79cbf429b724c7094bdef3bdb7bd"
  },
  {
    "url": "assets/js/77.f8236f35.js",
    "revision": "592c921960f5eae60db4debac8366278"
  },
  {
    "url": "assets/js/78.0724b627.js",
    "revision": "dea24c270f568cf0bdb949ea3eb3b359"
  },
  {
    "url": "assets/js/79.ca21e02d.js",
    "revision": "332f1d755f0b745806ea61f245d16781"
  },
  {
    "url": "assets/js/8.9c24fc64.js",
    "revision": "f1e471db59cc1a51b4306f110d08423c"
  },
  {
    "url": "assets/js/80.c1069e1c.js",
    "revision": "d4436ea9c93873280d4adac707af1e13"
  },
  {
    "url": "assets/js/81.5b7e179c.js",
    "revision": "1105048c1956f0a520f35cb33b913498"
  },
  {
    "url": "assets/js/82.722fa657.js",
    "revision": "075b8d6610e0e63c2eb7a4ef0787e34f"
  },
  {
    "url": "assets/js/83.79af3d78.js",
    "revision": "6dcdc8606bf4f4719835c3700e43e01c"
  },
  {
    "url": "assets/js/84.55d2b480.js",
    "revision": "80c973dca3e970be78c2dd6ea2d8adef"
  },
  {
    "url": "assets/js/85.e9eb3926.js",
    "revision": "8d11f0a2f3f98eaee39d76223ab70bcf"
  },
  {
    "url": "assets/js/86.66f27096.js",
    "revision": "805df00f13735936a26827edd9a94052"
  },
  {
    "url": "assets/js/87.38436ba9.js",
    "revision": "fb3a22bdc4fad3b403670621e87bfae0"
  },
  {
    "url": "assets/js/88.071bdad3.js",
    "revision": "9bc91e219406718026bd38938f335606"
  },
  {
    "url": "assets/js/89.e08252d3.js",
    "revision": "52c2b28f7fa5f39ee477c2183a9d933d"
  },
  {
    "url": "assets/js/9.ae202845.js",
    "revision": "e09aff1f579fb39b70650682d27fae96"
  },
  {
    "url": "assets/js/90.3c1a6a2c.js",
    "revision": "1e5e1295699f1d51859523b9a170615f"
  },
  {
    "url": "assets/js/91.9cca01e7.js",
    "revision": "d5464fc92177138e3e68ffe628e624c6"
  },
  {
    "url": "assets/js/92.3ea9f870.js",
    "revision": "943932dcfd822f3e6e25016f118b7956"
  },
  {
    "url": "assets/js/93.677059ec.js",
    "revision": "38f2b1f3ea63f28c82335c2b7e123f57"
  },
  {
    "url": "assets/js/94.8a58a051.js",
    "revision": "41a155c5a726e3c2a93c945f7a93013e"
  },
  {
    "url": "assets/js/95.05ee2c20.js",
    "revision": "172ac5ff930e992446d1f7dcf301fb6e"
  },
  {
    "url": "assets/js/96.6ece94a2.js",
    "revision": "d2c874cbc80630382dcf67b42662a56b"
  },
  {
    "url": "assets/js/97.60b8231e.js",
    "revision": "b956c34c3447e91eb1294cf8df262e2f"
  },
  {
    "url": "assets/js/98.c41a75aa.js",
    "revision": "3aa680ac286d67e4475357a1575bbc1f"
  },
  {
    "url": "assets/js/99.df83d21c.js",
    "revision": "e8928a5ae45a0be6de9b84042af865be"
  },
  {
    "url": "assets/js/app.8c975afe.js",
    "revision": "646430541677eb9a79e4fe07dfe30d30"
  },
  {
    "url": "assets/js/vendors~docsearch.52faad59.js",
    "revision": "55abc6897e8ff4cf9415874ad323f497"
  },
  {
    "url": "assets/js/vendors~flowchart.72dcfd48.js",
    "revision": "5a7e49250e5fc458196b2b9af5769d93"
  },
  {
    "url": "assets/js/vendors~notification.e0edb8c3.js",
    "revision": "06f534164ba7a1f0a4a816e9dd0d7134"
  },
  {
    "url": "config/index.html",
    "revision": "86229f073cb88de36753d164863b8894"
  },
  {
    "url": "faq/index.html",
    "revision": "4ed3b24b1374a6ca181521bc30b834e8"
  },
  {
    "url": "guide/assets.html",
    "revision": "0674c1148c21807b43c458c8f43bd58c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e044c81ac6dd80b70500d43fe69a32c2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "5c9c7aeed52c0974be077f26f89bc6aa"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "9235fcc76a45c2972f7a096cb8664875"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "a6bf464e8e89ca1223cf2ba89088745f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cd0c5336c9926913be7666a026ae7f4e"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "064d509298f52ab2e4ea352381d2a592"
  },
  {
    "url": "guide/i18n.html",
    "revision": "9d0bb140a89ef47a5d74d915ed67148a"
  },
  {
    "url": "guide/index.html",
    "revision": "efbeda3b4f3184aec40a2864f6a57046"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "b2beacfd0333b264f549ecfff4938394"
  },
  {
    "url": "guide/markdown.html",
    "revision": "954b04f98c08233cfa65f59b08053c73"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "ed0c193ac7999ac9de6abd4926805984"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "4e4b6e2b5d135e62d524f9a1562ec5f9"
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
    "revision": "4982c9fe8034409d45f8d469a0288f6b"
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
    "revision": "e04682c1774d16c5a5dde60db84c917c"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "a76b1e6b53afb321cda19b094ebf4ede"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "9c3a669a618c9982a877d7f28c61e6e0"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "fc59e2186f0c3c07d359191e9d09efe4"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "ba891bc1b1715848150c72e465d08227"
  },
  {
    "url": "plugin/index.html",
    "revision": "c7a4650d9479ff8ff14404e276749c89"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "ec374715b396c276e44edc9035a01089"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "be63f284738896ca54d2761062f83ed3"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "b630adf3582a3a52a6cb56246322e644"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "c7977a32118a8be903c95d3ec6ccc523"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "242ec7cb6c68da160657f99a94162ccc"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "31f2548a96f5f8e73258a41282dba065"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "6480122dd2d0f12f22673c7d577735eb"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "39138c1ec32293b42dd95db3d9bc3393"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "01a68164410e045ecb7013d0273b050e"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "fb847629bd85ce7432d228eb4a662a58"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "9f695ff7984c2ce22c8810c870252c85"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "180b604fa22e2048aa00dc1c8b559160"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "5392c9467fbe21b1cb8ceabd66411ee1"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "b489feef5bcf6f585f3c6830804d13b9"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "ed023e897bc151e0e71a0199e8506e54"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "207c0a5d158a92e4e9d953430e94236c"
  },
  {
    "url": "theme/index.html",
    "revision": "d9a59c170472a1effd4d4e4bc784f28a"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "b4218ebf05273f60f115179f6cc09114"
  },
  {
    "url": "theme/option-api.html",
    "revision": "f987472a72542f5351e39c05ed2134d4"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "12ef668910be0fe31a4b5aa4e3461196"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "446c773d25f03e9deb2d97f85e099f7a"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "2e908919355bd8d4821ea2d055152e17"
  },
  {
    "url": "zh/api/node.html",
    "revision": "c1563158e4f7a0252533d6ec16372be0"
  },
  {
    "url": "zh/config/index.html",
    "revision": "ddbcef20af8b5f965b88ad5918e4812f"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "c7ff6f4198e8a44f1aba30d05e3d18c7"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "05ce57d7973106f9c491d5557103e7ff"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "1719e728887afb8a8cc0e48bcc781dbf"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "3ccccc108d864b016f58d6a8f809f951"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "8290a703d6045b5ddc360a2276fdde2f"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "4b2cb866010466ac7dd0c8bb64ed7f44"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "734e6d6e4c44562b6a50dab6cc0c26f1"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "d388bdbb5809af505b75f4426ae903cf"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "ee7b72ee4a4a883177e9ac9cfa212568"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "aacfd07aef648e43896ac946ee53b9b8"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "c13494d90f9743334ed733bf60348e45"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "7a99584c27113fca88553abf13ea2eff"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "9aab70e5f26925a885b233e1c26ba111"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "62f922070bb5e7baf27b5e1490ea5565"
  },
  {
    "url": "zh/index.html",
    "revision": "9e5d510b9c45750c2a16d0a0dc1d96b7"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "a2cd7684dcf0c94e9f0bb9b4f5658a15"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "6b49c415931569cb001a1b9436a0e075"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "7fa9fc6f149d9a3c02c7cd0af9ed5b5f"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "910ac59bdc978e7f420edf4a538ca986"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "027734aadfe6e21e729ef09ad6e02178"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "1c9897e1070b44d20e608c6852d1e4c1"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "8e43af0a0a8a4ecb9c4ffd8432974a1f"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "745a61bdb0e926d69b06ac40a1778bd6"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "aea3becb6c60fa627b0fde0b323029c0"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "2d180b7e2d381dc1bac989de121edfc9"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "012d52ff63c7527acc93d553844d81e5"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "424614bd15b15e97d0d4502848170004"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "adbbb9cdec8edacf5de87250861f6af7"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "95afc616654dc2d51fdfee506d41eefb"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "faca6c62f01edf917b53ed6b7d305025"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "8639c31b2a5f2df69cdbb4d5d8c351c0"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "0564b45718a5738eb924daad4464a9a9"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "26f566fb946132a96fc6d62ed86da5ab"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "2c9aedf6447b9ca726f06f313b981f0a"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "d44faf07c5f29304d65a9403bf44e699"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "d1ee41c638df26bca1ed359e2ba7a757"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "0b9a3f49318fdcc159717e0ff86ae61e"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "1ba91b109685c1d9e642d5c146bbe913"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "aa05f1276a13e332fc4dcef91e120b06"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "c60e10da0cd94747f09867c3937d6429"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "1932d0f9536dcd13f30db2cb8f1acee6"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "5fb5a7400b3880e5165af1483a49b3a5"
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
