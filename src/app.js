const express = require("express");
const personRoutes = require("./routes/person.routes");

const app = express();
app.use(express.json());
app.use("/", personRoutes);

module.exports = app;
