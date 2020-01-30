const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

try {
  const indexPath = path.resolve(__dirname, '../build/index.html');
  let htmlContent = fs.readFileSync(indexPath, 'utf8');
  htmlContent = htmlContent.replace(/src="\/static/gi, 'src="/dantd-demo/static');
  htmlContent = htmlContent.replace(/href="\/static/gi, 'href="/dantd-demo/static');

  fs.writeFileSync(indexPath, htmlContent, 'utf8');
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
