const { Client, Intents } = require("discord.js");

require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

prefix = "!";

client.once("ready", (bot) => {
  console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
});

client.on("messageCreate", (msg) => {
  //console.log(msg.channelId);
  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    const argumentos = msg.content.slice(prefix.length).split(/ +/);
    const comando = argumentos.shift().toLowerCase();

    if (msg.channelId == "974072842519986247" || msg.channel.name == "lol") {
      if (comando == "opgg") {
        msg.reply(`https://las.op.gg/summoners/las/${msg.author["username"]}`);
      }
      if (comando == "user") {
        msg.reply(`https://las.op.gg/summoners/las/${argumentos[0]}`);
      }
    }

    if (msg.channelId == "974072858366050346" || msg.channel.name == "tft") {
      if (comando == "parche") {
        msg.reply(`https://guiadeparche.com/}`);
      }
    }

    if (comando == "youtube") {
      argumentos[0] ? msg.reply(`https://www.youtube.com/results?search_query=${argumentos[0]}`) : msg.reply(`https://youtube.com/`);
    }

  }
});

client.login(process.env.TOKEN);
