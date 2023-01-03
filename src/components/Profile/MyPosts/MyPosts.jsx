import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {addPostActionCreator, changeAddPostTextActionCreator} from "../../../Redux/State";



function MyPosts(props) {

    let newPostElement = React.createRef(); // создаем ссылку на элемент
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () =>{

        let textPost = newPostElement.current.value;
        props.dispatch (changeAddPostTextActionCreator(textPost));
    }


    return (
        <div className={classes.postsProfile}>
            <div>
                <h3>My posts</h3>
                <div className={classes.addPosts}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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