"use strict";

const axios = require("axios");
const ModelApiData = require("../module/ModuleApi");
const getDataApi = async (req, res) => {
  const url = `https://fruit-api-301.herokuapp.com/getFruit`;
  axios.get(url).then((response) => {
    const resData = response.data.fruits.map((item) => {
      return new ModelApiData(item);
    });

    res.send(resData);
  });
};

module.exports = { getDataApi };
