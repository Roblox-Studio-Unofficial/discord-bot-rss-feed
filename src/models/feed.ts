import { SerializableHybrid } from "disharmony/lib/hybridization/hybrid";
import { serialize } from "disharmony";

export class Feed extends SerializableHybrid
{
    @serialize public id: string
    @serialize public url: string
    @serialize public roleID: string
    @serialize public history: string[]
}