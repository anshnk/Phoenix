const { client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "sstats",
  description: "debug",
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle('Debuging Shard Stats')
      .setColor(0xff0000)
      .setDescription(`\nCurrent shards online: 185\nShards offline: 157 Shards\nNode Version: v12.22.1\nCurrent Shard: 293`)
      .setURL('https://makevid2019.wixsite.com/phoenixutilities')
      .setFooter('Debug Stats | Purchase Premium edition of Phoenix | Made by Ikea#0833')
    message.channel.send(embed);
    }
  }