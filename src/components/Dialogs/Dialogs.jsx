import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageTextActionCreator} from "../../Redux/DialogsPageReducer";

const Dialogs = (props) => {
    let newFirstMessageElement = React.createRef();
    let onMessageChange = () => {
        let textMessage = newFirstMessageElement.current.value;
        props.dispatch(onMessageTextActionCreator(textMessage));
    }
    let sendMessage = () => props.dispatch(addMessageActionCreator())
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.state.dialogs.map(n => <DialogItem name={n.name} id ={n.id} foto={n.avatarUser}/>)}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(m => <Message message = {m.message}/>)}
                <div>
                    <textarea onChange={onMessageChange}  ref={newFirstMessageElement} value={props.state.newMessageDialogs}></textarea>
                    <div>
                        <button onClick={sendMessage}>Add Message</button>
                    </div>
                </div>
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(m => <Message message = {m.message}/>)}
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;