/**
 * DBCategory represents how the database stores a Category
 * @type DBCategory
 * @property {string} channel_id
 * @property {string} emote
 * @property {string} guild_id
 * @property {string} id
 * @property {string} name
 */
export type DBCategory = {
    channel_id: string,
    emote: string,
    guild_id: string,
    id: string,
    name: string,
}

/**
 * DBMessage is how the database stores a Message
 * @type DBMessage
 * @property {string} content
 * @property {string} client_id
 * @property {string} is_deleted
 * @property {string} modmail_id
 * @property {string} sender
 * @property {string} thread_id
 */
export type DBMessage = {
    content: string,
    client_id:string,
    is_deleted: boolean,
    modmail_id: number,
    sender: number,
    thread_id: number,
    internal: boolean
}

/**
 * DBThread represents how the database stores a Thread
 * @type DBThread
 */
export type DBThread = {
    author: string,
    channel: string,
    id: string,
    is_active: boolean,
    category: string,
}

/**
 * @type DBMuteStatus
 * @property {number} user_id
 * @property {number} till Unix Epoch in seconds
 * @property {number} category_id
 * @property {string} reason
 */
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
    category: number,
    role_id: number,
    level: string,
}
