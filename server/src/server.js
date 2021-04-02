"use strict";

const express = require("express");
const cors = require("cors"); //added
const app = express();
app.use(cors()); //added
app.use(express.json()); //added

const PORT = process.env.PORT;
const Data = require("./data.js");


app.use(express.urlencoded({ extended: true }));

app.get("/items", Data.getAllItems);//added data
app.get("/items/:id", Data.getOneItem);
app.delete("/items/:id", Data.deleteOneItem);
app.post("/items", Data.addAnItem);
app.put("items/:id", Data.updateOneItem); //added

app.use("*", (req, res) => {
  res.status(404).send("These are not the apples you are looking for.");
});

app.use((error, req, res, next) => {
  res.status(500).send(`My Bad ... ${error.message}`);
});

app.get("/", (req, res) => {
  res.send("proof of life");
});

app.listen(PORT, () => console.log(`i hope the server is up on ${PORT}`));

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, console.log(`Server is up and running on port: ${port}`));
  },
};
