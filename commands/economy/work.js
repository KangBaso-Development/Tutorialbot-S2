const Discord = require('discord.js');const db = require('quick.db');
const ms = require('parse-ms');
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
  let timeoutworked = 36000000 // 10Hours in ms to seconds
  let worked = db.fetch(`worked_${message.author.id}`)
  
  if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
    let time = ms(timeoutworked -(Date.now() - worked));
   return message.reply(`You already worked wellcome back in ${time.hours}h ${time.minutes}m ${time.seconds}s`)
    }
  if (!args[0]) {
let vembed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`Invalid Work \n Valid Work: \n1.Bot-Developer\n2.Akang-Baso\n3.Manager\n4.Youtuber`)
return message.channel.send(vembed)
  } else if (args[0] === "Bot-Developer") {
    let minA = 200
    let maxA = 250
    let amount = Math.floor(Math.random() * (minA - maxA + 1)) + minA;
    let dembed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
.setDescription(`You worked as Bot-Developer and earn ${amount}`)
message.channel.send(dembed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`worked_${message.author.id}`, Date.now()) // i will make more job just i not record that see you
    //after my work done
  } else if(args[0] === "Akang-Baso") {
    let minA = 150
let maxA = 250
let amount = Math.floor(Math.random() * (minA - maxA + 1))  + minA;
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
.setDescription(`You worked as Akang-Baso and Earn ${amount}`)
message.channel.send(embed)
db.add(`money_${message.author.id}`, amount)
db.set(`worked_${message.author.id}`, Date.now())

  }
    else if (args[0] === "Manager") {
let minA = 200
let maxA = 300
let amount = Math.floor(Math.random() * (minA - maxA + 1))  + minA;
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
.setDescription(`You worked as Manager and Earn ${amount}`)
message.channel.send(embed)
db.add(`money_${message.author.id}`, amount)
db.set(`worked_${message.author.id}`, Date.now())
}else if (args[0] === "Youtuber") {
let minA = 250
let maxA = 300
let amount = Math.floor(Math.random() * (minA - maxA + 1))  + minA;
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
.setDescription(`You worked as Youtuber and Earn ${amount}`)
message.channel.send(embed)
db.add(`money_${message.author.id}`, amount)
db.set(`worked_${message.author.id}`, Date.now())
}
 
}
exports.help = {
         name: "work",
         description: "work and get money",
         usage: "-work <Bot-Developer | Akang-Baso | Manager | Youtuber>",
         example: "-work <Bot-Developer | Akang-Baso | Manager | Youtuber>"
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};
