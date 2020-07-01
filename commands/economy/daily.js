const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms")

exports.run = async(client, message, args) => {
let timeout = 86400000
let amount = 500

let daily = db.fetch(`daily_${message.author.id}`);
  
  if (daily != null && timeout - (Date.now() - daily) > 0) {
  let time= ms(timeout - (Date.now() - daily));
 return message.reply(`You already take daily reward, you can come back in ${time.hours}H ${time.minutes}M ${time.seconds} S`)
  } else {
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setDescription(`**Daily Reward`)
    .addField(`Collected`, amount)
    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.add(`daily_${message.author.id}`, Date.now())
  }
}
exports.help = {
         name: "daily",
         description: "Get your daily reward",
         usage: "-daily",
         example: "-daily",
};

exports.conf = {
          aliases: [""],
          cooldown: 0
};