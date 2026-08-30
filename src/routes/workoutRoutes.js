const express = require("express");

const {
    createWorkout,
    getWorkoutById,
    getWorkouts,
    updateWorkout,
    deleteWorkout,
} = require("../handlers/workoutHandler");

const validateWorkout = require("../middleware/validateWorkout");

const router = express.Router();

router.post("/", validateWorkout, createWorkout);

router.get("/", getWorkouts);

router.get("/:workoutId", validateWorkout, getWorkoutById);

router.put("/:workoutId", validateWorkout, updateWorkout);

router.delete("/:workoutId", deleteWorkout);

module.exports = router;