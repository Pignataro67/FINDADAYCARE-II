export const daycaresFromYelp = (businesses) => {
  return { type: "LIST_DAYCARES_SEARCHED", payload: businesses };
}

export const fetchDaycareFromYelp = (value) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = `https://api.yelp.com/v3/businesses/search?term=daycare&location=${value}&limit=5`
  return dispatch => {
    fetch(proxyurl + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 5BCE_9Zk-nhS7EcP1fYA0WcOf1L1Xq8hAY_mN5blb3Q4fH4Q-OqhBDxHGbEJstY8hOPn3WSyyHL_pdiaXiisk1fICFG445i4fUARZmQxiuhSudJo4YZ0RKOXV69SXXYx',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        const businesses = data.businesses;
        businesses.map(business => dispatch(loadingReviewsYelp(business))) 
      })
  }
}

export const loadingReviewsYelp = (business) => {
  const businessId = business.id
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`
  return dispatch => {
    fetch(proxyurl + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 5BCE_9Zk-nhS7EcP1fYA0WcOf1L1Xq8hAY_mN5blb3Q4fH4Q-OqhBDxHGbEJstY8hOPn3WSyyHL_pdiaXiisk1fICFG445i4fUARZmQxiuhSudJo4YZ0RKOXV69SXXYx',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        business.reviews =  data.reviews
        return dispatch(daycaresFromYelp(business))
      })
    }
}