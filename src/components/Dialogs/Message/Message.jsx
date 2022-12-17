import React from "react";
import classes from './Message.module.css'

const Message = (props)=> {
    return (
        <div className={classes.message}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU'/>
            {props.message}
        </div>
    );

};


export default Message;