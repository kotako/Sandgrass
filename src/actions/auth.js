import firebase from 'firebase';
import { firebaseDB } from '../firebase';
import { fetchFlip, fetchFlipToday } from './flip.js';
import { fetchSettings } from './setting.js';

export const authWithGitHub = () => {
  return dispatch => {
    // リダイレクトで来たのかどうか確認して、そうならユーザネームを変更
    firebase.auth().getRedirectResult()
      .then(result => {
        if (result.user) {
          firebaseDB.ref(`tokens/${result.additionalUserInfo.username}`).set({ accessToken: result.credential.accessToken });
          firebase.auth().currentUser.updateProfile({ displayName: result.additionalUserInfo.username });
        }
      })
    // 認証済みかどうか確認
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authorizationSuccess(user));
        dispatch(fetchAccessToken(user.displayName));
        dispatch(fetchFlip(user.displayName));
        dispatch(fetchSettings(user.displayName));
        dispatch(fetchFlipToday(user.displayName));
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

export const fetchAccessToken = (name) => {
  return dispatch => {
    firebaseDB.ref(`tokens/${name}`).child('accessToken').once('value',
      (snapshot) => { dispatch(fetchAccessTokenSuccess(snapshot.val())); }
    )
  }
}

export const fetchAccessTokenSuccess = (token) => {
  return { type: 'FETCH_ACCESS_TOKEN_SUCCESS', accessToken: token };
}

export const authorizationSuccess = (result) => {
  return {
    type: 'LOGIN_SUCCESS',
    name: result.displayName,
    profileUrl: result.photoURL
  }
}

export const authorizationFailed = (error) => {
  return { type: 'LOGIN_FAILED' }
}
