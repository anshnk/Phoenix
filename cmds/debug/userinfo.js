module.exports = {
  name: "userinfo",
  description: "Displays username and id.",
  execute(message, args) {
    const user = message.mentions.users.first();
    if (user === undefined) {
      return message.channel.send(`Your username: ${message.author.tag}\nYour ID: ${message.author.id}`);
    } else {
      return message.channel.send(`Their username: ${user.tag}\nTheir ID: ${user.id}`);
    }
  }
}