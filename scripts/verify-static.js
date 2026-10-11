const fs = require('fs');
const path = require('path');
const xml = fs.readFileSync('out/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]));
if (!urls.length) throw new Error('Empty sitemap');
for (const url of urls) {
  const html = fs.readFileSync(path.join('out', url.pathname, 'index.html'), 'utf8');
  if (!html.includes('</html>') || !html.includes('rel="canonical"')) throw new Error(`Incomplete HTML/SEO: ${url.pathname}`);
}
if (!fs.existsSync('out/404.html')) throw new Error('Missing static 404');
// English HTML is already copied to the root. Pages-only internal rewrites
// are redundant and can conflict with Workers Static Assets HTML handling.
fs.rmSync('out/_redirects', { force: true });
console.log(`Validated ${urls.length} multilingual static pages and HTTP 404 file.`);
