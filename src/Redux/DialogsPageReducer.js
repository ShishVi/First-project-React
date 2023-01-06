
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_ADD_MESSAGE_TEXT = 'CHANGE-ADD-MESSAGE-TEXT';
const dialogsPageReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageDialogs,
            };
            state.messages.push(newMessage);
            state.newMessageDialogs = '';
            return state;
        case CHANGE_ADD_MESSAGE_TEXT:
            state.newMessageDialogs = action.textMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onMessageTextActionCreator = (textMessage) => ({type: CHANGE_ADD_MESSAGE_TEXT, textMessage: textMessage})



export default dialogsPageReducer;