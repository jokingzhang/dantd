const path = require('path');
const klawSync = require('klaw-sync');
const fs = require('fs');

const filesRegex = /(.js|.d.ts)$/;

const fileFilterFn = item => {
  const basename = path.basename(item.path);
  return filesRegex.test(basename) || basename.indexOf('.') < 0;
};

const esPaths = klawSync(path.resolve(__dirname, '../es'), {
  filter: fileFilterFn,
  nodir: true,
}).map(item => item.path);

const libPaths = klawSync(path.resolve(__dirname, '../lib'), {
  filter: fileFilterFn,
  nodir: true,
}).map(item => item.path);

const allPaths = esPaths.concat(libPaths);

allPaths.forEach(fileItem => {
  const fileContent = fs.readFileSync(fileItem, 'utf8');
  const newFileContent = fileContent.replace(/.less/gi, '.css');
  fs.writeFileSync(fileItem, newFileContent, 'utf8');
});

console.log('.less => .css 文件后缀改写成功！');
