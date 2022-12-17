import React from 'react';
import classes from './BestFriend.module.css';
import {NavLink} from "react-router-dom";

function BestFriend (props) {
    return (
            <div>
                <div>
                    <img src={props.foto}/>
                </div>
                <div>{props.name}</div>
            </div>
    );
}

export default BestFriend;