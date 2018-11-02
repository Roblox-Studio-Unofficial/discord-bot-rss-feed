import addFeed = require("./add-feed");
import { RssParser as LibRssParser } from "../service/lib-rss-parser/rss-parser";
import { Command } from "disharmony";

(addFeed as Command).invokeDependency = LibRssParser

module.exports = [
    addFeed,
]