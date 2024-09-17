import { createContext, useState, useContext } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    return (
        <TaskContext.Provider value={{ tasks, setTasks, task, setTask, isLoading, setIsLoading }}>
            {children}
        </TaskContext.Provider>
    );
}
