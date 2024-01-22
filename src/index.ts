import { Universe } from "./modules/Universe";

const key = "SADv3HoSnUWcnOGSM58I5t9ocDBIXvbTOiClfkNo6MGFNTPE"

const uniID = 5552478215

const universe = new Universe(uniID, key)

const datastore = universe.getDataStore("Coins")

// set & get succeed !
//datastore.getEntry("random_key").then(res => console.log(res.data)) // get l'entry
//datastore.setEntry("random_key", "50").then(res => console.log(res.data))

// list entries succeed !
//datastore.listEntries().then(res => console.log(res.data))

// delete entry succeed !
//datastore.deleteEntry("random_key")
//datastore.getEntry("random_key").then(res => console.log(res.data)) // get l'entry

// list entry versions succeed !
/** 
async function test()
{
    console.log(
        (await datastore.setEntry("random_key", "50")).data,
        (await datastore.listEntryVersions("random_key")).toString()
    )   
}

test()
*/

// increment succeed !
/** 
async function test()
{
    //const set = await datastore.setEntry("tester", 500)     
    const incr = await datastore.incrementEntry("tester", 700)
    const get = await datastore.getEntry("tester")


    console.log(
        //set.data,
        incr.data,
        get.data
    )
    
}

test().catch(err => console.log(err))
*/
// list datastores succeed !
universe.listDatastores().then(res => console.log(res.data))