const path = require('path');
const klawSync = require('klaw-sync');
const fs = require('fs');

const declarePaths = klawSync(path.resolve(__dirname, '../dist/src'), {
  nodir: true,
});

declarePaths.forEach(pathItem => {
  if (fs.existsSync(pathItem.path)) {
    const esPath = pathItem.path.replace('/dist/src', '/es');
    const libPath = pathItem.path.replace('/dist/src', '/lib');
    fs.copyFileSync(pathItem.path, esPath);
    fs.copyFileSync(pathItem.path, libPath);
  }
});

console.log('.d.ts 文件拷贝成功！');

const filesRegex = /(demo.js|demo.d.ts|mock.js|mock.d.ts|test.js|test.d.ts)$/;

const fileFilterFn = item => {
  const basename = path.basename(item.path);
  return filesRegex.test(basename) || basename.indexOf('.') < 0;
};

// 删除 demo，test
const esPaths = klawSync(path.resolve(__dirname, '../es'), {
  filter: fileFilterFn,
}).map(item => item.path);

const libPaths = klawSync(path.resolve(__dirname, '../lib'), {
  filter: fileFilterFn,
}).map(item => item.path);

const allPaths = esPaths.concat(libPaths);

allPaths.forEach(fileItem => {
  if (fs.existsSync(fileItem) && filesRegex.test(fileItem)) {
    fs.unlinkSync(fileItem);
  }
});

allPaths.forEach(fileItem => {
  if (
    fs.existsSync(fileItem) &&
    fs.lstatSync(fileItem).isDirectory() &&
    /__tests__$/.test(fileItem)
  ) {
    fs.rmdirSync(fileItem);
  }
});

console.log('demo __test__ 多余文件清理成功！');
