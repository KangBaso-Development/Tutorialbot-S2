exports.run = async(client, message, args) => {
  if(message.author.id !== "698069399285792848")  return message.channel.send('You Not Owner -_-')
try {
  await message.channel.send('Rebooting...').then(i => i.delete({timeout: 5000}))
  process.exit()
} catch(e) {
  message.channel.send(`ERROR: ${e.message}`)
}

}


exports.help = {
         name: "reboot",
         description: "reboot the bots",
         usage: "sb!reboot",
         example: "sb!reboot",
};

exports.conf = {
          aliases: ["shutdown"],
          cooldown: 5
};