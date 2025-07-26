import { io } from "socket.io-client";

let socketInstance = null;

export const initSocket = async () => {
  if (socketInstance) {
    return socketInstance; 
  }
  const options = {
    "force new connection": true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ["websocket"]
  };

  const backendURL = import.meta.env.VITE_BACKEND_URL;
 
  console.log("Connecting to backend:", backendURL);

  return io(backendURL, options);
};
