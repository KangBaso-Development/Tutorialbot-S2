exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:b_no:721969465205588048> | You don't have the permission to do that!");

    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send('<a:b_yes:721969088813072425> | Lockdown lifted, enjoy talking !');
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })
  };
  
exports.help = {
  name: 'unlockdown',
  description: 'This will lock a channel down.',
  usage: '-unlockdown',
  example: '-unlockdown'
};

exports.conf= {
  aliases:  ['unlock'],
  cooldown: 5
};