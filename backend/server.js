const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ================= MongoDB Connection =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

// ================= Product Schema =================
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: String,
  image: String,
  images: [String],
  description: String
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

// ================= Admin Schema =================
const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
}, { timestamps: true });

const Admin = mongoose.model("Admin", AdminSchema);

// ================= ROUTES =================

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

// ================= PRODUCTS =================

// Get all products
app.get("/products", async (req, res) => {
  const data = await Product.find().sort({ createdAt: -1 });
  res.json(data);
});

// Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch {
    res.status(400).json({ message: "Invalid product id" });
  }
});

// ➕ ADD product
app.post("/admin/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to add product" });
  }
});

// ✏️ EDIT product
app.put("/admin/products/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch {
    res.status(500).json({ message: "Failed to update product" });
  }
});

// ❌ DELETE product
app.delete("/admin/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
});
// ================= PRODUCT ROUTES =================
// ================= PRODUCTS =================

// Get all products
app.get("/products", async (req, res) => {
  const data = await Product.find().sort({ createdAt: -1 });
  res.json(data);
});

// Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "Invalid product id" });
  }
});

// Add product
app.post("/admin/products", async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to add product" });
  }
});

// ✅ EDIT product
app.put("/admin/products/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// ✅ DELETE product
app.delete("/admin/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});



// ================= ADMIN LOGIN =================
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

    res.json({ token, email: admin.email });
  } catch (err) {
    console.error("ADMIN LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= Start Server =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
