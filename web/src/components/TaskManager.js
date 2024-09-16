import React, { useState } from 'react';
import TaskInput from './TaskInput';

const TaskManager = () => {
    const [tasks, setTasks] = useState(['Eat', 'Code', 'Work']);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center text-white">📝 My tasks</h1>
            <TaskInput addTask={addTask} />
        </div>
    );
};

export default TaskManager;
