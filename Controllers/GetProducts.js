const Product = require("../models/Products");
const express = require('express');

const getProducts = async (req, res= express.request) => {
  const products = await Product.find();

  if (products) {
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProducts;