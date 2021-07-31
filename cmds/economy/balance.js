const { db } = require('../../db.js');
const prefix = "~";
module.exports = {
	name: "bal",
	description: "gives u how much money u have",
	execute(message, args) {
		var bal = db.get(`${message.author.id}_bal`);
		if (bal !== null) {
			return message.reply(`you have **${bal} moni!**`);
		} else {
			return message.reply(`you haven't setup your moni account yet! Do ${prefix}setup-moni to setup your moni account!`);
		}
	}
}