import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';
import { Link } from 'react-router-dom';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div  className="login__page">
      <form className="register__form" onSubmit={handleSubmit}>
        <label name="username">
          <input className="register__input" placeholder="Username" value={signupFormData.name} name="username" type="text" onChange={handleUserInfoInputChange} />
          </label><br></br>
            <label name="email">
              <input className="register__input" placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
              </label><br></br>
              <label name="password">
              <input className="register__input" placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleUserInfoInputChange} />
              </label><br></br>
              <input className="register__button" type="submit" value="Create"/>
        <p className="register__message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    </div>           
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);