exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You not have **permission** -_-")

        const amount = args.join(" ");

        if(!amount) return message.reply('<a:b_no:721969465205588048> | please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('<a:b_yes:721969088813072425> ** | Success deleting message!**').then(m => m.delete ({timeout: 1500}))

    }
exports.help = {
  name: "purge",
  category: "moderation",
  description: "clearing message max amount 100",
  usage: "-purge",
  example: "-purge 30"
}
exports.conf = {
  aliases: ["clear"],
  cooldown: 5
}