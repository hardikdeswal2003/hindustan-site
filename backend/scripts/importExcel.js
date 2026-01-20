const xlsx = require("xlsx");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: "../.env" });

const Product = require("../models/Product");

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Mongo error:", err));

// ✅ Absolute path of products.xlsx
const filePath = path.join(__dirname, "products.xlsx");

async function importExcel() {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const products = data.map(item => ({
      category: item.category?.trim(),
      brand: item.brand?.trim(),
      name: item.name?.trim(),
      model: item.model,

      marketPrice: item.marketPrice,
      mrp: item.mrp,

      description: item.description,

      images: [
        item.image1,
        item.image2,
        item.image3,
        item.image4
      ].filter(Boolean),

      inStock: true,
      priority: item.priority || 0
    }));

    // ✅ DELETE OLD PRODUCTS FIRST
    await Product.deleteMany({});
    console.log("🗑️ Old products deleted");

    // ✅ INSERT NEW PRODUCTS
    await Product.insertMany(products);
    console.log("🎉 Products imported successfully:", products.length);

    process.exit();

  } catch (err) {
    console.log("❌ Import failed:", err.message);
    process.exit();
  }
}

importExcel();