module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    permissions:["ADMINISTRATOR"],
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            const author = message.author
            const member = message.mentions.members.first()
            message.channel.send(`${member} has been kicked Sucessfully!`);
        }else{
            message.channel.send(`please type an person to  kick 🤦‍♂️`);
        }
    }
}

