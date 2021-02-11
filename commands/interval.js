const { Interval } = require("@tonaljs/tonal");
const { embedInterval } = require('../embeds/interval')


module.exports = {
  name: "interval",
  description: "interval!",
  execute(msg, args) {
    if (!args.length)
      msg.reply("You haven't given any interval for me to inform you about!");
    else if (args[0]) {
      console.log(args[0])
      msg.reply(embedInterval(args[0]))
    }
  },
};
