import React from "react";
import {addMessageActionCreator, onMessageTextActionCreator} from "../../Redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessageDialogs,

    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (textMessage) => {
            dispatch(onMessageTextActionCreator(textMessage));
        },
            sendMessage: () => {
            dispatch(addMessageActionCreator());
            }
        }
    }

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;