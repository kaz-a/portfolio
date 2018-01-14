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




