const { db } = require('../../db.js')
module.exports = {
	name: "setup-moni",
	description: "set up ur moni account :)",
	execute(message, args) {
		var bal = db.get(`${message.author.id}_bal`);
		if (bal === undefined) {
			db.set(`${message.author.id}_bal`, 100);
			return message.channel.send(`Successfully created ${message.author.tag}'s moni account!`);
		} else {
			return message.reply("your moni account already exists!")
		}
	}
}