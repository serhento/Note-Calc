import React, {useReducer} from 'react';
import axios from 'axios';

import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";

export const FirebaseState =({children}) =>{

    const url = process.env.REACT_APP_DB_URL;

    const initialState = {
        notes: []
    };

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const fetchNotes = async () => {
        const res = await axios.get(`${url}/notes.json`);

        if (res.data){
            const payload = Object.keys(res.data).map(key => {
                    return{
                        ...res.data[key],
                        id: key
                    }
                });
                dispatch({type: "FETCH_NOTES", payload});
        }
    };

    const addTask = async task =>{
        const note = {
            date: new Date().toLocaleDateString(), title: task, done: false, id: new Date()
        };

        const res = await axios.post(`${url}/notes.json`, note);
        const payload = {
            ...note,
            id: res.data.name
        };

        dispatch({
            type: "ADD_TASK",
            payload
        });
    };

    const doneTask = async id =>{
        const res = await axios.get(`${url}/notes/${id}.json`);
        res.data.done = !res.data.done;
        await axios.put(`${url}/notes/${id}.json`, res.data);

        dispatch({
            type: "DONE_TASK",
            payload: id
        });
    };

    const deleteTask = async id =>{

        await axios.delete(`${url}/notes/${id}.json`);

        dispatch({
            type: "DELETE_TASK",
            payload: id
        });
    };

    return(
        <FirebaseContext.Provider value={{
            doneTask, deleteTask, addTask, fetchNotes, notes: state.notes
        }}>

            {children}

        </FirebaseContext.Provider>
    )
};