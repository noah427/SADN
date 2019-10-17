const util = require("../utility");
const config = require("../config.json");
const storageHelper = require("../storage/storageHelper");

module.exports = {
  description: `
  Delete one of your previously saved ads
    `,
  run: msg => {
    let args = msg.content.split(" ");
    let num = Number(args[1]);
    if (!isNaN(num)) {
      storageHelper.delad(msg.author.id, num - 1);
      msg.channel.send("ad deleted");
    } else {
      msg.channel.send("thats not even a number bro");
    }
  }
};
