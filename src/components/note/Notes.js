import React, {useState, useEffect} from 'react';

import {Note} from "./Note";
import {TaskInput} from "./TaskInput";
import {Context} from "./context";

export const Notes =()=>{

    //const tasks = DB.tasks;
    const tasks = [];

    const [value, setValue] = useState(tasks);

    useEffect(()=> {
        const raw = localStorage.getItem('value') || [];
        setValue(JSON.parse(raw))
    }, []);

    useEffect(()=> {
        localStorage.setItem('value', JSON.stringify(value));
    }, [value]);

    const doneTask = (id) => {
        value.map(item => {
            id === item.id ? item.done = true : value.done = false;
        });
        setValue([...value]);
    };

    const deleteTask = id =>{
        setValue(value.filter(item => {
            return item.id !== id;
        }));
    };

    const addTask = task =>{
        const newTaskItem = [...value, {id: value.length, date: new Date().toLocaleDateString(), title: task, done: false}];
        setValue(newTaskItem);
    };

    const activeTasksNumber = (value.filter(task => !task.done)).length;

    return (
        <Context.Provider value={{
            deleteTask, addTask, doneTask
        }}>
            <div className='App'>
                <h1 className="top">Active tasks: {activeTasksNumber}</h1>
                {value.map((task, index) => {
                    if (!task.done) {
                        return(
                            <Note key={task.id} task={task}/>
                        )
                    }

                })}
                {value.map((task) => {
                    if (task.done) {
                        return(
                            <Note key={task.id} task={task}/>
                        )
                    }

                })}
                <TaskInput />
            </div>
        </Context.Provider>
    );
};
