const Cart = require("../models/Cart");
const express = require('express');

const getProductsCart = async (req, res= express.request) => {
  const productsCart = await Cart.find();

  if (productsCart) {
    res.json({ productsCart });
  } else {
    res.json({ mensaje: "No hay productos en el carrito" });
  }
};

module.exports = getProductsCart;