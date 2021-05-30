module.exports = {
    name: 'clear',
    aliases: ["cl"],
    permissions: ["ADMINISTRATOR"],
    description: "Clear messages!",
   async execute(client, message, cmd, args, Discord) {
        if(!args[0]) return message.reply("Please enter the amount of messsages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter an number not an **TEXT**");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("0 is not an **VALUE**");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.channel.send(`succesfully deleted ${args[0]} messages!`).then(i => i.delete({ timeout: 60000 }))
        });
    }
}
          
 