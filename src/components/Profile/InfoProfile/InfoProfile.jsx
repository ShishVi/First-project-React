import React from 'react';
import classes from './InfoProfile.module.css';


function InfoProfile() {
    return (
        <div>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={classes.profileDescription}>
                ava+description
            </div>
        </div>
    );
}

export default InfoProfile;