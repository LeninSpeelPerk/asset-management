const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config");
const path = require("path"); // Import the path module
const employeeRoutes = require("./routes/employee");
const assetRoutes = require("./routes/asset");
const assetCategoryRoutes = require("./routes/assetCategory"); // Import assetCategoryRoutes
const stockRoutes = require("./routes/stock");
const issueAssetRoutes = require("./routes/issueAssetRoutes");
const returnAssetRoutes = require("./routes/returnAssetRoutes");
const scrappedAssetRoutes = require("./routes/scrappedAssetRoutes"); // Import scrappedAssetRoutes
const assetHistoryRoutes = require("./routes/assetHistoryRoutes"); // Import scrappedAssetRoutes

const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = process.env.PORT || 3001; // Change the port to 3001 or any other available port

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the views directory to the "views" directory
app.set("views", path.join(__dirname, "views"));

// Set Pug as the view engine
app.set("view engine", "pug");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("layout"); // Render the "layout.pug" file located in the "views" directory
});

// app.get("/issue", (req, res) => {
//   res.render("issueAsset"); // Render the "layout.pug" file located in the "views" directory
// });

app.use("/employees", employeeRoutes);
app.use("/assets", assetRoutes);
app.use("/assetCategories", assetCategoryRoutes); // Use assetCategoryRoutes
app.use("/stocks", stockRoutes); // Use assetCategoryRoutes
app.use("/issueAsset", issueAssetRoutes); // Use issueAssetRoutes
app.use("/returnAsset", returnAssetRoutes); // Use issueAssetRoutes
app.use("/scrappedAsset", scrappedAssetRoutes); // Use scrappedAssetRoutes
app.use("/assetHistory", assetHistoryRoutes); // Use scrappedAssetRoutes

db.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
