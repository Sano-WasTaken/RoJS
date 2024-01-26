import { InstanceState, InventoryItemAssetType } from "../Enums/InventoryEnums"

export interface InventoryItem{
    "path": string,
    "assetDetails": {
        "assetId": string,
        "inventoryItemAssetType": InventoryItemAssetType,
        "instanceId": string,
        "collectibleDetails": {
            "itemId": string,
            "instanceId": string,
            "instanceState": InstanceState,
            "serialNumber": number,    
        }
    }
}

export interface ResponseListInventoryItems
{
    "inventoryItems": InventoryItem[],
    "nextPageToken": string
}