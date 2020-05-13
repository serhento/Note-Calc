import React, {useState, useContext} from 'react';
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const TaskInput = () => {

    const [input, setInput] = useState('');
    const firebase = useContext(FirebaseContext);

    const addTaskItem = () =>{
        if (input){
            firebase.addTask(input)
        }
        setInput(input);
        setInput('');
    };

    const onEnterPress = (e) =>{
        if (e.key === 'Enter'){
            addTaskItem();
        };
    };

    return(
        <div className='task-input'>
            <input onKeyPress={onEnterPress} onChange={e=> setInput(e.target.value)} value={input} type="text"/>
            <button onClick={addTaskItem}>ADD</button>
        </div>
    )
};