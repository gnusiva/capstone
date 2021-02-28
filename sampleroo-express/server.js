const express = require('express')
const app = express()
const port = require('./portNumber');
const attachDatabase = require('./dbProvider');
const getProducts = require('./getProducts');
const getSubCategory = require('./getSubCategory');
const getBrands = require('./getBrands');
const registerUser = require('./registerUser');
const checkEmail = require('./checkEmail');
const verifyEmail = require('./verifyEmail');

app.use(express.static('html'));
app.use(express.json());
app.use(attachDatabase);
app.get('/products/all', getProducts);
app.get('/products/category/:productId', getSubCategory);
app.get('/brands/category/:subCategoryId', getBrands);
app.post('/register/user', registerUser);
app.get('/register/checkemail/:email', checkEmail);
app.get('/verifyEmail/:id', verifyEmail);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
