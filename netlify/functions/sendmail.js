const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         type: 'OAuth2',
    //         user: process.env.MAIL_LOGIN,
    //         clientId: process.env.CLIENT_ID,
    //         clientSecret: process.env.CLIENT_SECRET,
    //         refreshToken: process.env.REFRESH_TOKEN,
    //         accessToken: process.env.ACCESS_TOKEN
    //     }
    // });
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      auth: {
          user: 'info@gabbastorage.com.au',
          pass: 'Koc65945'
      }
  });
    console.log(event.body);

  transporter.sendMail({
      from: 'info@gabbastorage.com.au',
      to:'michael@wickedcampers.com',
      subject: 'test email',
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