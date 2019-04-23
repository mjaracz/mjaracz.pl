import {all}  from 'redux-saga/effects';
import {reposWatcher} from './sagaRepos';
import {projectsWatcher} from './sagaProjects';

function* rootSaga() {
  yield all([
    reposWatcher(),
    projectsWatcher()
  ]);
}

export default rootSaga;
