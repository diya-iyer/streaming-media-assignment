const fs = require('fs');
const path = require('path');

const sendFile = (response, filePath, contentType) => {
  const file = path.resolve(__dirname, filePath);

  fs.readFile(file, (err, data) => {
    if (err) {
      response.writeHead(500);
      response.end('Error loading the page.');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(data);
    }
  });
};

const getIndex = (request, response) => {
  sendFile(response, '../client/client.html', 'text/html');
};

const getClient2 = (request, response) => {
  sendFile(response, '../client/client2.html', 'text/html');
};

const getClient3 = (request, response) => {
  sendFile(response, '../client/client3.html', 'text/html');
};

module.exports = {
  getIndex,
  getClient2,
  getClient3,
};
