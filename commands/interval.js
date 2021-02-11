const { Interval } = require("@tonaljs/tonal");
module.exports = {
  name: "*interval*",
  description: "interval!",
  execute(msg, args) {
    if (!args.length)
      msg.reply("You haven't given any interval for me to inform you about!");
    else if (args[0] && !args[1]) {
      msg.reply(Interval.get(args[0]).name);
    }
  },
};
