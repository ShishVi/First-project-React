import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props)=> {
    return (
        <div className={classes.message}>{props.message}</div>
    );

};

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Vitaly' id ='1'/>
                <DialogItem name='Sergey' id ='2'/>
                <DialogItem name='Dmitry' id ='3'/>
                <DialogItem name='Irina' id ='4'/>
                <DialogItem name='Alexsey' id ='5'/>
            </div>
            <div className={classes.messages}>
                <Message message = 'Hello? My friend!'/>
                <Message message = 'Hi! How are you?'/>
                <Message message = 'I am Vitaly! What is your name?'/>
                <Message message = 'Good day'/>
            </div>
        </div>
    );
}

export default Dialogs;