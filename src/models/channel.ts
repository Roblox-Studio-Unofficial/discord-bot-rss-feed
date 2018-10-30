import { SerializableHybrid } from "disharmony/lib/hybridization/hybrid";
import { fromDiscord, serialize } from "disharmony";
import { dataMember } from "disharmony/lib/hybridization/decorators";
import { Feed } from "./feed";

export class Channel extends SerializableHybrid
{
    @fromDiscord private readonly type: string

    @fromDiscord public readonly id: string
    @fromDiscord public readonly name: string

    public get isText() { return this.type === "text" }

    @serialize @dataMember(Feed) public feeds: Feed[]
}