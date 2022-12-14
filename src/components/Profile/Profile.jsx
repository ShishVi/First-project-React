import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import InfoProfile from "./InfoProfile/InfoProfile";


function Profile() {
    return (
        <div>
            <InfoProfile/>
            <MyPosts/>

        </div>
    );
}

export default Profile;