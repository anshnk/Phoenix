const people = ["Kaimax_on_a_cob#2858", "Ikea#0833"]
module.exports = {
	name: 'eval',
	description: 'Run some code.',
	execute(message, args) {
		if (!people.includes(message.author.tag)) {
      return;
		} else if (!args.length) {
      return message.reply("You didn't give me anything to evaluate!");
    } else if (message.content.includes("token")) {
      return message.channel.send("Sorry, but I can't run code with the term 'token' in it for security reasons.");
    } else {
      eval(message.content.replace("p~eval ", ""));
    }
	},
};