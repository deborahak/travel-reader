import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
// import Button from 'material-ui/Button';
import SearchForm from '../containers/search_form';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const theme = createMuiTheme({
  palette: ({
    primary: {
      main: '#3f51b5',
    },
    error: {
      light: '#0066ff',
      main: '#6ff9ff',
      contrastText: '#fff',
    },
  }),
  overrides: {
    MuiInput: {
      input: {
        color: '#6ff9ff',
      },
    },
  },
});

class App extends Component {
  // componentDidMount() {
  //   fetch('/booksearch')
  //     .then(res => res.json())
  //     .then(bookresult => this.setState({ bookresult }));
  //   }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={16}>          
          <Grid item xs={12}>
          
            <SearchForm />
          
          </Grid>    
        </Grid>
      </div>
      </MuiThemeProvider>
      );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);

