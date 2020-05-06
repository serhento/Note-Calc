import React, {useState, useEffect} from 'react';

import {Note} from "./Note";
import {TaskInput} from "./TaskInput";

export const Notes =()=>{

    //const tasks = DB.tasks;
    const tasks = [];

    const [value, setValue] = useState(tasks);

    const activeTasks = value.filter(task => !task.done);
    const doneTasks = value.filter(task => task.done);

    useEffect(()=> {
        const raw = localStorage.getItem('value') || [];
        setValue(JSON.parse(raw))
    }, []);

    useEffect(()=> {
        localStorage.setItem('value', JSON.stringify(value));
    }, [value]);

    const doneTask = (index) => {
        value[index].done = true;
        setValue([...value]);

    };

    const deleteTask = (index) => {
        const newList = value.filter(item => item.id !== value[index].id);
        setValue(newList);
    };

    const addTask = task =>{
        const newTaskItem = [...value, {id: value.length, date: new Date().toLocaleDateString(), title: task, done: false}];
        setValue(newTaskItem);
    };

    console.log(activeTasks);

    const activeTasksNumber = (value.filter(task => !task.done)).length;

    return (
        <div className='App'>
            <h1 className="top">Active tasks: {activeTasksNumber}</h1>
            {value.map((task, index) => {
                if (!task.done) {
                    return(
                        <Note deleteTask={()=> deleteTask(index)} doneTask={()=> doneTask(index)} key={task.id} task={task}/>
                    )
                }

            })}
            {value.map((task, index) => {
                if (task.done) {
                    return(
                        <Note deleteTask={()=> deleteTask(index)} doneTask={()=> doneTask(index)} key={task.id} task={task}/>
                    )
                }

            })}
            <TaskInput addTask={addTask}/>
        </div>
    );
};
