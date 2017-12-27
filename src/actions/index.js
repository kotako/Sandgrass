import Moment from 'moment';
import { firebaseDB } from '../firebase';

export const fetchUserData = () => {
  return dispatch => {
    const username = 'Takorras'
    firebaseDB.ref(`users/${username}`).once(
      'value',
      (snapshot) => {
        console.log(snapshot.val())
        dispatch(fetchSuccess(snapshot.val()));
      },
      (error) => {
        console.log(error)
        dispatch(fetchFailed(error));
      }
    )
  };
}

export const postUserData = () => {
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

export const fetchSuccess = (flips) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    flips: flips
  }
}

export const fetchFailed = () => {
  return {
    type: 'FETCH_FAILED'
  }
}

export const timerSwitch = () => {
  return {
    type: 'TIMER_BUTTON_SWITCH',
    now: Moment().unix()
  }
}

export const adjustTimer = (remain) => {
  const times = [10, 600, 1500, 3000];
  return {
    type: 'TIMER_ADJUSTED',
    remain: times[(times.indexOf(remain) + 1) % times.length]
  }
}

export const tick = () => {
  return { type: 'TIMER_TICK' }
}

export const init = () => {
  return { type: 'INIT' }
}

export const finish = () => {
  return {
    type: 'WORK_FINISHED'
  }
}
