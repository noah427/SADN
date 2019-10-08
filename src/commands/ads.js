const util = require("../utility");
const config = require("../config.json");
const storageHelper = require("../storage/storageHelper");

module.exports = {
  description: `
  View your ads
    `,
  run: msg => {
    storageHelper.fetchAds(msg.author.id, function(ads) {
      if (ads == 0) {
        msg.channel.send("try again later, you might not have made any ads");
        return;
      }
      ads.forEach(async function(ad, i) {
        await msg.channel.send(
          util.advertisment(
            msg.author.tag,
            ad.name,
            ad.invite,
            ad.topic,
            ad.description
          )
        );
      });
    });
  }
};
