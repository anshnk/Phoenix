const disbut = require("discord-buttons");
const { client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "button",
  description: "The help command!",
  execute(message, args) {
    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('This Is Dumb!!!') 
    .setID('button1') 
  
  let button2 = new disbut.MessageButton()
    .setStyle('url')
    .setLabel('Invite Me!') 
    .setURL('https://makevid2019.wixsite.com/phoenixutilities')
  
  let row = new disbut.MessageActionRow()
    .addComponents(button, button2);
  
  message.channel.send('Hello World!', row);
    }
  }
