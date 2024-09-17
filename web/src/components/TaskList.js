import React, { useContext } from 'react'
import { FaRegCircle } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { TaskContext } from '../contexts/TaskContext'
import { MdEdit } from "react-icons/md"
import { updateTaskService } from '../services/taskService'


const TaskList = ({ getTasks }) => {
    const { tasks, setIsLoading } = useContext(TaskContext)

    const toggleTask = async (task) => {
        setIsLoading(true)
        try {
            await updateTaskService(task)
        } catch (error) {
            console.error('API call failed', error);
        } finally {
            await getTasks()
            setIsLoading(false)
        }

    }

    return (
        <div>
            <h2 className="font-semibold my-2 mb-2 text-white text-center">To do</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center justify-between py-2 my-1 text-white bg-gray-800">
                        <button onClick={() => toggleTask(task)} className="flex items-center">
                            {task.isDone ? (
                                <FaCircleCheck size={20} className="mr-2 ml-4 text-gray-500" />
                            ) : (
                                <FaRegCircle size={20} className="mr-2 ml-4 text-gray-500" />
                            )}
                            <span className={`ml-2 text-lg ${task.isDone ? 'line-through text-gray-900' : 'text-gray-400'}`}>
                                {task.task}
                            </span>
                        </button>
                        {task.isDone ? (
                            <button className="text-red-500 mr-4 hover:text-red-900">
                                <RiDeleteBin5Fill size={20} />
                            </button>
                        ) : (
                            <button className="text-gray-500 mr-4 hover:text-white">
                                <MdEdit size={20} />
                            </button>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;
