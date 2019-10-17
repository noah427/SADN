const discord = require("discord.js");
const loader = require("./#loader");

module.exports = {
  description: `
    shows this message
    `,
  run: async msg => {
    var embed = new discord.RichEmbed();

    embed.setTitle("Help");
    embed.setColor("cyan");

    await loader.findCommands(async files => {
      await files.forEach(async (v, i, a) => {
        if (i === 0) return;

        await embed.addField(
          v.replace(".js", ""),
          await loader
            .getDescription(v)
            .replace("\n", "")
            .trim()
        );
        if (i === a.length--) {
          await msg.channel.send(embed);
        }
      });
    });
  }
};
