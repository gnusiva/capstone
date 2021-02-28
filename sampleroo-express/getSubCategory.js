
const getSubCategory = async (req, res) => {
    const db = req.db;
    db.serialize( () => {
        db.all(`SELECT * FROM "SubCategory" WHERE productId = "${req.params.productId}"`, (err, rows) => {
            res.send(rows);
        });
    });
}

module.exports = getSubCategory;
