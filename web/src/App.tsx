import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskManagerPage from './pages/TaskManagerPage'
import NotFoundPage from './pages/NotFoundPage'
import { TaskProvider } from './contexts/TaskContext'

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="min-h-screen bg-custom-dark items-center flex w-full justify-center">
          <Routes>
            <Route path="/" element={<TaskManagerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
