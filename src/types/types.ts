import WebSocket from "ws";

export interface TypeResponse {
  type: string;
  data: TypeUser;
  id: number;
}

export interface TypeUser {
  name: string;
  password: string;
  ws: WebSocket;
}

type RoomUsers = {
  name: string;
  index: string;
};

export type Room = {
  roomId: string;
  roomUsers: RoomUsers[];
};
export interface TypeUpdateRoom {
  type: "update_room";
  data: Room[];
  id: 0;
}
