const express = require('express')
const app = express()
const port = 3000
const attachDatabase = require('./dbProvider');
const getProducts = require('./getProducts');
app.use(express.static('html'));
app.use(attachDatabase);
app.get('/products/all', getProducts);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});