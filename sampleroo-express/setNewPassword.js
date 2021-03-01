var fs = require('fs');

const setNewPassword = async (req, res) => {
    const db = req.db;
    db.serialize( () => {
        const query =  `UPDATE "Users" SET "password"="${req.body.password}" WHERE "uid"='${req.body.uid}';`
        db.run(query);
        res.send({})
    });
}

module.exports = setNewPassword;
