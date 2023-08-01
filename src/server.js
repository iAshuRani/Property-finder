// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3001; // Change this port number as needed
const mongoURI = "mongodb://localhost:27017/your_database_name"; // Replace 'your_database_name' with your MongoDB database name

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Your routes and API endpoints can be defined here.

// Sample route
app.get("/api/data", (req, res) => {
  // Replace this with your actual backend logic to fetch data from the database
  const data = { message: "Hello from the backend!" };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
