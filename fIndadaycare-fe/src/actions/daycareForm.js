import { updateDaycare } from '../actions/myDaycares.js';

export const updateDaycareForm = (daycareForm) => {
  return {
    type: "UPDATE_DAYCARE_FORM",
    daycareForm
  }
}

export const resetDaycareForm = () => {
  return {
    type: "RESET_DAYCARE_FORM"
  }
}

export const fetchUpdateDaycare = (daycareFormData, daycareNote, userId, daycareId) => {
  console.log(daycareNote)
    if (!daycareNote) {
      daycareNote = " "
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

  console.log("after if,:", daycareNote)

  const sendDaycareData = {
    notes: daycareNote + ` |${today} `  + daycareFormData.notes,
    schedule_visit: daycareFormData.scheduleVisit 
  }

  return dispatch => {
    const url = `http://localhost:3001/api/v1/users/${userId}/my_daycares/${daycareId}`
    return fetch(url, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(sendDaycareData)
    })
      .then(r => r.json())
      .then(res => {
        if (res.error){
          alert(res.error)
        } 
        else {
          dispatch(updateDaycare(res))
        }
    })
    .catch(console.log)
  }
}