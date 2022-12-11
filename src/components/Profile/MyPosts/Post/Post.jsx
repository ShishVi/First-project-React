import React from 'react';
import classes from './Post.module.css';


function Post () {
    return (
        <div className={classes.item}>
            <img src="data:image/jpeg;base64,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" alt="Foto" />
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
            
      
        
    );
}

export default Post;