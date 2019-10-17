const util = require("../utility");
const config = require("../config.json");

module.exports = {
    description : `
    Runs when pinged
    `,
    run : (msg) => {
        msg.channel.send("prefix is : " + config.prefix)
    }
}