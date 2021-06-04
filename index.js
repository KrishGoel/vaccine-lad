require('dotenv').config();

// const {
// 	SENDER_EMAIL,
// 	SENDER_EMAIL_PASS,
// 	RECEIVER_EMAIL
// } = process.env

var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
	service: 'yahoo',
	host: 'smtp.mail.yahoo.com',
	port: 465,
	secure: false,
	auth: {
		type: "login",
		user: process.env.SENDER_EMAIL,
		pass: process.env.SENDER_EMAIL_PASS
	}
});

var mailOptions = {
	from: process.env.SENDER_EMAIL,
	to: process.env.RECEIVER_EMAIL,
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});