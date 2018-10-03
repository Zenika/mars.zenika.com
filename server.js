
const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.use(express.static(path.join(__dirname, './dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist'))
});

app.listen(process.env.PORT);