const util = require("../utility");
const config = require("../config.json");
const storageHelper = require("../storage/storageHelper");

module.exports = {
  description: `
  Search for ads by topic, author, or server name
    `,
  run: msg => {
    var args = msg.content.split(" ");
    storageHelper.searchAds(
      args[1].toLowerCase(),
      args[2].toLowerCase(),
      function(ads) {
        if (ads == 0) {
          msg.channel.send(
            "we might not have any ads like that try again later"
          );
        } else {
          ads.forEach(async function(ad, i) {
            await msg.channel.send(
              util.advertisment(
                "author unknown",
                ad.name,
                ad.invite,
                ad.topic,
                ad.description
              )
            );
          });
        }
      }
    );
  }
};
