import { Client } from "disharmony"
import { Message } from "./models/message"

let client = new Client("RSS", Message, require("./commands"))

client.initialize(require("fs").readFileSync("./token", "utf8"))