import axios from 'axios';

// action type
const GET_PROJECTS = 'GET_PROJECTS';


// action creator
const getProjects = projects => {
  return { type: GET_PROJECTS, projects }
}


// thunks
export const fetchProjects = () => dispatch => {
  axios.get('/api/projects')
    .then(res => dispatch(getProjects(res.data)))
    .catch(console.log)
}

export const postProject = newProject => dispatch => {
  axios.post('/api/project', newProject)
    .then(() => dispatch(fetchProjects()))
    .catch(console.log)
}


// reducers
export default (state = [], action) => {
  switch(action.type){
    case GET_PROJECTS:
      return action.projects
    default: 
      return state;
  }
}