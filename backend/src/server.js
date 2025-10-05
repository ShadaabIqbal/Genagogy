const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectToDatabase } = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/enrollments", require("./routes/enrollmentRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// Error handler (fallback)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

// Hardcoded MongoDB connection string per user request
const MONGO_URI = "mongodb+srv://shadaabiqbal_db_user:1dfnxqDADGJpow36@genagogy-institute.qryryuw.mongodb.net/?retryWrites=true&w=majority&appName=Genagogy-Institute";

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


