import express from "express";
import cors from "cors";
import { evdb } from "./evdb/evdb.js";

const server = express();
server.search(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({input: "output"});
});

server.listen(3001, () => {
    console.log("All Good on 3001!");
});