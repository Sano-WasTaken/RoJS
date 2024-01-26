import axios, { AxiosPromise } from "axios"
import { ResponseListInventoryItems } from "../Interfaces/InventoryInterfaces"

const url = "https://apis.roblox.com/cloud"

export async function listInventoryItem(apiKey: string, userId: number, maxPageSize=5, pageToken="", filter=""): AxiosPromise<ResponseListInventoryItems>
{
    return await axios.get(
        url + `/v2/users/${userId}/inventory-items`,
        {
            headers: {
                "x-api-key": apiKey
            },
            params: {
                maxPageSize: maxPageSize,
                pageToken: pageToken,
                filter: filter
            }
        }
    )
}