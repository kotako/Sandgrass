import { combineReducers } from 'redux';
import timer from './timer';
import user from './user';
import contributions from './contributions';
import tweets from './tweets';
import qiitaCard from './qiitaCard';

const sandglass = combineReducers({
  timer,
  user,
  contributions,
  tweets,
  qiitaCard
})

export default sandglass;
