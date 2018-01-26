import firebase from 'firebase';
import { fetchFlip } from './flip.js';
import { fetchSettings } from './setting.js';

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
        dispatch(fetchSettings(user.displayName));
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
