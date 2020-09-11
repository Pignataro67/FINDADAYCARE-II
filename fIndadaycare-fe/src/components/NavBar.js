import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const NavBar = ({ loggedIn }) => {

  const classes = useStyles();
  return (
    <nav className="NavBar">
      <div>
      <Button className={classes.button} size="large" href={'/'}> Search </Button>
      <Button className={classes.button} size="large" href={'/my-daycares'}> My Daycares </Button>
      { loggedIn ? <Button className={classes.button} size="large" href={'/logout'}> Logout </Button> 
        :  
      <Button className={classes.button} size="large"href={'/login'}> Log In </Button>} <br></br>
      </div>
      <br></br>
    </nav>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);