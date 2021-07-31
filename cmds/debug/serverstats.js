const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "serverstats",
  description: "The help command!",
  execute(message, args) {
    const embed = new MessageEmbed()
    .setTitle('Server Info')
    .setColor(0xff0000)
    .setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
    .setFooter('Made By Chewkie!');
   message.channel.send(embed)
    }
  }