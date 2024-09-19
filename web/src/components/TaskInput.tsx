import React from 'react'
import { addTaskService } from '../services/taskService'
import { useTaskContext } from '../contexts/TaskContext'


interface TaskProps {
  getTasks: () => void
}

const TaskInput: React.FC<TaskProps> = ({ getTasks }) => {

  const { task, setTask, setIsLoading } = useTaskContext()

  const handleAddTask = async () => {
    setIsLoading(true)
    try {
      if (task.trim()) {
        await addTaskService(task)
        setTask('')
      }
    } catch (error) {
      console.error('API call failed', error);
    } finally {
      await getTasks()
      setIsLoading(false)
    }


  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className="relative block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-6">
        <span className="text-gray-500">➕ Add a task</span>
      </div>
      <input
        type="text"
        placeholder="Try typing 'Buy milk'"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full block bg-custom-gray text-white pl-36 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <span
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        ▶
      </span>
    </div>

  )
}

export default TaskInput;
