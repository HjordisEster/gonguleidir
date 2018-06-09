import express from "express";
import birds from "./birds";

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/about", (req, res) => res.send("about"));

app.use("/birds", birds);

app.get("/walks/:id(d+)", (req, res) => {
  console.log(req.params);
  res.send(req.params.id);
});

let logHandler = (req, res, next) => {
  console.log("the response will be sent by the next function ...");
  next();
};

let responseHandler = (req, res) => {
  res.json('{"name": "responseHandler"}');
};

app.get("/example/b", [logHandler, responseHandler]);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
