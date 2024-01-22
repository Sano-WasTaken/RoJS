import axios, { AxiosPromise } from "axios";
import CryptoJS = require("crypto-js");

const url = "https://apis.roblox.com/datastores"

interface ResponseSetEntry
{
    version: string,
    deleted: boolean,
    contentLength: number,
    createdTime: string,
    objectCreatedTime: string,
}

interface ResponseListEntries
{
    keys: string[],
    nextPageCursor: string
}

interface ResponseEntry
{
    "content-md5": string,
    "roblox-entry-version": string,
    "roblox-entry-created-time": string,
    "roblox-entry-version-created-time": string,
    "roblox-entry-userids": number[]
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

    public async listEntries(prefix="", limit=5, cursor="", allScope=false): AxiosPromise<ResponseListEntries>
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

    public async getEntry(key: string): AxiosPromise<ResponseEntry>
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

    public async setEntry(key: string, data: any | object, exclusiveCreate=false): AxiosPromise<ResponseSetEntry>
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

    public async incrementEntry(key: string, increment: number): AxiosPromise<ResponseEntry>
    {
        return await axios.post(
            url + `/v1/universes/${this.universeId}/standard-datastores/datastore/entries/entry/increment`,
            increment.toString(),
            {
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    datastoreName: this.name,
                    entryKey: key,
                    incrementBy: increment.toString(),
                    scope: this.scope,
                }
            }
        )
    }

    public async getEntryVersion(key: string, versionId: string): AxiosPromise<ResponseEntry>
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

    public async listEntryVersions(key: string, limit=5, sortOrder?: "asc"|"des", cursor=""): AxiosPromise<ResponseSetEntry[]>
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