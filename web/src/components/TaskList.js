import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa"
import { MdEdit } from "react-icons/md"

const TaskList = ({ tasks }) => {

    return (
        <div>
            <h2 className="font-semibold my-2 mb-2 text-white text-center">To do</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center justify-between py-2 my-1 text-white bg-gray-800">
                        <div className="flex items-center">
                            <FaRegCircle className="mr-2 ml-4 text-gray-500" size={20} />
                            <span>{task.task}</span>
                        </div>
                        <button className="text-gray-500 mr-4 hover:text-white">
                            <MdEdit size={16} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;
