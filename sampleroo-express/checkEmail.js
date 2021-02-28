
const checkEmail = async (req, res) => {
    const db = req.db;
    db.serialize( () => {
        db.all(`SELECT * FROM "Users" WHERE email = "${req.params.email}"`, (err, rows) => {
            res.send(rows);
        });
    });
}

module.exports = checkEmail;
