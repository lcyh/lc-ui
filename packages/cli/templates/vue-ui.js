/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-16 17:26:06
 * @FilePath: /lcui/packages/cli/templates/vue-ui.js
 */
const { relative } = require('path');
const { INDEX_FILE_NAME, VERSION, VUE_UI_FILE } = require('../shared/constant');

exports.createUiTemplate = (exportModules = []) => {
  const packages = [];
  const imports = [];
  const installs = [];

  exportModules.forEach((m) => {
    const { fileInfo } = m;
    const relativePath = relative(VUE_UI_FILE, fileInfo.path)
      .replace(/\\/g, '/')
      .replace('..', '.')
      .replace('/' + INDEX_FILE_NAME, '');

    const importStr = `import ${m.default}, { ${m.parts.join(
      ', '
    )} } from '${relativePath}';`;

    packages.push(...m.parts);
    imports.push(importStr);
    installs.push(m.default);
  });

  return `\
import type { App } from 'vue';

${imports.join('\n')}

const installs = [
  ${installs.join(',\n\t')}
];

export {
  ${packages.join(',\n\t')}
};

export default {
  version: '1.0.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p));
  }
};
`;
};
