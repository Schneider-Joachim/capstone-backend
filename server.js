import express from "express";
import cors from "cors";

const server = express();
server.search(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({input: "output"});
});

server.listen(3001);