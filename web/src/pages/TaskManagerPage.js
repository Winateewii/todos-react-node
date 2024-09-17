import React, { useEffect, useState, useContext } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { getTasksService } from '../services/taskService'
import { TaskContext } from '../contexts/TaskContext'

const TaskManager = () => {
    const { task } = useContext(TaskContext)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchTasks()
    }, [task])


    // const addTask = (newTask) => {
    //     setTasks([...tasks, newTask]);
    // }

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasksService()
            console.log('fetchedTasks-*-**-*-', fetchedTasks)
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error)
        }
    }


    return (
        <div className="max-w-xl">
            <h1 className="text-2xl font-bold mb-4 text-center text-white">📝 My tasks</h1>
            <TaskInput getTasks={fetchTasks} />
            <TaskList tasks={tasks} />
            {/* <TaskList tasks={tasks} editTask={handleEditTask} deleteTask={handleDeleteTask} /> */}
        </div>
    );
};

export default TaskManager;
