import socketio from "socket.io-client";
import React from "react";

export const socket = socketio.connect("https://edgeserver.herokuapp.com/");
export const SocketContext = React.createContext();