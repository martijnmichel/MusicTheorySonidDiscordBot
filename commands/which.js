const { Interval } = require("@tonaljs/tonal");
const { last, intersection } = require("lodash");
const { embedInterval } = require("../embeds/interval");

module.exports = {
  name: "which",
  description: "interval!",
  execute(msg, args) {
    // make sure it;s a  question
    if (last(args) !== "?") return;

    const type = intersection(["interval", "chord", "scale"], args);
    const search = intersection(["intervals", "notes"], args);
    msg.reply(type, search);
  },
};
