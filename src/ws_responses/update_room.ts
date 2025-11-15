// import { rooms } from "../consts/consts";
// import {randomUUID} from 'crypto'

import WebSocket from "ws";

export function updateRoom(data: any, ws: WebSocket, roomId?: string) {
  const response = {
    type: "update_room",
    data: [
      {
        roomId: roomId || 0,
        roomUsers: [
          {
            name: data.name,
            index: 0,
          },
        ],
      },
    ],
    id: 0,
  };
  ws.send(JSON.stringify({ ...response, data: JSON.stringify(response.data) }));
}
