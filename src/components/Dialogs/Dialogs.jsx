import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


let dialogDate =[
    {id :'1', name:'Vitaly',},
    {id :'2', name:'Sergey',},
    {id :'3', name:'Dmitry',},
    {id :'4', name:'Irina',},
    {id :'5', name:'Alexsey',},
];

let messagesDate = [
    {id :'1', message:'Hello? My friend!',},
    {id :'2', message:'Hi! How are you?',},
    {id :'3', message:'I am Vitaly! What is your name?',},
    {id :'4', message:'Good morning!',},
]
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
                <DialogItem name={dialogDate[0].name} id ={dialogDate[0].id}/>
                <DialogItem name={dialogDate[1].name} id ={dialogDate[1].id}/>
                <DialogItem name={dialogDate[2].name} id ={dialogDate[2].id}/>
                <DialogItem name={dialogDate[3].name} id ={dialogDate[3].id}/>
                <DialogItem name={dialogDate[4].name} id ={dialogDate[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message = {messagesDate[0].message}/>
                <Message message = {messagesDate[1].message}/>
                <Message message = {messagesDate[2].message}/>
                <Message message = {messagesDate[3].message}/>
            </div>
        </div>
    );
}

export default Dialogs;