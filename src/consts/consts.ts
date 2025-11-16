import WebSocket from "ws";
import type { TypeUser, TypeUpdateRoom } from "../types/types";

export const users = new Map<string, TypeUser>();

export const rooms = new Map<string, { players: WebSocket[] }>();

export const room: TypeUpdateRoom = {
  type: "update_room",
  data: [],
  id: 0,
};
