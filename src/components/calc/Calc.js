import React, {useState} from 'react';
import * as math from 'mathjs';

import './Calc.scss'
import {Button} from "./button/Button";
import {Input} from "./input/Input";
import {ClearButton} from "./clearButton/ClearButton";


export const Calc =()=>{

    const [state, setState] = useState('');

    const addToInput =(val)=>{
        setState(state + val)
    };

    const handleEqual =()=>{
        setState(math.evaluate(state))
    }

    return(
        <div className='calc'>
            <div className="calc-wrapper">
                <Input input={state}/>
                <div className="calc-wrapper-row">
                    <Button handleClick={addToInput}>7</Button>
                    <Button handleClick={addToInput}>8</Button>
                    <Button handleClick={addToInput}>9</Button>
                    <Button handleClick={addToInput}>/</Button>
                </div>
                <div className="calc-wrapper-row">
                    <Button handleClick={addToInput}>4</Button>
                    <Button handleClick={addToInput}>5</Button>
                    <Button handleClick={addToInput}>6</Button>
                    <Button handleClick={addToInput}>*</Button>
                </div>
                <div className="calc-wrapper-row">
                    <Button handleClick={addToInput}>1</Button>
                    <Button handleClick={addToInput}>2</Button>
                    <Button handleClick={addToInput}>3</Button>
                    <Button handleClick={addToInput}>+</Button>
                </div>
                <div className="calc-wrapper-row">
                    <Button handleClick={addToInput}>.</Button>
                    <Button handleClick={addToInput}>0</Button>
                    <Button handleClick={()=> handleEqual()}>=</Button>
                    <Button handleClick={addToInput}>-</Button>
                </div>
                <div className="calc-wrapper-row">
                    <ClearButton handleClear={()=> setState('')}>Clear</ClearButton>
                </div>
            </div>
        </div>
    )
};