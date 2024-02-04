import { getUniverseInformations } from "./modules/Functions/GamesFunctions";
import { getGroup, listGroupMemberships, listGroupRoles } from "./modules/Functions/GroupFunctions";
import { listInventoryItem } from "./modules/Functions/InventoryFunctions";
import { Universe } from "./modules/Universe";

const key = "SADv3HoSnUWcnOGSM58I5t9ocDBIXvbTOiClfkNo6MGFNTPE";

const uniID = 5552478215;

const universe = new Universe(uniID, key);

//getMediaFromUniverseId(uniID).then((res) => console.log(res.data.data[0]));

const ds = universe.getDataStore("Coins");

//ds.listEntries().then(res => console.log(res.data.keys))

//listInventoryItem(key, 162206312).then(res => console.log(res.data.inventoryItems[0]))

import e = require("express")

const app = e()

app.get("/", function(req, res){
    res.send("test !dfgsqjkhkl")
})

app.listen(3000)