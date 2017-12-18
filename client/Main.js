import React, { Component } from 'react';
import axios from 'axios';

// - Should be a stateful component
//   - Should have a list of puppies on its state
//   - Should have a list of owners on its state
// - Should make an AJAX request to get all puppies (GET /api/puppies) and all owners (GET /api/owners) when the component mounts
//   - Should put the puppies it gets onto state
//   - Should put the owners it gets onto state
// - Should render the PuppyList




export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puppies: [],
            owners: []
        };
    }

    componentDidMount() {
        Promise.all([axios.get('/api/puppies'), axios.get('/api/owners')])
            .then(([res, rez]) => [res, data, rez.data])
            .then(([puppies, owners]) => this.setState({ puppies, onwers }));

    }

    addNewPuppy(newPuppy) {
        //return ??
        axios.post('/api/puppies', newPuppy)
            .then(res => res.data)
            .then(puppy => {
                this.setState({ puppies: [...this.state.puppies, puppy] }); //add new puppy to puppies array
            });
    }

    updatePuppy(puppyId, likes) {
        //return ??
        axios.put(`/api/puppies/${puppyId}`, { likes })
            .then(res => res.data)
            .then(updated => {
                this.setState({ puppies: this.state.puppies.map(pup => pup.id === updated.id ? updated : pup) });
            });
    }

    /* beautify ignore:start */
	render(){
		return (
			<div id="main">
				<PuppyList puppies={this.state.puppies} updatePuppy={this.updatePuppy}/>
				<NewPuppyForm owners={this.state.owners} addNewPuppy={this.addNewPuppy}/>
			</div>
		)
	}
	/* beautify ignore:end */
}