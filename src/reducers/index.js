import { combineReducers } from 'redux';
import timer from './timer';
import user from './user';
import contributions from './contributions';
import qiitaCard from './qiitaCard';

const sandglass = combineReducers({
  timer,
  user,
  contributions,
  qiitaCard,
})

export default sandglass;
