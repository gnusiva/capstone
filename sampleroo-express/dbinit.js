var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite');
const fs = require('fs');

const productDir = './html/images/categories/';
fs.readdirSync(productDir).forEach(file => {
    if ( fs.lstatSync(productDir).isDirectory() ) {
        console.log(file);
    }
  });

// db.serialize(function() {
//   db.run(`
//     CREATE TABLE "Products" (
//         "id"	INTEGER,
//         "name"	TEXT,
//         "image"	TEXT,
//         PRIMARY KEY("id")
//     )
//   `);


  
//   db.run('INSERT INTO "main"."Products"("id","name","image") VALUES (NULL,NULL,NULL);')

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();