import React, {Component} from 'react';
// import { Link, Route } from 'react-router-dom';
// import GoogleMap from '../containers/google-map';
import SearchForm from '../containers/search_form';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import '../style/App.css';


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
		const { classes } = this.props;
		const MAX_LENGTH = 42;
		const MAX_CHAR = 15;

		return (
      <Grid container className={classes.root}>

          <Grid item xs={12}>
	        <h3>Books set in your favorite city</h3>                    
          </Grid>

        <Grid container          
          direction='row'
          justify='center'
          >
          <Grid item xs={12} sm={12}>
            <Grid container justify="center" spacing={Number("16")}>
              {this.state.bookresult.map(books => (
                <Grid key={books.id} item>
                  <Paper className={classes.paper}>
                  
                    { 
                      (books.thumbnail === '')
                      ? <img src="" height="183" width="123" alt=" " /> 
                      : <a href={books.link} target="_blank"><img src={books.thumbnail} height="173" width="113" alt=" " /></a>
                    }

                    <Grid item className={classes.bookHeadline}>
                    { 
                     (books.title.length > MAX_LENGTH)
                      ? <a href={books.link} target="_blank"><h3>{books.title.substring(0, MAX_LENGTH)}...</h3></a> 
                      : <a href={books.link} target="_blank"><h3>{books.title}</h3></a> 
                    }
                    </Grid>

                    {
                      (books.authors == null)
                       ? <h5>By: Unpublished</h5>
                       : <h5>By: {books.authors.toString().substring(0, MAX_CHAR)}...</h5> 
                    }

                    {
                      ( (books.categories == null)  )
                      ? <h5>Genre: Undefined</h5>
                      : <h5>Genre: {books.categories.toString().substring(0, MAX_CHAR)}...</h5>
                    }
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
		);
	}	
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchResults);
