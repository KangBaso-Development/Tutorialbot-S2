const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const { prefix } = require('./config.json')

client.on('ready', () => {
  client.user.setStatus('idle');
  client.user.setActivity(`${client.users.cache.size} Users | sb!help`, {
    type: "WATCHING"
  })
  console.log(`${client.user.username} Is Online !`)
});


client.on('message', async message => {
  let PREFIX = prefix;

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${PREFIX}\``);
  }
})

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.SECRET).catch(console.error); // This token will leads to the .env file. It's safe in there.
