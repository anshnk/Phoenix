const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "help-debug",
  description: "This the bots debugging commands!",
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle('Help Debug!')
      .setColor(0xff0000)
      .setDescription('~eval\n```This evalutes node.js code! Works on 4 certain users only```\n-evalr\n```This command allows you to access a piece on a remote server! Works on 4 certain users only.```\n~userinfo\n```This Allows you to get a users info, basic.```')
      .setFooter('Made By: Ikea#0833')
    message.channel.send(embed);
  }
}