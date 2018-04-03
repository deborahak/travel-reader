import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render(){
		return(
			<div>
				<Link to='/'><h1>Mysteries </h1></Link>
				<Link to='./search_results'><h1>Around the World</h1></Link>
			</div>
		  );
	}
}

export default Navbar;
