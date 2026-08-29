const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            index: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        difficulty: {
            type: String,
            enum: ["beginner", "intermediate", "advanced"],
            default: "beginner",
        },

        category: {
            type: String,
            enum: [
                "strength",
                "cardio",
                "flexibility",
                "mobility",
                "full_body",
                "upper_body",
                "lower_body",
                "other",
            ],
            default: "other"
        },

        duration: {
            type: Number,
            min: 1,
        },

        exercises: [
            {
                exerciseId: {
                    type: String,
                    required: true,
                },

                sets: {
                    type: Number,
                    min: 1,
                },

                reps: {
                    type: Number,
                    min: 1,
                },

                durationSeconds: {
                    type: Number,
                    min: 1,
                },

                restStatus: {
                    type: Number,
                    min: 0,
                },
            },
        ],

        status: {
            type: String,
            enum: ["draft", "active", "completed", "archived"],
            default: "active",
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Workout", workoutSchema);