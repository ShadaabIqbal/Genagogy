const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const { connectToDatabase } = require("./config/db");

// Load .env file - try multiple locations
// Method 1: Relative to this file (src/server.js -> ../.env)
const envPath1 = path.resolve(__dirname, "../.env");
// Method 2: From current working directory (where npm/node is run from)
const envPath2 = path.resolve(process.cwd(), ".env");
// Method 3: From backend directory if running from project root
const envPath3 = path.resolve(process.cwd(), "backend", ".env");

// Try loading from each location
const envFiles = [envPath1, envPath2, envPath3];
let loadedEnv = false;

for (const envFile of envFiles) {
  const result = dotenv.config({ path: envFile });
  if (!result.error) {
    console.log(`✓ Loaded .env from: ${envFile}`);
    loadedEnv = true;
    break;
  }
}

if (!loadedEnv) {
  // Last resort: try default location
  dotenv.config();
  console.log(`⚠ Using default .env location`);
}

// Log the paths checked
console.log(`📁 Checked .env paths:`);
envFiles.forEach(p => console.log(`   - ${p}`));
console.log(`📁 Current working directory: ${process.cwd()}`);

// Log environment variables status (for debugging)
console.log("📋 Environment variables check:");
console.log(`   RESEND_API_KEY: ${process.env.RESEND_API_KEY ? "✓ Found" : "✗ Missing"}`);
console.log(`   CONTACT_TO: ${process.env.CONTACT_TO || "Using default (iqbalshadaab@gmail.com)"}`);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// app.use("/api/enrollments", require("./routes/enrollmentRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));

// Error handler (fallback)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

// Hardcoded MongoDB connection string per user request
const MONGO_URI =
  "mongodb+srv://shadaabiqbal_db_user:1dfnxqDADGJpow36@genagogy-institute.qryryuw.mongodb.net/?retryWrites=true&w=majority&appName=Genagogy-Institute";

connectToDatabase(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  });
