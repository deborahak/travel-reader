import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import grey from 'material-ui/colors/grey';
const complementary = grey[400]; // #E1E2E1

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: complementary,
    padding: '2rem',
    backgroundImage: 'FoggyNight.png',
    backgroundMode: 'multiply',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class Faqs extends Component {
	render(){
		const { classes } = this.props;

		return (
			<div className={classes.root}>
        	  <Grid container spacing={16}>
          		<Grid item xs={12}>
              	  <h2>FAQS and TIPS</h2>
               		<p className='dark'>Do you have a question?  Want to know why?  Here we go...
               		</p>
          		</Grid>          
          		<Grid item xs={12}>
              	  <h2>Why mysteries?</h2>
               		<p className='dark'>Why not?  Really though, mysteries can be exteremly evocative of the local ambiance, truly enhancing a rainy or gloomy day. 
               		Think about it, Sherlock Holmes, Miss Marple, and Maigret all epitomize their locale, and even use the setting almost as another character. 
               		Besides, I love a good murder mystery, especially when the bad guy gets caught!
               		</p>
          		</Grid>
              <Grid item xs={12}>
                  <h2>How does this work?</h2>
                  <p className='dark'>
                  Pick a genre, pick a city, pick a country.  You do have to pick all three!  Then this lovely librarian will go find you a book!  
                  </p>
              </Grid>
         		<Grid item xs={12} sm={3}>
            	  <Paper className={classes.paper}>
                  <img className="faqs_bobbieTorch" alt='' />
                </Paper>
          		</Grid>
          		<Grid item xs={6} sm={6}>
            	  <Paper className={classes.paper}> 
                  <img className="faqs_bookCat" alt='' />
                </Paper>
          		</Grid>
          		<Grid item xs={6} sm={3}>
            	  <Paper className={classes.paper}>
                  <img className="faqs_bookStreet" alt='' />
                </Paper>
          		</Grid>
          	
        	  </Grid>
			</div>
			);
	}
}

Faqs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Faqs);