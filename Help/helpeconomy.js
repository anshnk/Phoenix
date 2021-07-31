const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "help-economy",
  description: "The help command!",
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle('Help Menu!')
      .setColor(0xff0000)
      .setDescription('p~beg\n```This command allows you to beg for money!```\np~setup-moni\n```This command allows you to setup your moni account!```\np~balance\n```This command allows you to see your moni balance!```')
      .setFooter('Made By: Ikea#0833')
    message.channel.send(embed);
    }
  }