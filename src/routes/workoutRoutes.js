const express = require("express");

const {
    createWorkout,
    getWorkoutById,
    getWorkout,
    updateWorkout,
    deleteWorkout,
} = require("../handlers/workoutHandler");

const validateWorkout = require("../middleware/validateWorkout");
const validateWorkoutId = require("../middleware/validateWorkoutId");

const router = express.Router();

router.get("/", getWorkout);

router.post("/", validateWorkout, createWorkout);

router.get("/:id", validateWorkoutId, getWorkoutById);

router.put("/:id", validateWorkoutId, validateWorkout, updateWorkout);

router.delete("/:id", validateWorkoutId, deleteWorkout);

module.exports = router;