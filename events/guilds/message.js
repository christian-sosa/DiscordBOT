require("dotenv").config();
const prefix = process.env.PREFIX;

module.exports = async (client, discord, msg) => {
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
      argumentos[0]
        ? msg.reply(
            `https://www.youtube.com/results?search_query=${argumentos[0]}`
          )
        : msg.reply(`https://youtube.com/`);
    }
  }
};
