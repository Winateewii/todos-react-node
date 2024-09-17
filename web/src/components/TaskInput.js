import React, { useContext } from 'react'
import { addTaskService } from '../services/taskService'
import { TaskContext } from '../contexts/TaskContext'

const TaskInput = ({ getTasks }) => {
  // const [task, setTask] = useState('')
  const { task, setTask } = useContext(TaskContext)

  const handleAddTask = () => {
    if (task.trim()) {
      addTaskService(task).then(
        getTasks()
      )
      setTask(task)
      console.log('task--->', task)
      setTask('')
    }
  }

  const handleKeyDown = (e) => {
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
        className="w-full block bg-gray-800 text-white pl-36 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
