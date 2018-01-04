import { combineReducers } from 'redux';
import timer from './timer';
import user from './user';
import contributions from './contributions';
import qiitaCard from './qiitaCard';
import analyzer from './analyzer';

const sandglass = combineReducers({
  timer,
  user,
  contributions,
  qiitaCard,
  analyzer
})

export default sandglass;
