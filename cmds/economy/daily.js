const { db } = require('../../db.js');
module.exports = {
    name: "beg",
    args: false,
    guildOnly: true,
    cooldown: 25,
    execute(message, args) {
        if (db.get(`${message.author.id}_bal`) === undefined) {return message.reply(`you haven't setup your moni account yet! Do p~setup-moni to setup your moni account!`);}
        var daily = Math.floor(Math.random() * Math.floor(500));
        var newbal = db.get(`${message.author.id}_bal`) + daily;
        db.set(`${message.author.id}_bal`, newbal);
        return message.reply(`you begged and got **${daily} moni**!`);
    }
}