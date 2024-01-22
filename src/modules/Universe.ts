import { listDatastore } from "./Functions/ListDatastores";
import { sendMessage } from "./Functions/SendMessage";
import { DataStore } from "./classes/DataStore";

export class Universe
{
    universeId: string;
    apiKey: string

    constructor(universeId: number | string, apiKey: string)
    {
        this.universeId = universeId.toString();
        this.apiKey = apiKey;
    }

    public getDataStore(name: string, scope="global")
    {
        return new DataStore(this.apiKey, this.universeId, name, scope)
    }

    public async listDatastores(prefix="", cursor="", limit=5)
    {
        return await listDatastore(this.apiKey, this.universeId, prefix, cursor, limit)
    }

    public async sendMessage(topic: string, message: string | object)
    {
        return await sendMessage(this.apiKey, this.universeId, topic, message)
    }

    public getOrderedDataStore(name: string)
    {

    }
}