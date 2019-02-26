const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, JumpStarters!"));

module.exports = app;
