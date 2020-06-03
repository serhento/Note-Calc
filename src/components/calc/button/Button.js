import React from 'react';
import './Button.scss';

const isOperator = val =>{
    return !isNaN(val) || val === '.' || val === '=';
}

export const Button =(props)=>{
    return(
        <div onClick={()=> props.handleClick(props.children)} className={`button ${isOperator(props.children) ? null : 'operator'}`}>
            {props.children}
        </div>
    )
}