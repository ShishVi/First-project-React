import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

let postDate =[
    {id :'1', message:'Hello! How are you? This is my first post!', likesCount:65},
    {id :'1', message:'I am a computer programmer React JS', likesCount:150},
];


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
                <Post message={postDate[0].message} likeCounts={postDate[0].likesCount}/>
                <Post message={postDate[1].message} likeCounts={postDate[1].likesCount}/>
            </div>
        </div>


    );
}

export default MyPosts;