// // index.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const db = require("../config");
// const employeeRoutes = require("../routes/employee");
// // const assetRoutes = require("./routes/asset");
// // const assetCategoryRoutes = require("./routes/assetCategory");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/employees", employeeRoutes);
// app.use("/assets", assetRoutes);
// // app.use("/assetCategories", assetCategoryRoutes);

// db.sync().then(() => {
//   console.log("Database synced");
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });
