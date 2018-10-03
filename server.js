
const express = require('express');
const app = express();

app.get('*', (req, res) => {  
  res.redirect('https://' + req.headers.host + req.url);
})

app.listen(process.env.PORT);