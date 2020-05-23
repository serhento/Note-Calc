import React, {useEffect, useContext} from 'react';

import {Note} from "./Note";
import {TaskInput} from "./TaskInput";
import {Context} from "../context/context";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Notes =()=>{

    const {notes, fetchNotes} = useContext(FirebaseContext);

    useEffect(()=> {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    const activeTasksNumber = (notes.filter(item => !item.done)).length;


    return (
        <Context.Provider value={{

        }}>
            <div className='App'>
                <h1 className="top">Active tasks: {activeTasksNumber}</h1>
                <TaskInput />
                {notes.map((task) => {
                    if (!task.done) {
                        return(
                            <Note key={task.id} task={task}/>
                        )
                    } return null

                })}
                {notes.map((task) => {
                    if (task.done) {
                        return(
                            <Note key={task.id} task={task}/>
                        )
                    } return null

                })}
            </div>
        </Context.Provider>
    );
};
