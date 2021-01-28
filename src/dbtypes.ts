export type DBCategory = {
    is_active: boolean,
    channel_id: number,
    emote: string,
    guild_id: number,
    id: number,
    name: string,
}

export type DBMessage = {
    content: string,
    client_id: number | null,
    is_deleted: boolean,
    modmail_id: number,
    sender: number,
    thread_id: number,
    internal: boolean
}

export type DBThread = {
    author: string,
    channel: number,
    id: number,
    is_active: boolean,
    category: number,
}

export type DBMuteStatus = {
    user_id: number,
    till: number,
    category_id: number,
    reason: string,
}

export type DBStandardReply = {
    reply: string,
    name: string,
    id: bigint,
}

export type DBRole = {
    category_id: number,
    role_id: number,
    level: string,
}
