import React from 'react';
import Post from './Post/Post';



function MyPosts () {
    return (
        <div>
        <div>
            My posts
            <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Delete Post</button>
            </div>
        </div>
        <div className='post'>
            <Post message = 'Hello! How are you?' likeCounts = '10'/>
            <Post message = 'I am programmist React JS' likeCounts = '35'/>
            <Post />
            <Post />
            <Post />
        </div>
        </div>
      
        
    );
}

export default MyPosts;