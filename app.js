require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
  console.log(file)
  require(`./handlers/${file}`)(client, discord);
});

client.login(process.env.TOKEN);
