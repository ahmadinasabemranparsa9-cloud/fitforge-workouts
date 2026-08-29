const express = require("express");

const {
    createWorkout,
    getWorkoutById,
    getWorkouts,
    updateWorkout,
    deleteWorkout,
} = require("../handlers/workoutHandler");

const router = express.Router();

router.post("/", createWorkout);

router.get("/", getWorkouts);

router.get("/:workoutId", getWorkoutById);

router.put("/:workoutId", updateWorkout);

router.delete("/:workoutId", deleteWorkout);

module.exports = router;