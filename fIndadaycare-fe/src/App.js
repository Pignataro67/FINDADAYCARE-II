import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login.js';
import MyDaycares from './components/MyDaycares.js';
import SearchDaycare from './components/SearchDaycare.js';
import Signup from './components/Signup.js';
import Logout from './components/Logout.js';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div  className="container">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={SearchDaycare}/>
          <Route exact path='/signup' render={({history}) => <Signup history={history} /> }/>   
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/my-daycares' component={MyDaycares} />
        </Switch>      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));