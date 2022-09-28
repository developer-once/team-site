const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.static("./dist"));

const point = 8080;
app.listen(point);