/**
 * Inspired from https://www.youtube.com/watch?v=CnH3kAXSrmU
 */

import express from "express";

const port = 5000;
const app = express();

app.use(express.json()); // Able to send JSON data
app.use(express.urlencoded({ extended: true })); // Able to send form data

// Health check
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Hello World from API",
  });
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
