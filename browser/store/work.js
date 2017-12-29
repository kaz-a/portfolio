import axios from 'axios';

// action type
const GET_WORK = 'GET_WORK';


// action creator
const getWork = work => {
  return { type: GET_WORK, work }
}


// thunks
export const fetchWork = () => dispatch => {
  axios.get('/api/work')
    .then(res => dispatch(getWork(res.data)))
    .catch(console.log)
}

export const postWork = newWork => dispatch => {
  axios.post('/api/work', newWork)
    .then(() => dispatch(fetchWork()))
    .catch(console.log)
}


// reducers
export default (state = [], action) => {
  switch(action.type){
    case GET_WORK:
      return action.work
    default: 
      return state;
  }
}