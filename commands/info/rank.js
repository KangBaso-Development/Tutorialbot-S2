const Discord = require('discord.js')
const db = require('quick.db')
const { getInfo } = require('../../handler/xp.js')
exports.run = (client, message, args) => {
  const user = message.mentions.users.first() || message.author
  
  if (user.id === client.user.id){
  return message.channel.send('I on Level 999')}
  if (user.bot) {
    return message.channel.send('Bot don`t Have level :/')
  }
  let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0
   const { level, remxp, levelxp } = getInfo(xp)
   if(xp === 0) {
     return message.channel.send(`${user.tag} Is Out of level`)
   }
  let embed = new Discord.MessageEmbed()
  .setAuthor(user.username, message.guild.iconURL())
  .setThumbnail(user.avatarURL())
  .setDescription(`**LEVEL** ${level}\n **XP:** ${remxp}/${levelxp}`)
  .setFooter(`Level Of: ${user.username}`, client.user.displayAvatarURL())
  .setTimestamp()
  
  message.channel.send(embed)
  
}
exports.help = {
         name: "rank",
         description: "",
         usage: "",
         example: "",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};