const discord = require("discord.js");
const client = new discord.Client();
require("dotenv").config();

const config = require("./config.json");
const util = require("./utility");

const cmdRgx = new RegExp("^" + config.prefix + "([a-z]{0,})");

const commands = {
  adMaking: require("./commands/adMaking"),
  ads: require("./commands/ads"),
  advertise: require("./commands/advertise"),
  delad: require("./commands/delad"),
  help: require("./commands/help"),
  search: require("./commands/search"),
  sendad: require("./commands/sendad"),
  whenPinged: require("./commands/whenPinged")
};

let usersMakingAds = [];
let ads = {};

client.on("message", msg => {
  if (msg.author.bot) return;
  var cmd;
  if (usersMakingAds.includes(msg.author.id)) {
    commands.adMaking.run(msg, client, ads, usersMakingAds);
    return;
  }

  if (msg.mentions.users.has(client.user.id)) {
  }

  cmd = msg.content.match(cmdRgx)[1];

  commands[cmd]
    ? commands[cmd].run(msg, client, ads, usersMakingAds)
    : msg.channel.send("Command not found");
});

client.login("");
