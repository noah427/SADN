const util = require("../utility");
const config = require("../config.json");
const storageHelper = require("../storage/storageHelper");

module.exports = {
  description: `
  This runs during the ad making process (use advertise command to make an ad)
    `,
  run: (msg, client, ads, usersMakingAds) => {
    if (msg.content == `${config.prefix}cancel`) {
      usersMakingAds.splice(usersMakingAds.indexOf(msg.author.id), 1);
      delete ads[msg.author.id];
      msg.channel.send("ad canceled");
      return;
    }
    ads[msg.author.id].push(msg.content);
    switch (ads[msg.author.id].length) {
      case 1:
        msg.channel.send("Please respond with the name of your server");
        break;
      case 2:
        msg.channel.send("Please send an invite to your server");
        break;
      case 3:
        msg.channel.send("Please state the theme or topic of your server");
        break;
      case 4:
        msg.channel.send("Now please enter a small descripton of your server");
        break;
      case 5:
        msg.channel.send(
          "Would you like to save your ad for future use? yes or no"
        );
        break;
      case 6:
        msg.channel.send(
          "Congrats! you're done making your ad this is what it ad looks like, it has also been sent to our central advertising server"
        );
        let embed = util.advertisment(
          msg.author.tag,
          ads[msg.author.id][1],
          ads[msg.author.id][2],
          ads[msg.author.id][3].toLowerCase(),
          ads[msg.author.id][4]
        );
        if (ads[msg.author.id][5].toLowerCase() == "yes") {
          storageHelper.saveAd(
            msg.author.id,
            ads[msg.author.id][1],
            ads[msg.author.id][2],
            ads[msg.author.id][3].toLowerCase(),
            ads[msg.author.id][4]
          );
          msg.channel.send(`Ad saved say ${config.prefix}ads to view your ads`);
        }
        msg.channel.send(embed);
        client.channels.get(config.adsChannel).send(embed);
        delete ads[msg.author.id];
        usersMakingAds.splice(usersMakingAds.indexOf(msg.author.id), 1);
      //   msg.channel.send(
      //     `Please join our central server ${config.centralServer}`
      //   );
      default:
        break;
    }
  }
};
