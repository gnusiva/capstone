var fs = require('fs');

const verifyEmail = async (req, res) => {
    const db = req.db;
    db.serialize( () => {
        const query =  `UPDATE "Users" SET "isEmailVerified"="true" WHERE "id"='${req.params.id}';`
        db.run(query);
        res.send(fs.readFileSync( './html/pages/emailConfirmed.html' ,{ encoding: 'utf8' }))
    });
}

module.exports = verifyEmail;
