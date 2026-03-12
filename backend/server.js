import express from "express";

const app = express();
const PORT = 5000;

// Exemple data produits
const products = [
  {
    _id: "1",
    name: "CeraVe Cleanser",
    brand: "CeraVe",
    price: 12.99,
    category: "Cleanser",
    image: "https://via.placeholder.com/150"
  },
  {
    _id: "2",
    name: "La Roche-Posay Sunscreen",
    brand: "LRP",
    price: 18.50,
    category: "Sunscreen",
    image: "https://via.placeholder.com/150"
  }
];

// Endpoint GET /api/products
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});