import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from "./InfoProfile/InfoProfile";


function Profile(props) {
    return (
        <div>
            <InfoProfile/>
            <MyPosts state={props.state}/>

        </div>
    );
}

export default Profile;