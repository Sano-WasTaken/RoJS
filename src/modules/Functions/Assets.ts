import axios from "axios"

const url = "https://apis.roblox.com/assets"

export async function GetAsset(apiKey: string, assetId: number, readMask="") {
    return await axios.get(
        url + `/v1/assets${assetId}`,
        {
            headers: {
                "x-api-key": apiKey
            },
            params: {
                "read_mask": readMask
            }
        }
    )
}

export async function CreateAsset(apiKey: string, asset: File, ownerId: number, assetType: string, contentType: string, displayName: string, description="") {
    const form = `fileContent=@"/filepath/${asset}";type=${contentType}`

    return await axios.post(
        url + "/v1/assets",
        form,
        {
            headers: {
                "x-api-key": apiKey
            },
            params: {
                "assetType": assetType,  
                "displayName": displayName, 
                "description": description, 
                "creationContext": { 
                    "creator": { 
                        "userId": ownerId
                    }
                }
            }
        }
    )
}