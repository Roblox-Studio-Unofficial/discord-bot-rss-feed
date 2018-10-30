import { Message as DMessage, fromDiscord } from "disharmony"
import { Guild } from "./guild"
import { MessageMentions } from "discord.js";

export class Message extends DMessage
{
    @fromDiscord public readonly guild: Guild
    @fromDiscord public readonly mentions: MessageMentions
}