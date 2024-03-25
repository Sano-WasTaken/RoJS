export interface Creator {
    userId: number,
    groupId: number,
}

export interface CreationContext {
    creator: Creator,
    expectedPrice: number,
}

export interface ModerationResult {
    moderationState: "MODERATION_STATE_REVIEWING" | "MODERATION_STATE_REJECTED" | "MODERATION_STATE_APPROVED"
}

export interface Preview {
    asset: string,
    altText: string,
}

export interface Asset {
    assetType: string,
    assetId: string,
    creationContext: CreationContext,
    description: string,
    displayName: string,
    path: string,
    revisionId: string,
    revisionCreateTime: string,
    moderationResult: ModerationResult,
    icon: string,
    previews: [Preview],
}