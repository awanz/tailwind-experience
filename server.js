const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    // Serve index.html for the root path
    fs.readFile('./index.html', (err, data) => {
      handleResponse(err, data, res);
    });
  } else if (url === '/') {
    fs.readFile('./index.html', (err, data) => {
      handleResponse(err, data, res);
    });
  } else if (url === '/about') {
    // Serve content for the /about route
    fs.readFile('./public/about.html', (err, data) => {
      handleResponse(err, data, res);
    });
  } else if (url === '/contact') {
    // Serve content for the /contact route
    fs.readFile('./public/contact.html', (err, data) => {
      handleResponse(err, data, res);
    });
  } else {
    // Handle 404 Not Found for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

function handleResponse(err, data, res) {
  if (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
}

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});