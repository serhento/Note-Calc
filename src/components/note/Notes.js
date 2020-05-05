import React, {useState} from 'react';

import {Note} from "./Note";
import DB from "../../store/DB";
import {TaskInput} from "./TaskInput";

export const Notes =()=>{

    const tasks = DB.tasks;

    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    const [value, setValue] = useState([...activeTasks, ...doneTasks]);

    const doneTask = (index) => {
        value[index].done = true;
        setValue([...value]);
    };

    const deleteTask = (index) => {
        const newList = value.filter(item => item.id !== value[index].id);
        setValue(newList);
    };

    const addTask = task =>{
        const newTaskItem = [...value, {id: value.length, title: task, done: false}];
        setValue(newTaskItem);
    };

    return (
        <div className='App'>
            <h1 className="top">Active tasks: {activeTasks.length}</h1>
            {value.map((task, index) => {
                return(
                    <Note deleteTask={()=> deleteTask(index)} doneTask={()=> doneTask(index)} key={task.id} task={task}/>
                )
            })}
            <TaskInput addTask={addTask}/>
        </div>
    );
};
