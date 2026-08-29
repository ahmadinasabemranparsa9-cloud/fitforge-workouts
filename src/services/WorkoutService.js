const workoutRepository = require("../repositories/WorkoutRepository");

class WorkoutService {
    async createWorkout(workoutData) {
        return workoutRepository.create(workoutData);
    }

    async getWorkoutById(workoutId) {
        return workoutRepository.findById(workoutId);
    }

    async getWorkoutByUserId(userId) {
        return workoutRepository.findAllByUserId(userId);
    }

    async updateWorkout(workoutId, workoutData) {
        return workoutRepository.updateById(workoutId, workoutData);
    }

    async deleteWorkout(workoutId) {
        return workoutRepository.deleteById(workoutId);
    }
}

module.exports = new WorkoutService();