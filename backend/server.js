const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("./models/Admin");

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
// TEST
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

// GET ALL PRODUCTS
app.get("/products", async (req, res) => {
  ...
});

// GET PRODUCT BY ID
app.get("/products/:id", async (req, res) => {
  ...
});

// ADD PRODUCT
app.post("/add-product", async (req, res) => {
  ...
});

// 👉 ADD THIS BELOW (order doesn’t matter among routes)

app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET || "hindustan_secret",
      { expiresIn: "7d" }
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ================= Start Server =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
// Get single product by ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid product ID" });
  }
});
