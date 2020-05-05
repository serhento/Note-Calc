import React from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.scss'

export const Navbar =()=>{

    const list = [
        {
            "id": 0,
            "title": "Notes",
            "to": "/notes"
        },
        {
            "id": 1,
            "title": "Calc",
            "to": "/calc"
        }
    ];

    return(
        <div className='navbar'>
            <div>Calc&Notes</div>

            <ul>
                {list.map(item=> <li key={item.id}><NavLink  to={item.to}>{item.title}</NavLink></li>)}

                {/*<li><NavLink to='/'>{x[0]}</NavLink></li>*/}
                {/*<li><NavLink to='/calc'>Calc</NavLink></li>*/}
            </ul>
        </div>
    )
};