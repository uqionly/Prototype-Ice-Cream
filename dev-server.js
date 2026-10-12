const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const host = process.argv.includes('--host=0.0.0.0') ? '0.0.0.0' : '127.0.0.1';
const portArg = process.argv.find(arg => arg.startsWith('--port='));
const port = Number(portArg?.split('=')[1] || 8000);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end('Bad request'); return; }
  const file = path.resolve(root, `.${pathname}`);
  if (file !== root && !file.startsWith(`${root}${path.sep}`)) { res.writeHead(403).end('Forbidden'); return; }
  fs.stat(file, (error, stat) => {
    const target = !error && stat.isDirectory() ? path.join(file, 'index.html') : file;
    fs.readFile(target, (readError, data) => {
      if (readError) { res.writeHead(readError.code === 'ENOENT' ? 404 : 500).end('Not found'); return; }
      res.writeHead(200, {'Content-Type':types[path.extname(target).toLowerCase()] || 'application/octet-stream','X-Content-Type-Options':'nosniff'}).end(data);
    });
  });
}).listen(port, host, () => console.log(`IceCreamHub available at http://${host}:${port}`));
