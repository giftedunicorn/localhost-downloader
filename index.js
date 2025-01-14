const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Serve static files from 'public' directory
app.use(express.static("public"));

// Download route
app.get("/download/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "public", filename);

  res.download(filePath, (err) => {
    if (err) {
      console.error("Download error:", err);
      // Check if headers are already sent
      if (!res.headersSent) {
        res.status(404).send("File not found");
      }
    }
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
