import axios, { AxiosPromise } from "axios";
import { ResponseGetGroup, ResponseListGroupMemberships, ResponseListGroupRoles } from "../Interfaces/GroupInterfaces";
import { ResponseGetGroupsGames } from "../Interfaces/MediaInterfaces";

const url = "https://apis.roblox.com/cloud"

export async function getGroup(apiKey: string, groupId: number): AxiosPromise<ResponseGetGroup>
{
    return await axios.get(
        url + `/v2/groups/${groupId}`,
        {
            headers: {
                "x-api-key": apiKey,
            }
        }
    )
}

export async function listGroupRoles(apiKey: string, groupId: number, maxPageSize=10, pageToken=""): AxiosPromise<ResponseListGroupRoles>
{
    return await axios.get(
        url + `/v2/groups/${groupId}/roles`,
        {
            headers: {
                "x-api-key": apiKey,
            },
            params: {
                maxPageSize: maxPageSize,
                pageToken: pageToken
            }
        }
    )
}

export async function listGroupMemberships(apiKey: string, groupId: number, maxPageSize=10, pageToken="", filter=""): AxiosPromise<ResponseListGroupMemberships>
{
    return await axios.get(
        url + `/v2/groups/${groupId}/memberships`,
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

export async function getCreatedGroupGames(groupId: string, accessFilter: number, limit: number, cursor: string, sortOrder="Asc"): AxiosPromise<ResponseGetGroupsGames>
{
    return await axios.get(
        `https://games.roblox.com/v2/groups/${groupId}/gamesV2`,
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