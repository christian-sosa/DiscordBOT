module.exports = {
  name: "youtube",
  description: "Devuelve un link de YT",
  async execute(client, message, args, discord) {
    console.log("hola");
    let mensaje;
    argumentos[0]
      ? (mensaje = `https://www.youtube.com/results?search_query=${argumentos[0]}`)
      : (mensaje = `https://youtube.com/`);
    message.channel.send(`${mensaje}`);
  },
};
