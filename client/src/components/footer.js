import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
  	padding: '0px 33px 33px 33px',
  	borderTop: '2px solid #cccccc',
  	backgroundColor: '#171619',
  },
  list: {
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    height: '60px',
    alignItems: 'center',
  },
  item: {
	  padding: '20px',
	  width: 'fit-content',
	  margin: '5px',
	  lineHeight: '50px',
	  textAlign: 'center',
	  verticalAign: 'middle',
  },
  // control: {
  //   padding: theme.spacing.unit * 2
  // }
};

class Footer extends Component {
	render(){
		const { classes } = this.props;

		return (
			<Grid container className={classes.root}>
			  	<Grid item xs={12} sm={12} style={styles.fixedFooter}>
					<ul style={styles.list}>
					  <li style={styles.item}>
					  	<h5><Link to="/" className="">
					  		HOME
					  		</Link>
					  	</h5>
					  </li>

					  <li style={styles.item}>					
						<h5>
						  <Link to="/about">
							    ABOUT
						  </Link>
						</h5>
					  </li>
						
					  <li style={styles.item}>				
						<h5>
						  <Link to="/faqs" style={styles.hover}>
						      FAQS
						  </Link>
						</h5>
					  </li>
	        		</ul>

		  		</Grid>

			</Grid>			  	

		);
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
