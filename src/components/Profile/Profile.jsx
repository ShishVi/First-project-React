import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from "./InfoProfile/InfoProfile";



function Profile(props) {
    return (
        <div>
            <InfoProfile/>
            <MyPosts state={props.state} addPost={props.addPost} newPostText={props.state.newPostText} changeAddPostText={props.changeAddPostText}/>

        </div>
    );
}

export default Profile;