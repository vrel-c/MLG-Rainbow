export default {
  title: "MLG Rainbow",
  base: '/MLG-Rainbow/',
  description: "Unity向けカスタムシェーダー「MLG Rainbow」のオンラインマニュアルです。",
  head: [ ['meta', { name: 'robots', content: 'noindex, nofollow' }] ],
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        siteTitle: "MLG Rainbow",
        sidebar: [
          { text: '概要（トップ）', link: '/' },
          { text: '導入方法', link: '/import' },
          { text: 'Lite版について', link: '/lite' },
          { text: '通常版について [WIP]' },
          { text: '権利表記等', link: '/license' },
          {
            text: '',
            items: [{text: 'ver1.0.0'}]
          }
        ]
      }
    }
  }
}
