"use strict";
const mongoose = require("mongoose");
const mongoSche = mongoose.Schema({
  name: { type: String },
  slug: { type: String, unique: true },
  image: { type: String },
  price: { type: String },
});
const SchemaData = mongoose.model("collection", mongoSche);
module.exports = SchemaData;
