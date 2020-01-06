import React from 'react';

const userinput = (props) => {
    return (< input onChange={props.change}
        type="text"
        style={props.style}
    />)
};

export default userinput;