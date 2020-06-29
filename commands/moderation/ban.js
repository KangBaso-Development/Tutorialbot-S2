const Discord = require('discord.js');



    exports.run = async(client, message, args) =>{

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:b_no:721969465205588048> | You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:b_no:721969465205588048> | I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('<a:b_no:721969465205588048> | Please specify a user');

        if(!member) return message.channel.send('<a:b_no:721969465205588048> | Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.bannable) return message.channel.send('<a:b_no:721969465205588048> | This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === message.author.id) return message.channel.send('<a:b_no:721969465205588048> | Bruh, you can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.ban(reason)
      .then(() => {
          message.channel.send(`Succes banned: ${member}`)
        })
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })
    }
    exports.help = {
  name: "ban",
  description: "ban a member in your guild",
  category: "moderation",
  usage: "-ban <@user> <reason>",
  example: "-ban @proxy#1270 Share NSFW",
}
exports.conf = {
  aliases: [],
  cooldown: 5
}