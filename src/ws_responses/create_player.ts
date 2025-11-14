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

  users.set("name", data.name);
  // users.set('name',data.pa)

  // console.log(
  //   "1",
  //   JSON.stringify({ ...response, data: JSON.stringify(response.data) })
  // );
  // console.log("1", JSON.stringify(response));

  ws.send(JSON.stringify({ ...response, data: JSON.stringify(response.data) }));
}
