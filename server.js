
const express = require('express');
const path = require('path');
const app = express();

app.get('*', (req, res, next) => {  
  if (!req.sercure) 
    return res.redirect('https://' + req.headers.host + req.url);
  else
    next()
})

app.get('/*', (req, res) =>
 res.sendFile(path.join(__dirname, './dist'))
);

app.listen(process.env.PORT);