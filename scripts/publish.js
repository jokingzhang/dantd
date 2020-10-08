const fs = require('fs');
const path = require('path');

try {
  const indexPath = path.resolve(__dirname, '../.doc/index.html');
  let htmlContent = fs.readFileSync(indexPath, 'utf8');
  htmlContent = htmlContent.replace(/src="\/dantd\/static/gi, 'src="/static');
  htmlContent = htmlContent.replace(/href="\/dantd\/static/gi, 'href="/static');

  fs.writeFileSync(indexPath, htmlContent, 'utf8');
} catch (error) {
  console.info('重写失败', error);
}

console.info('重写成功!');
