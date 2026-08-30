const mongoose = require("mongoose");

const validateWorkoutId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== "string" || !id.trim()) {
        return res.status(400).json({
            message: "Invalid workout ID",
        });
    }

    next();
};

module.exports = validateWorkoutId;