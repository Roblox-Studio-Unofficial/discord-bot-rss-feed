import addFeed = require("./add-feed");

(addFeed as any).invokeDependency = {} //todo inject rss reader here

module.exports = [
    addFeed,
]