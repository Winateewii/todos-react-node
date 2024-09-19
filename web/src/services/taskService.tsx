import axios from 'axios'

const API_URL = 'http://localhost:8080/todos'

const getTasksService = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.error('Error fetching tasks', error)
        throw error
    }
}

const addTaskService = async (task: any) => {
    try {
        const response = await axios.post(API_URL, { task: task })
        return response.data;
    } catch (error) {
        console.error('Error adding task', error);
        throw error;
    }
}

const updateTaskService = async (task: any) => {
    try {
        const response = await axios.put(`${API_URL}/${task._id}`, { task: task.task, isDone: task.isDone })
        return response.data;
    } catch (error) {
        console.error('Error updating task', error)
        throw error;
    }
}

const updateStatusService = async (task: any) => {
    try {
        const response = await axios.put(`${API_URL}/${task._id}`, { ...task, isDone: !task.isDone })
        return response.data;
    } catch (error) {
        console.error('Error updating task', error)
        throw error;
    }
}

const deleteTaskService = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task', error);
        throw error;
    }
}

export {
    getTasksService,
    addTaskService,
    updateTaskService,
    updateStatusService,
    deleteTaskService
}
