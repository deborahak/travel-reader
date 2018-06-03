import React, { Component } from 'react';
import { connect } from 'react-redux';
import {rateBook} from '../actions';


import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
//import Button from 'material-ui/Button';

import { Rating } from 'material-ui-rating';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import '../style/App.css';


const styles = theme => ({
  root: {
    flexGrow: 1,
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
    height: 80,
    color: '#413f46',
  },
  bookTitle: {
    // color: '#413f46',
    fontSize: 1.025+'rem',
    margin: '.5em 0',
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        flex: '0 0 auto',
        width: 25 + 'px',
        height: 33 + 'px',
        padding: 0 + 'px',
      },
    },
    MuiSvgIcon: {
      root: {
        fill: '#413f46',
        fontSize: 20 + 'px',
      },
    },
  },
});

// function newRating(num){
//   var prevRating = 3;
//   var ratingsCount = 1;
//   var userRating = num;
//   var n = ((prevRating * ratingsCount) + userRating) / (ratingsCount + 1);
//   console.log(n + ' is the new rate');
//   return n;
// };
// var booky = newRating(5);

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 3
    }
  }
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
      <MuiThemeProvider theme={theme}>
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
                    {
                      ( (book.averageRating === undefined) )
                      ? <Rating
                      value = {book.averageRating}
                      max = {5}
                      onChange={(userRating) => this.props.rateBook(userRating, book.id, book.averageRating = 0, book.ratingsCount= 0)}
                      />
                      : <Rating
                      value = {book.averageRating}
                      max = {5}
                      onChange={(userRating) => this.props.rateBook(userRating, book.id, book.averageRating, book.ratingsCount)}
                      />
                      
                    }
                
                  </Paper>
                </Grid>

              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </MuiThemeProvider>
		);
	}	
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps ( state ) {
    console.log(typeof state.booksearch);
    // console.log(state.booksearch.booksearch.length);
    // console.log( {booksearch: state.booksearch.booksearch[0].title} );
    return { booksearch: state.booksearch.booksearch };
};

const mapDispatchToProps = {rateBook};

const stylishResults = withStyles(styles)(SearchResults);

export default connect(mapStateToProps, mapDispatchToProps)(stylishResults);

//export default connect(mapStateToProps)(newRating);
