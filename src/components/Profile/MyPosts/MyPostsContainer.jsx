import React from 'react';
import {addPostActionCreator, changeAddPostTextActionCreator} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (textPost) => {
            dispatch (changeAddPostTextActionCreator(textPost));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;