const path = require('path');
const klawSync = require('klaw-sync');
const fs = require('fs');
const fse = require('fs-extra');

if (!fs.existsSync(path.resolve(__dirname, '../../dantd'))) {
  console.error('未找到迁移目标项目：dantd，请检查后重试');
  return;
}

// const fileReg = new RegExp('(.test.tsx|demo.tsx|mock.ts|mock.tsx)$');
const fileReg = new RegExp('(.test.tsx|demo.tsx)$');

const compPaths = klawSync(path.resolve(__dirname, '../src/components'), {
  nodir: true,
})
  .map(item => item.path)
  .filter(path => !fileReg.test(path));

compPaths.forEach(pathItem => {
  const targetPath = pathItem.replace('/dantd-demo/src/components', '/dantd/src');
  try {
    fse.copySync(pathItem, targetPath);
    // console.log(`copy ${pathItem} to ${targetPath} succeed!`);
  } catch (err) {
    console.error(err);
  }
});

console.log('组件同步成功！');
