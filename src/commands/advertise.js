const util = require("../utility");
const config = require("../config.json");

module.exports = {
  description: `
  Start making an ad
    `,
  run: (msg, client, ads, usersMakingAds) => {
    ads[msg.author.id] = [];
    usersMakingAds.push(msg.author.id);
    msg.channel.send(`Say ok to continue or ${config.prefix}cancel to cancel`);
  }
};
