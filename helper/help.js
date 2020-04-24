const nodemailer = require('nodemailer');

function sendEmail(emailUser){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dummy.deni.toni@gmail.com',
          pass: '123lab46'
        }
      });
      
      let mailOptions = {
        from: 'dummy.deni.toni@gmail.com',
        to: emailUser,
        subject: 'Sending Email using Node.js',
        text: 'You Register Complete, Be Ready'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

module.exports = sendEmail;