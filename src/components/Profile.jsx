import React from 'react';
import classes from './Profile.module.css';


function Profile () {
    return (
        <div className={classes.content}>
        <div>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>
            ava+description
        </div>
        <div>
            my post
            <div>
            New post
            </div>
        </div>
        <div className='post'>
            <div className={classes.item}>
            Post 1
            </div>
            <div className={classes.item}>
            Post 2
            </div>
            <div className={classes.item}>
            Post 3
            </div>
        </div>
      
        </div>
    );
}

export default Profile;