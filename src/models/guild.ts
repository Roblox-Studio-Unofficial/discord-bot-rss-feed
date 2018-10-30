import { Guild as DGuild, fromDiscord } from "disharmony"
import { dataMember } from "disharmony/lib/hybridization/decorators";
import { Channel } from "./channel"

export class Guild extends DGuild
{
    @fromDiscord @dataMember(Channel, true) public readonly channels: Map<string, Channel>
}