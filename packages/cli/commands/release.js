/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-19 15:51:13
 * @FilePath: /lcui/packages/cli/commands/release.js
 */
const path = require('path');
const fsExtra = require('fs-extra');
const { omit } = require('lodash');
const shell = require('shelljs');

const outputDir = path.resolve(__dirname, '../../lcui/build');

const packageJson = require('../../lcui/package.json');

const lcUIPackagePath = path.resolve(__dirname, '../../lcui');

const getVersion = (version) => {
  if (version) {
    return version;
  } else {
    const versionNums = packageJson.version.split('.');
    return versionNums
      .map((num, index) => (index === versionNums.length - 1 ? +num + 1 : num))
      .join('.');
  }
};

const createPackageJson = async (version) => {
  packageJson.version = getVersion(version);
  let newVersionPkg = packageJson;
  const fileStr1 = JSON.stringify(newVersionPkg, null, 2);
  await fsExtra.writeFileSync(
    path.resolve(lcUIPackagePath, `package.json`),
    fileStr1,
    'utf-8'
  );
  const fileStr2 = JSON.stringify(
    omit(newVersionPkg, 'scripts', 'devDependencies'),
    null,
    2
  );
  await fsExtra.writeFileSync(
    path.resolve(outputDir, `package.json`),
    fileStr2,
    'utf-8'
  );
};

exports.release = async ({ version }) => {
  console.log('release>>>>>', version);
  await createPackageJson(version);
  shell.sed('-i', 'workspace:', '', path.resolve(outputDir, 'package.json'));
  shell.cp('-R', path.resolve(__dirname, '../../lcui/README.md'), outputDir);
  shell.cd(outputDir);
  shell.mkdir('-p', 'theme');
  shell.cp(
    '-R',
    path.resolve(__dirname, '../../lcui/ui/theme/theme.scss'),
    path.resolve(outputDir, 'theme')
  );
  shell.cp(
    '-R',
    path.resolve(__dirname, '../../lcui/ui/theme/darkTheme.css'),
    path.resolve(outputDir, 'theme')
  );
  // shell.exec('npm publish');
};
