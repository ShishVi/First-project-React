import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'



function MyPosts() {
    return (
        <div className={classes.postsProfile}>
            <div>
                <h3>My posts</h3>
                <div className={classes.addPosts}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>

                </div>
            </div>
            <div className='post'>
                <Post message='Hello! How are you?' likeCounts='10'/>
                <Post message='I am programmist React JS' likeCounts='35'/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>


    );
}

export default MyPosts;