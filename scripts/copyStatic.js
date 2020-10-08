const path = require('path');
const shell = require('shelljs');

const staticPath = path.join(process.cwd(), 'static');
const distDir = path.resolve(process.cwd(), '_site/static');

shell.mkdir('-p', distDir);
shell.cp('-R', `${staticPath}/*`, distDir);
