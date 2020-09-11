const initialState = { daycares: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LIST_DAYCARES_SEARCHED":
      state = {...state, daycares: state.daycares.concat(action.payload)}
        state.daycares.sort(function (a,b) {
      return b.rating - a.rating;
    });   
      return state
    default:
      return state
  }
}