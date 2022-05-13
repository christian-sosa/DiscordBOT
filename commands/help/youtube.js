module.exports = {
  name: "ping",
  description: "Tiempo de respuesta",
  async execute(client, message, args, discord) {
    let mensaje;
      argumentos[0]
        ? (mensaje = `https://www.youtube.com/results?search_query=${argumentos[0]}`)
        : (mensaje = `https://youtube.com/`);
    message.channel.send(`${mensaje}`);
  },
};
