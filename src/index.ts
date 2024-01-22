import { Universe } from "./modules/Universe";

const key = "SADv3HoSnUWcnOGSM58I5t9ocDBIXvbTOiClfkNo6MGFNTPE"

const uniID = 5552478215

const universe = new Universe(uniID, key)

universe.sendMessage("test", {
    message: JSON.stringify({
        data: "test123",
    })
})