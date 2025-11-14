import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from "ws";

import { createPlayer } from "./src/ws_responses/create_player";

import type { TypeResponse } from "./src/types/types";

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
          break;
        case "create_game":
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
