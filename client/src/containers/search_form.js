import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Field, reduxForm, formValueSelector } from 'redux-form';
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';

import {
	Checkbox,
	Select,
	TextFiels
} from 'redux-form-material-ui'

const required = value => (value == null ? 'Required' : undefined);

class SearchForm extends Component {
	ComponentDidMount(){}
	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<div>
					<InputLabel htmlFor="city">City</InputLabel>
					<Field name="city" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="country">Country</label>
					<Field name="country" component="input" type="text"/>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

SearchForm = reduxForm({
	form: 'search'
})(SearchForm);

export default SearchForm;