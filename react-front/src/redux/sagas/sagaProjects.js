import {call, put, takeEvery} from 'redux-saga/effects';
import {get} from '../api'

function* getProjects() {
  try {
    const url = 'http://localhost:3000/api/projects';
    const data = yield call(get, url);
    yield put({type: 'FETCH_PROJECTS', payload: data.projects})
  }
  catch(e) {
    yield put({type: 'ERROR_PROJECTS', payload: e})
  }
}

export function* projectsWatcher() {
  yield takeEvery('GET_PROJECTS', getProjects)
}
