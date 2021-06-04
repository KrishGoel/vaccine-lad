require('dotenv').config();

const {
	SENDER_EMAIL,
	SENDER_EMAIL_PASS,
	RECEIVER_EMAIL
} = process.env

var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: SENDER_EMAIL,
		pass: SENDER_EMAIL_PASS
	}
});

var mailOptions = {
	from: SENDER_EMAIL,
	to: RECEIVER_EMAIL,
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