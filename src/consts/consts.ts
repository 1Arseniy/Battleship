import WebSocket from "ws";

export const users = new Map<string, string>();

export const rooms = new Map<string, { players: WebSocket[] }>();
