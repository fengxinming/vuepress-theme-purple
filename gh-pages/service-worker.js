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
    "revision": "7a8d66ea86d90baec591d252c9b9e9a3"
  },
  {
    "url": "api/cli.html",
    "revision": "ba8a19574b0930ee918472861b7ff4c7"
  },
  {
    "url": "api/node.html",
    "revision": "46051d2f9acce093cf8a6058e347d89d"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.0886adf2.css",
    "revision": "d89902287b8f2bc50cc9e57b78f2cfe6"
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
    "url": "assets/js/100.7900c22a.js",
    "revision": "11f9320211cf1cd23333b2b59ef1c816"
  },
  {
    "url": "assets/js/101.a2b79d32.js",
    "revision": "ba1fce33755a34cdb142a62237d9008f"
  },
  {
    "url": "assets/js/102.33c5e3d6.js",
    "revision": "7df4660d108b1bf7f3f566dcae37956b"
  },
  {
    "url": "assets/js/103.fd8afef0.js",
    "revision": "44c7c690d60de0ce20d7dbe3627b8bc8"
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
    "url": "assets/js/16.c2c085c0.js",
    "revision": "5840774d40bd523a615ec162ffe7248d"
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
    "url": "assets/js/27.b044a5b2.js",
    "revision": "c7c917b54dc4682269ab972b81e61e81"
  },
  {
    "url": "assets/js/28.a7dfbebd.js",
    "revision": "13db168cb1baba75e319f952054d8b97"
  },
  {
    "url": "assets/js/29.c23f0b13.js",
    "revision": "6f97499446ceb468c3416f81b6f4f3f2"
  },
  {
    "url": "assets/js/30.3bfcb7cb.js",
    "revision": "0ffc531b4bbcf2a57314030e40e0c04a"
  },
  {
    "url": "assets/js/31.bfb1f2bc.js",
    "revision": "628c7989be7889ee0566ac1b88af7942"
  },
  {
    "url": "assets/js/32.bad81648.js",
    "revision": "cadd67f3c5bcbf9fc4325f267e7a1ab7"
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
    "url": "assets/js/44.f8f89f86.js",
    "revision": "27f17fe97fe3b153107e770830b3901a"
  },
  {
    "url": "assets/js/45.25987f10.js",
    "revision": "df9cbd6bf47466e314b6e3cd6715f3bd"
  },
  {
    "url": "assets/js/46.bcf5dcb2.js",
    "revision": "36b721247fc54536d1d4e853f6a3e950"
  },
  {
    "url": "assets/js/47.5eef97bf.js",
    "revision": "9b86a9e53e839346b19a48f026351c52"
  },
  {
    "url": "assets/js/48.ff0e56a2.js",
    "revision": "210f73eaf9b2fca8ea0de57875897392"
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
    "url": "assets/js/51.c83cc280.js",
    "revision": "c854328da91c01a32ab7f9f02d6da9c3"
  },
  {
    "url": "assets/js/52.df667a48.js",
    "revision": "68c2494340889fc4edc7bf4d60eec464"
  },
  {
    "url": "assets/js/53.8a14e5c8.js",
    "revision": "713a3c1c39d3a9cf3cd686600a240e59"
  },
  {
    "url": "assets/js/54.86fc9a93.js",
    "revision": "4b92952ec2f4869dd4eb41761d52e801"
  },
  {
    "url": "assets/js/55.7f74bf18.js",
    "revision": "f01fce28e152263ac588f179cb944ab5"
  },
  {
    "url": "assets/js/56.b60e6f69.js",
    "revision": "86b46cdabf157b2af763ecf8263358de"
  },
  {
    "url": "assets/js/57.0b8fcefe.js",
    "revision": "af9d28b14340753190579e03b99721a2"
  },
  {
    "url": "assets/js/58.6ca71312.js",
    "revision": "1997c46f4d2c3eb92067b0154b7231d4"
  },
  {
    "url": "assets/js/59.f0b725d6.js",
    "revision": "92b1d54ad1370befaa8c1891010a9153"
  },
  {
    "url": "assets/js/6.84ed2d1b.js",
    "revision": "9150940cb4d15845cbf72959eef02da8"
  },
  {
    "url": "assets/js/60.da9866df.js",
    "revision": "f41334bfc928ba0b887ae5e62553ba02"
  },
  {
    "url": "assets/js/61.e544b728.js",
    "revision": "4a25b9d5c9443c47eaba1ed37d8f3b9b"
  },
  {
    "url": "assets/js/62.1d408155.js",
    "revision": "4919eb1e7301605afd8946ab89d9cb7f"
  },
  {
    "url": "assets/js/63.c6df9d0d.js",
    "revision": "52e1901ccca1ed22a5e86d0851c008f6"
  },
  {
    "url": "assets/js/64.bd838420.js",
    "revision": "6f25847d6499406bd5ecc3807fd512db"
  },
  {
    "url": "assets/js/65.ec652ef4.js",
    "revision": "0c5e42f1df98f3720b59c49f6f2880b0"
  },
  {
    "url": "assets/js/66.844dca08.js",
    "revision": "0c92b4b33b001924715385738c8e55c9"
  },
  {
    "url": "assets/js/67.9d192001.js",
    "revision": "6e1f8aeebfefa3c154a24f894d65747c"
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
    "url": "assets/js/72.67d58d68.js",
    "revision": "fe32d8a0598440478e175705b1ef17ee"
  },
  {
    "url": "assets/js/73.e435af78.js",
    "revision": "26a493b30551fd1062a975ba5d314e1a"
  },
  {
    "url": "assets/js/74.92da2029.js",
    "revision": "8383d818ad47ab8f7b27db8b8b96cb80"
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
    "url": "assets/js/80.8cecc701.js",
    "revision": "7a99cc926d3daf06b72bad612ae26974"
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
    "url": "assets/js/89.07d740f1.js",
    "revision": "f68c829b442e005c1219cfed3b6e13a9"
  },
  {
    "url": "assets/js/9.ae202845.js",
    "revision": "e09aff1f579fb39b70650682d27fae96"
  },
  {
    "url": "assets/js/90.1a89eb28.js",
    "revision": "e178fdcd10e47172b9d011a922acf812"
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
    "url": "assets/js/93.09812334.js",
    "revision": "e9e0cc7865f73251882a0976f5009b4d"
  },
  {
    "url": "assets/js/94.a374ef2c.js",
    "revision": "74c933bdba207821475445361e235fe8"
  },
  {
    "url": "assets/js/95.340c373e.js",
    "revision": "f81909a19ca9eac217848b19ec280d68"
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
    "url": "assets/js/99.d1c1a860.js",
    "revision": "bda4bf4f2c6ba87e78555c78afd3cd5e"
  },
  {
    "url": "assets/js/app.74d0de58.js",
    "revision": "8ab95aba375d7b299309f4c7bbc5f2de"
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
    "revision": "24e1065a61396d1fdc50d5dfba5e8a92"
  },
  {
    "url": "faq/index.html",
    "revision": "8b4d90c2254fb6b89575adfca3d01c6f"
  },
  {
    "url": "guide/assets.html",
    "revision": "bf3f4bf6e1697ae9e9957e3e725ad31b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "bb3da73ea14f08917b66ee095ece5f8c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "8441c8835f2bb75f2d4e81416e5b1bce"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "cb2d6dcbf9e419138af5567439ae4878"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "f5e8e3023b6fde4c518f9ca4f831e2c4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "98deff8a064795fb5947664dc7bf8846"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "2ef1d07b652bd53e7284fb30b247f2eb"
  },
  {
    "url": "guide/i18n.html",
    "revision": "38dab2e538f528bcd1bf9f62e9666c05"
  },
  {
    "url": "guide/index.html",
    "revision": "da1928308d76208aa3c2834ef25e5975"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "7f470b8871c2c0b91d410fbad83e3850"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d67ecfe936a2cf7da7838cce2819a633"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "0bc841b009bf481f7535e36ec453582d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3bdb37fd2fdb390bbeb825480a4e28bd"
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
    "revision": "e14c32ee9d877d50fadfe2a8faac15fb"
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
    "revision": "8a95e2e91aeb7dce25bc38f26892af25"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "ef52231bbcd364922a0800a6ed192831"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "bcd10e1f9101910d910eb27a0cb588b7"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "415342e6aa9c9a0156d237395d32147d"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "a65d09a32c88a41ba85881e627509710"
  },
  {
    "url": "plugin/index.html",
    "revision": "19b89a8cb66eb0344afcd161ea76a196"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "699b70b35304667ff5b820060357c940"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "0800369eca50eb2b15f86353da6a2849"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "3f0223f0cd129997e1a6c6658d051dc1"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "c7e3218477063f1ae1da2fbf12f12154"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "528758188cfd94807f8a3e98b05e8dba"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ff73b69d0cde71dbb3dc34f14e694dd0"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "5fa3a236869e4aeb8848f97ffee752df"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "0b116d8beece81b9a09666c015ae8571"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "41277680887512357ca97aa49d9fa802"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "31d39848ec28799835fd0546b05a6e9a"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "23af98c0476485e5853205c73aa0cd57"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f64568012ba35e5d9fec2f0d37cf9da4"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "24324803be1f4adbcaba5a0c44ee3a6e"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "062ba2b072cb66dcfd9018c648147946"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "1e84069afc0d8185714b87d565cb1a94"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "ee73946e05f1aea568c5a0917049bca4"
  },
  {
    "url": "theme/index.html",
    "revision": "df622878ab6f2df7a9947dfa7ea968f5"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "4033f8ba9a2846192e14edd19e2b5f5f"
  },
  {
    "url": "theme/option-api.html",
    "revision": "215de4373a1915810e0bb4cc23a0ae09"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "26859d749232c51c6c0e774f1efa6543"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "4c78a56ae8ebf2ae35d6417a9a980ea7"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "d3139d5b8a40db489daee3703c7a4137"
  },
  {
    "url": "zh/api/node.html",
    "revision": "ac75a49802ba8bff5e98bb781b36e271"
  },
  {
    "url": "zh/config/index.html",
    "revision": "9232842f21bc9e7ec9dfec653e64fd67"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "5d7f8df5a5ea88c91fbd15b7fcd2b095"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "7cd7e52d625c089b093c24cf40ec01c5"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "50abcb5df795111d63b498f1247cd09e"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "7d1cdab49a7e662c3ec8821d4523ca48"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "17e24fb9c4fdcbbaf14494fd8221a2a6"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "e737bdfae7aef5d61a5fc29662f04575"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "6917e783af0c6f85b4b9ae4ed40bce70"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "21992dfc5e1e51a2dcca4202999810f2"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "612bc7157b2f07a32f956e5936ba4b53"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "987443813ba3dc8c5084976697b5d19c"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "3fddea10386f01967aaffc9277b36c20"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "061a5d77d6d78d98c4993a4b5cf71ecb"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "0a74f82ba25392c90bcb690d37ff4021"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "61ddba64463bf56ac7e04cdcdfccb505"
  },
  {
    "url": "zh/index.html",
    "revision": "3a19ecad1f3f4f7a0f0002ab6d1b26dd"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "3c0a518db6888bf011fde9f700228d22"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "de4b8404a6cc9a63f8083248a7946322"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "4329ba3dda748382129abcb59de2884f"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "416296c75351e9ee8c4d308eea722eea"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "11376f53b2791321d62d1957829697b2"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "3244aca32a3cfb639e7054baa31f1d4a"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "f39376132dff527aee02ce93a8e3816d"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "e72baf399bf9bf33229b52e7b7f68e14"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "58871efbc84c42d9005d4d3c3aef7124"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "bc978f6a61493c1971ef1d2aa3b2fc3d"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "f38a895d7c9c64e32b3278359c44c782"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "01c37957fc27199946537fa95a5401b9"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "e068f9da3551a5412d9f1c8170ce1ee7"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "7cfce753b64c397a60186cd136a6402b"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "3da3467279c9c865baaf3b38761fc28e"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "90a21bb1c08d437d0f2d68a71187c232"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "39568dac19cff8aafda95c2c2a3a4d5f"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "6a06ff7c2f245438a5ed376bdbd0d654"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "10a8908b6397ce41d1cdc57916630b4d"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "e57eac3b35ae9d074052d073b72adafa"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "ac59d2bd4c4af55c1418cf186d7682f6"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "a3698cc404f2353f01949c0ae703a7b9"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "b053d7c6c926261756e36eb328e5989a"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "d05bd7cfe069c48b76f722b09acafca5"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "e97963635dec44afcb38daa783f9cd68"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "2f10af0273d749c4eb0dd60ed4ee9a33"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "751bcae8ba7e5badb6aeef1d4efaff5e"
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
