"use strict";
const SchemaData = require("../module/SchemaMod");
const postMethod = async (req, res) => {
  const { name, image, price } = req.body;
  const slug = name.toLowerCase().split(" ").join("-");
  SchemaData.find({ slug: slug }, (error, data) => {
    if (data.length) {
      res.send("data exist");
    } else {
      const newSchema = new SchemaData({
        name: name,
        slug: slug,
        image: image,
        price: price,
      });
      newSchema.save();
      res.send(newSchema);
    }
  });
};

const getFromPost = async (req, res) => {
  SchemaData.find({}, (error, data) => {
    res.send(data);
  });
};
const deleteMethod = async (req, res) => {
  const slug = req.params.slug;
  SchemaData.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      SchemaData.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
const updateMethod = async (req, res) => {
  const { image, price } = req.body;
  const slug = req.params.slug;
  SchemaData.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].image = image;
      data[0].price = price;
      data[0].save();
      res.send(data);
    }
  });
};
module.exports = { postMethod, getFromPost, deleteMethod, updateMethod };
