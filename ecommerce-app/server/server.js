require("dotenv").config();

const http =
  require("http");

const { Server } =
  require("socket.io");

const app =
  require("./app");
const connectDB =
  require("./config/db");

connectDB();

const server =
  http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on(
  "connection",
  (socket) => {
    console.log(
      "Client connected"
    );

    socket.on(
      "chat-message",
      (data) => {
        io.emit(
          "chat-message",
          data
        );
      }
    );

    socket.on(
      "disconnect",
      () => {
        console.log(
          "Disconnected"
        );
      }
    );
  }
);

server.listen(
  process.env.PORT,
  () =>
    console.log(
      "Server running"
    )
);