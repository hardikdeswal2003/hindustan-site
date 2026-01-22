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
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));


// ================= Product Schema =================
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: String,
  image: String
});

const Product = mongoose.model("Product", ProductSchema);


// ================= Routes =================

// Just test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Fetch products
app.get("/products", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

// Add product
app.post("/add-product", async (req, res) => {
  const result = await Product.create(req.body);
  res.json(result);
});


// ================= Start Server =================
app.listen(5000, () => console.log("Server running on port 5000"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));