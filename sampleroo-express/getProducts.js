
const getProducts = async (req, res) => {
    const db = req.db;
    db.serialize( () => {
        db.all('SELECT * FROM "Products"', (err, rows) => {
            res.send(rows);
        });
    });
}

module.exports = getProducts;