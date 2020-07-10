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
    "revision": "589794d854b89926a8813471df35cdc2"
  },
  {
    "url": "assets/css/0.styles.de2a5150.css",
    "revision": "5555a304b8cd4da93810cfaec0dae8a3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.a216243c.js",
    "revision": "f4aa593a135d939352c81966f06a5b9a"
  },
  {
    "url": "assets/js/10.1b800dec.js",
    "revision": "93fb130f1095dddde11abe8ffbcfd856"
  },
  {
    "url": "assets/js/11.55c55738.js",
    "revision": "e7833cd48a388d24b1258926d36bd936"
  },
  {
    "url": "assets/js/12.b7c2f38e.js",
    "revision": "f5f6ad3b7baa388bc677d775fe0b7775"
  },
  {
    "url": "assets/js/13.a4068919.js",
    "revision": "73f6979840aacd697c6027c3f03bd8c8"
  },
  {
    "url": "assets/js/14.8e238b82.js",
    "revision": "1fc47603263b2553fb800c31aca17561"
  },
  {
    "url": "assets/js/15.79816284.js",
    "revision": "89aa8e03edaec18e42512c742a656e1d"
  },
  {
    "url": "assets/js/16.d3bbd06b.js",
    "revision": "443cd519a48fe00fdd9d709c3b85bb5a"
  },
  {
    "url": "assets/js/17.ce35720f.js",
    "revision": "ff95410d1050cd156a38b2638d4ba9ae"
  },
  {
    "url": "assets/js/18.b69e0b6a.js",
    "revision": "180788afb3e007f1162d763ba48096a8"
  },
  {
    "url": "assets/js/19.de0136ff.js",
    "revision": "a451e4207ba96fc3893f3717d84e92bd"
  },
  {
    "url": "assets/js/20.8480e996.js",
    "revision": "f7044289af1b5da9598fabb33758e4a8"
  },
  {
    "url": "assets/js/21.2af9b473.js",
    "revision": "8ed0f16010cb24c1d0799979b5e53a3b"
  },
  {
    "url": "assets/js/22.cd2d43fe.js",
    "revision": "86b0367c1e7e9cf3c4c3d1ac87fa9a39"
  },
  {
    "url": "assets/js/23.d22d3902.js",
    "revision": "b452dbdfeb2caf5c5a6637931ebbbc59"
  },
  {
    "url": "assets/js/24.5989c05b.js",
    "revision": "25f31bdb059fb4756a3bda119096d60f"
  },
  {
    "url": "assets/js/25.4f7afc65.js",
    "revision": "2274e80513ef0d9b60ddb6db753c23dd"
  },
  {
    "url": "assets/js/26.8abf2ce0.js",
    "revision": "cb93efd28792e4101ae360c48b6f8973"
  },
  {
    "url": "assets/js/27.e0182b82.js",
    "revision": "60f0de8d3da883702779191466e140b4"
  },
  {
    "url": "assets/js/28.b66485d5.js",
    "revision": "8009dd467be29b81ecb749d20b453af2"
  },
  {
    "url": "assets/js/29.bb40b373.js",
    "revision": "40ad45284ee6cd7131958237c8381bb2"
  },
  {
    "url": "assets/js/3.bfdb01cc.js",
    "revision": "d40d2c81b0a4996bd05b696b7010008c"
  },
  {
    "url": "assets/js/30.60764ff6.js",
    "revision": "328f6942c5a5b5ff1626396cf26d099e"
  },
  {
    "url": "assets/js/31.15539876.js",
    "revision": "de13d77f16b33c83cf742575ad90ad66"
  },
  {
    "url": "assets/js/4.5d8190f7.js",
    "revision": "6dd897dbc5eba98bfb5594d3660e3c89"
  },
  {
    "url": "assets/js/5.bb821533.js",
    "revision": "e8e22716865acb0fbade07cdcd7a83ad"
  },
  {
    "url": "assets/js/6.08f7ef57.js",
    "revision": "9cbdbb647236ca22db2edf4df481d132"
  },
  {
    "url": "assets/js/7.77d2953c.js",
    "revision": "a3378f772a864f7af27ea1e17396e4f3"
  },
  {
    "url": "assets/js/8.98eddbe9.js",
    "revision": "b3ef8e58275c1028d204209a075ca9ae"
  },
  {
    "url": "assets/js/9.378b02b5.js",
    "revision": "480449326d0700afaeb51cece720933e"
  },
  {
    "url": "assets/js/app.5482be1c.js",
    "revision": "51399cd1d7c390ab5644bfe7adcff9cd"
  },
  {
    "url": "categories/index.html",
    "revision": "1e15c847b773c523a90edea05436a473"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "6d0f600994330020c856a3a435fbb47a"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "b844862e31d3909cd564b1a58c4f85ad"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "7a9b9a2f0462f52fa3408a08c0d2bc10"
  },
  {
    "url": "categories/python/index.html",
    "revision": "00e44419135dcd2716bf326a752f6a9e"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "1b97b8536c682c283f92247bd7e96436"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "34272ce7df65b47f8fc89f01665fd9fc"
  },
  {
    "url": "dashboard/css/css显示省略号.html",
    "revision": "9ee0b4ea410f8edd73b725109ff76619"
  },
  {
    "url": "dashboard/db/mysql.html",
    "revision": "27bdbceb840515f59452a6f808a53322"
  },
  {
    "url": "dashboard/javascript/Promise.html",
    "revision": "82e4d9f466936c3c85bc43cc897e3063"
  },
  {
    "url": "dashboard/javascript/深浅拷贝.html",
    "revision": "24d6a098007f0486bb4bde7a073b6cda"
  },
  {
    "url": "dashboard/nodejs/node提交数据.html",
    "revision": "492c67d8b3dd4874ea994ab548173c80"
  },
  {
    "url": "dashboard/python/python文件操作.html",
    "revision": "df15d305c4f61af589679870498b4ab2"
  },
  {
    "url": "dashboard/python/投掷骰子游戏.html",
    "revision": "bafe2df192724a1706a88c333c5ff709"
  },
  {
    "url": "dashboard/vue/Vue__computed.html",
    "revision": "9a4820abba6bf8460f5b5d72d3225338"
  },
  {
    "url": "dashboard/vue/Vue-Cli3__构建项目（一）构建初始项目.html",
    "revision": "ac531b795794571868c4da43c4e3b11a"
  },
  {
    "url": "dashboard/vue/Vue-Cli3__构建项目（三）配置 TypeScript.html",
    "revision": "80b4c37fab95784fea39d6cf0ee2ae89"
  },
  {
    "url": "dashboard/vue/vue+elementui图形验证码.html",
    "revision": "74e32df303d2d4a11515b766b18d1171"
  },
  {
    "url": "dashboard/vue/vuepress部署.html",
    "revision": "b3a9d0f30e8bd44fa5a36761f06ef2fb"
  },
  {
    "url": "dashboard/vue/Vue使用wangeditor富文本编辑器.html",
    "revision": "e2f25792a406090879e0ad9aa75a57ee"
  },
  {
    "url": "dashboard/vue/vue修改第三方组件.html",
    "revision": "8138030f86f56fee3d10eab7b3c7670b"
  },
  {
    "url": "dashboard/vue/vue增删搜索.html",
    "revision": "413ec768065bb127892eac774026badf"
  },
  {
    "url": "dashboard/vue/Vue跨域设置代理.html",
    "revision": "00220ed63fbe0663c6e08bcdb2cfb919"
  },
  {
    "url": "images/admin.gif",
    "revision": "ecba184421c1c757d6e124f4e14e29b2"
  },
  {
    "url": "images/banner1.jpg",
    "revision": "f0f35b13a19dd1e00bf2ce384bdcbe1b"
  },
  {
    "url": "images/bg.svg",
    "revision": "a568162c2e16b799f5d56634d9e23e46"
  },
  {
    "url": "index.html",
    "revision": "0be14add570444ee7e6b96d7d764e1f9"
  },
  {
    "url": "js/xx.js",
    "revision": "15cb4e6b955cdee41f728e2d62069959"
  },
  {
    "url": "tag/css/index.html",
    "revision": "da0c2592f32c1ff605783a90789cf7f7"
  },
  {
    "url": "tag/index.html",
    "revision": "558c672c0d794a3d38d6c1058178ae42"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c91e50c58f3871649a25e36511883fee"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "e521aee5eaf6d2dc6e9c1d08a1ce702d"
  },
  {
    "url": "tag/mysql/index.html",
    "revision": "a7d168f3a2d00d954ee237d47d6a8fac"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "71b1796715ea5a11379f4a962bc3428c"
  },
  {
    "url": "tag/pthon/index.html",
    "revision": "0447ac30e6e8d1e14ee9ebfb64f950a9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7649998e5b455447d456ace347d4819f"
  },
  {
    "url": "tag/Vue-Cli/index.html",
    "revision": "0815032bb430cfa9c73dc7ed3a14ca43"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "4ea5b03e8e9fdde791dc73b8dc050253"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9e55dc80b143fff544b79360dc145aae"
  },
  {
    "url": "tag/web基础/index.html",
    "revision": "862979fe115b519dad69c6967811ee8c"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "78652f583c2645c7a922fb4ded2b2e0a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e43bde5daceb009edfeb838e74527d49"
  },
  {
    "url": "web/layui模板引擎.html",
    "revision": "6474e3900b2016b7f93a46b0490625b9"
  },
  {
    "url": "web/vx.html",
    "revision": "b283e3fa54a70df0f9d074380ee86035"
  },
  {
    "url": "web/web基础.html",
    "revision": "6e0b130360c233d23e147d30a48e9e73"
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
