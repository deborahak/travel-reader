import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const secondary = '#84b8bd';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: secondary,
     padding: '2rem'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class About extends Component {
	render(){
		const { classes } = this.props;

		return (
			<div className={classes.root}>
			  <Grid container spacing={16}>
			  	<Grid item xs={12}>
			  	  <h2>All About This Project</h2>
					<p className='dark'>Bring your travels to life!  
					Find a book set in your travel destination.
					Then find a cozy spot to read it...</p>
					<p className='dark'>A mystery or thriller gives you a peek into the dark side
					 of your destination.  The police, the justice system, the 
					 dim creepy places that you see out of the corner of your eye...
					 All of these combine to give you a feel of place, 
					 especially when reading in a cozy cafe in a foreign city. </p>
				</Grid>
			  	<Grid item xs={12}>
			  	  <h2>A bit about me</h2>
			  	  <p className='dark'>Whenever I travel, I have books to read.  On my tablet, 
			  	  paperbacks, hardbacks...always something to read. 
			  	  And when I am not travelling I read about the places I 
			  	  want to visit, fueling my dreams. </p>
			  	</Grid>
			  	<Grid item xs={12}>
			  	</Grid>
			  </Grid>			  	

			</div>
		);
	}
}

About.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
