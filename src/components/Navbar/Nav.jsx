import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import BestFriend from "../BestFriend/BestFriend";

function Nav (props) {

    let bestfriend = props.state.sideBar.map(n => <BestFriend name={n.name} foto={n.avatarUser}/>);
    return (
        <div className= {classes.nav}>

        <nav>
            <div><NavLink to='/profile' className ={navActive => navActive.isActive? classes.active: classes.item}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className ={navActive => navActive.isActive? classes.active: classes.item}>Messages</NavLink></div>
            <div><NavLink to='/news' className ={navActive => navActive.isActive? classes.active: classes.item}>News</NavLink></div>
            <div><NavLink to='/music' className ={navActive => navActive.isActive? classes.active: classes.item}>Music</NavLink></div>
            <div><NavLink to='/setting' className ={navActive => navActive.isActive? classes.active: classes.item}>Setting</NavLink></div>
            <div><NavLink to='/users' className ={navActive => navActive.isActive? classes.active: classes.item}>Users</NavLink></div>
        </nav>
        <div>
            <h3>Friends</h3>
            <div className= {classes.sidebar}>
                {bestfriend}
            </div>
        </div>
        </div>
    );
}

export default Nav;