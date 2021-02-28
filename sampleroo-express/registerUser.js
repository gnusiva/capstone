
const registerUser = async (req, res) => {
    const db = req.db;
    const postData = req.body;
    console.log(postData);
    db.serialize( () => {
        const query = `INSERT INTO "main"."Users"("id","isSocial","loginProvider","socialId","email","password","isEmailVerified","age","firstName","lastName","address","unit","field1","province","postalCode","country","productsId","subCategoriesId","brandsId") 
                                          VALUES (NULL,"false",NULL,NULL,                     NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);`;
        res.send();
    });
}

module.exports = registerUser;
