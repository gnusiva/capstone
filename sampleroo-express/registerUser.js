
const registerUser = async (req, res) => {
    const db = req.db;
    const postData = req.body;
    const {
        email, 
        password,
        age,
        userdetailsTerms,
        firstName,
        address,
        field1,
        province,
        lastName,
        unit,
        postalCode,
        country,
        shippingTerms,
        subCategoryId,
        brandId,
        productId
      } = postData;
    console.log(postData);
    db.serialize( () => {
        const query = `INSERT INTO "main"."Users"("id","isSocial","loginProvider","socialId","email","password","isEmailVerified","age","firstName","lastName","address","unit","field1","province","postalCode","country","productsId","subCategoriesId","brandsId") 
                                          VALUES (NULL,"false",NULL,NULL,                     "${email}","${password}","false",     "${age}","${firstName}","${lastName}","${address}","${unit}","${field1}","${province}","${postalCode}","${country}","${productId}","${subCategoryId}","${brandId}");`;
        db.run(query);
        res.send({});
    });
}

module.exports = registerUser;
