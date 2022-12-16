import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";







const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogs.map(n => <DialogItem name={n.name} id ={n.id}/>)}
            </div>
            <div className={classes.messages}>
                {props.messages.map(m => <Message message = {m.message}/>)}
            </div>
        </div>
    );
}

export default Dialogs;