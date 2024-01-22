import axios, { AxiosPromise, all } from "axios";

const url = "https://apis.roblox.com/ordered-data-stores"

interface Entry
{
    path: string,
    id: string,
    value: number,
}

interface CreateEntryRequest
{
    value: number
}

interface ListEntriesResponse
{
    entries: Entry[],
    nextPageToken: string
}

interface UpdateEntryRequest
{
    value: number
}

interface IncrementEntryRequest
{
    amount: number
}

export class getOrderedDataStore
{
    apiKey: string;
    universeId: string;
    name: string;
    scope: string;

    constructor(apiKey: string, universeId: string, name: string, scope="global")
    {
        this.apiKey = apiKey;
        this.universeId = universeId;
        this.name = name
        this.scope = scope;
    }

    public async list(pageSize=10, pageToken="", orderBy="desc", filter?: Entry): AxiosPromise<ListEntriesResponse>
    {
        return await axios.get(
            url + `/v1/universes/${this.universeId}/orderedDataStores/${this.name}/scopes/${this.scope}/entries`,
            {
                headers: {
                    "x-api-key": this.apiKey
                },
                params: {
                    max_page_size: pageSize,
                    page_token: pageToken,
                    order_by: orderBy,
                    filter: filter
                }
            }
        )
    }

    public async create(entry: string, data: CreateEntryRequest): AxiosPromise<Entry>
    {
        return await axios.post(
            url + `/v1/universes/${this.universeId}/orderedDataStores/${this.name}/scopes/${this.scope}/entries`,
            JSON.stringify(data),
            {
                headers: {
                    "x-api-key": this.apiKey,
                    "content-type": "application/json"
                },
                params: {
                    id: entry,
                }
            }   
        )
    }

    public async get(entry: string): AxiosPromise<Entry>
    {
        return await axios.get(
            url + `/v1/universes/${this.universeId}/orderedDataStores/${this.name}/scopes/${this.scope}/entries/${entry}`,
            {
                headers: {
                    "x-api-key": this.apiKey,
                }
            }
        )
        
    }

    public async delete(entry: string)
    {
        return await axios.delete(
            url + `/v1/universes/${this.universeId}/orderedDataStores/${this.name}/scopes/${this.scope}/entries/${entry}`,
            {
                headers: {
                    "x-api-key": this.apiKey,
                }
            }
        )
    }

    public async update(entry: string, data: UpdateEntryRequest, allowMissingEntry=true): AxiosPromise<Entry>
    {
        return axios.patch(
            url + `/v1/universes/${this.universeId}/orderedDataStores/${this.name}/scopes/${this.scope}/entries/${entry}`,
            JSON.stringify(data),
            {
                headers: {
                    "x-api-key": this.apiKey,
                    "content-type": "application/json",
                },
                params: {
                    allow_missing: allowMissingEntry
                }
            }
        )
    }

    public async increment(entry: string, increment: IncrementEntryRequest): AxiosPromise<Entry>
    {
        return await axios.post(
            url + `/v1/universes/${this.universeId}/orderedDataStores/${this.name}/scopes/${this.scope}/entries/${entry}:increment`,
            JSON.stringify(increment),
            {
                headers: {
                    "x-api-key": this.apiKey,
                    "content-type": "application/json",
                },
            }
        )
    }
}