export interface Media
{
    "assetTypeId": number,
    "assetType": string,
    "imageId": number,
    "videoHash": string,
    "videoTitle": string,
    "approuved": boolean,
    "altText": string,
}

export interface Creator
{
    "id": number,
    "name": string,
    "type": string,
    "isRNVAccount": boolean,
    "hasVerifiedBadge": boolean
}

export interface UniverseIdsInformation
{
    "id": number,
    "rootPlaceId": string,
    "name": string,
    "description": string,
    "sourceName": string,
    "sourceDescription": string,
    "creator": Creator,
    "price": number,
    "allowedGearCategories": undefined[],
    "isGenreEnforced": boolean,
    "copyingAllowed": boolean,
    "playing": number,
    "visits": number,
    "maxPlayers": number,
    "created": string,
    "updated": string,
    "studioAccessToApisAllowed": boolean,
    "createVipServersAllowed": boolean,
    "universeAvatarType": string,
    "genre": string,
    "isAllGenre": boolean,
    "isFavoritedByUser": boolean,
    "favoriteByUserCount": 0
}

export interface ResponseGetUniverseIdsInformation
{
    "data": UniverseIdsInformation[]
}

export interface ResponseGetGroupsGames
{
    "previousPageCursor": string,
    "nextPageCursor": string,
    "data": [
        {
            "id": number,
            "name": string,
            "description": string,
            "creator": {
                "id": number,
                "type": number,
                "name": string
            },
            "rootPlace": {
                "id": number,
                "type": number,
                "name": string
            },
            "created": string,
            "updated": string,
            "placeVisits": number
        }
    ]
}