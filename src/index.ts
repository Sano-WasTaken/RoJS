import { getMediaFromUniverseId } from "./modules/Functions/GamesFunctions";
import { Universe } from "./modules/Universe";

const key = "SADv3HoSnUWcnOGSM58I5t9ocDBIXvbTOiClfkNo6MGFNTPE"

const uniID = 5552478215

const universe = new Universe(uniID, key)

getMediaFromUniverseId(uniID).then(res => console.log(res.data.data[0].createVipServersAllowed))

const ds = universe.getDataStore("Coins")

//ds.listEntries().then(res => console.log(res.data.keys))