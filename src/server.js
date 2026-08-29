const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const connectDatabase = require("./config/database");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS
app.use(cors());

// Request parsing
app.use(express.json());

// Basic rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false
});

app.use(limiter);

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        service: "fitforge-workouts",
        status: "healthy"
    });
});

// Workout routes
app.use("/workouts", workoutRoutes);

// Start server
const startServer = async () => {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`FitForge Workouts Service running on ${PORT}`);
    });
};

startServer();