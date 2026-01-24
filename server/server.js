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
});

const Product = mongoose.model("Product", ProductSchema);

// ================= Admin Schema =================
const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

const Admin = mongoose.model("Admin", AdminSchema);

// ================= Routes =================

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Fetch products
app.get("/products", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

// Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ message: "Product not found" });
  }
});

// Add product (admin later)
app.post("/add-product", async (req, res) => {
  const result = await Product.create(req.body);
  res.json(result);
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

    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= Start Server =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
