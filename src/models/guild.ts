import { Guild as DGuild, fromDiscord, dataMember } from "disharmony"
import { Channel } from "./channel"

export class Guild extends DGuild
{
    @fromDiscord @dataMember(Channel, true) public readonly channels: Map<string, Channel>
}