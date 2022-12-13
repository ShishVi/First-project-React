import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav () {
    return (
        <nav className= {classes.nav}>
            <div><NavLink to='/profile' className ={navActive => navActive.isActive? classes.active: classes.item}>Profile</NavLink></div>
            <div><NavLink to='/dialog' className ={navActive => navActive.isActive? classes.active: classes.item}>Messages</NavLink></div>
            <div><NavLink to='/news' className ={navActive => navActive.isActive? classes.active: classes.item}>News</NavLink></div>
            <div><NavLink to='/music' className ={navActive => navActive.isActive? classes.active: classes.item}>Music</NavLink></div>
            <div><NavLink to='/setting' className ={navActive => navActive.isActive? classes.active: classes.item}>Setting</NavLink></div>
        </nav>
    );
}

export default Nav;