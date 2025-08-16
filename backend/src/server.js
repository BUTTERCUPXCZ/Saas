import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET","POST"],
    }
});
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`); 
    
  socket.on("message", (data) => {
  socket.broadcast.emit("recieved_message", data);
  });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});