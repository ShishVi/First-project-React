const ADD_POST = 'ADD-POST';
const CHANGE_ADD_POST_TEXT = 'CHANGE-ADD-POST-TEXT';
const profilePageReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_ADD_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const changeAddPostTextActionCreator = (textPost) => ({type: CHANGE_ADD_POST_TEXT, newText: textPost});
export default profilePageReducer;