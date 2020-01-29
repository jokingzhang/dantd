const path = require('path');
const klawSync = require('klaw-sync');
const fs = require('fs'); 

const declarePaths = klawSync(path.resolve(__dirname, '../dist/src'), {
    nodir: true
})

declarePaths.forEach((pathItem) => {
    const esPath = pathItem.path.replace('/dist/src', '/es');
    const libPath = pathItem.path.replace('/dist/src', '/lib');
    fs.copyFileSync(pathItem.path, esPath);
    fs.copyFileSync(pathItem.path, libPath);
})

console.log('.d.ts 文件拷贝成功！');