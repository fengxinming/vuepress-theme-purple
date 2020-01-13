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
    "revision": "c0912c9484df0cdb1254d807a579c15f"
  },
  {
    "url": "api/cli.html",
    "revision": "25da3e0701231bb7fc40c935e5903706"
  },
  {
    "url": "api/node.html",
    "revision": "889636ea32c9cb0bc8a692ecb39cd88b"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.ac74ab6c.css",
    "revision": "2aa89951281e188e0d8e35c95046b582"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e624e16c.js",
    "revision": "bd17391af70be63cd3f14a2ad38d7b14"
  },
  {
    "url": "assets/js/100.2724c032.js",
    "revision": "5ab991e9eb227d63a397913cba4f636a"
  },
  {
    "url": "assets/js/101.a953adbb.js",
    "revision": "79f03c1bc017ad9b6fb89adadae63049"
  },
  {
    "url": "assets/js/102.1584041d.js",
    "revision": "7182cda4b298ec6229c7eb1d94e9e10a"
  },
  {
    "url": "assets/js/11.4a4c7d9a.js",
    "revision": "2dbb3b0cc40d6a31e3f7936655c6ed58"
  },
  {
    "url": "assets/js/12.cbc5b82b.js",
    "revision": "f7fadff349a8f3f137b906f2436bd3a5"
  },
  {
    "url": "assets/js/13.84be9da3.js",
    "revision": "e70b534288dfc4622360f529260ab0fa"
  },
  {
    "url": "assets/js/14.aed631b8.js",
    "revision": "afff68873a87f979bcba0d87a02bbad7"
  },
  {
    "url": "assets/js/15.a8342f19.js",
    "revision": "bcc4b1fbab3dff175faa22df7fdb08bb"
  },
  {
    "url": "assets/js/16.9d89b4c8.js",
    "revision": "cf79b1ea0742666638c6fefc9b039751"
  },
  {
    "url": "assets/js/17.c9edced0.js",
    "revision": "8642b9a9b168903708499d44da504d07"
  },
  {
    "url": "assets/js/18.cf708fd0.js",
    "revision": "321155439d993aa6e6ccab0658cb29b2"
  },
  {
    "url": "assets/js/19.9a8df32e.js",
    "revision": "4a29b1e04510dbb6a0f9ffdc32d8d3da"
  },
  {
    "url": "assets/js/20.884639f7.js",
    "revision": "87aab7e3f1ba9aa3237dba7ecdacb6b4"
  },
  {
    "url": "assets/js/21.94257365.js",
    "revision": "d97e3b01e6e8d10ce68f0e97e20defe7"
  },
  {
    "url": "assets/js/22.8d62c9a2.js",
    "revision": "7541598f4b0ed1b20d3aa04f3a3aa305"
  },
  {
    "url": "assets/js/23.ce752771.js",
    "revision": "a0be179fc158f854f434e1e82398f9e7"
  },
  {
    "url": "assets/js/24.06abc75b.js",
    "revision": "ee6dd550ad368a18f1256807a32d117c"
  },
  {
    "url": "assets/js/25.e08fe3e0.js",
    "revision": "f3c65e76cdb0a785d387ab488c0948be"
  },
  {
    "url": "assets/js/26.6428a03c.js",
    "revision": "9f21a9a8ac5e6c085589d4199b544a91"
  },
  {
    "url": "assets/js/27.f7a3f9a9.js",
    "revision": "a63c8aa9587e966bab6ff6a92b819460"
  },
  {
    "url": "assets/js/28.1e23a6c1.js",
    "revision": "02901a201098326742de632a0da68172"
  },
  {
    "url": "assets/js/29.37607c79.js",
    "revision": "434b4bcd0a081b35ca78a4c995bdc5cd"
  },
  {
    "url": "assets/js/30.64e2ba9e.js",
    "revision": "d2cfcc0d127da1b6bc8bd33549482584"
  },
  {
    "url": "assets/js/31.19ba154a.js",
    "revision": "a3b441c1e66e0f91aae0c2b087cbebc0"
  },
  {
    "url": "assets/js/32.08f0cea5.js",
    "revision": "b902c497c604dfc69779b4b725b15762"
  },
  {
    "url": "assets/js/33.b1419cf4.js",
    "revision": "ba348a74b6a3a6ea936103f5c65855b2"
  },
  {
    "url": "assets/js/34.539c3e0a.js",
    "revision": "bacf81f55f880679641c53c1d12a5df6"
  },
  {
    "url": "assets/js/35.a9247b4b.js",
    "revision": "30adfb9311d3c48265d6d38757cec2fa"
  },
  {
    "url": "assets/js/36.f3139e7b.js",
    "revision": "d85c37c0548c1d829b16b0ca6daa09d1"
  },
  {
    "url": "assets/js/37.5539014d.js",
    "revision": "36e3d97e11538aad3bcfbe33a15dd807"
  },
  {
    "url": "assets/js/38.72ba3811.js",
    "revision": "0e641b2ffa25046996857e204cf4f981"
  },
  {
    "url": "assets/js/39.a0ebd37f.js",
    "revision": "018a5f07cb87de38febcccdb76774c36"
  },
  {
    "url": "assets/js/4.d9eb7c0a.js",
    "revision": "310fe3857450b2ba499001b03203aa7c"
  },
  {
    "url": "assets/js/40.6f143e08.js",
    "revision": "08e8607773dc830f8c3ca63516c55c06"
  },
  {
    "url": "assets/js/41.334a5a6c.js",
    "revision": "951a3d9eaed5f9780b2a1a59469011ed"
  },
  {
    "url": "assets/js/42.e7ac43ab.js",
    "revision": "04c5759c08ff6688560d8ee2bc460823"
  },
  {
    "url": "assets/js/43.8728e81c.js",
    "revision": "7788df1c3b02d7816209afb24a06f82f"
  },
  {
    "url": "assets/js/44.2bbeb11f.js",
    "revision": "f26714604862ae5ce7d5e58599c6f483"
  },
  {
    "url": "assets/js/45.b7e8b45c.js",
    "revision": "2d8ca74811b0aae5745eca7f4edb7965"
  },
  {
    "url": "assets/js/46.43d1009c.js",
    "revision": "6d72f42781c3debb093efb78e300d8f1"
  },
  {
    "url": "assets/js/47.5a0b0f27.js",
    "revision": "a98ec90c0d9cf98a2ca897b72a57b895"
  },
  {
    "url": "assets/js/48.1662160f.js",
    "revision": "5d59d6c4b1ceb40ece2d9e1935bfa4e0"
  },
  {
    "url": "assets/js/49.1e3311fa.js",
    "revision": "d7133dd88749d1e0f417f3853828e96a"
  },
  {
    "url": "assets/js/5.8e2de2e5.js",
    "revision": "a7e68ae8660a81679f29956d7dec574c"
  },
  {
    "url": "assets/js/50.240ee716.js",
    "revision": "15423962b3f6f6692fc36c9f1060d138"
  },
  {
    "url": "assets/js/51.955e3150.js",
    "revision": "7752b9f19b00868acb1af5bf12ebebe9"
  },
  {
    "url": "assets/js/52.844fed66.js",
    "revision": "2a3d5e64e8b4dcf9be220143b4bfbe3c"
  },
  {
    "url": "assets/js/53.733e0e9f.js",
    "revision": "52767c0d1168084af61c2b0c763e0c36"
  },
  {
    "url": "assets/js/54.ef5130b4.js",
    "revision": "405b5770b46decc37e93c6495ce19f76"
  },
  {
    "url": "assets/js/55.dd167576.js",
    "revision": "36aa9bca310a022787a0148f71ff1260"
  },
  {
    "url": "assets/js/56.36ab0e2c.js",
    "revision": "479f4f2ebbe6f7b8fc95f779b6dc32e8"
  },
  {
    "url": "assets/js/57.e5f39cf8.js",
    "revision": "b4426da33c3fa3a2a24273a77e5a8943"
  },
  {
    "url": "assets/js/58.52118391.js",
    "revision": "aa5b8a703a0b90de700a729c56041597"
  },
  {
    "url": "assets/js/59.ff555f85.js",
    "revision": "ddf1277d4821f1c90a738a6963438f9a"
  },
  {
    "url": "assets/js/6.681ce704.js",
    "revision": "9dc9a9f8e5a18d4683ad1409a5db743f"
  },
  {
    "url": "assets/js/60.8cb8fe3d.js",
    "revision": "d9ac63143f63c76a66cb85cd5b4e6c8b"
  },
  {
    "url": "assets/js/61.9a03cda0.js",
    "revision": "9ea3524ac918ebb5763eb3229d66445a"
  },
  {
    "url": "assets/js/62.e0215442.js",
    "revision": "2b97c11378f6912d444a7d5fe90a8502"
  },
  {
    "url": "assets/js/63.be110da3.js",
    "revision": "0c1fb3a5519ee12786aa68ebeeafd6d1"
  },
  {
    "url": "assets/js/64.3128edb8.js",
    "revision": "b8707d8590977ed4001d0c493afe993a"
  },
  {
    "url": "assets/js/65.08318058.js",
    "revision": "18af2161f77adcf06f3a2f09dacd4a75"
  },
  {
    "url": "assets/js/66.f573c759.js",
    "revision": "c9ace6b621b0e1e2dec4405a5862aab8"
  },
  {
    "url": "assets/js/67.b270565f.js",
    "revision": "d2b4882c6cc408c33faa99e6b012da86"
  },
  {
    "url": "assets/js/68.86895644.js",
    "revision": "310c7465a04665a9777b7f144edbcbd3"
  },
  {
    "url": "assets/js/69.e0166de7.js",
    "revision": "ca485e4bdb8dd63d5e39791f8e50042f"
  },
  {
    "url": "assets/js/7.4c175c39.js",
    "revision": "a37aba7ea0fb70418c7901418aeb34ac"
  },
  {
    "url": "assets/js/70.26ab01eb.js",
    "revision": "d98a56d02e7a47d86f6e8f1666363707"
  },
  {
    "url": "assets/js/71.0c6c3446.js",
    "revision": "712f158cf4452cc923f961e303e1adcc"
  },
  {
    "url": "assets/js/72.6bfbf797.js",
    "revision": "84aa1dde70d423927c61fbda5b32d420"
  },
  {
    "url": "assets/js/73.4fd8dd68.js",
    "revision": "bc666df9b34b8a1880c0d4771bc95bae"
  },
  {
    "url": "assets/js/74.1f14ad56.js",
    "revision": "a0bbf05f4493738b232b08465c236997"
  },
  {
    "url": "assets/js/75.8dc4df57.js",
    "revision": "dcb514439028f5e33bf77aa7795fca5a"
  },
  {
    "url": "assets/js/76.6b2ece4c.js",
    "revision": "917b74318375bc5058c4250975b88fa7"
  },
  {
    "url": "assets/js/77.c0206309.js",
    "revision": "4c3db03211cb37d2d05a71ddb2a33388"
  },
  {
    "url": "assets/js/78.2b4b2af7.js",
    "revision": "f907cadf87b302025edd16d230a82e6a"
  },
  {
    "url": "assets/js/79.37ded6c1.js",
    "revision": "061a5427c94fe677e1c6ae6685b75fe0"
  },
  {
    "url": "assets/js/8.dd2bc46f.js",
    "revision": "76401e0ef42b8a7bb17132d3dd83b0cd"
  },
  {
    "url": "assets/js/80.951f8745.js",
    "revision": "8e8c1cb27bbd3a92f1ebec20444009b3"
  },
  {
    "url": "assets/js/81.ee37af7e.js",
    "revision": "45d371a67bed3eee71a466b8890e4ee7"
  },
  {
    "url": "assets/js/82.28d3354c.js",
    "revision": "9a2d212e9bc2afb0820c86dbbeb1edc2"
  },
  {
    "url": "assets/js/83.a60d5397.js",
    "revision": "432142f0cd6c452d7d1248f608511b60"
  },
  {
    "url": "assets/js/84.8a8b8481.js",
    "revision": "2da70c0a3adfdf9aa1fe03233750cd5a"
  },
  {
    "url": "assets/js/85.5d83e3e6.js",
    "revision": "defbcca1f1acac453691f4b523bd11d9"
  },
  {
    "url": "assets/js/86.6b9ef9b5.js",
    "revision": "bbdf820d889a87bc650307f2dfc01754"
  },
  {
    "url": "assets/js/87.70a30ead.js",
    "revision": "0074f54122e523a52ed62fca1551482e"
  },
  {
    "url": "assets/js/88.d9a85882.js",
    "revision": "958dcf315253e7cb4cdb686140e37110"
  },
  {
    "url": "assets/js/89.89c645ed.js",
    "revision": "1576c302047aaa2c65b816599a4bc85c"
  },
  {
    "url": "assets/js/9.db12d963.js",
    "revision": "37ae0ee08cd895fb67099ee017a13319"
  },
  {
    "url": "assets/js/90.1dc40e64.js",
    "revision": "24a42da5124519cc32ab059e8be0cd24"
  },
  {
    "url": "assets/js/91.11e7572e.js",
    "revision": "4d0b083502f0c75cba53ad8cddb24bee"
  },
  {
    "url": "assets/js/92.db9f3fe1.js",
    "revision": "25afca8526132cd3425322f04d0f6a0a"
  },
  {
    "url": "assets/js/93.a4ec0a0f.js",
    "revision": "c0eb6be9412db6fae3b8c7f6ddd64d49"
  },
  {
    "url": "assets/js/94.f70b3211.js",
    "revision": "37f3c4fcfe486fc52e127f169d64893a"
  },
  {
    "url": "assets/js/95.2b3927c8.js",
    "revision": "70fa43fc23a985b4874f743ca05706d7"
  },
  {
    "url": "assets/js/96.0fd0c689.js",
    "revision": "ffba8d2ca76aab271501b7f278131d86"
  },
  {
    "url": "assets/js/97.6aae1479.js",
    "revision": "fd88aa43f77d43503c7fd5b51e31bd56"
  },
  {
    "url": "assets/js/98.8daa67d2.js",
    "revision": "7004d2310b0580addede11505f535af1"
  },
  {
    "url": "assets/js/99.53b94054.js",
    "revision": "643f578effd51a754ab29176c4c0d8bf"
  },
  {
    "url": "assets/js/app.166df149.js",
    "revision": "4a163c386c6ec64283fdc94b4848d12a"
  },
  {
    "url": "assets/js/vendors~flowchart.19ff9735.js",
    "revision": "e3035fdff2db9f9f3783603a65ab2641"
  },
  {
    "url": "assets/js/vendors~notification.3666f6c7.js",
    "revision": "c9e89542b4eeff1a3a50860a11e70800"
  },
  {
    "url": "config/index.html",
    "revision": "8527e3b68634b529804154220e87f5a7"
  },
  {
    "url": "faq/index.html",
    "revision": "18e8876f13cb4187d9ee2186ecedcee2"
  },
  {
    "url": "guide/assets.html",
    "revision": "47c93d962930e4ee122c584d0e70cb95"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "09c1d370cdf746ab6d7ee7b838aafb44"
  },
  {
    "url": "guide/deploy.html",
    "revision": "187a02e855cb5dbbfdd791c0eae6c3ad"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "500802232eabb6f6af4073e9b2c20d2f"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "ca2158e0a5149b0e95aaea9e64399722"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "539a4b0bd8df137530281f1dec8bdfa7"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "32ee834c3241f695348d06d398897ec7"
  },
  {
    "url": "guide/i18n.html",
    "revision": "5ec07eeeea595c800e6d5593dc743a64"
  },
  {
    "url": "guide/index.html",
    "revision": "0c2ce08b075482e47cddba2ac4960a05"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "cb3fad17b81bd75f660db5ecdd380bd7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "5172e5be3260df37a2b794090af05e89"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "de86ea528e5c17459106b0dc82cd58c8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1a075466d85d193f056cb1ce6e206a2e"
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
    "revision": "44555371583cecf91da053315420572d"
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
    "revision": "93fb542525d642f13141df5fbb42a396"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "8191ba425a6d82903bff2db0adc66b84"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "1c3a9d68d76802be01460de94cdaa4be"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "2c0334e56d3cbbd8d1e8738df9b51f36"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "c57388bc9880da32f3ebee93e75a379a"
  },
  {
    "url": "plugin/index.html",
    "revision": "d764aa5de1d6b63d1d60e865618a201e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "9e55aa8efc89376315529a51bd7c090b"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "ffb895ba1bc67af5bf006d0259d5534e"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "91f869ab68053039a5403a8dac544e56"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "759141755e4ff2828b401da0e0934383"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e5d7752cab2fee7610d550f42e9dc0fb"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "15fe44e05d4ac9f0220f93bacb605f3e"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "fa2d2d89b51953c25905a330e7b5d757"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "ff00742af30330e7ab2191d8a5c952df"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "07eb6b9fc383280e72e51cb3d69cbacd"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "71905987d7e4c7ecd56b4a1f812cb0d5"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "4eef1555cb75195a0b14a15840b39f47"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "c9c5ef0e0d49186037d377e51f262197"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "6d52ad82f1a768ac783b60705ff26319"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "cf3ea09b7170eee8d7c4de50e8e0e340"
  },
  {
    "url": "theme/index.html",
    "revision": "fdaa60734751e9c873f56da4785dfe06"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "a39d18e9ca0f4fa4598f4af8e7ccc59a"
  },
  {
    "url": "theme/option-api.html",
    "revision": "8c3d0c57bf333b90b77a54004d4f537f"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "a22389f53d23fe82465c11b490d76cdc"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "4386772643aa1d79d2c8cfc84064d28d"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "a29af8a2454e73d7f6a5470d2962cf5f"
  },
  {
    "url": "zh/api/node.html",
    "revision": "dc568dc70d56ce2662b8a291ef8fead4"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b57306c33da16ace991a0093956261ec"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "c2a4a03452922fe955a5661bb3a767dc"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "0b9b52cc9bbb435d08d572c9df991b01"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "3d587010377ae899a9bd4a0f8aea889b"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ed22ea89379a6873b817fc92738a4ce7"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "d8f8dedfaf0318e65553e6ecafae4721"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "1267411cb8d0d9e511a61666ee21b16f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "2eb28e61df9aeb8c0c01a74f6968e66f"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "51c5ebf1c974c3e21e7b2623b8ef3a88"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "12c213461f12fc82598b19fe3cf68553"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "32d53cdcf9510cfb3e007255ab176f6f"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "8eaaad95dc5e51e6afb88bed84403276"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "081add87a2a0605b474caa30678bc340"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "b0604a208ebf84b5efe1dc38280b09a9"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "4026ce74f7b7e59f6c913596b8e936f7"
  },
  {
    "url": "zh/index.html",
    "revision": "168aa2d7640008ff9441bbd5c096c60b"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "197ec0f96b11a67c79f29b7c8d5072a9"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "7627ebaba65e165e7917db8cf30fbc72"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "d2f4e9215fa51caaf55a17224af61566"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "96f74b866ac8f7e449e918ffff318bed"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "49b23e778d38a2a032472dba8b51118d"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "a325113ec9ae3f66d09c1e3639b64f76"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "854843423b2bddcf61dd6083d0330a03"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "dcc072550cf87780f1ffa08636328b95"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "210201e4515343ae92d51c54abd4c6e8"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "464613630dedc064e3c3fd5511c5762b"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "c777a5787692175c2c38e909d9892e31"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "a4323b631d714df6605ed3e4cdd4fa06"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "a76f4ecdec06d8bdc9309236a1b49823"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "2e50857c46c6fab3afd718f4571cf2ce"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "87bea3f547a1691527a61c760f183fc1"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "38605f3cdb77a05221b8fb2caec7bbde"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "10214d82bd4cd9541ca3934aed2bdf31"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "84e4ed390a7d669c5ad00ce2d1271bb5"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "e17b20d7291d224f77f780f476c47714"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "d49fa765892e59de60a554525e5a9b4a"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "4287e46205ac7c892bdd2c431f9f9227"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "e079158cf077a52e66d11efa34f95156"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "070e5700faf0a1f0f2571c96ca8c9ab9"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "df3c777278f6bb33eda0d3cf1f15ad79"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "d71bc45f12e24a63a55d33eb40fce391"
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
