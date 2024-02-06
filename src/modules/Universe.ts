import * as express from "express"
import { listDatastore } from "./Functions/ListDatastores";
import { requester } from "./Functions/Requester";
import { PublishRequest, sendMessage } from "./Functions/SendMessage";
import { DataStore } from "./classes/DataStore";
import { getOrderedDataStore } from "./classes/OrderedDataStore";
import { listInventoryItem } from "./Functions/InventoryFunctions";
import { getUniverseInformations } from "./Functions/GamesFunctions";

export class Universe
{
    universeId: string;
    apiKey: string;
    online: boolean;
    name: string;
    requester: express.Express;

    constructor(name: string, universeId: number | string, apiKey: string)
    {
        this.universeId = universeId.toString();
        this.apiKey = apiKey;
        this.online = false;
        this.name = name;
        this.requester = requester(this);
    }

    public getRequester()
    {
        return this.requester
    }

    public listen(port: number, callback: () => void)
    {
        this.requester.listen(port, callback)
    }

    public getDataStore(name: string, scope="global")
    {
        return new DataStore(this.apiKey, this.universeId, name, scope)
    }

    public getOrderedDataStore(name: string, scope="global")
    {
        return new getOrderedDataStore(this.apiKey, this.universeId, name, scope)
    }

    public async getUniverseInformations()
    {
        return await getUniverseInformations(this.universeId as any)   
    }

    public async listDatastores(prefix="", cursor="", limit=5)
    {
        return await listDatastore(this.apiKey, this.universeId, prefix, cursor, limit)
    }
    
    public async listInventoryItem(userId: number, maxPageSize?: number, pageToken?: string, filter?: string)
    {
        return await listInventoryItem(this.apiKey, userId, maxPageSize, pageToken, filter)
    }

    public async sendMessage(topic: string, message: PublishRequest)
    {
        return await sendMessage(this.apiKey, this.universeId, topic, message)
    }
}