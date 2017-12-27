import Moment from 'moment';
import { firebaseDB } from '../firebase';

export const fetchFlip = () => {
  return dispatch => {
    const username = 'Takorras'
    firebaseDB.ref(`users/${username}`).on(
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

export const postFlip = () => {
  return dispatch => {
    const username = 'Takorras';
    firebaseDB.ref(`users/${username}`).push().set({
      started_at: Moment().unix() - 15000,
      finished_at: Moment().unix(),
      commits: 3,
      repos: 'Cider',
      langs: 'kotlin'
    })
  }
}

export const fetchFlipSuccess = (flips) => {
  return {
    type: 'FETCH_FLIP_SUCCESS',
    flips: flips
  }
}

export const fetchFlipFailed = (error) => {
  return {
    type: 'FETCH_FAILED',
    error: error
  }
}
