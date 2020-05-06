import React from 'react';

export const ActionBtn = ({task, doneTask, deleteTask}) =>{
    return(
        <div className="action-btn">
            {!task.done ? (<p onClick={doneTask}><svg width="16" height="16" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                        stroke="#25AD39"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                </p>)
                : (<p onClick={deleteTask}><svg width="14" height="14"  fill="#FF1317" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.23 371.23">
                    <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
	                                185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
                </svg>
                </p>)
            }
        </div>
    )
};