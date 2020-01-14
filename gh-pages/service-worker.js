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
    "revision": "c750ea215602ac160f8460ac68ab9008"
  },
  {
    "url": "api/cli.html",
    "revision": "6238013651290a8abc7ef9194bfd44d7"
  },
  {
    "url": "api/node.html",
    "revision": "fd2c554b9849e39623021b025ff5924a"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.a096ab28.css",
    "revision": "fc7a06f1a27a759b48c22503bc1ffc5e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bad2eed4.js",
    "revision": "9898ac6609299c15d9a0bbeea52246df"
  },
  {
    "url": "assets/js/100.ebd72ac5.js",
    "revision": "5b60578d31646710ee38b14a55fb7eda"
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
    "url": "assets/js/11.ef2b3701.js",
    "revision": "598bc9bb25474356bbd944f2cbaf8100"
  },
  {
    "url": "assets/js/12.46248701.js",
    "revision": "cd280268df4db6edebb9f9c9608f697d"
  },
  {
    "url": "assets/js/13.44083faf.js",
    "revision": "c3e75fa956ec8e33785c3f4319c0eb21"
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
    "url": "assets/js/20.9d1ec12d.js",
    "revision": "c8bebb04d094c786fdfbc5b064682caf"
  },
  {
    "url": "assets/js/21.ebe32ea0.js",
    "revision": "40f409c1da833f270b06bc53305a23a2"
  },
  {
    "url": "assets/js/22.a5d65056.js",
    "revision": "7df4e346580354df3f4d5e5da78139f2"
  },
  {
    "url": "assets/js/23.719f16e8.js",
    "revision": "c4495c70de463aaed0856b1875a2afc0"
  },
  {
    "url": "assets/js/24.19cd8818.js",
    "revision": "346265b50aa5206733a1e6d811f86a62"
  },
  {
    "url": "assets/js/25.ed70354e.js",
    "revision": "ed1e032fe73f3a72d7cca3f5541d8ae2"
  },
  {
    "url": "assets/js/26.f38b21a1.js",
    "revision": "fac5df6b5c9a53a5478bd8fe5226e958"
  },
  {
    "url": "assets/js/27.9ca884d5.js",
    "revision": "5bf3f91ab8a8d479e22f567763ccd73d"
  },
  {
    "url": "assets/js/28.d90ee21e.js",
    "revision": "810565322643fc52f5325c8e0be0c8d7"
  },
  {
    "url": "assets/js/29.e4dec0de.js",
    "revision": "b72b586ff1241d18d9f518beb9259940"
  },
  {
    "url": "assets/js/30.3dc46339.js",
    "revision": "fca1507c57286e1221bb18db0fe28dfa"
  },
  {
    "url": "assets/js/31.f12b437f.js",
    "revision": "4d4191d5784516b36961353c3e3634fe"
  },
  {
    "url": "assets/js/32.a9715975.js",
    "revision": "aeaf09e535a368b86ffae0ef95f5448e"
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
    "url": "assets/js/37.c7e656df.js",
    "revision": "36a915678aa2ae14550085767f0ec986"
  },
  {
    "url": "assets/js/38.47f6c955.js",
    "revision": "3e6a2831ababf2e7a329867467456af7"
  },
  {
    "url": "assets/js/39.aeddf5a8.js",
    "revision": "e53d4d132445ad24af3d7a01315fbabb"
  },
  {
    "url": "assets/js/4.8a919556.js",
    "revision": "6d0549f04e34e27db8dc46496bda9366"
  },
  {
    "url": "assets/js/40.fb404f3c.js",
    "revision": "453e1e4c106e1064f589abce42d57317"
  },
  {
    "url": "assets/js/41.ec9e398b.js",
    "revision": "256cfca8bd6e69b5f66c9a2374d4fa55"
  },
  {
    "url": "assets/js/42.783a9b3f.js",
    "revision": "22b77ae511d99b03c894d2bfbb183102"
  },
  {
    "url": "assets/js/43.a174874b.js",
    "revision": "a163f9b94452af910f5f9bd87154635b"
  },
  {
    "url": "assets/js/44.0c234619.js",
    "revision": "3dd94a0ba409f1c14b9dbdc965fcae8b"
  },
  {
    "url": "assets/js/45.e0f4586e.js",
    "revision": "202bb76c44fdbf2d1733b30d332c0669"
  },
  {
    "url": "assets/js/46.7573dcce.js",
    "revision": "ed3dc33dc282fd947b53c5d861fdb524"
  },
  {
    "url": "assets/js/47.3151ab58.js",
    "revision": "6c94260852f9ba6d8e23302296a219f1"
  },
  {
    "url": "assets/js/48.69cf2aec.js",
    "revision": "1a381982c5844dd7f62953b2b58d44f2"
  },
  {
    "url": "assets/js/49.3e055789.js",
    "revision": "d97a228c67d26cbb1eb1ff9a52389f33"
  },
  {
    "url": "assets/js/5.606b4f63.js",
    "revision": "9c008c0316ebd92fd8c37e7cdc6ff107"
  },
  {
    "url": "assets/js/50.d5d5b002.js",
    "revision": "50a5fc1ff9636041f09f092d3cbea06e"
  },
  {
    "url": "assets/js/51.993757ac.js",
    "revision": "6d0b7745b8b8e96a18bab7bf1bf707b7"
  },
  {
    "url": "assets/js/52.175e9140.js",
    "revision": "380e54bed65a42d163931764478b2b62"
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
    "url": "assets/js/57.5576fcc5.js",
    "revision": "1e1befd01917d00bf5d56c959a40502c"
  },
  {
    "url": "assets/js/58.6cb9abcd.js",
    "revision": "fee3c60455c0dd73a8791cb417647159"
  },
  {
    "url": "assets/js/59.f6d4b102.js",
    "revision": "d15f6f303167cbba54df7df818ffd578"
  },
  {
    "url": "assets/js/6.16cf4554.js",
    "revision": "a5fdce1dbfa73cb1af0a34be374fd661"
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
    "url": "assets/js/62.ec6eba2c.js",
    "revision": "d041726e2aac4e7e5a37c9c647d5a092"
  },
  {
    "url": "assets/js/63.29f8623d.js",
    "revision": "8af03b9d2e0f48f4a519e5c3fb200b38"
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
    "url": "assets/js/66.fd373193.js",
    "revision": "1f748d20cb9bb1b954b42a49655a3130"
  },
  {
    "url": "assets/js/67.9f411190.js",
    "revision": "b438b55d8471f721be23a7aa2958cc8f"
  },
  {
    "url": "assets/js/68.5f0b1aae.js",
    "revision": "b908820d11dccc4df22daec6acaf6c2d"
  },
  {
    "url": "assets/js/69.422c498a.js",
    "revision": "7658298d56a9f8e798f85ec8879e789b"
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
    "url": "assets/js/71.b3a09384.js",
    "revision": "3cac45d1d95af0be2f82b7978099951f"
  },
  {
    "url": "assets/js/72.52bf164f.js",
    "revision": "ecb243ea84190af9937a5ea88399f890"
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
    "url": "assets/js/8.ebb242f7.js",
    "revision": "1cd922253a739fa0fbded8e9348ca890"
  },
  {
    "url": "assets/js/80.e44f25c8.js",
    "revision": "07e5b5f7f89c63a2372ffa4f0e1999af"
  },
  {
    "url": "assets/js/81.9ad3a7b4.js",
    "revision": "4d53b9f3da9b82aed6a04261ed64c9e0"
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
    "url": "assets/js/84.0ca82522.js",
    "revision": "7298c4599e1cdf3ebf2ed8b40f91a0f3"
  },
  {
    "url": "assets/js/85.ec7fe151.js",
    "revision": "6007320b0ef19913ac944c3bdb33fe17"
  },
  {
    "url": "assets/js/86.150eead4.js",
    "revision": "694cfbed8f132ced59449854829ccaf3"
  },
  {
    "url": "assets/js/87.da2bcf41.js",
    "revision": "0458623b4832ee04f15fcccd6666cfe0"
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
    "url": "assets/js/9.0f5c4d08.js",
    "revision": "414bd94488c770c9cc6b140dffe5d515"
  },
  {
    "url": "assets/js/90.45813435.js",
    "revision": "de1ca57ad7acdb9704413539c2c20823"
  },
  {
    "url": "assets/js/91.5f21ec3d.js",
    "revision": "448aa8331fed946aec28567489a6ba36"
  },
  {
    "url": "assets/js/92.0bc203a7.js",
    "revision": "8e37cf9be88d3c66fc40c4869acacff0"
  },
  {
    "url": "assets/js/93.9372e4c9.js",
    "revision": "071557bbed11892ec5112c75a4b6136f"
  },
  {
    "url": "assets/js/94.eac427a9.js",
    "revision": "99f06da7e9539a360f1f9cf3de10e433"
  },
  {
    "url": "assets/js/95.8d756d90.js",
    "revision": "73390bac66307e8e7f5a1a7a9bd9cc9d"
  },
  {
    "url": "assets/js/96.d94017fe.js",
    "revision": "0dd2dcf26d9c47f805b1fc901abfe170"
  },
  {
    "url": "assets/js/97.0d2f5443.js",
    "revision": "dfa8cf8983a1ef7a6af576a299ad0a86"
  },
  {
    "url": "assets/js/98.9bb5ce42.js",
    "revision": "fd54adcbd2166123c5fd33f9878f43f3"
  },
  {
    "url": "assets/js/99.ee01147c.js",
    "revision": "d9591fd278923625f5bb7829bbe9ffd3"
  },
  {
    "url": "assets/js/app.5d15a32a.js",
    "revision": "e780d5beb923cdfa1dbb2f3e6409dff8"
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
    "revision": "85325e74c34c386e7e7e0a5351e5dcd8"
  },
  {
    "url": "faq/index.html",
    "revision": "3f0eacd0e17f6e13cae33ac5cb342ba0"
  },
  {
    "url": "guide/assets.html",
    "revision": "0ab13533deedc5f38b4e9dbd69189da7"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "c5f8c743e134b1d24d3500e312a1dcfb"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f19a60f26545833bf81c9b415217945e"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8dd066b626c8a9fc0aa81ce3162cf928"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "28c660fdb93c896bd485806f23883bda"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "34a05c9079c11a5e0aa9a1c3933a35be"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "0eb69aa3abac9f865d8eb6e332c27d4f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "9e1a56c462a4787b233dff206311c554"
  },
  {
    "url": "guide/index.html",
    "revision": "565327b013668e3292d480828f82c08c"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "6988c4370bff27508a43adf0e1024c23"
  },
  {
    "url": "guide/markdown.html",
    "revision": "bf58dcfd3f8e3315321e15d820206228"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "872d31e2e0715aca1924ff359b11c4ce"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1b415169617ead9ed3ce376996677251"
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
    "revision": "7287cf7da3c0de88542f2867725533e8"
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
    "revision": "53b925681dba83cb3671cb8e1a6fa2b5"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "b074eac90b216ffec58a7c0dd28ff45f"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "e9b7044d5a450fc13291e705b8c86fe1"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "051c25478f9f475b908a8c05641126cc"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "da808f26295dbf80587679ead173d820"
  },
  {
    "url": "plugin/index.html",
    "revision": "825631656a7106ebd4999cbe73750b37"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "5a251e44b6fefeaa550e9ed4050a9856"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "b2a8dee04c2c2c7974ea2c6b3423d239"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "ba0bd2e92fc8b66c9067dd02dcb0860b"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "f227278f615e2f89ce0dfd3c04b79c98"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "8247411f311d2eede7a291ddce5a194c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "e535a678d51e2da53f3f90716e55f79d"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "b7c43c2887e9dbdd836b05821bd14461"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "c6b299d3ec3496f00a10a902dc112717"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "93dc1fb62ed4b8f259f28371bf07183f"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "476982f910eb58abf7ca367bbd2b0e53"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "74f0bd3caf535f5b4261dee23d25e2bc"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "fe4f15cab83e25f3d9652cb10d693902"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "3876aeda61ce4d4ba1e8df97688f771e"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "74e3fdc0d589a57dcb098dab82bd0e9b"
  },
  {
    "url": "theme/index.html",
    "revision": "f5460e2e062cad335f160c38c4520205"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "167080beddec1afcf60ee8fe3f884c61"
  },
  {
    "url": "theme/option-api.html",
    "revision": "635f430f268afd44581a15de4eb1d225"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "c24eb9f3adf21caf6bc49923a56dab2d"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "60a5052657a0f91e4f3665c1c6f57f0f"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "8c985bc8d6fd12eed43292710ff245ff"
  },
  {
    "url": "zh/api/node.html",
    "revision": "447fbd7227426867bb2bf02bce864a60"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d24e799c929c1f3dacca068d80dcf148"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "114ab0805f30052d5fa8c148bc5428d7"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "8dbc4bfb65ee63f3b6a7265329c0ddb4"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "a864abc5f37486b7989e70b118c04f6a"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "544858f7320631ef4057083ccc7b30e7"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "c0b5a7f7cb486fa600cbebc1a53767e9"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "91ce265b7d9ae67885dd6babb8542610"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "aedb3992a62a92fb0ecd58dc466d54c4"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "26e7f6c48b62ed50fec1d678178ed360"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "fd18b6d863dddf93e40673c61aae1276"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1ac73a38878a030005e6d83367df492d"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "ab602948592fd41bc05d7cefa519a547"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "69444199eff8bc69b23eebf056a36e0e"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "339ac634bf0705a00921aad8eab87d42"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "984e480375feafe1522c4e94ee520b3c"
  },
  {
    "url": "zh/index.html",
    "revision": "ab4d0a99eba679436b22805433b5c61d"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "23da07a3265b07e86c101f647d61f977"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "6f4a695fa81f54a2811e82c151ef0f5b"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "e88c5a7c3b6901beb2e9933c7ece9ea4"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "06715476315a2c10c8e99638680acebf"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "49c17086eb777bba41c4287aeae7a1b4"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "bd686d924323904b163f6705223767b8"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "d780e25f11ce9c9fcbacdafc3a4f1fd4"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "b35e3e88f1a1cc8423bc1a922ae6e50e"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "f6e2ff7ca65e4ad2942c8673011f6318"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "87b27574948c054d1f5346ca5b0f3683"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "8061db4156ff05c307b778035723ea8b"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "d39d4e5b3403b49fb862aae35b646069"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "e3f98610f85f028fbc1d1d5e0f8a143b"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "fe573222a7aa5f4db586de5c18f76347"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "038ddf8693cff906002aa18149cd44ba"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "e5cb2e958ace60f01419d9dceda588a7"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "6179ba7e75d53c768b2937c98348ebf3"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "06cfb93c1230ea99aa53dd393956b0b7"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "feef84b7ab3b56bdd3d25507b48777af"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "2d08489574bc831ae0e846f6077c328f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "4b28a74763bd05078e921ad50f8cbba2"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "0ce84497240722a35d732680f74431af"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "3b28703b2494a7a7383e83a92a075ae6"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "7ac43fdd26365df5d5bba8a14e382a02"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "9a27f9c9ec38f71747c155920d2d3db2"
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
