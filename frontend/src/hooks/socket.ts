import { useEffect, useState, useCallback } from "react";
import { type Socket, io } from "socket.io-client";

const path = `/ws/socket.io`;
const url = "http://localhost:8080";

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isInitialized, setInitialized] = useState(false);

  const initializeSocket = useCallback(() => {
    if (socket && !isInitialized) {
      socket.on("connect", () => {
        console.log("Socket connected successfully with ID: ", socket.id);
        setInitialized(true);
      });

      socket.on("connect_error", (error) => {
        console.error("Socket connection error:  ", error);
      });

      socket.on('test-socket', data => {
        alert(JSON.stringify(data, null, 2))
      })
    }
  }, [socket, isInitialized]);

  useEffect(() => {
    if (!socket) {
      const socketIO = io(url, { path });

      setSocket(socketIO);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized && socket) initializeSocket();
  });
};

export default useSocket;
