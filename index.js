const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
