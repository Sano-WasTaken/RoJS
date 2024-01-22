import axios from "axios";

const url = "https://apis.roblox.com/messaging-service"

export async function sendMessage(apiKey: string, universeId: string, topic: string, message: string | object)
{
    return axios.post(
        url + `/v1/universes/${universeId}/topics/${topic}`,
        {
            "message": message
        },
        {
            "headers": {
               " x-api-key": apiKey
            }
        }
    )
}