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

async function test()
{
    const one = await listGroupMemberships(key, 15503263).then(res => res.data.groupMemberships[0].role)
    const two = await listGroupRoles(key, 15503263).then(res => res.data.groupRoles[0].path)

    return one === two
}

test()
    .then(res => console.log(res))
    .catch(err => console.log(err))

console.error("error")

getUniverseInformations(uniID).then(res => console.log(res.data.data))

//listInventoryItem(key, 162206312).then(res => console.log(res.data.inventoryItems[0]))