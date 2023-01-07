import React from 'react';
import {addPostActionCreator, changeAddPostTextActionCreator} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";



function MyPostsContainer (props) {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (textPost) =>{
        props.store.dispatch (changeAddPostTextActionCreator(textPost));
    }

    let state = props.store.getState();


    return (
        <MyPosts addPost={addPost}  onPostChange={onPostChange} newPostText={state.profilePage.newPostText} posts = {state.profilePage.posts} />

    );
}

export default MyPostsContainer;