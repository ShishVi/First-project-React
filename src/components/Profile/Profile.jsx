import React from 'react';
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



function Profile(props) {

    return (
        <div>
            <InfoProfile/>
            <MyPostsContainer store={props.store}/>

        </div>
    );
}

export default Profile;