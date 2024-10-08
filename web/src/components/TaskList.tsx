import React, { useState, useRef, useEffect } from 'react'
import { FaRegCircle, FaSave } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { useTaskContext } from '../contexts/TaskContext'
import { MdEdit } from "react-icons/md"
import { updateTaskService, deleteTaskService, updateStatusService } from '../services/taskService'
import { ITask, ITaskList } from './constants/types'


const TaskList: React.FC<ITaskList> = ({ task, getTasks }) => {
    const { setIsLoading } = useTaskContext()
    const [isEditing, setEditing] = useState(false)
    const [tempText, setTempText] = useState(task.task)
    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])

    const editTask = async (task: ITask) => {
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

    const editStatusTask = async (task: ITask) => {
        setIsLoading(true)
        try {
            await updateStatusService(task)
        } catch (error) {
            console.error('API call failed', error);
        } finally {
            await getTasks()
            setIsLoading(false)
        }

    }

    const deleteTask = async (id: string) => {
        setIsLoading(true)
        try {
            await deleteTaskService(id)
        } catch (error) {
            console.error('API call failed', error);
        } finally {
            await getTasks()
            setIsLoading(false)
        }

    }

    const clickEditTask = async (task: ITask) => {
        setEditing(!isEditing)
        if (!isEditing) return
        const newTask = {
            _id: task._id,
            task: tempText,
            isDone: task.isDone,
        }
        await editTask(newTask)
    }

    return (
        <div>
            <ul>
                <li key={task._id} className="flex items-center justify-between py-2 my-1 text-white bg-custom-gray ">
                    <button onClick={() => editStatusTask(task)} disabled={isEditing} className="flex items-center w-full">
                        {task.isDone ? (
                            <FaCircleCheck size={20} className="mr-2 ml-4 text-gray-500" />
                        ) : (
                            <FaRegCircle size={20} className="mr-2 ml-4 text-gray-500" />
                        )}
                        {isEditing ? (
                            <input
                                type="text"
                                ref={inputRef}
                                value={tempText}
                                onChange={(e) => setTempText(e.target.value)}
                                className="ml-2 text-lg text-gray-400 outline-none border-0 border-b border-gray-300 bg-transparent flex-1"
                            />
                        ) : (
                            <span className={`ml-2 text-lg ${task.isDone ? 'line-through text-gray-900' : 'text-gray-400'}`}>
                                {task.task}
                            </span>
                        )}

                    </button>
                    {task.isDone ? (
                        <button className="text-red-500 ml-4 mr-4 hover:text-red-900" data-testid={`delete-icon-${task.task}`} onClick={() => deleteTask(task._id)}>
                            <RiDeleteBin5Fill size={20} />
                        </button>
                    ) : (
                        <button className="text-gray-500 ml-4 mr-4 hover:text-white" data-testid={`edit-icon-${task.task}`} onClick={() => clickEditTask(task)}>
                            {isEditing ? (
                                <FaSave size={20} />
                            ) : (
                                <MdEdit size={20} />
                            )}
                        </button>
                    )}

                </li>
            </ul>
        </div>
    )
}

export default TaskList;
