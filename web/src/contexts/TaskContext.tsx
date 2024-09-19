import React, { createContext, useState, ReactNode, useContext } from 'react';

interface TaskContextType {
  tasks: string[]
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([])
  const [task, setTask] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <TaskContext.Provider value={{ tasks, setTasks, task, setTask, isLoading, setIsLoading }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
};
