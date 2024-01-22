import axios from "axios";

const url = "https://apis.roblox.com/datastores"

interface ResponseListEntryVersions
{
    version: string,
    deleted: boolean,
    contentLength: number,
    createdTime: string,
    objectCreatedTime: string,
}

export class DataStore
{
    apiKey: string;
    universeId: string;
    name: string;
    scope: string

    constructor(apiKey: string, universeId: string, name: string, scope: string)
    {
        this.apiKey = apiKey;
        this.universeId = universeId;
        this.name = name;
        this.scope = scope;
    }

    public async listEntries(prefix="", limit=5, cursor="", allScope=false)
    {
        return await axios.get(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries`,
            {
                headers: {
                    "x-api-key": this.apiKey
                },
                params: {
                    datastoreName: this.name,
                    prefix: prefix,
                    limit: limit,
                    cursor: cursor,
                    allScope: allScope,
                    scope: this.scope,
                }
            }
        )
    }

    public async getEntry(key: string)
    {
        return await axios.get(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry`,
            {
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    scope: this.scope,
                }
            }
        )
    }

    public async setEntry(key: string, data: string | object, exclusiveCreate=false)
    {
        return await axios.post(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry`,
            JSON.stringify(data),
            {
                headers: {
                    "x-api-key": this.apiKey,
                    "content-md5": CryptoJS.MD5(JSON.stringify(data)).toString(CryptoJS.enc.Base64),
                    "content-type": "application/json",
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    scope: this.scope,
                    exclusiveCreate: exclusiveCreate,
                }
            }
        )
    }

    public async deleteEntry(key: string)
    {
        return await axios.delete(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry`,
            {
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    scope: this.scope,
                }
            }
        )
    }

    public async incrementEntry(key: string, increment: number)
    {
        return await axios.post(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry/increment`,
            increment,
            {
                headers: {
                    "x-api-key": this.apiKey,
                    "content-lenght": 0,
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    incrementBy: increment,
                    scope: this.scope,
                }
            }
        )
    }

    public async getEntryVersion(key: string, versionId: string)
    {
        return await axios.get(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry/versions/version`,
            {
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    versionId: versionId,
                    scope: this.scope,
                }
            }
        )
    }

    public async listEntryVersions(key: string, limit=5, sortOrder?: "asc"|"des", cursor=""): Promise<ResponseListEntryVersions[]>
    {
        return await axios.get(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry/versions`,
            {
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    limit: limit,
                    scope: this.scope,
                    sortOrder: sortOrder,
                    cursor: cursor
                }
            }
        )
    }
}