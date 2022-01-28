const nodemailer = require('nodemailer');
const html = require('escape-html-template');
const safeAttribute = require('escape-html-template').safeAttribute

exports.handler = function(event, context, callback) {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP,
      port: 587,
      auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
      }
  });

  let body = JSON.parse(event.body)

  let uploads = ''
  body.uploads.forEach(el => {
    uploads = uploads + `<a href=${el.url}><img src=${el.thumb}></a>`
  })

  const safeHtml = html`
  <h2>PawnHub Application</h2>
  <h3>Requested Loan Amount: ${body.requestedAmount}</h3>
  <table>
  <tr><th style="text-align: left" colspan="2"><h4><br>Customer Details<br></h4><th></tr>
  <tr></tr>
  <tr><td>Name: </td><td>${body.name}</td></tr>
  <tr><td>Email: </td><td><a href="mailto:${body.email}">${body.email}</a></td></tr>
  <tr><td>Phone: </td><td><a href="tel:${body.phone}">${body.phone}</a></td></tr>
  <tr><td>Address: </td><td>${body.address}</td></tr>
  <tr><td>D.O.B. </td><td>${body.dob}</td></tr>
  <tr><td>License # </td><td>${body.license}</td></tr>
  <tr><td>License Expiry: </td><td>${body.expiry}</td></tr>
  <tr></tr>
  <tr><th style="text-align: left" colspan="2"><h4><br>Asset Details<br></h4></th></tr>
  <tr></tr>
  <tr><td>Vehicle: </td><td>${body.vehicle}</td></tr>
  <tr><td>Type of Vehicle: </td><td>${body.vehicleType}</td></tr>
  <tr><td>Rego #: </td><td>${body.rego}</td></tr>
  <tr><td>Mileage: </td><td>${body.mileage}</td></tr>
  <tr><td>Transmission: </td><td>${body.transmission}</td></tr>
  <tr><td>Fuel: </td><td>${body.fuel}</td></tr>
  <tr></tr>
  <tr><th style="text-align: left" colspan="2"><h4><br>Attachments<br></h4></th></tr>
  <tr></tr>
  </table>
  ${safeAttribute(uploads)}
  <h4 style="margin: 1rem 0"><br>Message<br></h4>
  <p>${body.message}</p>
  `

  transporter.sendMail({
      from: `"PawnHub Online" <${process.env.MAIL_USER}>`,
      replyTo: body.email,
      to: process.env.MAIL_TEST,
      subject: 'PawnHub Application',
      text: event.body,
      html: safeHtml.$
  }, function(error, info) {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: error.toString(),
      });
    } else {
      callback(null, {
        statusCode: 200,
        body: "Ok"
      });
    }
  });
}