require("dotenv").config();
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async() => {
	const oauth2Client = new OAuth2(
		process.env.CLIENT_ID,
		process.env.CLIENT_SECRET,
		"https://developers.google.com/oauthplayground"
	);

	oauth2Client.setCredentials({
		refresh_token: process.env.REFRESH_TOKEN
	});

	const accessToken = await new Promise((resolve, reject) => {
		oauth2Client.getAccessToken((err, token) => {
			if (err) {
				reject("Failed to create access token :(");
			}
			else {
				console.log("Access Token created successfully")
			}
			resolve(token);
		});
	});

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: process.env.SENDER_EMAIL,
			accessToken,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN
		}
	});

	return transporter;
};

const sendEmail = async(emailOptions) => {
	try {
		let emailTransporter = await createTransporter();
		await emailTransporter.sendMail(emailOptions);
		console.log("Email Deployed")
	}
	catch (e) {
        console.error(e);
	}
};

sendEmail({
	subject: "OAuth Test 1",
	text: "I am sending an email from nodemailer!",
	to: process.env.RECEIVER_EMAIL,
	from: process.env.SENDER_EMAIL
});