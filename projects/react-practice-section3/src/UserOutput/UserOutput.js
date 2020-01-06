import React from 'react';
import './UserOutput.css';

const userOutput = (props) => { 
    return (<div className='textStyle'> 
        <p>{props.username}</p>
        <p>Last visit: {new Date().toLocaleTimeString()}</p>
    </div>)
};

export default userOutput;