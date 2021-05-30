const quick = require('quick.db');

module.exports = {
  name: 'xe',
  aliases: ['XE'],
  description: 'Set your XE status',
  execute(client, message, cmd, args, Discord) {
    // check if the client can change nicknames
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('status change failed');
    // Add/update the member in the database
    quick.set(`${message.author.id}_${message.guild.id}_XE`, {
      username: message.member.displayName.replace('[XE]', ''), // replace the AFK part of the nickname of the member is afk and uses the command again
      active: true, // Set to true so it will be passed up by the if check in the message event
      date: Date.now(), // set the data this was done
    });

    message.member
      .setNickname(`XE | ${message.member.displayName.replace('[XE]', '')}`) // Make sure on the name inplacation to replace the AFk part of the name
      // reply to say status set
      .then(() => {
        return  message.channel.send(new Discord.MessageEmbed() .setDescription("You're name has been changed sucessfully to XE!") .setColor('RANDOM'))
      })
      // catch an error and then remove the member form the database and send a message
      .catch(_e => {
        quick.delete(`${message.author.id}_${message.guild.id}_XE`);
        return message.channel.send('Failed to set your status to XE.');
      });
  },
};

  
