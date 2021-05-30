module.exports = {
    name: "bug",
    aliases: ['bug', 'reportbug'],
    description: 'let users report bugs',
    async execute(client, message, cmd, args, Discord){
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('847738017384890378')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Please ENTER the BUG! detials ex : -bug (the bug detalis)')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Server', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send("**Bug report has been sent!**")
    }
}