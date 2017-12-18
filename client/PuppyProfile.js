// - Should be a stateless component
// - Should receive a single puppy as a prop
// - Should render the name of the puppy
// - Should render the name of the puppy's owner
// - Should render a PuppyPicture component
// - Should render a PuppyLikes component


import React, { Component } from 'react';
import PuppyLikes from './PuppyLikes';
import puppyPicture from './puppyPicture';
import Main from './Main';



const PuppyProfile(props) {
    return (
        <li className='puppy-profile'>
			<div>
				<div>
					<p> Name: {props.puppy.name}</p>
					<p> Owner: {props.puppy.owner.name}</p>
                </div>
                <PuppyPicture puppyPicture={props.puppy.imageUrl}/>
            </div>
            <PuppyLikes likes={props.puppy.likes} updatePuppy={props.updatePuppy(props.puppy.id)}/>
        </li>
    )
}