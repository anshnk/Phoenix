const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();
require('discord-buttons')(client);

mongoose.connect(process.env.MONGOPATH_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('[DATABASE] Connected to mongodb!')
}).catch((err) => {
  console.log(err)
})

client.commands = new Discord.Collection();

const empty = '';
const prefix = 'p~';

client.on('ready', () => {
  client.user.setActivity('Currently in Beta | Shard 293', { type: 'WATCHING'}).catch(console.error)
  console.log('Total Shards: 342 Shards')
  console.log('Total Shards Online: 185')
  console.log('Current Shard: 293')
  console.log('All Commands currently fully functional!')
  console.log('Current Status: WATCHING')
});

function formatLog(msg, type) {
  if (type == 0) {
    return chalk.gray(empty.concat('[DEBUG] ', msg));
  } else if (type == 1) {
    return chalk.blue(empty.concat('[INFO] ', msg));
  } else if (type == 2) {
    return chalk.yellow(empty.concat('[WARNING] ', msg));
  } else if (type == 3) {
    return chalk.red(empty.concat('[ERROR] ', msg));
  } else {
    console.log(chalk.red('[ERROR] Invalid log type specified.'));
  }
}

const commandFolders = fs.readdirSync('./cmds');
for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./cmds/${folder}`)
    .filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./cmds/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.once('ready', () => {
});

client.on('message', message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.log(formatLog(error, 3));
    message.reply(
      empty.concat('Unable to execute command ', commandName, ': ' + error)
    );
  }
});

client.on('clickButton', async (button) => {
  if(button.id === 'button1') {
    await button.reply.send('I know right?', true)
  }
});

client.login(process.env.TOKEN);