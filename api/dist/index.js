"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('./db');
var cors = require('cors');
var express = require('express');
var app = express();
var port = 3000;
app.use(express.json());
app.use(cors());
app.get('/getProductCategory', function (req, res) {
    res.send(db.get('productCategories').value());
});
app.post('/createNewUser', function (req, res) {
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.send();
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map