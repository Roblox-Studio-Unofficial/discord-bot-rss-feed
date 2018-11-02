import { RssReader } from "../rss-reader/rss-reader";
import * as Parser from "rss-parser"

const parser = new Parser()

export class RssParser implements RssReader
{
    public async fetchArticles(url: string)
    {
        return (await parser.parseURL(url)).items
    }

    public async validateFeed(url: string)
    {
        return !!(await parser.parseURL(url)).feedUrl
    }
}