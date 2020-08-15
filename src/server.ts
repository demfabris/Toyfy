import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ msg: "hello world 2" });
});

app.listen(5000);
