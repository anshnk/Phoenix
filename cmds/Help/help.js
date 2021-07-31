const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "help",
  description: "The help command!",
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle('Help Menu!')
      .setColor(0xff0000)
      .setDescription('🤪 p~help-fun\n🛠 p~help-debug\n💰 p~help-economy\n🎶 p~help-music')
      .setFooter('Made By: Ikea#0833, Please purchase Premium edition of Phoenix. ')
    message.channel.send(embed);
    }
  }