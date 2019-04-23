import {call, put, takeEvery} from 'redux-saga/effects';
import {get} from "../api";

function* getRepos() {
  try {
    const url = 'https://api.github.com/users/mjaracz/repos?sort=updated';
    const repos = yield call(get, url);
    yield put({type: 'FETCH_REPOS', payload: repos})
  }
  catch(e) {
    yield put({type: 'ERROR_REPOS', payload: e})
  }
}

export function* reposWatcher() {
  yield takeEvery ('GET_REPOS', getRepos)
}
