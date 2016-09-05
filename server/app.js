/* eslint-disable */
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1337 : process.env.PORT;
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
});
/* eslint-enable */