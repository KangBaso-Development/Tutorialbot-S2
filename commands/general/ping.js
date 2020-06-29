const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  const msg = await message.channel.send('Pinging...')
    .then(i => i.delete({timeout: 1000}))
  const embed = new Discord.MessageEmbed()
    .setColor(0xFFFFFF)
    .setDescription(`🏓 PONG`)
    .addField('⏳ Latency', `${msg.createdTimestamp - message.createdTimestamp}ms`)
    .addField('💓 API Latency', `${Math.round(client.ws.ping)}ms`)
    .setTimestamp()
  
  message.channel.send(embed)
  
  
  
}
exports.help = {
name: "ping",
description: "Show API bot ping",
category: "info",
  usage: "-ping"
}
exports.conf = {
aliases: ["beep"],
cooldown: 5
}