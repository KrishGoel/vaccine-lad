require("dotenv").config();
const axios = require("axios");

function sendMessage(message) {
	axios(
		{
			method: 'post',
			url: "https://api.telegram.org/bot"+process.env.TOKEN+"/sendMessage?chat_id="+process.env.CHAT_ID+"&text="+message
		}
	)
	.then((response) => {
		console.log(response);
	}, (error) => {
		console.log(error);
	});
}

sendMessage("Lrish")