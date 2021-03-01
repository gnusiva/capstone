const nodemailer = require("nodemailer");
const credentials = require('./emailCredentials');

async function sendEmail(toAddress, subject, message) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: credentials.username, 
      pass: credentials.password, 
    },
  });

  let info = await transporter.sendMail({
    from: credentials.username, 
    to: toAddress, 
    subject: subject, //  
    text: message, 
    html: message, 
  });

}

module.exports = sendEmail;