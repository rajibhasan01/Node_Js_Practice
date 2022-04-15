import express from "express";
import { filterReq } from "./middleware.js";

const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You are underage");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/user", (req, res) => {
  res.send("Welcome to User Page");
});

app.get("/profile", filterReq, (req, res) => {
  res.send(`Your name is ${req.query.name}`);
});

app.get("*", (_, res) => {
  res.send(`pageNotFound.html`);
});
app.listen(5000);
