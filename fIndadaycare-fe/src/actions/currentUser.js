import { resetSignupForm } from "./signupForm.js";
import { fetchGetDaycare } from "./myDaycares.js";

export const setCurrentUser = user => {
  return {
      type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(resetSignupForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const login = (credentials, history) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      credentials: "include",
      method: "POST",
      headers: {
      "Content-type": "application/json"
    },
      body: JSON.stringify({credentials})
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
      alert(user.error)
    } else {
      dispatch(setCurrentUser(user))
      dispatch(fetchGetDaycare(user.id))
        hitory.push('/')
        console.log("Sucess, you are logged in")
      }
    })
    .catch(console.log("pass")) 
  }
} 

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/get_current_user', {
      credentials: "include",
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          dispatch(fetchGetDaycare(user.id))
        }
    })
    .catch(console.log)
  }
}

export const logout = (e) => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3001/api/v1/destroy', {
        credentials: "include",
      method: "DELETE",
    })
  }
}