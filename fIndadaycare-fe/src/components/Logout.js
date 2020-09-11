import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Logout = ({ logout, history }) => {
  const classes = useStyles();
  return (
  <form onSubmit={ e => {
    e.preventDefault();
    logout()
    history.push('/')
  }}>
    <Button 
      color="secondary" 
      className={classes.button}
      type="submit">
      Logout
    </Button>    
  </form>
  )
}

export default withRouter(connect(null, { logout })(Logout));