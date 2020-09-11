const initialState = { daycares: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DAYCARES":
      state = {...state, daycares: action.payload}  
        return state.daycares.data.attributes.my_daycares
    case "ADD_DAYCARE":
      state = {...state, daycares: state.daycares.concat(action.payload)}  
        return state
    case "UPDATE_DAYCARE":
        return state.map(daycare => daycare.id === action.payload.id ? action.payload : daycare)    
    case "DELETE_DAYCARE":
        return state.filter(daycare => daycare.id === action.payload.id ? false : true)
      default:
        return state
  }
}