import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
// import Button from 'material-ui/Button';
import SearchForm from '../containers/search_form';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import '../style/App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class App extends Component {
  // state = {bookresult: []}

  // componentDidMount() {
  //   fetch('/booksearch')
  //     .then(res => res.json())
  //     .then(bookresult => this.setState({ bookresult }));
  //   }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>          
          <Grid item xs={12}>
          
            <SearchForm />
          
          </Grid>    
        </Grid>
        </div>
      );
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);

