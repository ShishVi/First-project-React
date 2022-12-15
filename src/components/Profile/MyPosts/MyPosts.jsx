import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

let posts =[
    {id :'1', message:'Hello! How are you? This is my first post!', likesCount:65},
    {id :'1', message:'I am a computer programmer React JS', likesCount:128},
];

let post = posts.map(m => <Post message={m.message} likeCounts={m.likesCount}/>)



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
                {post}
            </div>
        </div>


    );
}

export default MyPosts;