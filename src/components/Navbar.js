import React from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.scss'
import DB from '../store/DB'

export const Navbar =()=>{

    const list = DB.list;

    return(
        <div className='navbar'>
            <div>Calc&Notes</div>

            <ul>

                {list.map(item=> <li key={item.id}><NavLink  to={item.to}>{item.title}</NavLink></li>)}

            </ul>
        </div>
    )
};