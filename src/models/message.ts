import { Message as DMessage, fromDiscord, DiscordJS } from "disharmony"
import { Guild } from "./guild"

export class Message extends DMessage
{
    @fromDiscord public readonly guild: Guild
    @fromDiscord public readonly mentions: DiscordJS.MessageMentions
}