const validateWorkout = (req, res, next) => {
    const { title, difficulty, category, durationMinutes, exercises } = req.body;

    const errors = {};

    if (!title || typeof title !== "string" || !title.trim()) {
        errors.title = "Title is required";
    }

    if (
        difficulty !== undefined &&
        !["beginner", "intermediate", "advanced"].includes(difficulty)
    ) {
        errors.difficulty = "Invalid difficulty";
    }

    if (
        category !== undefined &&
        ![
            "strength",
            "cardio",
            "flexibility",
            "mobility",
            "full_body",
            "upper_body",
            "lower_body",
            "other",
        ].includes(category)
    ) {
        errors.category = "Invalid category";
    }

    if (
        durationMinutes !== undefined &&
        (!Number.isInteger(durationMinutes) || durationMinutes < 1)
    ) {
        errors.durationMinutes = "Duration must be a positive integer";
    }

    if (exercises !== undefined && !Array.isArray(exercises)) {
        errors.exercises = "Exercises must be an array";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            message: "Invalid workout data",
            errors,
        });
    }

    next();
};

module.exports = validateWorkout;