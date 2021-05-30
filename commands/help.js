const { MessageEmbed } = require("discord.js") 
module.exports = {
    name: 'help',
    description: "Embeds!",
    
    
    execute(client, message, args, Discord){
        
        
        const newEmbed = new MessageEmbed()
        .setColor('#0A92ED')
        .setTitle('Commands!')
        .addFields(
            { name: '> birth', value: 'it is not that good  command it just say when was  the bot was created! Command : -birth'},
            { name: '> avatar', value:  'Which will send ur cuttent profile also if u ping someone i will also show their avatar Ex : @user avatar'},
            { name: '> xe ', value:  'Which set your name to XE! Command : -xe'},
            { name: '> bug', value:  'If u see any bug in the bot use this command and report! Command : -bug (and the bug u want to TYPE!)'},
            { name: '> mute', value:  'This command is used to MUTE people! this command only works for **MOD** and other persons who have the  Permissions! Command : -mute @user'},
            { name: '> kick', value:  'this command is used to kick people! also this command only works for **MOD** and other who has the permissions Command: -kick @user'},
            { name: '> ban', value:  'this command is used to ban the memebr form the server this is also works for **MOD** Command: -ban @user'},
            { name: '> clear', value:  'This command is used to clear certain amount of messages! also works for **MOD** Ex: -clear 2 u can add any number that you want to clear! Command: -clear 1'},
            { name: '> slowmode', value:  'This command is used to slow down then chat! and also this command is also work for MODS  Command: -slowmode 5s '},

            
            
        )
        .setImage('https://media.discordapp.net/attachments/834784626500698184/845287810318991417/finally.gif')
        .setFooter('This bot was made by ϟFⱥnτo𝓶Niͥnjͣaͫᴳᵒᵈツϟ | 夜#3797 DM me if u want a bot for ur server! ')
         message.channel.send(newEmbed);
    }
}
