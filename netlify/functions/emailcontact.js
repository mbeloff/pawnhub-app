const nodemailer = require('nodemailer');
const html = require('escape-html-template');

exports.handler = function (event, context, callback) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP,
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  let body = JSON.parse(event.body)

  let phone
  if (!body.phone) {
    phone = '(not provided)'
  } else {
    phone = body.phone
  }
  let email
  if (!body.email) {
    email = '(not provided)'
  } else {
    email = body.email
  }


  const safeHtml = html `
  <h2>PawnHub Contact Form</h2>
  <table>
  <tr><th style="text-align: left" colspan="2"><h4><br>Customer Details<br></h4><th></tr>
  <tr></tr>
  <tr><td>Name: </td><td>${body.name}</td></tr>
  <tr><td>Email: </td><td><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td>Phone: </td><td><a href="tel:${phone}">${phone}</a></td></tr>
  <tr></tr>
  <tr></tr>
  <tr><td>Preferred Contact: </td><td>${body.preferredContact}</td></tr>
  </table>

  <h4 style="margin: 1rem 0"><br>Message<br></h4>
  <p>${body.message}</p>
  `

  transporter.sendMail({
    from: `"PawnHub Online" <${process.env.MAIL_USER}>`,
    replyTo: body.email,
    to: process.env.MAIL_TEST,
    subject: 'PawnHub Contact Form',
    text: event.body,
    html: safeHtml.$
  }, function (error, info) {
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