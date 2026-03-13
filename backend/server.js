const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // pour parser JSON
app.use(cors());         // pour autoriser requêtes cross-origin
app.use(morgan("dev"));  // pour logger les requêtes

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});