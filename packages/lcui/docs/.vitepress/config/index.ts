/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-17 16:18:29
 * @FilePath: /lcui/packages/lcui/docs/.vitepress/config/index.ts
 */
import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';

export default ({ mode }) => {
  const basePath = mode === 'development' ? '/' : '/lcui/';

  return {
    base: basePath,
    lang: 'en-ZH',
    title: 'vue3-lcui',
    description: 'vue3-lcui 组件库',
    lastUpdated: true,
    ignoreDeadLinks: true, // 忽略死链接
    head: [
      // 这里的路径没有被自动更改 手动更改路径
      [
        'link',
        { rel: 'icon', type: 'image/svg+xml', href: `${basePath}logo.svg` }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/vue3-lcui/theme/darkTheme.css'
        }
      ]
    ],
    markdown,
    themeConfig: {
      sidebar,
      nav,
      logo: '/logo.svg',
      algolia: {
        appId: 'K0NNJA38K6',
        apiKey: '0b6d20552d2073390d2bbb0a84fb49dd',
        indexName: 'lcui'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vaebe/lcui.git' }
      ],
      outlineTitle: '快速前往',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present vaebe'
      }
    }
  };
};
