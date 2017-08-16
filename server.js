const path = require('path');
const express = require("express");

const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
const publicDir = process.argv[2] || __dirname;

const app = express();

app.use(express.static(publicDir));

app.get('*', function (req, res) {
  res.sendFile(path.join(publicDir, '/index.html'));
});

console.log('Simple static server showing %s listening at http://%s:%s', publicDir, hostname, port);

app.listen(port);
