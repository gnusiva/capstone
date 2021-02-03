const db = require('./db');
const cors = require('cors');
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(cors());
app.get('/getProductCategory', (req, res) => {
  res.send(db.get('productCategories').value())
});

app.post('/createNewUser', (req, res) => {
  console.log(req.body);
  db.get('users').push(req.body).write();
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
