export interface ResponseGetGroup
{
    "path": string,
    "createdTime": string,
    "updateTime": string,
    "id": string,
    "displayName": string,
    "description": string,
    "owner": string,
    "memberCount": number,
    "publicEntryAllowed": boolean,
    "locked": boolean,
    "verified": boolean
}

export interface GroupRoles
{
    "path": string,
    "createTime": string,
    "updateTime": string,
    "id": string,
    "displayName": string,
    "description": string,
    "rank": number,
    "memberCount": number,
    "permissions": {
        "viewWallPosts": boolean,
        "createWallPosts": boolean,
        "deleteWallPosts": boolean,
        "viewGroupShout": boolean,
        "createGroupShout": boolean,
        "changeRank": boolean,
        "acceptRequests": boolean,
        "exileMembers": boolean,
        "manageRelationships": boolean,
        "viewAuditLog": boolean,
        "spendGroupFunds": boolean,
        "advertiseGroup": boolean,
        "createAvatarItems": boolean,
        "manageAvatarItems": boolean,
        "manageGroupUniverses": boolean,
        "viewUniverseAnalytics": boolean,
        "createApiKeys": boolean,
        "manageApiKeys": boolean
    }
}

export interface ResponseListGroupRoles
{
    "groupRoles": GroupRoles[]
    "nextPageToken": string
}

export interface GroupMember
{
    "path": string,
    "createTime": string,
    "updateTime": string,
    "user": string,
    "role": string,
}

export interface ResponseListGroupMemberships
{
    "groupMemberships": GroupMember[],
    "nextPageToken": string
}