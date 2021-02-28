
const login = async (req, res) => {
    const db = req.db;
    db.serialize( () => {
        const query = `SELECT * FROM "Users" WHERE email = "${req.body.email}" AND password = "${req.body.password}"`;
        console.log(query, req.body )
        db.all(query, (err, rows) => {
            console.log(rows);
            res.send(rows.map(item => item.isEmailVerified));
        });
    });
}

module.exports = login;
