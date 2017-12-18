// - Should be a stateless component
// - Should receive a puppy picture as a prop
// - Should render an <img> with the puppy's picture as the src

import React from 'react';

const PuppyPicture = (props) => {

    return (
        <img src={props.puppyPicture}/>
    )

}

export default PuppyPicture;