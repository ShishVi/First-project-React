import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newFirstMessageElement = React.createRef();
    let onMessageChange = () => {
        let textMessage = newFirstMessageElement.current.value;
        props.onMessageChange(textMessage);
    }

    let sendMessage = () => props.sendMessage()
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogs.map(n => <DialogItem name={n.name} id ={n.id} foto={n.avatarUser}/>)}
            </div>
            <div className={classes.messages}>
                {props.messages.map(m => <Message message = {m.message}/>)}
                <div>
                    <textarea onChange={onMessageChange}  ref={newFirstMessageElement} value={props.newMessage}></textarea>
                    <div>
                        <button onClick={sendMessage}>Add Message</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;