import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import daycaresFromYelp from './reducers/searchDaycare.js';
import myDaycares from './reducers/myDaycares.js';
import signupForm from './reducers/signupForm.js';
import daycareForm from './reducers/daycareForm.js';

const reducer = combineReducers({
  currentUser,
  loginForm,
  daycaresFromYelp,
  myDaycares,
  signupForm,
  daycareForm
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)));

export default store; 