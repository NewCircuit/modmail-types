/**
 * These are ALL the types that exist in the Modmail ecosystem
 */
export * from './server-types';
export * from './worker-types';

export enum FileType {
  File,
  Image,
}

export type Attachment = {
  id: string,
  name: string,
  sender: string,
  source: string,
  type: FileType,
}

export type Category = {
  name: string,
  emojiID: string,
  description: string,
  guildID: string,
  id: string,
  isActive: boolean,
  channelID: string | null,
}

export type Edit = {
  content: string,
  message: string,
  version: number,
}

export type Message = {
  content: string,
  clientID: string | null,
  edits: Edit[],
  files: Attachment[],
  isDeleted: boolean,
  modmailID: string,
  sender: string,
  threadID: string,
  internal: boolean
}

export type ModmailUser = {
  id: string,
}

export interface UserState extends ModmailUser {
  avatarURL: string,
  discriminator: string,
  id: string,
  username: string,
}

export interface MemberState extends UserState {
  nickname: string,
  role: string,
}

export type Thread = {
  author: ModmailUser,
  channel: string,
  id: string,
  isActive: boolean,
  messages: Message[],
  category: string,
}

export type MuteStatus = {
  user: string,
  till: number,
  category: string,
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
  category: string,
  roleID: string,
  level: RoleLevel,
}
