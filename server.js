const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
