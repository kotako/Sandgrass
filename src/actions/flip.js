import { firebaseDB } from '../firebase';
import Moment from 'moment';

export const fetchFlip = (name) => {
  return dispatch => {
    firebaseDB.ref(`users/${name}`).on(
      'value',
      (snapshot) => {
        dispatch(fetchFlipSuccess(snapshot.val()));
      },
      (error) => {
        dispatch(fetchFlipFailed(error));
      }
    )
  };
}

export const postFlip = (name, startedAt, finishedAt, commits, repos, langs) => {
  return dispatch => {
    firebaseDB.ref(`users/${name}`).push().set({
      started_at: startedAt,
      finished_at: finishedAt,
      working_time: finishedAt - startedAt,
      commits: commits ? commits : 0,
      repos: repos ? repos : null,
      langs: langs ? langs: null
    })
  }
}


export const fetchFlipSuccess = (flips) => {
  return {
    type: 'FETCH_FLIP_SUCCESS',
    flips: flips,
    flipsArrayToday: findFlipsToday(flips),
    langs: findLangs(flips)
  }
}

export const fetchFlipFailed = (error) => {
  return {
    type: 'FETCH_FAILED',
    error: error
  }
}

const findFlipsToday = flips => {
  let result = [];
  Object.keys(flips).forEach((key) => {
    if (flips[key].started_at >= Moment().startOf('date').unix()){
      result.push(flips[key]);
    }
  })
  return result;
}

const findLangs = flips => {
  let result = [];
  Object.keys(flips).forEach (key => {
    if (flips[key].langs) {
      flips[key].langs.forEach(lang => {
        if (!result.includes(lang)) result.push(lang)
      })
    }
  })
  return result;
}
