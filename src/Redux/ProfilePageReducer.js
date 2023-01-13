const ADD_POST = 'ADD-POST';
const CHANGE_ADD_POST_TEXT = 'CHANGE-ADD-POST-TEXT';

let initialstate = {
    posts: [
        {id: '1', message: 'Hello! How are you? This is my first post!', likesCount: 65},
        {id: '1', message: 'I am a computer programmer React JS', likesCount: 128},
        {id: '1', message: 'I like this job', likesCount: 113},],
    newPostText: 'Yes of course',
};
const profilePageReducer = (state = initialstate, action) => {
    
    switch (action.type) {        
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {...state, newPostText: '', posts:[...state.posts, newPost]};
           
        }
        case CHANGE_ADD_POST_TEXT: {
            return {...state, newPostText:action.newText,};
            
        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const changeAddPostTextActionCreator = (textPost) => ({type: CHANGE_ADD_POST_TEXT, newText: textPost});
export default profilePageReducer;