import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  },
  bookHeadline: {
    height: 90,
  }
});


class SearchResults extends Component {
	// state = { bookresult: [] }

	// componentDidMount() {
	// 	 fetch('/booksearch')
 //     .then(res => res.json())
 //     .then(bookresult => this.setState({ bookresult }));
	// }

  
	render() {
		const { classes } = this.props;
		const MAX_LENGTH = 42;
		const MAX_CHAR = 15;

		return (
      <Grid container className={classes.root}>
          <Grid item xs={12} sm={10}>
          <p></p>
          </Grid>

        <Grid container          
          direction='row'
          justify='center'
          >
          <Grid item xs={12} sm={12}>
            <Grid container justify="center" spacing={Number("16")}>
              {this.props.booksearch.map(book => (
                <Grid key={book.id} item>
                  <Paper className={classes.paper}>
                  
                    { 
                      (book.thumbnail === '')
                      ? <img src="" height="183" width="123" alt=" " /> 
                      : <a href={book.link} target="_blank"><img src={book.thumbnail} height="173" width="113" alt=" " /></a>
                    }

                    <Grid item className={classes.bookHeadline}>
                    { 
                     (book.title)
                      ? <a href={book.link} target="_blank"><h3>{book.title.substring(0, MAX_LENGTH)}...</h3></a> 
                      : <a href={book.link} target="_blank"><h3>{book.title}</h3></a> 
                    }
                    </Grid>

                    {
                      (book.authors == null)
                       ? <h5>By: Unpublished</h5>
                       : <h5>By: {book.authors.toString().substring(0, MAX_CHAR)}...</h5> 
                    }

                    {
                      ( (book.categories == null)  )
                      ? <h5>Genre: Undefined</h5>
                      : <h5>Genre: {book.categories.toString().substring(0, MAX_CHAR)}...</h5>
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

function mapStateToProps ( state ) {
    console.log(typeof state.booksearch);
    console.log(state.booksearch.booksearch.length);
    // console.log( {booksearch: state.booksearch.booksearch[0].title} );
    return { booksearch: state.booksearch.booksearch };
};

const stylishResults = withStyles(styles)(SearchResults);

export default connect(mapStateToProps)(stylishResults);


