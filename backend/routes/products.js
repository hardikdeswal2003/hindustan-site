const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Add Product
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all products OR by category
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let products;
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});
module.exports = router;
// ✅ GET SINGLE PRODUCT BY ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});