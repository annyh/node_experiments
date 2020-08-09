var nodemailer = require('nodemailer');
const EMAIL = process.env.GOOGLE_USER
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: process.env.GOOGLE_PSSWD
    }
});

const FILE_NAME = 'tesla.jpg'
var mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: 'Tesla local picture',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',
    attachments: [
        {
            filename: FILE_NAME,
            path: __dirname +'/images/' + FILE_NAME,
            cid: 'tesla'
        }
    ]
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});