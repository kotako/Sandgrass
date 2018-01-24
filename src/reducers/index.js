import { combineReducers } from 'redux';
import timer from './timer';
import user from './user';
import contributions from './contributions';
import qiitaCard from './qiitaCard';
import analyzer from './analyzer';
import todo from './todo';

const sandglass = combineReducers({
  timer,
  user,
  contributions,
  qiitaCard,
  analyzer,
  todo
})

export default sandglass;
