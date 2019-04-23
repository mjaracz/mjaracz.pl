import {combineReducers} from 'redux';
import reposReducer from './repos'
import projectsReducer from "./projects";

const rootReducer = combineReducers({
  repos: reposReducer,
  projects: projectsReducer
});

export default rootReducer;
