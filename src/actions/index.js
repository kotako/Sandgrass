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

export const postFlip = (startedAt, finishedAt, commits, repos, langs) => {
  return dispatch => {
    const username = 'Takorras';
    firebaseDB.ref(`users/${username}`).push().set({
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
    flips: flips
  }
}

export const fetchFlipFailed = (error) => {
  return {
    type: 'FETCH_FAILED',
    error: error
  }
}
