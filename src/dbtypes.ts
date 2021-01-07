/**
 * DBCategory represents how the database stores a Category
 * @type DBCategory
 * @property {number} channel_id
 * @property {string} emote
 * @property {number} guild_id
 * @property {string} id
 * @property {string} name
 */
export type DBCategory = {
    channel_id: number,
    emote: string,
    guild_id: number,
    id: number,
    name: string,
}

/**
 * DBMessage is how the database stores a Message
 * @type DBMessage
 * @property {string} content
 * @property {number} client_id
 * @property {string} is_deleted
 * @property {number} modmail_id
 * @property {string} sender
 * @property {number} thread_id
 */
export type DBMessage = {
    content: string,
    client_id: number,
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
    id: number,
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
    id: number,
}

export type DBRole = {
    category: number,
    role_id: number,
    level: string,
}
