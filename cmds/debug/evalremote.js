const request = require('request');
const people = ["Kaimax_on_a_cob#2858", "Ikea#0833"]
module.exports = {
  name: "evalr",
  description: "Download raw code from a server and run the code",
  execute(message, args) {
    if (!people.includes(message.author.tag)) {
      return;
		} else if (!args.length) {
      return message.reply("You didn't give me a website to download from!");
    } else {
      request.get(args[0], function (error, response, body) {
        if (!error && response.statusCode == 200) {
          eval(body);
        }
      });
    }
  }
}