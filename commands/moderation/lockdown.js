exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:b_no:721969465205588048> | You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`<a:b_yes:721969088813072425> | **${message.author.username}** just locked the channel down.`);
  };
  
exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down.',
  usage: '-lockdown',
  example: '-lockdown'
};

exports.conf= {
  aliases:  ['lock'],
  cooldown: 5
};