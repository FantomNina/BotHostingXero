const ms = require('ms')
const {MessageEmbed} = require('discord.js')
   module.exports= {
        name : 'giveaway',
        description : 'giveaway commands',
        aliases: ['gw'],
        permissions: ["ADMINISTRATOR"],
       async execute(client, message, cmd, args, Discord){
        const channel = message.mentions.channels.first();

        if(!channel) return message.channel.send(
            new MessageEmbed()
            .setDescription(`**<:redx:829184132897701918> You must mention a channel!**`)
            .setColor('RED')
        );

        let time = args[1].toLowerCase();

        if (!time) return message.channel.send(
            new MessageEmbed()
            .setDescription(`**<:redx:829184132897701918> You must specify a time!**`)
            .setColor('RED')
        );
            
        if (
            !time.endsWith("d") &&
            !time.endsWith("h") &&
            !time.endsWith("m") &&
            !time.endsWith("s") 
        )
        return message.channel.send(
            new MessageEmbed()
            .setDescription(`**<:redx:829184132897701918> ${time} must end with either "d", "h", "m" or "s"!**`)
            .setColor('RED')
        );
            
        let prize = args.slice(2).join(" ")
        if (!prize) return message.channel.send(
            new MessageEmbed()
            .setDescription(`**<:redx:829184132897701918> You must specify the prize!**`)
            .setColor('RED')
        );
            
        message.delete()

        channel.send(":tada: **NEW GIVEAWAY** :tada:")
        let gembed = new MessageEmbed()
        .setTitle("New Giveaway!")
        .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime: **${time}**\nPrize: **${prize}**`)
        .setTimestamp(Date.now + ms(time))
        .setColor(3447003)
        
        let n = await channel.send(gembed)
        n.react("🎉")
        setTimeout(() => {
            if(n.reactions.cache.get("🎉").count <= 1) return message.channel.send("Not enough people for me to draw a winner!")    
            let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
            let gembed2 = new MessageEmbed()
            .setTitle("New Giveaway!")
            .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nWinner:  **${winner} **\nTime: **${time}**\nPrize: **${prize}**`)
            .setTimestamp(Date.now + ms(time))
            .setColor(3447003)
            n.edit(gembed2)
            channel.send(`Congratulations ${winner}! You just won the **${prize}**!`);
            channel.send(`THE **THE GIVEAWAY IS ENDED**`);
        }, ms(time));
        }
    }       