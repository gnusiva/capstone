const sendEmail = require('./sendEmail');
const port = require('./portNumber');
const hostName = require('./hostName');
const { v4: uuidv4 } = require('uuid');

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
    db.serialize( () => {

        const query = `INSERT INTO "main"."Users"("id","uid","isSocial","loginProvider","socialId","email","password","isEmailVerified","age","firstName","lastName","address","unit","field1","province","postalCode","country","productsId","subCategoriesId","brandsId") 
                                          VALUES (NULL,"${uuidv4()}","false",NULL,NULL,                     "${email}","${password}","false",     "${age}","${firstName}","${lastName}","${address}","${unit}","${field1}","${province}","${postalCode}","${country}","${productId}","${subCategoryId}","${brandId}");`;
        db.run(query, function (err) {
            const lastId = this.lastID;
            console.log(lastId);
            db.get(`SELECT * FROM "Users" WHERE id = "${lastId}"`, function(err, row) {
                const link = `${hostName}${port}/verifyEmail/${row.uid}`;
                sendEmail(email, "SamplRoo: Confirm your email", `
                <h5> Welcome to SamplRoo </h5>
                Please click this <a href="${link}" >${link} </a> to confirm your email address. 
                `).then( () => {
                    res.send({});
                }).catch((err)=> console.error(err));
            } );
            
        } );
    });
}

module.exports = registerUser;
