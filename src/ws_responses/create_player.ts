// import { users } from "../consts/consts";

import WebSocket from "ws";
import { users } from "../consts/consts";
// interface TypePropscreatePlayer {

// }

export function createPlayer(data: any, ws: WebSocket) {
  const response = {
    type: "reg",
    data: {
      name: data.name,
      index: 0,
      error: "error",
      errorText: "",
    },
    id: 0,
  };

  console.log(users);
  //   users.set('name',data.name)

  ws.send(JSON.stringify(response));
}
