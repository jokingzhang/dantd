const path = require('path');
const fs = require('fs');
const klawSync = require('klaw-sync');
var rimraf = require('rimraf');

const distName = 'dist';
const distPath = path.resolve(__dirname, `../${distName}`);

const umdFilesPaths = klawSync(distPath, {
  depthLimit: 0,
  nodir: true,
})
  .map(pathItem => pathItem.path)
  .filter(path => {
    return path.indexOf('index.umd') >= 0;
  });

const folderPaths = klawSync(distPath, {
  depthLimit: 0,
  nofile: true,
}).map(pathItem => pathItem.path);

// rename umd files
umdFilesPaths.forEach(umdPath => {
  const newPath = umdPath.replace('.umd', '');
  fs.renameSync(umdPath, newPath);
});

// remove other folders
folderPaths.forEach(folderPath => {
  rimraf.sync(folderPath);
});

// theme dir
const themePath = path.resolve(__dirname, `../${distName}/theme`);
if (!fs.existsSync(themePath)) {
  fs.mkdirSync(themePath);
}

// 将所需要的 theme 文件复制到输出中
const oldVarsPath = path.resolve(__dirname, '../site/theme/static/customer/antd-variables.less');
const newVarsPath = path.resolve(__dirname, `../${distName}/theme/antd-variables.less`);
fs.copyFileSync(oldVarsPath, newVarsPath);

// copy scripts dist
// const distThemePath = klawSync(path.resolve(__dirname, '../scripts/theme')).map(
//   pathItem => pathItem.path,
// );

// distThemePath.forEach(distItem => {
//   const newDistItem = distItem.replace('/scripts/theme', `/${distName}/theme`);
//   fs.copyFileSync(distItem, newDistItem);
// });
console.info('拷贝 {dist} 文件成功！');
