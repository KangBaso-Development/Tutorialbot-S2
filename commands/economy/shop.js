const Discord = require("discord.js")
const client = new Discord.Client()
exports.run = async(client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Shop List")
  .setDescription("To buy item you only provide the id. \nExample: -buy rod")
  .addField("Fishing Rod", `\`\`\`ID: rod\nCost: 1500\`\`\``)
  .addField("Sword", `\`\`\`ID: sword\nCost: 3000\`\`\``)
  .addField("Pickaxe", `\`\`\`ID: pick\nCost: 1500\`\`\``)
  .addField("Bread", `\`\`\`ID: bread\nCost: 1500\`\`\``)
message.channel.send(embed)
  
}
exports.help = {
         name: "shop",
         description: "view shop list",
         usage: "-shop",
         example: "-shop",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};