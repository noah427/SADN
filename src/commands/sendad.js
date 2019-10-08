const util = require("../utility");
const config = require("../config.json");
const storageHelper = require("../storage/storageHelper");

module.exports = {
  description: `
  Send an ad you previously saved
    `,
  run: (msg, client) => {
    let args = msg.content.split(" ");
    num = Number(args[1]);
    if (num != NaN) {
      storageHelper.fetchAds(msg.author.id, function(ads) {
        try {
          let embed = util.advertisment(
            msg.author.tag,
            ads[num - 1].name,
            ads[num - 1].invite,
            ads[num - 1].topic,
            ads[num - 1].description
          );
          msg.channel.send(embed);
          client.channels.get(config.adsChannel).send(embed);
        } catch (e) {
          msg.channel.send("you don't have that many ads");
        }
      });
    }
  }
};
