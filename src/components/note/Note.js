import React from 'react';
import {ActionBtn} from "./ActionBtn";

export const Note =({task})=> {

    const taskDone = 'task ' + (task.done ? 'task-done' : '');

    return(
        <div className={taskDone}>
            <div className='tasks'>
                <p>{task.title}</p>
                <small>{task.date}</small>
            </div>
            <ActionBtn task={task}/>
        </div>
    )
};