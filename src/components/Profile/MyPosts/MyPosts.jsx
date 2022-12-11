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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        </div>
      
        
    );
}

export default MyPosts;