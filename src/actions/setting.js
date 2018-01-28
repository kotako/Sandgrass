import { firebaseDB } from '../firebase';

export const fetchSettings = (name) => {
  return async dispatch => {
    dispatch(loading());
    const res = await firebaseDB.ref(`settings/${name}`).once('value');
    dispatch(receiveSettings(res.val()));
  }
}

export const postSettings = (name, settings) => {
  return async dispatch => {
    await firebaseDB.ref(`settings/${name}`).update(settings);
    dispatch(receiveSettings(settings));
  }
}

export const loading = () => {
  return { type: 'LOADING_SETTINGS' }
}

export const receiveSettings = (json) => {
  return { type: 'FETCH_SETTINGS_SUCCESS', response: json }
}
