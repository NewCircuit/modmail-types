export const WORKER_CALLS = {
  getRoles: 'get_member_roles',
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
