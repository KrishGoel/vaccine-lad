require("dotenv").config();
const axios = require("axios");

function sendMessage(message) {
	axios.post("https://api.telegram.org/bot"+process.env.TOKEN+"/sendMessage?chat_id="+process.env.CHAT_ID+"&text="+message)
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
}

sendMessage("Lrish")