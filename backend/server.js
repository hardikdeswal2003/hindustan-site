const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ================= MongoDB Connection =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// ================= Product Schema =================
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    brand: String,
    category: String,
    price: Number,     // better as Number for future filters & calculations
    image: String
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

// ================= Routes =================

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend Running Successfully");
});

// Fetch all products
app.get("/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Add new product
app.post("/add-product", async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// ================= Start Server =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
