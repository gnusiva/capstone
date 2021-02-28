var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../db.sqlite');

db.serialize( async () => {

    db.run(`
        CREATE TABLE IF NOT EXISTS "Users" (
            "id"	            INTEGER,
            "isSocial"          TEXT,
            "loginProvider"     TEXT,
            "socialId"          TEXT,
            "email"             TEXT,
            "password"          TEXT,
            "isEmailVerified"   TEXT,
            "age"               TEXT,
            "firstName"         TEXT,
            "lastName"          TEXT,
            "address"           TEXT,
            "unit"              TEXT,
            "field1"            TEXT,
            "province"          TEXT,
            "postalCode"        TEXT,
            "country"           TEXT,
            "products"          TEXT,
            "subCategory"       TEXT,
            "brands"            TEXT,
            PRIMARY KEY("id")
        )
    `);

});

db.close();

