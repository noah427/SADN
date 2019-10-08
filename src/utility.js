const discord = require("discord.js");

module.exports.advertisment = (author, Sname, invite, theme, description) => {
  let embed = new discord.RichEmbed();
  embed.setTitle(Sname)
  embed.setAuthor(author)
  embed.setColor('cyan')
  embed.addField('Theme/Topic: ', theme)
  embed.addField('Description: ', description)
  embed.addField('Invite: ', invite)

  return embed
};
