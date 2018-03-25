import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import GoogleMap from '../containers/google-map';
import '../style/App.css';

class SearchResults extends Component {
	state = { bookresult: [] }

	componentDidMount() {
		fetch('/booksearch')
		.then(res => res.json())
		.then(bookresult => this.setState({ bookresult }));
	}

	render() {
		return (
			<div>
				<GoogleMap />
				<div className="searches">
					<h1>Books</h1>
					{this.state.bookresult.map(books =>
						<div key={books.id}>
							<h2>{books.title}</h2>
							<h3>{books.authors}</h3>
						</div>
					)}
				</div>
			</div>
		);
	}	
}

export default SearchResults;
