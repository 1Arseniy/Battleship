import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from "ws";
import { randomUUID } from "crypto";

import { createPlayer } from "./src/ws_responses/create_player";
import { createGame } from "./src/ws_responses/create_game";
import { updateRoom } from "./src/ws_responses/update_room";
import { startGame } from "./src/ws_responses/start_game";
import { users, room } from "./src/consts/consts";

import type { TypeResponse } from "./src/types/types";
// import { rooms } from "./src/consts/consts";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  // console.log("Новый клиент подключился!");

  ws.on("message", (message) => {
    try {
      const res: TypeResponse = JSON.parse(message.toString());

      const { type, data } = res;

      console.log(type, data);

      switch (type) {
        case "reg":
          // const data = JSON.parse(message)
          createPlayer(data, ws);
          updateRoom(room, users);
          // updateRoom(data, ws, roomId);
          break;
        case "create_room":
          room.data.push({
            roomId: randomUUID(),
            roomUsers: [{ name: data.name, index: randomUUID() }],
          });
          updateRoom(room, users);

          break;
        case "add_user_to_room":
          updateRoom(room, users);
          // const room1 = rooms.get(data.indexRoom);

          // room1?.players.push(ws);

          // room1?.players.forEach((ws) => {
          //   updateRoom(data, ws, data.indexRoom);
          // });
          // rooms.delete(data.indexRoom);
          // const room = rooms.get(roomId);

          break;
        case "add_ships":
          startGame();
          break;
        case "create_game":
          createGame(data, ws);
          break;
        default:
          console.log("type incorrect");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  });

  ws.on("close", () => {
    console.log("disconnected");
  });

  ws.on("error", (err) => {
    console.error(err);
  });
});
