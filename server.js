const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors()); // after you initialize your express app instance
require("dotenv").config();
const axios = require("axios"); // require the package
app.use(express.json());
const PORT = process.env.PORT;
const { getDataApi } = require("./controllers/apiCon");
const {
  postMethod,
  getFromPost,
  deleteMethod,
  updateMethod,
} = require("./controllers/CurdCont");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://raneem:0000@cluster0-shard-00-00.ivvf0.mongodb.net:27017,cluster0-shard-00-01.ivvf0.mongodb.net:27017,cluster0-shard-00-02.ivvf0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-khqokz-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  res.send("test");
});
app.post("/postMethod", postMethod);
app.get("/getpost", getFromPost);
app.delete("/delete:slug", deleteMethod);
app.put("/updatadata:slug", updateMethod);
app.get("/getapidata", getDataApi);
app.listen(PORT, (req, res) => {
  console.log(`listen ${PORT}`);
});
