const fs = require('fs');
const https = require('https');

https.get('https://icon.horse/icon/grangeinsurance.com', res => {
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
    <linearGradient id="grad-GrangeInsurance" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#042f2e" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad-GrangeInsurance)" />
  <image href="data:image/png;base64,${base64}" x="400" y="200" width="400" height="400" preserveAspectRatio="xMidYMid meet" />
</svg>`;
      fs.writeFileSync('public/projects/Grange Insurance.svg', svg);
      console.log('Successfully generated Grange Insurance.svg');
    });
  }
}).on('error', console.error);
