export type ServerMessage = {
  id: string;
  task: string;
  args: string[];
}

export type ServerResponse = {
  id: string;
  data: any;
}

