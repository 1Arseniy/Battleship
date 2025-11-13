import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from "ws";

import { createPlayer } from "./src/ws_responses/create_player";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  // console.log("Новый клиент подключился!");

  ws.on("message", (message) => {
    try {
      const res = JSON.parse(message.toString());
      const { type, data } = res;

      console.log(type);

      switch (type) {
        case "reg":
          createPlayer(data, ws);
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
