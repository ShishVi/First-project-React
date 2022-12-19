import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";







const Dialogs = (props) => {

    let elementMessage = React.createRef();
    const sendMessage = () => {
        let textMessage = elementMessage.current.value;
        alert(textMessage);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.state.dialogs.map(n => <DialogItem name={n.name} id ={n.id} foto={n.avatarUser}/>)}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(m => <Message message = {m.message}/>)}
                <div>
                    <textarea ref={elementMessage}></textarea>
                    <div>
                        <button onClick={sendMessage}>Add Message</button>
                    </div>
                </div>
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(m => <Message message = {m.message}/>)}
                <div>
                    <textarea ref={elementMessage}></textarea>
                    <div>
                        <button onClick={sendMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;