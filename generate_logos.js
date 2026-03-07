const fs = require('fs');
const https = require('https');

const domains = [
  { name: 'Microsoft', domain: 'microsoft.com', bg: ['#slate-900', '#indigo-950'], hex: ['#0f172a', '#1e1b4b'] },
  { name: 'Citrix', domain: 'citrix.com', bg: ['#neutral-900', '#black'], hex: ['#171717', '#000000'] },
  { name: 'Grange Insurance', domain: 'grangeinsurance.com', bg: ['#emerald-900', '#teal-950'], hex: ['#064e3b', '#042f2e'] }
];

domains.forEach(d => {
  https.get(`https://icon.horse/icon/${d.domain}`, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
      https.get(res.headers.location, handleResponse);
    } else {
      handleResponse(res);
    }

    function handleResponse(response) {
      const data = [];
      response.on('data', chunk => data.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(data);
        const base64 = buffer.toString('base64');
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
  <defs>
    <linearGradient id="grad-${d.name.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${d.hex[0]}" />
      <stop offset="100%" stop-color="${d.hex[1]}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad-${d.name.replace(/\s+/g, '')})" />
  <image href="data:image/png;base64,${base64}" x="300" y="200" width="600" height="400" preserveAspectRatio="xMidYMid meet" />
</svg>`;
        fs.writeFileSync(`public/projects/${d.name}.svg`, svg);
        console.log(`Generated ${d.name}.svg`);
      });
    }
  }).on('error', err => {
    console.error(`Error fetching ${d.name}:`, err.message);
  });
});
