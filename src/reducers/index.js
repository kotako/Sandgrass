import { combineReducers } from 'redux';
import timer from './timer';
import user from './user';
import contributions from './contributions';
import qiitaCard from './qiitaCard';
import auth from './auth';

const sandglass = combineReducers({
  timer,
  user,
  contributions,
  qiitaCard,
  auth
})

export default sandglass;
