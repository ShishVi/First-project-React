import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

function MyPosts(props) {
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
                {props.posts.map(m => <Post message={m.message} likeCounts={m.likesCount}/>)}
            </div>
        </div>


    );
}

export default MyPosts;