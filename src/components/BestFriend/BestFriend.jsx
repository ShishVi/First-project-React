import React from 'react';

function BestFriend (props) {
    return (
            <div>
                <div>
                    <img src={props.foto}/>
                </div>
                <div>{props.name}</div>
            </div>
    );
}

export default BestFriend;