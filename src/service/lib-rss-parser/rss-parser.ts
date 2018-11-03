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
        return !!(await parser.parseURL(url)).feedUrl
    }
}