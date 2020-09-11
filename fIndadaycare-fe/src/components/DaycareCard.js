import React from 'react';
import { connect } from 'react-redux';
import { updateDaycareForm, fetchUpdateDaycare, resetDaycareForm } from '../actions/daycareForm.js';
import { fetchDeleteDaycare } from '../actions/myDaycares.js';
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

class DaycareCard extends React.Component {

useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
}));

classes = () => this.useStyles();

handleInputChange = e => {
  const { name, value } = e.target;
  const updateDaycareInfo = {
    ...this.props.daycareFormData,
    [name]: value
  }
  this.props.updateDaycareForm(updateDaycareInfo)
}

handleSubmit = (e) => {
  e.preventDefault()
  const userId = this.props.user.id
  const daycareId = this.props.daycare.id
  this.props.fetchUpdateDaycare(this.props.daycareFormData, this.props.daycare.notes, userId, daycareId)
}

handleDeleteDaycare = (e, daycare, user )  => {
  e.preventDefault();
  this.props.fetchDeleteDaycare(daycare, user.id)
}

  render() {
    return (
      <div key={this.props.daycare.id} className="daycare-card">
        <h1 className="daycare__name">{this.props.daycare.name}</h1>
        <h2 className="daycare__rating">Rating: {this.props.daycare.rating}</h2>
        <p className="daycare__address"> <Icon className="daycare__icon" path={mdiMapMarker} title="Daycare Address" description={this.props.daycare.location} size={1} color="red"/>Location: {this.props.daycare.location} | Phone: {this.props.daycare.phone}</p>
        <p className="daycare__review"><strong>Notes: </strong>{this.props.daycare.notes}</p>
          <form onSubmit={this.handleSubmit} className="daycare__review">
            <label> Notes: 
              <input className="daycare__notes" onChange={this.handleInputChange} type="text" placeholder="Add new note" name="notes" value={ this.props.daycareFormData.notes }/>
            </label> 
            <br></br>
            <label> Schedule a Visit
              <input className="daycare__schedule" onChange={this.handleInputChange} type="text" placeholder={this.props.daycare.schedule_visit} name="scheduleVisit" value={this.props.daycareFormData.schedule_visit}/>
            </label> 
            <br></br>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SaveIcon />}>
                Save
            </Button>
            <Button onClick={(e) => this.handleDeleteDaycare(e, this.props.daycare, this.props.user)}
            variant="contained"
            color="secondary"  
            endIcon={<DeleteIcon />}>
              Delete
            </Button>
          </form> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    daycareFormData: state.daycareForm,
  }
}

export default connect(mapStateToProps,{ fetchDeleteDaycare, updateDaycareForm, fetchUpdateDaycare, resetDaycareForm })(DaycareCard);