module.exports = {
    name: 'ban',
    description: "used to ban an person! ",
    permissions:["ADMINISTRATOR"],
    execute(client, message, args, Discord){
        const author = message.author
        const member = message.mentions.members.first()
        
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            const author = message.author
            const member = message.mentions.members.first()
            message.channel.send(`${member} has been **BANNED**`);
        }else{
            message.channel.send(`please type an person to  BAN 🤦‍♂️`);
        }
    }
}   