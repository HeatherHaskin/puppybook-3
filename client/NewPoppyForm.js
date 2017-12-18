import React, { Component } from 'react';
import Main from './Main';


// - Should be a stateful component
//   - Should have the current value in the input field on its state
// - Should have an <input> for entering the new puppy's name
//   - The <input> field's "value" should be set to the value held on state
// - Should have an <select> for choosing an owner
//   - Each <option> should display the owner's name
//   - The value of each <option> should be the owner's id
// - Submitting should send a POST to /api/puppies
//   - The view should then update to display the new puppy in the list
//   - Bonus: The <input> field should also clear out when you submit



export Default class NewPuppyForm extends Component {

    constructor() {
        super()
        this.state = {
            newPuppyName: ''
        }
    }

    handleChange(event) {
        this.setState({ newPuppyName: event.target.value }) //input field for new puppy name
    }

    handleSubmit(event) {
        event.preventDefault()
        const ownerId = event.target.owner.value;
        const name = event.target.puppyName.value;
        this.props.addNewPuppy({ ownerId, name })
        this.setState({ newPuppyName: "" }) //clear out after submit

    }

    render() {
        const name = this.state.newPuppyName

        return (
            <form id='new-puppy-form' onSubmit={this.handleSubmit}>
	    		 <label> Enter the new puppy's name: </label>

	    			<input  name={name}
	    				onChange={this.handleChange}
	    				name="puppyName"
	    				type='text'
	    				placeholder="new Puppy Name"
	    			/> 
	    		<label> Select new puppy's owner : </label>  {/* selction for owner, with its id display on page*/}
	    		<select name="owner">
	    			{
	    				this.props.owners.map(owner=>{
	    					return <option key={owner.id} value={owner.id}> {owner.name} </option>
	    				})
	    			}
	    		</select>
	    		<button type='submit' className='btn submit'> Submit </button>

    		</form>

        )
    }
}