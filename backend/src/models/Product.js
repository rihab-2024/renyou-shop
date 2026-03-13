const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  category: { type: String },
  tags: [String],
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String },
  images: [String],
  skinTypes: [String],
  ingredients: [String]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);