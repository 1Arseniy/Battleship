import { users } from "../consts/consts";

import WebSocket from "ws";
// import { users } from "../consts/consts";
// interface TypePropscreatePlayer {

// }

export function createPlayer(data: any, ws: WebSocket) {
  const response = {
    type: "reg",
    data: {
      name: data.name,
      index: 1,
      error: false,
      errorText: "",
    },
    id: 0,
  };

  console.log(users);

  // const isUser = users.get(data.name);
  // if (!isUser) {
  users.set(data.name, { name: data.name, password: data.password, ws });

  ws.send(JSON.stringify({ ...response, data: JSON.stringify(response.data) }));
  // }
}
