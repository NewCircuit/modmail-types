/**
 * These are ALL the types that exist in the Modmail ecosystem
 */
export * from './dbtypes';

/**
 * @enum FileType
 * File - Any other file.
 * Image - An image representive file.
 */
export enum FileType {
    File,
    Image,
}

/**
 * @type Attachment
 * @property {number} id
 * @property {string} name File name.
 * @property {number} sender
 * @property {string} source Discord CDN link.
 * @property {FileType} type
 */
export type Attachment = {
    id: number,
    name: string,
    sender: number
    source: string,
    type: FileType,
}

/**
 * @type Category
 * @property {string} emojiID The user will react with this emoji to talk in
 * that category.
 * @property {number} guildID The guild this category represents.
 * @property {number} id
 * @property {boolean} isActive Whether the category is active or not.
 * (basically if it's needed or not).
 */
export type Category = {
    name: string,
    emojiID: string,
    guildID: number,
    id: number,
    isActive: boolean,
    channelID: number,
}

/**
 * @type Edit
 * @property {string} content
 * @property {number} message The message in context.
 * @property {number} version An integer representing the version edit. Edits
 * will sit in an array and the biggest integer version is the latest edit.
 */
export type Edit = {
    content: string,
    message: number,
    version: number,
}

/**
 * @type Message
 * @property {string} content Body of the message, possibly empty.
 * @property {number} clientID The message that the user sent.
 * @property {Edit[]} edits The last edit_num is the last result of content.
 * @property {Attachment[]} files Files attached with the message.
 * @property {boolean} isDeleted
 * @property {number} modmailID Message sent by modmail for the user.
 * @property {number} sender
 */
export type Message = {
    content: string,
    clientID: number | null,
    edits: Edit[],
    files: Attachment[],
    isDeleted: boolean,
    modmailID: number,
    sender: number,
    threadID: number,
    internal: boolean
}

/**
 * @type ModmailUser
 * @property {number} id The user's Discord user ID.
 * @property {Thread[]} threads The threads the user participated in.
 */
export type ModmailUser = {
    id: number,
}

/**
 * @type Thread
 * @property {ModmailUser} author Participants of the thread.
 * @property {number} channel
 * @property {number} id
 * @property {boolean} isActive
 * @property {Message[]} messages
 * @property {number} The thread category
 */
export type Thread = {
    author: ModmailUser,
    channel: number,
    id: number,
    isActive: boolean,
    messages: Message[],
    category: number,
}

/**
 * @type MuteStatus
 * @property {number} user
 * @property {number} till Unix Epoch in seconds
 * @property {number} category
 * @property {string} reason
 */
export type MuteStatus = {
    user: number,
    till: number,
    category: number,
    reason: string,
}

export type StandardReply = {
    reply: string,
    name: string,
    id: string,
}

export enum RoleLevel {
    Admin,
    Mod,
}

export type Role = {
    category: number,
    roleID: number,
    level: RoleLevel,
}
