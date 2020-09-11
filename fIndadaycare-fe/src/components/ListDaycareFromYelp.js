import React from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews.js';
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import { fetchAddDaycare } from '../actions/myDaycares.js';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

const ListDaycareFromYelp = (props) => {

  const handleOnClick = (e, daycare) => {
    e.preventDefault();
    props.fetchAddDaycare(daycare)
  }

  const renderDaycares = () => {
    return props.daycares.map((daycare) => {
      return (
        <li className="daycare-card" key={daycare.id}>
        <h1 className="daycare__name">{daycare.name}</h1>
          <img className="daycare__img" src={daycare.image_url} alt={`daycare: ${daycare.name}`}/>
          <p className="daycare__address"> <Icon className="daycare__icon" path={mdiMapMarker} title="Daycare Address" description={daycare.location.display_address} size={1} color="red"/> {daycare.location.address1} {daycare.location.city}, {daycare.location.state} {daycare.location.zip_code}| {daycare.display_phone} </p>
          <h2 className="daycare__rating">Rating: {daycare.rating}</h2>
          <p className="daycare__review"><strong>Reviews</strong></p><p className="daycare__review"><strong>Reviews</strong></p>
          <Reviews reviews={daycare.reviews}/>
          <Button onClick={(e) => handleOnClick(e, daycare)}
            variant="contained"
            color="primary"
            size="large"
            className="daycare__button" 
            startIcon={<SaveIcon />}
          >
           Bookmark
          </Button>
        </li>
      );
    })
  }

  return (  
    <ul>
      {renderDaycares()}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    daycares: state.daycaresFromYelp.daycares
  }
}

export default connect(mapStateToProps, {fetchAddDaycare})(ListDaycareFromYelp);