import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { searchBooks } from '../actions';

import { Field, reduxForm } from 'redux-form';
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';

import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import {
	Checkbox,
	Select,
	TextField
} from 'redux-form-material-ui';

const required = value => (value == null ? 'Required' : undefined);
//some latency build by me
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const styles = theme => ({
	root: {
    padding: '0px 33px 33px 33px',
  },
  inputWidth: {
    width: '20rem',
  },
  // inputLabelFocused: {
  //   color: '#6ff9ff', // #6ff9ff !important
  // },
  // inputUnderline: {
  //   color: '#6ff9ff', // #6ff9ff !important
  //   width: '20rem',
  //  '&:after': {
  //     backgroundColor: '#6ff9ff', // #6ff9ff !important
  //   },
  // },
  // formControl: { 
  //   width: '20rem',
  //   color: '#6ff9ff', // #6ff9ff !important
  //   '&:after': {
  //     backgroundColor: '#6ff9ff',
  //   },
  //},
  btnControl: {
    marginRight: 2+'em', 
    border: 1+'px solid #fff',
    color: '#fff',
  },
});


class SearchForm extends Component {
  constructor(props){
    super(props);
      this.state = {
        advanceForm: false
      }
  }
 
  onSubmit = (values) => {
    console.log(values);
    this.props.dispatch(searchBooks(values));
    return sleep(500)
    .then( () => this.setState( () => ({
      advanceForm: true
    }) ))
  }

	render() {
		const { classes, handleSubmit, pristine, reset, submitting } = this.props;

    if (this.state.advanceForm === true){
      return <Redirect to = '/search_results' />
    }

		return (
      <Grid container className={classes.root}>

        	<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

          		<Grid item>
                <h2>I want to read...</h2>

            		<FormControl>
              		  <InputLabel htmlFor="categories">Pick your poison...</InputLabel>
              		  <Field
                		  name="categories"
                		  component={Select}
                		  placeholder="Pick your poison"
                		  validate={required}
                		  className={classes.inputWidth}
              		  >
                		  <MenuItem value="mystery">Mysteries</MenuItem>
                		  <MenuItem value="thriller">Thrillers</MenuItem>
                		  <MenuItem value="suspense">Suspense</MenuItem>
              		  </Field>
            		</FormControl>
          		</Grid>

         		  <h2>in the amazing city of...</h2> 

          		  <Grid item>
            		<Field
              		name="city"
              		component={TextField}
              		placeholder="City"
                  label="City"
              		validate={required}
              		ref={this.saveRef}
              		withRef
                  className={classes.inputWidth}
            	 	 />
          		  </Grid>

          		<h2>in the country of...</h2> 

          		<Grid item>
           		 <Field
            	   name="country"
            	   component={TextField}
            	   placeholder="Country"
                 label="Country"
            	   validate={required}
                 className={classes.inputWidth}
          	  	/>
          		</Grid>

          	  <Grid item className="list-margin">
          	   	  <FormControlLabel control={ <Field name="E-Book" component={Checkbox} /> } label="E-Book" />
          	  </Grid>
        		  <Grid item className="list-margin">
            	  <FormControlLabel control={<Field name="Print" component={Checkbox} /> } label="Print" />
        		  </Grid>
          		<Grid item className="list-margin">
            	  <FormControlLabel control={<Field name="Used" component={Checkbox} /> } label="Used" />
          		</Grid>


          		<Grid item style={{marginTop: 1+'em'}}>
            		
          			<Button type="submit" 
                  disabled={submitting} 
          			  className={classes.btnControl}>
          			  Search!
                </Button>
          
          	   <Button
            		type="button"
            		disabled={pristine || submitting}
            		onClick={reset}
            		style={{border: 1+'px solid #fff'}}
          	   >
            		Clear
          	   </Button>
        	   </Grid>
          </form>        
        </Grid>
		)
	}
}



// const selector = formValueSelector('SearchForm');

SearchForm = connect(null, {
  searchBooks
}) (SearchForm);

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

SearchForm = reduxForm({
	form: 'SearchForm',
	initialValues: {
		// city: 'Rome',
		// country: 'Italy',
  //   categories: 'Mystery'
	},
})(SearchForm);

export default withStyles(styles)(SearchForm);




