import React, { useEffect, useContext } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { getTasksService } from '../services/taskService'
import { TaskContext } from '../contexts/TaskContext'
import Loading from '../components/utils/Loading'


const TaskManager = () => {
    const { tasks, setTasks, isLoading } = useContext(TaskContext)

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasksService()
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error)
        }
    }


    return (
        <div className="max-w-xl">
            <h1 className="text-2xl font-bold mb-4 text-center text-white">📝 My tasks</h1>
            <TaskInput getTasks={fetchTasks} />
            <h2 className="font-semibold my-2 mb-2 text-white text-center">To do</h2>
            {tasks.map((task, index) => (
                <TaskList key={index} index={index} task={task} getTasks={fetchTasks} />
            ))}
            {isLoading && (
                <Loading />
            )}
        </div>
    );
};

export default TaskManager;
