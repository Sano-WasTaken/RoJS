import axios from "axios";

const url = "https://apis.roblox.com/datastores"

interface ResponseListDatastores
{
    datastores: {
        name: string,
        createdTime: string
    }[],
    nextPageCursor: string
}

export async function listDatastore(apiKey: string, universeId: string, prefix="", cursor="", limit=5): Promise<ResponseListDatastores> {
    return await axios.get(
        url + `/v1/universes/${universeId}/standard-datastores`,
        {
            headers: {
                "x-api-key": apiKey
            },
            params: {
                cursor: cursor,
                prefix: prefix,
                limit: limit,
            }
        }
    )
}