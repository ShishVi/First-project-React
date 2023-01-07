import React from "react";
import {addMessageActionCreator, onMessageTextActionCreator} from "../../Redux/DialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let onMessageChange = (textMessage) => {
        props.store.dispatch(onMessageTextActionCreator(textMessage));
    }
    let sendMessage = () => props.store.dispatch(addMessageActionCreator());

    let state = props.store.getState();


    return (
        <Dialogs onMessageChange={onMessageChange} sendMessage = {sendMessage} dialogs ={state.dialogsPage.dialogs} messages = {state.dialogsPage.messages} newMessage = {state.dialogsPage.newMessageDialogs}/>
    );
}

export default DialogsContainer;