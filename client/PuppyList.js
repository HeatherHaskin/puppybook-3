import React from 'react';
import Main from './Main';

//PuppyList

// - Should be a stateless component
// - Should receive a list of puppies as a prop
// - Should render a PuppyProfile for each puppy


//stateless purely for render
const PuppyList=(props)=>{
	return (

		<ul id="puppy-list">
		{
          props.puppies.map(puppy=>

           <PuppyProfile puppy={puppy} updatePuppy={props.updatePuppy} key={puppy.id}/>

        )} 
		</ul>


	)
}

export default PuppyList;