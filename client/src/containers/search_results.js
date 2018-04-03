import React, {Component} from 'react';
// import { Link, Route } from 'react-router-dom';
import GoogleMap from '../containers/google-map';
import '../style/App.css';
import SearchForm from '../containers/search_form';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    width: 220,
    height: 385
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});


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

				<SearchForm />

				<div className="searches">
					<h1>Books set in Your City!</h1>
					{this.state.bookresult.map(books =>
					 <div key={books.id}>
						<img src={books.thumbnail} height="183" width="123" alt={books.title} />							
						<h2>{books.title}</h2>
						<h3>{books.authors}</h3>
					 </div>
					)}
				</div>
			</div>
		);
	}	
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchResults);
