import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render(){

		return(
			<div>
				<Link to='/'><h1 className='main_title'>Murder Around the World</h1></Link>
				  <h3 className="results">Books set in your favorite city</h3>
			</div>
		  );
	}
}

export default Navbar;
