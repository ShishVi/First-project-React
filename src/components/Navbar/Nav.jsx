import React from 'react';
import classes from './Nav.module.css';

function Nav () {
    return (
        <nav className= {classes.nav}>
            <div className={classes.item}><a href='/profile'>Profile</a></div>
            <div className={`${classes.item} ${classes.active}`}><a href='/dialog'>Messages</a></div>
            <div className={classes.item}><a href='/news'>News</a></div>
            <div className={classes.item}><a href='/music'>Music</a></div>
            <div className={classes.item}><a href='/setting'>Setting</a></div>
        </nav>
    );
}

export default Nav;