require("dotenv").config();

const express = require("express");
const PORT = 3000;


const app = express();
const path = require("path");
const apiRoutes = require("./apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// route to api
app.use("/apiRoutes", apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
