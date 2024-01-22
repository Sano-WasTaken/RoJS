import axios from "axios";

const url = "https://apis.roblox.com/messaging-service"

export interface PublishRequest
{
    message: string
}

export async function sendMessage(apiKey: string, universeId: string, topic: string, message: PublishRequest)
{
    return axios.post(
        url + `/v1/universes/${universeId}/topics/${topic}`,
        message,
        {
            "headers": {
               " x-api-key": apiKey
            }
        }
    )
}