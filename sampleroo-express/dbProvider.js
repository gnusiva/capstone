var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.sqlite');

const attachDatabase = (req, res, next) => {
    req.db = db;
    next();
}

module.exports = attachDatabase;