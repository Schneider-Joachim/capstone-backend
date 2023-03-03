import express from "express";
import cors from "cors";
import { evdb, Make, Model, Drivetrain } from "./evdb/evdb.js";

const server = express();
server.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3002",
      "http://localhost:3002",
      "https://evnowsite.com",
      "https://www.evnowsite.com",
    ],
  })
);
server.use(express.json());

server.get("/", (req, res) => {
  res.send({ input: "output" });
});

server.get("/cars", async (req, res) => {
  res.send({ cars: await Model.findAll({ include: [{ model: Make }] }) });
});

// server

// binds to the correct port that AWS assigns us
let port = 3001;
if (process.env.PORT) {
  port = process.env.PORT;
}

server.listen(port, () => {
  console.log("All Good on 3001!");
});

// server.listen(3001, () => {
//     console.log("All Good on 3001!");
// });
