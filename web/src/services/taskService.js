import axios from 'axios';

const API_URL = 'http://localhost:8080/todos'

const getTasksService = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.error('Error fetching tasks', error)
        throw error
    }
};

const addTaskService = async (task) => {
    try {
        const response = await axios.post(API_URL, { task: task })
        return response.data;
    } catch (error) {
        console.error('Error adding task', error);
        throw error;
    }
};

const updateTaskService = async (id, updatedTask) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { task: updatedTask });
        return response.data;
    } catch (error) {
        console.error('Error updating task', error);
        throw error;
    }
};

const deleteTaskService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task', error);
        throw error;
    }
};

export {
    getTasksService,
    addTaskService,
    updateTaskService,
    deleteTaskService
}
