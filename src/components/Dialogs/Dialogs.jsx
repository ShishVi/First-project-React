import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


let dialogs =[
    {id :'1', name:'Vitaly',},
    {id :'2', name:'Sergey',},
    {id :'3', name:'Dmitry',},
    {id :'4', name:'Irina',},
    {id :'5', name:'Alexsey',},
];
let messages = [
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

let dialog = dialogs.map(n => <DialogItem name={n.name} id ={n.id}/>);
let message = messages.map(m => <Message message = {m.message}/>)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialog}
            </div>
            <div className={classes.messages}>
                {message}
            </div>
        </div>
    );
}

export default Dialogs;