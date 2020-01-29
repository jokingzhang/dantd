const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

const klawSync = require('klaw-sync');

try {
  const indexPath = path.resolve(__dirname, '../build/index.html');
  let htmlContent = fs.readFileSync(indexPath, 'utf8');
  htmlContent = htmlContent.replace(/src="\/static/gi, 'src="/dantd-demo/static');
  htmlContent = htmlContent.replace(/href="\/static/gi, 'href="/dantd-demo/static');
  fs.writeFileSync(indexPath, htmlContent, 'utf8');

  const compPaths = klawSync(path.resolve(__dirname, '../build'), {
    nodir: true,
  })
    .map(item => item.path)
    .filter(path => /chunk.js/g.test(path));

  compPaths.forEach(pathItem => {
    let htmlContent = fs.readFileSync(pathItem, 'utf8');
    htmlContent = htmlContent.replace(/"static\/media/gi, '"dantd-demo/static/media');
    fs.writeFileSync(pathItem, htmlContent, 'utf8');
  });
} catch (error) {
  console.info('重写失败', error);
}

console.info('重写成功!');

console.info('代码发布中...');

ghpages.publish('build', function(err) {
  if (err) {
    console.info('发布失败', err);
  } else {
    console.info('发布成功！');
  }
});
