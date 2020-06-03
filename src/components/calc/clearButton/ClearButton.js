import React from 'react';
import './ClearButton.scss'

export const ClearButton =(props)=>{
    return(
        <div className='clear-btn' onClick={props.handleClear}>
            {props.children}
        </div>
    )
}