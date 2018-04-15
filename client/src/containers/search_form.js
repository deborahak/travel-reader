import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import { Field, reduxForm, formValueSelector } from 'redux-form';
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel, FormControlText } from 'material-ui/Form';
// import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
// import { withStyles } from 'material-ui/styles';

import {
	Checkbox,
	// RadioGroup,
	Select,
	TextField
} from 'redux-form-material-ui';

const required = value => (value == null ? 'Required' : undefined);

const styles = {
	root: {
    flexGrow: 1
  },
  inputLabelFocused: {
    color: '#6ff9ff', // #6ff9ff !important
  },
  inputUnderline: {
    color: '#6ff9ff', // #6ff9ff !important
    width: '20rem',
   '&:after': {
      backgroundColor: '#6ff9ff', // #6ff9ff !important
    },
  },
  formControl: { 
    width: '20rem',
    color: '#6ff9ff', // #6ff9ff !important
    '&:after': {
      backgroundColor: '#6ff9ff',
    },
  },
  error: {
    

  },
  btnControl: {
    marginRight: 2+'em', 
    border: 1+'px solid #fff',
    color: '#fff',
  },
};


class SearchForm extends Component {
	ComponentDidMount(){
    // this.refs.genre // the Field
    //   .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    //   .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    //   .focus(); // on TextField
  }

  onSubmit(values) {
    console.log(values);
  }

	render() {
		const { handleSubmit, pristine, reset, submitting, classes} = this.props;

		return (
      <Grid container style={styles.root}>

        	<form style={styles.root} onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

          		<Grid item>
                <h2>I want to read...</h2>

            		<FormControl>
              		  <InputLabel htmlFor="genre">Pick your poison...</InputLabel>
              		  <Field
                		name="genre"
                		component={Select}
                		placeholder="Pick your poison"
                		validate={required}
                		style={styles.inputUnderline}
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
              		validate={required}
              		ref={this.saveRef}
              		withRef
            	 	 />
          		  </Grid>

          		<h2>in the country of...</h2> 

          		<Grid item>
           		 <Field
            	  name="country"
            	  component={TextField}
            	  placeholder="Country"
            	  validate={required}
                style={styles.formControl}
          	  	/>
          		</Grid>

          		<Grid item className="list-margin">
          	   	  <FormControlLabel control={<Field name="E-Book" component={Checkbox} /> } label="E-Book" />
          		</Grid>
        		<Grid item className="list-margin">
            	  <FormControlLabel control={<Field name="Print" component={Checkbox} /> } label="Print" />
        		</Grid>
          		<Grid item className="list-margin">
            	  <FormControlLabel control={<Field name="Used" component={Checkbox} /> } label="Used" />
          		</Grid>
          		<Grid item>
            	  <Field
              		name="notes"
              		component={TextField}
              		placeholder="Notes"
              		label="Notes"
              		rows={4}
                  style={styles.formControl}
            	  />
          		</Grid>

          		<Grid item style={{marginTop: 1+'em'}}>
            		<Link to ="/search_results">
            			<Button type="submit" disabled={submitting} 
            			style={styles.btnControl}>
            			Search!</Button>
            		</Link>
            
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
		);
	}
}


const selector = formValueSelector('SearchForm');

SearchForm = connect(state => ({
	genre: selector(state, 'genre'),

}))(SearchForm);

SearchForm = reduxForm({
	form: 'search',
	initialValues: {
		// city: 'Rome',
		// country: 'Italy'
	},
})(SearchForm);

export default SearchForm;




