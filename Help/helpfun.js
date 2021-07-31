const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "help-fun",
  description: "The help command!",
  execute(message, args) {   
   const embed = new MessageEmbed()
      .setTitle('Help Fun!')
      .setColor(0xff0000)
      .setDescription('~coinflip\n```Should Be Obivous.```\n~deepfry\n```Deepfrys a users image```\n~reverse\n```Reverses your text!```\n~say\n```Makes the bot say anything you wish [For the people trying to bypass the eval command, it wont work.```\n~tweet\n```Makes a fake twitter tweet image!```')
      .setFooter('Made By: Ikea#0833')
    message.channel.send(embed);
  }
}