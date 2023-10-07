import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const PORT = 8080;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  path: `/ws`,
  addTrailingSlash: false,
  cors: {
    origin:
      process.env.NODE_ENV === "production" ? false : ["http://localhost:5173"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

function emitEvent(event, payload) {
  if (io) {
    io.emit(event, payload);
  } else {
    logger.error("Socket has not been properly initialized");
  }
}

app.get("/", (req, res) => {
  emitEvent('test-socket', req.query)

  return res.status(200).json({ result: 'Message properly sent to the frontend.' });
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
