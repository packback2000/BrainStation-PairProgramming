const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "*" }));

const searchRoutes = require('./routes/searchRoutes');

app.use(cors({ origin: "*" }));
app.use('/search', searchRoutes)

app.listen(8080, function () {
  console.log("Server running on port 8080");
});

console.log(`ENV: ${process.env}`);

