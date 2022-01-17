const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP,
      port: 587,
      auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
      }
  });
    console.log(event.body);

  transporter.sendMail({
      from: `"PawnHub Online" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TEST,
      subject: 'PawnHub Application',
      text: event.body
  }, function(error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: "Ok"
      });
    }
  });
}