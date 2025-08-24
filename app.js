import express from "express";

import cors from "cors";

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json([
    { id: "1", title: "Book Review: The Bear & The Nightingale" },
    { id: "2", title: "Game Review" },
    { id: "3", title: "show Review" },
  ]);
});
app.listen(4000, () => {
  console.log("Server is running!");
});
