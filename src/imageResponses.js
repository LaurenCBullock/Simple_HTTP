const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/dank.png`);


const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports.getMeme = getMeme;