var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite');
const fs = require('fs');
var path = require('path');

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer.from(bitmap).toString('base64');
}

db.serialize( () => {

    // populate all products from /html/images/categories/* directory
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS "Products" (
    //         "id"	INTEGER,
    //         "name"	TEXT,
    //         "image"	TEXT,
    //         PRIMARY KEY("id")
    //     )
    // `);
    // const productDir = './html/images/categories/';
    // fs.readdirSync(productDir).forEach(file => {
    //     const filePath = productDir + file;
    //     if ( !fs.lstatSync(filePath).isDirectory() && !file == '.DS_Store' ) {
    //         console.log(file);
    //         const imageBase64 = 'data:image/png;base64,' + base64_encode(filePath);
    //         const fileName = file.replace('.png','');
    //         const query = `INSERT INTO Products("id","name","image") VALUES (NULL,"${fileName}","${imageBase64}");`;
    //         db.run(query);
    //     }
    // });

    // populate all products from /html/images/categories/* directory
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS "SubCategory" (
    //         "id"	    INTEGER,
    //         "productId" TEXT,
    //         "name"	    TEXT,
    //         "image"	    TEXT,
    //         PRIMARY KEY("id")
    //     )
    // `);
    const productDir = './html/images/categories/';
    fs.readdirSync(productDir).forEach(file => {
        const filePath =  path.join(productDir, file);
        if ( fs.lstatSync(filePath).isDirectory() ) {
            fs.readdirSync(filePath).forEach( subFile => {
                const subFilePath = path.join(filePath, subFile);
                if ( !fs.lstatSync(subFilePath).isDirectory() && !subFile.includes('.DS_Store')  ) {
                    console.log(subFilePath)
                    const imageBase64 = 'data:image/png;base64,' + base64_encode(subFilePath);
                    const subFileName = subFile.substr(0, subFile.lastIndexOf('.')) || subFile;
                    const query = `INSERT INTO Products("id","name","image") VALUES (NULL,"${subFileName}","${imageBase64}");`;
                    // console.log(query);
                    // db.run(query);
                }
            });
        }
        
    });

});

db.close();
