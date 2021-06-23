const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const port = 3000;

app.listen(port, () => {
  console.log('app is listening on port ' + port);
})