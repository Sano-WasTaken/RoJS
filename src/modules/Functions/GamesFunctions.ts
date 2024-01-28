import axios, { AxiosPromise } from "axios";
import { ResponseGetGroupsGames, ResponseGetUniverseIdsInformation } from "../Interfaces/MediaInterfaces";

const url = "https://games.roblox.com"

export async function getUniverseInformations(universeId: number): AxiosPromise<ResponseGetUniverseIdsInformation>
{
    return await axios.get(
        url + `/v1/games`,
        {
            params: {
                universeIds: universeId
            }
        }
    )
}

export async function getCreatedGroupGames(groupId: string, accessFilter: number, limit: number, cursor: string, sortOrder="Asc"): AxiosPromise<ResponseGetGroupsGames>
{
    return await axios.get(
        url + `/v2/groups/${groupId}/gamesV2`,
        {
            params: {
                accessFilter: accessFilter,
                limit: limit,
                cursor: cursor,
                sortOrder: sortOrder
            }
        }
    )
}