import { firebaseDB } from '../firebase';
import firebase from 'firebase';
import Moment from 'moment';

export const authWithGitHub = () => {
  return dispatch => {
    // リダイレクトで来たのかどうか確認して、そうならユーザネームを変更
    firebase.auth().getRedirectResult()
      .then(result => {
        if (result.user) {
          firebase.auth().currentUser.updateProfile({ displayName: result.additionalUserInfo.username })
        }
      })
    // 認証済みかどうか確認
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authorizationSuccess(user));
        dispatch(fetchFlip(user.displayName));
      } else {
        dispatch(authorizationFailed());
      }
    })
  }
}

export const redirectToGitHub = () => {
  return dispatch => {
    firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider());
  }
}

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

export const authorizationSuccess = (result) => {
  return {
    type: 'LOGIN_SUCCESS',
    name: result.displayName,
    profileUrl: result.photoURL
  }
}

export const authorizationFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
  }
}

export const fetchFlipSuccess = (flips) => {
  return {
    type: 'FETCH_FLIP_SUCCESS',
    flips: flips,
    flipsArrayToday: findFlipsToday(flips)
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
