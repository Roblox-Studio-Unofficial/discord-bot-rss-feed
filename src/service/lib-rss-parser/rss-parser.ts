import { RssReader } from "../rss-reader/rss-reader";
import * as Parser from "rss-parser"
import { Article } from "../rss-reader/article";

const parser = new Parser()

export class RssParser implements RssReader
{
    public async fetchArticles(url: string)
    {
        return (await parser.parseURL(url)).items as Article[]
    }

    public async validateFeed(url: string)
    {
        /* Use the existence of a title to determine the validity of a feed.
           It's not particularly clear what elements make up the minimum valid feed,
           but a few online sources indicate that a title is one such necessary component. */
        return !!(await parser.parseURL(url)).title
    }
}