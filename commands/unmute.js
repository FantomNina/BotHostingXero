const Discord = require('discord.js')
module.exports = {
    
    name : 'unmute',
    description : "unmutes and person form muted!",
    async execute(client, message, cmd, args, Discord){
        if(message.member.roles.cache.has('846278825755017236')){
            const user = message.guild.members.cache.find(e => e.id === message.mentions.users.first().id)
            user.roles.remove('846380905638789140')
            const author = message.author
            const member = message.mentions.members.first()
            message.channel.send(`${member}is now unmuted!`)
     


        
           
    } 
    }
}