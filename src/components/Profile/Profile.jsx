import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from "./InfoProfile/InfoProfile";


function Profile(props) {
    return (
        <div>
            <InfoProfile/>
            <MyPosts posts={props.posts}/>

        </div>
    );
}

export default Profile;