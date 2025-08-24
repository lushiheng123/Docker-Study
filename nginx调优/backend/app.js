import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Server2");
});

app.listen(process.env.PORT||3000, () => {
  console.log("Hello this is my Server2");
});