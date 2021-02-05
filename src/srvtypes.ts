import { MemberState } from '.';

export const WORKER_CALLS = {
  getRoles: 'get_member_roles',
  getMember: 'get_member_state',
  getAllMembers: 'get_all_member_states',
}

export interface ServerMessage {
  id: string;
  task: string;
  args: any[];
}

export interface ServerResponse {
  id: string;
  data: any;
}

export interface GetRolesReq extends ServerMessage {
  args: [string, string];
}

export interface GetRolesRes extends ServerResponse {
  data: string[];
}

export interface GetMemberStateReq extends ServerMessage {
  args: [string, string];
}

export interface GetMemberStateRes extends ServerResponse {
  data: MemberState;
}

export interface GetAllMemberStatesReq extends ServerMessage {
  args: [string, string?, number?];
}

export interface GetAllMemberStatesRes extends ServerResponse {
  data: MemberState[];
}
