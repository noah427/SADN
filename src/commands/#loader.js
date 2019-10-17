const fs = require("fs");

module.exports.findCommands = (cb) => {
  fs.readdir(__dirname, (err, files) => {
    err ? console.log(err) : undefined;
    cb(files)
  });
};

module.exports.getDescription = (fileName) => {
    let mod = require(`./${fileName}`)
    return mod.description
}
