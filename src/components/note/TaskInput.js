import React, {useState} from 'react';

export const TaskInput = ({addTask}) => {

    const [input, setInput] = useState('');

    const addTaskItem = () =>{
        if (input){
            addTask(input);
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