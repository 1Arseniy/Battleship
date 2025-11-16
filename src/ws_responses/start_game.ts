import WebSocket from "ws";

export function startGame(data: any, ws: WebSocket) {
  const response = {
    type: "start_game",
    data: {
      ships: [
        {
          position: {
            x: 0,
            y: 0,
          },
          direction: true,
          length: 2,
          type: "small",
        },
      ],
      currentPlayerIndex: 0,
    },
  };

  // const isUser = users.get(data.name);
  // if (!isUser) {

  ws.send(JSON.stringify({ ...response, data: JSON.stringify(response.data) }));
  // }
}
