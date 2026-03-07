const fs = require('fs');

const imagePath = 'C:/Users/kashy/.gemini/antigravity/brain/b06ad8ea-f579-47b7-9ad2-9a150a620c07/media__1772878734439.png';
const base64 = fs.readFileSync(imagePath).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
  <rect width="100%" height="100%" fill="#ffffff" />
  <image href="data:image/png;base64,${base64}" x="350" y="275" width="500" height="250" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync('d:/Work Drive/Kashyap Rathod/1 Website 2024/1 AI Website/public/projects/Grange Insurance.svg', svg);
console.log('Successfully generated custom SVG with user uploaded logo.');
