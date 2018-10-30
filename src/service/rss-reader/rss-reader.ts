import { Article } from "./article";

export interface RssReader
{
    fetchArticles(url: string): Promise<Article>
}