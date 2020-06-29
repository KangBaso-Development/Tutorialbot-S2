const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  let user = message.mentions.users.first() || message.author
  let money = db.fetch(`money_${user.id}`)
  
  if (money === null) money = 0;
  const embed = new MessageEmbed()
  .setColor("#ffffff")
  .setThumbnail(user.avatarURL())
  .addField("BALANCE", `${money}$ Coins`)
  message.channel.send(embed)
}
  exports.help = {
    name: "balance",
    description:  "show the balance",
    usage: "-balance or -balance <@user>",
    example: "-balance or -balance Reaaz#0133"
  }
  exports.conf = {
    aliases: ["bal"],
    cooldown:  5
  }