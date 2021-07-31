const discord = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'ban someone',
	execute(message, args) {
		if (!message.member.hasPermission('BAN_MEMBERS'))
			return message.reply('You dont have enough perms to use this cmd!');
		let target = message.mentions.members.first();

		if (!target)
			return message.reply('Please mention someone to ban! SHOULD BE OBVIOUS!');

		if (target.id === message.author.id) {
			return message.reply('You cannot ban yourself! idiot, common knowledge.');
		}

		let reason = args.slice(1).join(' ');

		if (!reason)
			return message.reply('Please give a reason! Always give a reason');

		let embed = new discord.MessageEmbed()
			.setTitle('Member Banned, That dude got bonked.')
			.addField('Target', target.user.tag)
			.addField('moderator', message.author.tag)
			.addField('Reason', `${reason}`);
		message.channel.send(embed);
		target.ban({ reason: reason });
	}
};
