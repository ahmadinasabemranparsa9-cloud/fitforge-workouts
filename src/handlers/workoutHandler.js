const workoutService = require("../services/WorkoutService");

const createWorkout = async (req, res, next) => {
    try {
        const workout = await workoutService.createWorkout(req.body);

        res.status(201).json(workout);
    } catch (error) {
        next(error);
    }
};

const getWorkoutById = async (req, res, next) => {
    try {
        const workout = await workoutService.getWorkoutById(
            req.params.id
        );

        if (!workout) {
            return res.status(404).json({
                message: "Workout not found",
            });
        }

        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
};

const getWorkout = async (req, res, next) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({
                message: "userId query parameter is required",
            });
        }

        const workouts = await workoutService.getWorkoutByUserId(userId);

        res.status(200).json(workouts);
    } catch (error) {
        next(error);
    }
};

const updateWorkout = async (req, res, next) => {
    try {
        const workout = await workoutService.updateWorkout(
            req.params.id,
            req.body
        );

        if (!workout) {
            return res.status(404).json({
                message: "Workout not found",
            });
        }

        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
};

const deleteWorkout = async (req, res, next) => {
    try {
        const workout = await workoutService.deleteWorkout(
            req.params.id
        );

        if (!workout) {
            return res.status(404).json({
                message: "Workout not found",
            });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createWorkout,
    getWorkoutById,
    getWorkout,
    updateWorkout,
    deleteWorkout,
};