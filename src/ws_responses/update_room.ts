import type { TypeUser } from "../types/types";

export function updateRoom(room: any, users: Map<string, TypeUser>) {
  for (const user of users.values()) {
    user.ws.send(JSON.stringify({ ...room, data: JSON.stringify(room.data) }));
  }
}
