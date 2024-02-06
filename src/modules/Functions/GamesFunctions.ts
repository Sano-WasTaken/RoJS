import axios, { AxiosPromise } from "axios";
import { ResponseGetUniverseIdsInformation } from "../Interfaces/MediaInterfaces";

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