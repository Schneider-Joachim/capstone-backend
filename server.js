import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.send({input: "output"});
});

server.listen(3001);