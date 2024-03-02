// Load environment variables from a .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// Create an Express application
const app = express();

// Define the port to listen on, using either the provided PORT environment variable or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Set up EJS templating engine and layouts
app.use(expressLayouts);
app.set("view engine", "ejs");

// Set the default layout for views
app.set("layout", "./layouts/main");

// Define routes
app.use("/", require("./server/routes/main"));

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
