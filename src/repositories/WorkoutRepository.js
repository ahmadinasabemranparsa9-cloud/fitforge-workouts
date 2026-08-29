const Workout = require("../models/Workout");

class WorkoutRepository {
    async create(workoutData) {
        return Workout.create(workoutData);
    }

    async findById(workoutId) {
        return Workout.findById(workoutId);
    }

    async findAllByUserId(userId) {
        return Workout.find({ userId }).sort({ createdAt: -1 });
    }

    async updateById(workoutId, workoutData) {
        return Workout.findByIdAndUpdate(
            workoutId,
            workoutData,
            {
                new: true,
                runValidators: true,
            }
        );
    }

    async deleteById(workoutId) {
        return Workout.findByIdAndDelete(workoutId);
    }
}

module.exports = new WorkoutRepository();