import React from "react";
import classes from './Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Vitaly
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Dmitry
                </div>
                <div className={classes.dialog}>
                    Irina
                </div>
                <div className={classes.dialog}>
                    Alexsey
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello? My friend!</div>
                <div className={classes.message}>Hi! How are you?</div>
                <div className={classes.message}>I am Vitaly! What is your name?</div>
                <div className={classes.message}>Good day</div>

            </div>
        </div>
    );
}

export default Dialogs;