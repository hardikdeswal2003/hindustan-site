const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    model: { type: String },

    marketPrice: { type: Number },
    mrp: { type: Number },

    description: { type: String },

    images: [String],

    inStock: { type: Boolean, default: true },
    priority: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);