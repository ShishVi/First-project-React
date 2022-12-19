import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

function MyPosts(props) {

    let newPostElement = React.createRef(); // создаем ссылку на элемент
    let addPost = () => {
        let textPost = newPostElement.current.value;
        alert(textPost);
    }
    return (
        <div className={classes.postsProfile}>
            <div>
                <h3>My posts</h3>
                <div className={classes.addPosts}>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>

                </div>
            </div>
            <div className='post'>
                {props.state.posts.map(m => <Post message={m.message} likeCounts={m.likesCount}/>)}
            </div>
        </div>


    );
}

export default MyPosts;