import React, { useEffect, useContext } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { getTasksService } from '../services/taskService'
import { TaskContext } from '../contexts/TaskContext'
import Loading from '../components/utils/Loading'


const TaskManager = () => {
    const { setTasks, isLoading } = useContext(TaskContext)

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
            <TaskList getTasks={fetchTasks} />
            {isLoading && (
                <Loading />
            )}
        </div>
    );
};

export default TaskManager;
