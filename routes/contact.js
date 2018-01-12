const router = require('express').Router();
const nodeMailer = require('nodemailer')

router.post('/', function (req, res) {
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: '',
          pass: ''
      }
  });

  let mailOptions = {
      from: req.body.email, // sender address
      to: 'zakscloset@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
  };

  transporter.sendMail(mailOptions, (error, res) => {
    if (error) {
        return console.log(error);
    }
    console.log('res', res)
    console.log(`Message sent: ${res.message}`);
    res.render('index');
  });
});

module.exports = router;



// // Generate test SMTP service account from ethereal.email
// // Only needed if you don't have a real mail account for testing
// nodeMailer.createTestAccount((err, account, req) => {

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: account.user, // generated gmail user
//       pass: account.pass  // generated gmail password
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//     from: req.body.email, // sender address
//     to: 'zakscloset@gmail.com', // list of receivers
//     subject: req.body.subject, // Subject line
//     text: req.body.message, // plain text body
//     html: req.body.message // html body
//   };

//   console.log('mailOptions:', mailOptions)

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log(`Message sent: ${info.messageId}`);
//     // Preview only available when sending through a gmail account
//     console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);

//   });
// });


